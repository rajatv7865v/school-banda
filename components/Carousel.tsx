'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'Shree Gayatri Mahashakti',
      subtitle: 'Sikhshan Sanshthan Inter College',
      description: 'We Create Leaders',
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1920&h=1080&fit=crop&auto=format',
      overlayClass: 'bg-gradient-to-br from-blue-900/70 via-blue-800/70 to-indigo-900/70',
      links: [
        { href: '/about', label: 'More About Us' },
        { href: '/about', label: 'Our Philosophy' },
        { href: '/academics', label: 'Teaching Methodology' },
        { href: '/about', label: 'Awards' },
      ],
    },
    {
      title: 'Excellence in Education',
      subtitle: 'Building Tomorrow Today',
      description: 'Shaping Future Leaders Through Quality Education',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1920&h=1080&fit=crop&auto=format',
      overlayClass: 'bg-gradient-to-br from-indigo-900/70 via-purple-800/70 to-pink-900/70',
      links: [
        { href: '/admissions', label: 'Admission Procedure' },
        { href: '/academics', label: 'Academic Programs' },
        { href: '/faculty', label: 'Meet Our Faculty' },
        { href: '/contact', label: 'Contact Us' },
      ],
    },
    {
      title: 'Quality Learning',
      subtitle: 'Innovative Teaching',
      description: 'Empowering Students to Achieve Their Full Potential',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&h=1080&fit=crop&auto=format',
      overlayClass: 'bg-gradient-to-br from-green-900/70 via-teal-800/70 to-cyan-900/70',
      links: [
        { href: '/academics', label: 'Courses' },
        { href: '/gallery', label: 'Campus Tour' },
        { href: '/news', label: 'Latest Events' },
        { href: '/admissions', label: 'Apply Now' },
      ],
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative w-full h-[70vh] min-h-[500px] max-h-[700px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide 
              ? 'opacity-100 z-10' 
              : 'opacity-0 z-0'
          }`}
        >
          <div className="h-full flex items-center justify-center relative">
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              <div className="absolute inset-0 bg-black/20" />
            </div>
            
            {/* Gradient Overlay */}
            <div className={`absolute inset-0 ${slide.overlayClass}`} />
            
            {/* Decorative Pattern Overlay */}
            <div className="absolute inset-0 opacity-10">
              <div 
                className="absolute inset-0" 
                style={{
                  backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                  backgroundSize: '50px 50px'
                }}
              />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
              <div className="mb-6">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 drop-shadow-2xl">
                  {slide.title}
                </h1>
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold mb-6 text-white/95">
                  {slide.subtitle}
                </h2>
                <p className="text-lg md:text-xl lg:text-2xl mb-10 text-white/90 max-w-3xl mx-auto">
                  {slide.description}
                </p>
              </div>

              {/* Action Links */}
              <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                {slide.links.map((link, linkIndex) => (
                  <Link
                    key={linkIndex}
                    href={link.href}
                    className="bg-white text-gray-800 px-5 py-2.5 md:px-6 md:py-3 rounded-lg font-semibold text-sm md:text-base hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 md:p-4 rounded-full transition-all z-20 hover:scale-110 shadow-lg"
        aria-label="Previous slide"
      >
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 md:p-4 rounded-full transition-all z-20 hover:scale-110 shadow-lg"
        aria-label="Next slide"
      >
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Navigation Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white w-10 h-3 shadow-lg' 
                : 'bg-white/50 w-3 h-3 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-20">
        <div 
          className="h-full bg-white transition-all duration-6000 ease-linear"
          style={{
            width: `${((currentSlide + 1) / slides.length) * 100}%`
          }}
        />
      </div>
    </div>
  );
}
