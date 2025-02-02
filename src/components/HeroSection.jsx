import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Carousel styles
import { Carousel } from "react-responsive-carousel";


const HeroSection = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        {/* Carousel Section */}
        <div className="hero-carousel">
          <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            showIndicators={true}
            swipeable
          >
            <div>
              <img src="https://raw.githubusercontent.com/GY2AN/Hosting/main/Images/images/vector-art1.jpg
" alt="Bride and Groom 1" />
            </div>
            <div>
              <img src="https://raw.githubusercontent.com/GY2AN/Hosting/main/Images/images/vector-art2.jpg
" alt="Bride and Groom 2" />
            </div>
            <div>
              <img src="https://raw.githubusercontent.com/GY2AN/Hosting/main/Images/images/vector-art3.jpg
" alt="Bride and Groom 3" />
            </div>
          </Carousel>
        </div>

        {/* Text Section */}
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="desktop-title">Puja & Amar</span>
            <span className="mobile-title">Puja <br /> & <br /> Amar</span>
          </h1>
          <p className="subtitle">A Celebration of Love & Traditions</p>
          <p className="details">
            <strong>Date:</strong> 06-02-2025 <br />
            <strong>Venue:</strong>{" "}
            <a
              href="https://maps.app.goo.gl/UoopGWY5sc39VCX49"
              target="_blank"
              rel="noopener noreferrer"
              className="venue-link"
            >
              Bhagalpur
            </a>
          </p>
          <p className="invitation">
            Join us as we start this beautiful journey together. Your presence
            will make our day truly special!
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
