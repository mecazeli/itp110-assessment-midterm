import React, { useState, useEffect } from "react";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentSlide, setCurrentSlide] = useState(0);

  // Gallery data with categories and images
  const galleryData = {
    "20th CHAS Ceremony": {
      folder: "20th Capping, Pinning & Candle Lighting Ceremony",
      images: ["c1.jpg", "c2.jpg", "c3.jpg", "c4.jpg", "c5.jpg"]
    },
    "ARTSFEST 2025": {
      folder: "ARTSFEST 2025",
      images: ["a1.jpg", "a2.jpg", "a3.jpg", "a4.jpg", "a5.jpg"]
    },
    "Job Fair": {
      folder: "Job Fair",
      images: ["jf1.jpg", "jf2.jpg", "jf3.jpg", "jf4.jpg", "jf5.jpg"]
    },
    "PNC 21st Graduation": {
      folder: "PNC 21st 𝐂𝐨𝐦𝐦𝐞𝐧𝐜𝐞𝐦𝐞𝐧𝐭 𝐂𝐞𝐫𝐞𝐦𝐨𝐧𝐲 2025",
      images: ["g1.jpg", "g2.jpg", "g3.jpg", "g4.jpg", "g5.jpg"]
    },
    "SPORTSFEST 2024": {
      folder: "SPORTSFEST 2024",
      images: ["sp1.jpg", "sp2.jpg", "sp3.jpg", "sp4.jpg", "sp5.jpg"]
    }
  };

  const categories = Object.keys(galleryData);

  // Get current images based on selected category
  const getCurrentImages = () => {
    if (selectedCategory === "all") {
      // Return all images from all categories
      const allImages = [];
      categories.forEach(category => {
        galleryData[category].images.forEach(image => {
          allImages.push({
            src: `/Gallery/${galleryData[category].folder}/${image}`,
            alt: `${category} - ${image}`,
            category: category
          });
        });
      });
      return allImages;
    } else {
      // Return images from selected category
      return galleryData[selectedCategory].images.map(image => ({
        src: `/Gallery/${galleryData[selectedCategory].folder}/${image}`,
        alt: `${selectedCategory} - ${image}`,
        category: selectedCategory
      }));
    }
  };

  const currentImages = getCurrentImages();

  // Reset slide when category changes
  useEffect(() => {
    setCurrentSlide(0);
  }, [selectedCategory]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % currentImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + currentImages.length) % currentImages.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="container-fluid py-5" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold text-dark mb-3">PNC Events Gallery</h1>
          <p className="lead text-muted">
            Explore collection of memorable events and celebrations
          </p>
        </div>

        {/* Carousel */}
        {currentImages.length > 0 && (
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div
                id="galleryCarousel"
                className="carousel slide carousel-fade"
                data-bs-ride="carousel"
              >
                {/* Indicators */}
                <div className="carousel-indicators">
                  {currentImages.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      data-bs-target="#galleryCarousel"
                      data-bs-slide-to={index}
                      className={index === currentSlide ? "active" : ""}
                      aria-current={index === currentSlide ? "true" : "false"}
                      aria-label={`Slide ${index + 1}`}
                      onClick={() => goToSlide(index)}
                    ></button>
                  ))}
                </div>

                {/* Carousel Inner */}
                <div className="carousel-inner">
                  {currentImages.map((image, index) => (
                    <div
                      key={index}
                      className={`carousel-item ${index === currentSlide ? "active" : ""}`}
                    >
                      <img
                        src={image.src}
                        className="d-block w-100 rounded shadow-lg"
                        alt={image.alt}
                        style={{ 
                          height: "500px", 
                          objectFit: "cover",
                          maxHeight: "70vh"
                        }}
                        loading="lazy"
                      />
                      <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-75 rounded p-3">
                        <h5 className="fw-bold">{image.category}</h5>
                        <p className="mb-0">Event Gallery</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Navigation Controls */}
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#galleryCarousel"
                  data-bs-slide="prev"
                  onClick={prevSlide}
                >
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#galleryCarousel"
                  data-bs-slide="next"
                  onClick={nextSlide}
                >
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Filter Categories */}
        <div className="row mt-4">
          <div className="col-12">
            <div className="d-flex flex-wrap justify-content-center gap-2">
              <button
                className={`btn ${selectedCategory === "all" ? "" : "btn-outline-success"}`}
                style={{
                  backgroundColor: selectedCategory === "all" ? "#14532d" : "transparent",
                  color: selectedCategory === "all" ? "white" : "#14532d",
                  borderColor: "#14532d",
                  borderWidth: "2px"
                }}
                onClick={() => setSelectedCategory("all")}
              >
                All Events
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  className={`btn ${selectedCategory === category ? "" : "btn-outline-success"}`}
                  style={{
                    backgroundColor: selectedCategory === category ? "#14532d" : "transparent",
                    color: selectedCategory === category ? "white" : "#14532d",
                    borderColor: "#14532d",
                    borderWidth: "2px"
                  }}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Gallery;
