import { BiX } from "react-icons/bi";

export default function ChannelAddMemberBanner({ onClick, onClose }) {
  return (
    <div className="w-full flex items-center justify-center border-b-[1px] border-neutral-700 py-2 px-4">
      <button onClick={onClick} className="grow text-cta font-medium">
        Invite a friend
      </button>
      <button type="button" className="ml-auto" onClick={onClose}>
        <BiX className="text-xl" />
      </button>
    </div>
  );
}
