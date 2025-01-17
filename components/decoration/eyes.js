"use client";

import React, { useEffect } from 'react';

const Eyes = ({className}) => {
  useEffect(() => {
    const eyes = document.querySelectorAll('.eye');

    const handleMouseMove = (e) => {
      const { clientX: mouseX, clientY: mouseY } = e;

      eyes.forEach((eye) => {
        const rect = eye.getBoundingClientRect();
        const eyeX = rect.left + rect.width / 2;
        const eyeY = rect.top + rect.height / 2;

        const angle = Math.atan2(mouseY - eyeY, mouseX - eyeX);
        const distance = 10; // Pupil movement range
        const pupil = eye.querySelector('.pupil');

        pupil.style.transform = `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px)`;
      });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className={`flex gap-5 ${className}`}>
      <div className={`eye w-12 h-12 bg-white rounded-full relative flex justify-center items-center`}>
        <div className="pupil w-7 h-7 bg-black rounded-full absolute"></div>
      </div>
      <div className="eye w-12 h-12 bg-white rounded-full relative flex justify-center items-center">
        <div className="pupil w-7 h-7 bg-black rounded-full absolute"></div>
      </div>
    </div>
  );
};

export default Eyes;
 