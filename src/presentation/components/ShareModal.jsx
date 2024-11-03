import React from 'react';


function ShareModal() {
    return (
        <div id="shareModal" className="modal share_modal">
            <div className="share_modal_content">
                <div className="share_modal_buttons">
                    <button id="copyButton">
                        <img className="copy_img" src="/src/presentation/images/ic_copy.svg" />
                    </button>
                    <button id="vkButton">
                        <img className="vk_img" src="/src/presentation/images/ic_vk.svg" />
                    </button>
                    <button id="telegramButton">
                        <img
                        className="telegram_img"
                        src="/src/presentation/images/ic_telegram.svg"
                        />
                    </button>
                    <button id="whatsappButton">
                        <img
                        className="whatsapp_img"
                        src="/src/presentation/images/ic_whatsapp.svg"
                        />
                    </button>
                    <button id="facebookButton">
                        <img
                        className="facebook_img"
                        src="/src/presentation/images/ic_facebook.svg"
                        />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ShareModal;