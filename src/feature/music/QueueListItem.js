import { useSortable } from "@dnd-kit/sortable";
import supabase from "auth/supabase";
import { BiPlay, BiTrash } from "react-icons/bi";
import { overrideTailwindClasses } from "tailwind-override";

export default function QueueListItem({ track, channel, isOverlay }) {
  const isPlayingTrack = track.id === channel.track_id;

  const sortable = useSortable({
    id: track.id,
    disabled: isPlayingTrack,
  });

  const handleRemoveTrackFromQueue = async (track) => {
    await supabase.rpc("delete_track_from_queue", {
      _id: track.id,
      _playlist_id: track.playlist_id,
    });
  };

  const playTrack = async (id) => {
    await supabase
      .from("channels")
      .update({
        track_id: id,
        position: 0,
      })
      .eq("id", channel.id);
    await supabase
      .from("tracks")
      .update({
        is_played: true,
      })
      .eq("id", id);
  };

  const isBottom = sortable.overIndex > sortable.activeIndex;
  const indicatorStyles = `after:w-full after:h-[2px] after:absolute after:right-0 after:bg-cta`;

  return (
    <li
      {...sortable.listeners}
      {...sortable.attributes}
      ref={!isPlayingTrack ? sortable.setNodeRef : undefined}
      className={overrideTailwindClasses(`${isOverlay ? "opacity-40" : ""} ${
        isPlayingTrack ? "bg-neutral-700" : ""
      } flex items-center gap-2 p-4 border-b-[1px] border-neutral-700 first-of-type:border-t-[1px] relative
      ${
        sortable.isOver
          ? isBottom
            ? ` ${indicatorStyles} after:bottom-0`
            : ` ${indicatorStyles} after:top-0`
          : ""
      }
      `)}
    >
      <img
        src={track.metadata?.thumbnail}
        className="w-12"
        alt="track thumbnail"
      />
      <p>{track.metadata?.title || "untitled"}</p>
      {track.id !== channel.track_id && (
        <div className="ml-auto flex gap-2 text-lg">
          <button type="button" onClick={() => playTrack(track.id)}>
            <BiPlay />
          </button>
          <button
            type="button"
            onClick={() => handleRemoveTrackFromQueue(track)}
          >
            <BiTrash />
          </button>
        </div>
      )}
    </li>
  );
}
