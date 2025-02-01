import React, { useState, useRef } from "react";

const WeddingInvitation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const videoRef = useRef(null);

  const handleOpenClick = () => {
    setIsOpen(true);

    // Automatically play video in full screen
    setTimeout(() => {
      if (videoRef.current) {
        const video = videoRef.current;
        if (video.requestFullscreen) {
          video.requestFullscreen();
        } else if (video.mozRequestFullScreen) {
          video.mozRequestFullScreen();
        } else if (video.webkitRequestFullscreen) {
          video.webkitRequestFullscreen();
        } else if (video.msRequestFullscreen) {
          video.msRequestFullscreen();
        }
      }
    }, 300); // Small delay to ensure smooth transition
  };

  return (
    <div className="wedding-invitation-section" id="WeddingInvitationnav">
      {/* Heading */}
      <h2 className="wedding-heading">You're Invited to Our Wedding</h2>

      <div className={`invitation-envelope ${isOpen ? "open" : ""}`}>
        <div className="envelope-diagonal-top"></div>
        <div className="envelope-diagonal-bottom"></div>

        <div className="invitation-content">
          {!isOpen ? (
            <button className="oscillating-button" onClick={handleOpenClick}>
              Open
            </button>
          ) : (
            <div className="video-wrapper">
              <iframe
                ref={videoRef}
                className="wedding-video"
                src="https://www.youtube.com/embed/TLk1dbfm3gc?autoplay=1&mute=0" // Ensure autoplay
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WeddingInvitation;