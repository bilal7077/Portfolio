import React, { useEffect, useState } from 'react';
import 'animate.css/animate.min.css';
import li from './Images/output-onlinegiftools.gif'

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    loading && (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="animate__animated animate__bounce animate__infinite">
          <img
            src={li}
            alt="Logo"
            className="w-32 h-32"
          />
        </div>
      </div>
    )
  );
};

export default Preloader;
