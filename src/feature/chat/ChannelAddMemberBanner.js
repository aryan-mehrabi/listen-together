export default function ChannelAddMemberBanner({ onClick, onClose }) {
  return (
    <div className="w-full flex items-center justify-center border-b-[1px] border-neutral-700 py-2 px-4">
      <button onClick={onClick} className="grow text-cta font-medium">
        Add Members
      </button>
      <button type="button" className="ml-auto" onClick={onClose}>
        <i className="fa-solid fa-close" />
      </button>
    </div>
  );
}
