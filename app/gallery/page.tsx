'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const categories = ['all', 'events', 'sports', 'academics', 'arts', 'facilities'];

  const galleryItems = [
    // Events
    { 
      id: 1, 
      category: 'events', 
      title: 'Science Fair 2024', 
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600&fit=crop&auto=format' 
    },
    { 
      id: 2, 
      category: 'events', 
      title: 'Cultural Day Celebration', 
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop&auto=format' 
    },
    { 
      id: 3, 
      category: 'events', 
      title: 'Annual Day Function', 
      image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop&auto=format' 
    },
    { 
      id: 4, 
      category: 'events', 
      title: 'Independence Day Celebration', 
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop&auto=format' 
    },
    // Sports
    { 
      id: 5, 
      category: 'sports', 
      title: 'Basketball Championship', 
      image: 'https://images.unsplash.com/photo-1519766304817-4f37bda74a26?w=800&h=600&fit=crop&auto=format' 
    },
    { 
      id: 6, 
      category: 'sports', 
      title: 'Cricket Match', 
      image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&h=600&fit=crop&auto=format' 
    },
    { 
      id: 7, 
      category: 'sports', 
      title: 'Athletics Competition', 
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&auto=format' 
    },
    { 
      id: 8, 
      category: 'sports', 
      title: 'Football Tournament', 
      image: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800&h=600&fit=crop&auto=format' 
    },
    // Academics
    { 
      id: 9, 
      category: 'academics', 
      title: 'Graduation Ceremony', 
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop&auto=format' 
    },
    { 
      id: 10, 
      category: 'academics', 
      title: 'Science Laboratory', 
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop&auto=format' 
    },
    { 
      id: 11, 
      category: 'academics', 
      title: 'Math Competition', 
      image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800&h=600&fit=crop&auto=format' 
    },
    { 
      id: 12, 
      category: 'academics', 
      title: 'Classroom Learning', 
      image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&h=600&fit=crop&auto=format' 
    },
    // Arts
    { 
      id: 13, 
      category: 'arts', 
      title: 'Art Exhibition', 
      image: 'https://images.unsplash.com/photo-1549490349-8643362247b5?w=800&h=600&fit=crop&auto=format' 
    },
    { 
      id: 14, 
      category: 'arts', 
      title: 'Music Concert', 
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop&auto=format' 
    },
    { 
      id: 15, 
      category: 'arts', 
      title: 'Drama Performance', 
      image: 'https://images.unsplash.com/photo-1514306191717-452ec28c7814?w=800&h=600&fit=crop&auto=format' 
    },
    { 
      id: 16, 
      category: 'arts', 
      title: 'Dance Competition', 
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&h=600&fit=crop&auto=format' 
    },
    // Facilities
    { 
      id: 17, 
      category: 'facilities', 
      title: 'Modern Library', 
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop&auto=format' 
    },
    { 
      id: 18, 
      category: 'facilities', 
      title: 'Computer Lab', 
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&auto=format' 
    },
    { 
      id: 19, 
      category: 'facilities', 
      title: 'School Building', 
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=600&fit=crop&auto=format' 
    },
    { 
      id: 20, 
      category: 'facilities', 
      title: 'Sports Complex', 
      image: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&h=600&fit=crop&auto=format' 
    },
    // Additional Events
    { 
      id: 21, 
      category: 'events', 
      title: 'Prize Distribution', 
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop&auto=format' 
    },
    { 
      id: 22, 
      category: 'events', 
      title: 'Parents Meeting', 
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop&auto=format' 
    },
    // Additional Sports
    { 
      id: 23, 
      category: 'sports', 
      title: 'Badminton Tournament', 
      image: 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=800&h=600&fit=crop&auto=format' 
    },
    { 
      id: 24, 
      category: 'sports', 
      title: 'Swimming Competition', 
      image: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?w=800&h=600&fit=crop&auto=format' 
    },
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const selectedItem = selectedImage !== null ? galleryItems.find(item => item.id === selectedImage) : null;

  return (
    <div>
      {/* Banner/Hero Section with Image */}
      <section className="relative h-[50vh] min-h-[400px] max-h-[600px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1920&h=1080&fit=crop&auto=format)",
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/80 via-primary-800/70 to-primary-900/80" />
        
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="container mx-auto px-4 text-center text-white">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 drop-shadow-2xl">
              Photo Gallery
            </h1>
            <p className="text-xl md:text-2xl text-white/95 max-w-2xl mx-auto">
              Capturing Moments of Excellence
            </p>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mt-4">
              Explore our school&apos;s vibrant activities and achievements
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-[140px] z-30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all capitalize ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category === 'all' ? 'All Photos' : category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {filteredItems.length > 0 ? (
            <>
              <div className="mb-8 text-center">
                <p className="text-gray-600">
                  Showing {filteredItems.length} {filteredItems.length === 1 ? 'photo' : 'photos'}
                  {selectedCategory !== 'all' && ` in ${selectedCategory}`}
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all transform hover:scale-105 cursor-pointer group"
                    onClick={() => setSelectedImage(item.id)}
                  >
                    <div className="aspect-square overflow-hidden relative">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform">
                        <h3 className="text-white font-semibold text-sm mb-1">{item.title}</h3>
                        <p className="text-white/80 text-xs capitalize">{item.category}</p>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-800 truncate">{item.title}</h3>
                      <p className="text-sm text-gray-500 capitalize mt-1">{item.category}</p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-500 text-xl">No photos found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Image Modal/Lightbox */}
      {selectedImage !== null && selectedItem && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-6xl max-h-full relative">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/70 rounded-full p-2 z-10 transition-colors"
              aria-label="Close"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="relative w-full max-h-[90vh] aspect-auto">
              <Image
                src={selectedItem.image}
                alt={selectedItem.title}
                width={1200}
                height={800}
                className="max-w-full max-h-[90vh] w-auto h-auto object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
              <h3 className="text-white text-2xl font-bold mb-2">{selectedItem.title}</h3>
              <p className="text-white/80 capitalize">{selectedItem.category}</p>
            </div>
          </div>
        </div>
      )}

      {/* Statistics Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-5xl mx-auto">
            {[
              { number: galleryItems.length.toString(), label: 'Total Photos', icon: '📸' },
              { number: categories.length.toString(), label: 'Categories', icon: '📁' },
              { number: '500+', label: 'Events Captured', icon: '🎉' },
              { number: '1000+', label: 'Memories', icon: '❤️' },
            ].map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition-colors">
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-primary-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
