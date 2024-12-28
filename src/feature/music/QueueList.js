import useChannel from "context/ChannelContext";
import useTrack from "context/TrackContext";
import { useEffect } from "react";

export default function QueueList() {
  const { tracks, fetchTracks } = useTrack();
  const { selectedChannel, channels } = useChannel();
  const channel = channels[selectedChannel];
  const channelTracks = Object.values(tracks[selectedChannel] || {});

  useEffect(() => {
    if (channel?.playlists?.id) {
      fetchTracks(selectedChannel, channel.playlists.id);
    }
  }, [selectedChannel, channel]);

  return (
    <>
      <h2 className="text-2xl font-semibold p-5">QueueList</h2>
      <ul className="overflow-y-auto">
        {channelTracks.map((track) => (
          <li
            key={track.id}
            className="flex items-center gap-2 p-4 border-b-[1px] border-neutral-700 first-of-type:border-t-[1px]"
          >
            <img
              src={track.metadata?.thumbnail}
              className="w-12"
              alt="track thumbnail"
            />
            <p>{track.metadata?.title || "untitled"}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
