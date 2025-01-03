import { useSortable } from "@dnd-kit/sortable";
import supabase from "auth/supabase";
import { BiTrash } from "react-icons/bi";
import { overrideTailwindClasses } from "tailwind-override";

export default function QueueListItem({ track, channel, isOverlay }) {
  const sortable = useSortable({
    id: track.id,
  });

  const isBottom = sortable.overIndex > sortable.activeIndex;

  const handleRemoveTrackFromQueue = async (track) => {
    await supabase.rpc("delete_track_from_queue", {
      _id: track.id,
      _playlist_id: track.playlist_id,
    });
  };

  const indicatorStyles = `after:w-full after:h-[2px] after:absolute after:right-0 after:bg-cta`;

  return (
    <li
      {...sortable.listeners}
      {...sortable.attributes}
      ref={sortable.setNodeRef}
      className={overrideTailwindClasses(`${isOverlay ? "opacity-30" : ""} ${
        track.id === channel.track_id ? "bg-neutral-700" : ""
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
        <button
          type="button"
          className="ml-auto"
          onClick={() => handleRemoveTrackFromQueue(track)}
        >
          <BiTrash />
        </button>
      )}
    </li>
  );
}
