import React, { useState } from "react";

const MessageVideo = () => {
  const friends = [
    { name: "Sanjay", videoUrl: "https://www.youtube.com/embed/6stlCkUDG_s?si=2dV0TnHqEXL5DTz-" },
    { name: "Anand", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { name: "Sanjeev", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { name: "Gyan", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { name: "Keshu", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { name: "Kaustuv", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { name: "Nitin", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { name: "Patel", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { name: "Hanumant", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { name: "Ankit", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { name: "Kush", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { name: "Ismile", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextVideo = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % friends.length);
  };

  const prevVideo = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + friends.length) % friends.length
    );
  };

  const { name, videoUrl } = friends[currentIndex];

  return (
    <div className="message-container" id="messagevideonav">
      <h1 className="heading">Message from Friends and Family</h1>
      <div className="message-card">
        {/* Video Section */}
        <div className="video-container">
          <iframe
            className="video-frame"
            src={videoUrl}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Info Section */}
        <div className="info-container">
          <h2 className="person-name">{name}</h2>
        </div>
      </div>

      {/* Carousel Controls */}
      <div className="carousel-controls">
        <button className="carousel-btn" onClick={prevVideo}>
          Previous
        </button>
        <button className="carousel-btn" onClick={nextVideo}>
          Next
        </button>
      </div>
    </div>
    
    
  );
};

export default MessageVideo;
