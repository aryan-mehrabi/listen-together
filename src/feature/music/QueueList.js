import supabase from "auth/supabase";
import useChannel from "context/ChannelContext";
import useTrack from "context/TrackContext";
import {
  closestCenter,
  DndContext,
  DragOverlay,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import QueueListItem from "./QueueListItem";
import { useEffect, useState } from "react";

export default function QueueList() {
  const { tracks } = useTrack();
  const { selectedChannel, channels, player } = useChannel();
  const [activeId, setActiveId] = useState("");
  const channel = channels[selectedChannel];
  const channelTracks = Object.values(tracks[selectedChannel] || {});
  const playingTrack = tracks[selectedChannel]?.[channel.track_id];

  useEffect(() => {
    const handleUpdateMetadata = async () => {
      console.log(player.current?.getVideoData());
      const data = player.current?.getVideoData();
      if (!playingTrack?.metadata && data) {
        await supabase
          .from("tracks")
          .update({
            metadata: {
              title: data.title,
              thumbnail: `https://img.youtube.com/vi/${data.video_id}/default.jpg`,
            },
          })
          .eq("id", playingTrack.id);
      }
    };
    handleUpdateMetadata();
  }, [playingTrack, player.current]);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    }),
    useSensor(TouchSensor, {
      activationConstraint: {
        distance: 5,
        delay: 250,
        tolerance: 5,
      },
    })
  );

  const handleDragStart = (e) => {
    setActiveId(e.active.id);
  };

  const handleDragEnd = async (e) => {
    setActiveId("");

    if (e.over.id) {
      const { position } = tracks[selectedChannel][e.over.id];
      await supabase.rpc("move_track", {
        _id: e.active.id,
        _new_position: position,
      });
    }
  };

  return (
    <>
      <h2 className="text-2xl font-semibold p-5">Queue</h2>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          strategy={verticalListSortingStrategy}
          items={channelTracks
            .sort((a, b) => a.position - b.position)
            .filter(
              (track) =>
                track.position >=
                tracks[selectedChannel][channel.track_id].position
            )
            .map((track) => track.id)}
        >
          <ul className="overflow-y-auto select-none">
            {channelTracks
              .sort((a, b) => a.position - b.position)
              .filter(
                (track) =>
                  track.position >=
                  tracks[selectedChannel][channel.track_id].position
              )
              .map((track) => (
                <QueueListItem key={track.id} track={track} channel={channel} />
              ))}
          </ul>
        </SortableContext>
        <DragOverlay dropAnimation={null}>
          {activeId && (
            <QueueListItem
              track={tracks[selectedChannel][activeId]}
              channel={channel}
              isOverlay
            />
          )}
        </DragOverlay>
      </DndContext>
    </>
  );
}
