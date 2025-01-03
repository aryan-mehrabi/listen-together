import supabase from "auth/supabase";
import useChannel from "context/ChannelContext";
import useTrack from "context/TrackContext";
import { BiTrash } from "react-icons/bi";
import { closestCenter, DndContext, DragOverlay } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import QueueListItem from "./QueueListItem";
import { createPortal } from "react-dom";
import { useState } from "react";

export default function QueueList() {
  const { tracks } = useTrack();
  const { selectedChannel, channels } = useChannel();
  const [activeId, setActiveId] = useState("");
  const channel = channels[selectedChannel];
  const channelTracks = Object.values(tracks[selectedChannel] || {});

  const handleDragStart = (event) => {
    console.log(event);
    setActiveId(event.active.id);
  };

  const handleDragEnd = (event) => {
    setActiveId("");
  };

  return (
    <>
      <h2 className="text-2xl font-semibold p-5">Queue</h2>
      <DndContext
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
          <ul className="overflow-y-auto">
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
