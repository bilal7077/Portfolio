import { useState, useEffect } from 'react';

const Project = () => {
  const [currentButton, setCurrentButton] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Example images for each button
  const images = {
    graphicDesign: ['https://t4.ftcdn.net/jpg/03/13/96/89/360_F_313968921_tqgzvlF9UJ9BFBLdnl1z8KiS8KdCGJa0.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn_6uGB__8XyYozrZsDt4VwiU4W8p-ZcEWGA&s', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpAdbt7gyeTVhFUbvLAUt8_FmdSlF0NVarkQ&s', 'https://static.vecteezy.com/system/resources/thumbnails/002/128/968/small_2x/phoenix-esports-logo-design-vector.jpg', 'https://marketplace.canva.com/EAF7NE1jgCo/1/0/1600w/canva-white-and-blue-flat-illustrative-real-estate-agency-logo-V6qr80Pdw2Y.jpg', 'https://dynamic.brandcrowd.com/asset/logo/74b406d4-8777-4af6-8881-eb62e8ed2615/logo-search-grid-1x?logoTemplateVersion=1&v=638333783149330000'],
    webDevelopment: ['web1.jpg', 'web2.jpg', 'web3.jpg', 'web4.jpg', 'web5.jpg', 'web6.jpg'],
    seo: ['seo1.jpg', 'seo2.jpg', 'seo3.jpg', 'seo4.jpg', 'seo5.jpg', 'seo6.jpg'],
    contentWriting: ['content1.jpg', 'content2.jpg', 'content3.jpg', 'content4.jpg', 'content5.jpg', 'content6.jpg'],
  };

  const totalVisibleImages = 4; // Display 4 images at a time

  // Handle button click
  const handleButtonClick = (button) => {
    setCurrentButton(button);
    setCurrentImageIndex(0); // Reset image index to 0 when switching buttons
  };

  // Navigate images manually
  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images[currentButton].length - totalVisibleImages : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images[currentButton].length - totalVisibleImages ? 0 : prevIndex + 1
    );
  };

  // Auto-scrolling effect (every 3 seconds)
  useEffect(() => {
    if (currentButton) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images[currentButton].length - totalVisibleImages ? 0 : prevIndex + 1
        );
      }, 3000); // Change image every 3 seconds

      return () => clearInterval(interval);
    }
  }, [currentButton, currentImageIndex]);

  return (
    <div id='project' className="mt-24 flex flex-col items-center p-4 lg:p-8">
      <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold p-3 text-center">Latest Projects</h1>
      <p className="text-sm md:text-base lg:text-lg text-white mb-8 text-center">Here are the glimpses of some latest projects!</p>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {['graphicDesign', 'webDevelopment', 'seo', 'contentWriting'].map((type) => (
          <button
            key={type}
            onClick={() => handleButtonClick(type)}
            className="bg-blue-500 text-white py-2 px-4 rounded-full border border-white hover:bg-blue-600 transition duration-300"
          >
            {type.replace(/([A-Z])/g, ' $1')}
          </button>
        ))}
      </div>

      {/* Image Slider */}
      {currentButton && (
        <div className="flex items-center space-x-2">
          {/* Left Arrow */}
          <button
            onClick={handlePrevClick}
            className="text-2xl px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300 transition duration-300"
          >
            &#8592;
          </button>

          {/* Image Gallery (4 images at a time) */}
          <div className="flex overflow-x-auto space-x-4">
            {images[currentButton]
              .slice(currentImageIndex, currentImageIndex + totalVisibleImages)
              .map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Gallery ${index}`}
                  className="w-28 h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 object-cover rounded-lg shadow-md"
                />
              ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNextClick}
            className="text-2xl px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300 transition duration-300"
          >
            &#8594;
          </button>
        </div>
      )}
    </div>
  );
};

export default Project;
