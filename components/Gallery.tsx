
import React, { useState } from 'react';

interface GalleryProps {
  images: string[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="relative">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {images.map((img, idx) => (
          <div 
            key={idx} 
            onClick={() => setSelectedImage(img)}
            className="aspect-square rounded-2xl md:rounded-[2rem] overflow-hidden cursor-pointer group relative border border-zinc-100"
          >
            <img 
              src={img} 
              alt={`Resultado ${idx + 1}`} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 text-white text-xs font-bold bg-[#4a3728]/90 px-4 py-2 rounded-full">Ver zoom</span>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setSelectedImage(null)}
        >
          <button className="absolute top-8 right-8 text-white text-2xl">✕</button>
          <img 
            src={selectedImage} 
            alt="Zoom" 
            className="max-w-full max-h-[85vh] rounded-xl shadow-2xl animate-fade-in" 
          />
        </div>
      )}

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Gallery;
