import supabase from "auth/supabase";
import useChannel from "context/ChannelContext";
import useTrack from "context/TrackContext";
import { BiTrash } from "react-icons/bi";

export default function QueueList() {
  const { tracks, fetchTracks } = useTrack();
  const { selectedChannel, channels } = useChannel();
  const channel = channels[selectedChannel];
  const channelTracks = Object.values(tracks[selectedChannel] || {});

  const handleRemoveTrackFromQueue = async (track) => {
    await supabase.rpc("delete_track_from_queue", {
      _id: track.id,
      _playlist_id: track.playlist_id,
    });

    fetchTracks(selectedChannel, channel.playlists.id);
  };

  return (
    <>
      <h2 className="text-2xl font-semibold p-5">Queue</h2>
      <ul className="overflow-y-auto">
        {channelTracks
          .sort((a, b) => a.position - b.position)
          .filter(
            (track) =>
              track.position >=
              tracks[selectedChannel][channel.track_id].position
          )
          .map((track) => (
            <li
              key={track.id}
              className={`${
                track.id === channel.track_id ? "bg-neutral-700" : ""
              } flex items-center gap-2 p-4 border-b-[1px] border-neutral-700 first-of-type:border-t-[1px]`}
            >
              <img
                src={track.metadata?.thumbnail}
                className="w-12"
                alt="track thumbnail"
              />
              <p>{track.metadata?.title || "untitled"}</p>
              <button
                type="button"
                className="ml-auto"
                onClick={() => handleRemoveTrackFromQueue(track)}
              >
                <BiTrash />
              </button>
            </li>
          ))}
      </ul>
    </>
  );
}
