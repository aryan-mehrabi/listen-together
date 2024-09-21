const MessageBanner = ({ icon, image, title, subtitle, onClose }) => {
  return (
    <div className="flex items-center gap-2 px-3 py-1 border-t border-neutral-700 shadow-t-md shadow-neutral-900">
      <div className="text-cta">{icon}</div>
      {image && <div className="w-16 h-16">{image}</div>}
      <div>
        <p className="text-cta">{title}</p>
        <p className="text-neutral-400">{subtitle}</p>
      </div>
      <div className="ml-auto cursor-pointer" onClick={onClose}>
        <i className="fa-solid fa-xmark" aria-hidden="true"></i>
      </div>
    </div>
  );
};

export default MessageBanner;
