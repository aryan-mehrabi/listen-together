import React, { useState } from "react";
import useChannel from "context/ChannelContext";
import useModal from "context/ModalContext";
import Button from "components/Button";

const DeleteChannelModal = ({ channel }) => {
  const { deleteChannel, status } = useChannel();
  const { setModal } = useModal();
  const [error, setError] = useState("");

  const handleDelete = async () => {
    setError("");
    const res = await deleteChannel(channel.id);
    if (res && !res.success) {
      setError(res.error?.message || "Failed to delete channel");
    }
  };

  return (
    <div className="bg-primary text-secondary w-[360px] max-w-full rounded p-6 shadow-xl flex flex-col">
      <h2 className="text-xl font-semibold mb-3">Delete Channel</h2>
      <p className="text-neutral-300 text-sm mb-6 leading-relaxed">
        Are you sure you want to delete{" "}
        <span className="font-semibold text-white">"{channel?.name}"</span>?
        This will permanently remove the channel, all messages, playlists, and
        attachments. This action cannot be undone.
      </p>

      {error && <p className="text-red-400 text-xs mb-4">{error}</p>}

      <div className="flex gap-3 justify-end mt-auto">
        <Button
          type="primary"
          onClick={() => setModal(null)}
          disabled={status === "loading"}
          className="border border-neutral-600 hover:bg-neutral-800"
        >
          Cancel
        </Button>
        <Button
          type="danger"
          onClick={handleDelete}
          disabled={status === "loading"}
          className="bg-red-600 hover:bg-red-700 text-white font-medium"
        >
          {status === "loading" ? "Deleting..." : "Delete Channel"}
        </Button>
      </div>
    </div>
  );
};

export default DeleteChannelModal;
