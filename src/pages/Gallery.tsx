import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Flame, Sparkles, Star } from 'lucide-react';
import { useState } from 'react';

export default function Gallery() {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Since no images were provided, we use abstract gradients and icons to simulate a gallery
  const images = [
    { id: 1, icon: <Flame className="w-24 h-24 text-orange-500" />, bg: 'from-orange-900 to-red-900', title: 'Fire Show Brussels' },
    { id: 2, icon: <Sparkles className="w-24 h-24 text-blue-400" />, bg: 'from-blue-900 to-cyan-900', title: 'LED Performance' },
    { id: 3, icon: <Star className="w-24 h-24 text-amber-400" />, bg: 'from-amber-900 to-yellow-900', title: 'Circus Animation' },
    { id: 4, icon: <Flame className="w-24 h-24 text-red-500" />, bg: 'from-red-900 to-rose-900', title: 'Fire Breather Wedding' },
    { id: 5, icon: <Sparkles className="w-24 h-24 text-purple-400" />, bg: 'from-purple-900 to-fuchsia-900', title: 'Corporate LED Show' },
    { id: 6, icon: <Flame className="w-24 h-24 text-orange-400" />, bg: 'from-orange-800 to-amber-800', title: 'Festival Fire Act' },
  ];

  return (
    <>
      <Helmet>
        <title>{t('seo.gallery.title')}</title>
        <meta name="description" content={t('seo.gallery.desc')} />
      </Helmet>

      <div className="min-h-screen bg-black pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">
              {t('gallery.title')}
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((img, idx) => (
              <motion.div
                key={img.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => setSelectedImage(img.id)}
                className={`relative aspect-square rounded-2xl overflow-hidden cursor-pointer group bg-gradient-to-br ${img.bg} border border-white/10`}
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                <div className="absolute inset-0 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-700">
                  {img.icon}
                </div>
                <div className="absolute inset-0 opacity-30 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-lg font-bold uppercase tracking-wider text-white">
                    {img.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative max-w-5xl w-full aspect-video rounded-3xl overflow-hidden bg-gradient-to-br from-neutral-900 to-black border border-white/10 flex items-center justify-center shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {images.find(i => i.id === selectedImage)?.icon}
            
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black to-transparent">
              <h3 className="text-2xl font-bold uppercase tracking-wider text-white">
                {images.find(i => i.id === selectedImage)?.title}
              </h3>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}
