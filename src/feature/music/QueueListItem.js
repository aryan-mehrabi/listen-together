import { useSortable } from "@dnd-kit/sortable";
import SoundWaveAnimated from "assets/SoundWaveAnimated";
import supabase from "auth/supabase";
import useAuth from "context/AuthContext";
import useMember from "context/MemberContext";
import { getVideoThumbnail } from "helpers";
import { BiPlay, BiTrash } from "react-icons/bi";
import { overrideTailwindClasses } from "tailwind-override";

export default function QueueListItem({ track, channel, isOverlay }) {
  const { members } = useMember();
  const { userId } = useAuth();
  const { role } =
    Object.values(members).find(
      (member) => member.channel_id === channel.id && member.user_id === userId
    ) || {};
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
    const promises = [
      supabase
        .from("channels")
        .update({
          track_id: id,
          position: 0,
        })
        .eq("id", channel.id),
      supabase
        .from("tracks")
        .update({
          is_played: true,
        })
        .eq("id", id),
    ];
    await Promise.all(promises);
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
      } flex items-center gap-2 p-4 border-b-[1px] border-neutral-700 first-of-type:border-t-[1px] relative touch-none
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
        src={getVideoThumbnail(track.track_id)}
        className="w-12"
        alt="track thumbnail"
      />
      <p className="line-clamp-2">{track.metadata?.title || "untitled"}</p>
      <div className="ml-auto flex gap-2 text-2xl sm:text-xl">
        {track.id !== channel.track_id ? (
          role !== "member" && (
            <>
              <button type="button" onClick={() => playTrack(track.id)}>
                <BiPlay />
              </button>
              <button
                type="button"
                onClick={() => handleRemoveTrackFromQueue(track)}
              >
                <BiTrash />
              </button>
            </>
          )
        ) : (
          <SoundWaveAnimated />
        )}
      </div>
    </li>
  );
}
