import React, { useState, useEffect } from 'react';
import { MapPin, Activity, ChevronLeft, ChevronRight } from 'lucide-react';
import { ExplorationMode } from '../types';

interface HeaderProps {
  mode: ExplorationMode;
  setMode: (mode: ExplorationMode) => void;
}

const Header: React.FC<HeaderProps> = ({ mode, setMode }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      url: "https://digital.ihg.com/is/image/ihg/intercontinental-paris-7596881385-2x1"
    },
    {
      url: "https://www.studying-in-uk.org/wp-content/uploads/2019/05/study-in-london-1068x641.jpg"
    },
    {
      url: "https://media.vacalia.com/poi/reformat/1024/768/poi_1454_db2c7cfb8481c7af287d8992515c8426.webp?v=21092023"
    },
    {
      url: "https://www.solosophie.com/wp-content/uploads/2023/05/Chefchaouen_1399247843.jpeg"
    },
    {
      url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/1e/da/2c/ermitage-d-akchour.jpg?w=900&h=-1&s=1"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="flex flex-col w-full">
      {/* Top Bar */}
      <div className="bg-white border-b border-slate-200 py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex-1" />
          <div className="text-center">
            <div className="flex items-center justify-center">
              <span className="text-2xl font-bold text-blue-600">Place</span>
              <span className="text-2xl font-bold text-slate-800">2</span>
            </div>
          </div>
          <div className="flex-1 flex justify-end space-x-4">
            <button className="px-4 py-2 text-slate-600 hover:text-slate-800 transition-colors">
              Login
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
              Sign Up
            </button>
          </div>
        </div>
      </div>

      {/* Image Slider */}
      <div className="relative h-[500px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.url}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent" />
          </div>
        ))}
        
        {/* Slider Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/30 text-white hover:bg-white/50 transition-colors"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/30 text-white hover:bg-white/50 transition-colors"
        >
          <ChevronRight size={24} />
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide 
                  ? 'bg-white w-4' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="bg-white border-b border-slate-200 py-3">
        <div className="container mx-auto px-4">
          <ul className="flex justify-center space-x-8">
            {['Health', 'Education', 'Entertainment', 'Sports', 'Culture', 'Business'].map((item) => (
              <li key={item}>
                <a 
                  href="#" 
                  className="text-slate-600 hover:text-blue-600 transition-colors font-medium"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mode Selection */}
      <div className="container mx-auto px-4 py-6 flex justify-center space-x-4">
        <button 
          className={`flex items-center px-6 py-3 rounded-md transition-colors ${
            mode === 'place' 
              ? 'bg-blue-600 text-white' 
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
          onClick={() => setMode('place')}
        >
          <MapPin size={20} className="mr-2" />
          <span>Explore Places</span>
        </button>
        <button 
          className={`flex items-center px-6 py-3 rounded-md transition-colors ${
            mode === 'activity' 
              ? 'bg-blue-600 text-white' 
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
          onClick={() => setMode('activity')}
        >
          <Activity size={20} className="mr-2" />
          <span>Find Activities</span>
        </button>
      </div>
    </div>
  );
};

export default Header;