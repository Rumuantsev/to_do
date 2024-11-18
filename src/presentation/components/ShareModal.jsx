import React from "react";

function ShareModal({ isVisible, onClose, shareText }) {
  if (!isVisible) return null;

  const handleShare = () => {
    navigator.clipboard.writeText(shareText);
    onClose();
  };

  const links = [
    {
      img: "/src/presentation/images/ic_copy.svg",
      alt: "Copy",
    },
    {
      img: "/src/presentation/images/ic_vk.svg",
      alt: "VK",
    },
    {
      img: "/src/presentation/images/ic_telegram.svg",
      alt: "Telegram",
    },
    {
      img: "/src/presentation/images/ic_whatsapp.svg",
      alt: "WhatsApp",
    },
    {
      img: "/src/presentation/images/ic_facebook.svg",
      alt: "Facebook",
    },
  ];

  return (
    <div className="modal share_modal">
      <div className="share_modal_content">
        <div className="share_modal_buttons">
          {links.map((link) => (
            <button onClick={() => handleShare(link.platform)}>
              <img src={link.img} alt={link.alt} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ShareModal;
