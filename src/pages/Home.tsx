import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Flame, Sparkles, Users } from 'lucide-react';

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('seo.home.title')}</title>
        <meta name="description" content={t('seo.home.desc')} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-black">
        {/* Abstract Fire Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-orange-950/20 to-black" />
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-600/20 rounded-full blur-[120px]"
          />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/20 rounded-full blur-[100px]"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-orange-600">
              {t('home.title')}
            </h1>
            <p className="text-xl md:text-3xl font-light tracking-widest text-orange-200/80 uppercase mb-8">
              {t('home.subtitle')}
            </p>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 mb-12 leading-relaxed">
              {t('home.description')}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white font-bold tracking-widest uppercase rounded-full transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(234,88,12,0.3)]"
              >
                {t('home.book')}
              </Link>
              <Link
                to="/performances"
                className="px-8 py-4 bg-transparent border border-orange-500/50 hover:bg-orange-500/10 text-orange-400 font-bold tracking-widest uppercase rounded-full transition-all"
              >
                {t('nav.performances')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-24 bg-neutral-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <Flame className="w-12 h-12 text-orange-500" />,
                title: t('performances.fire.title'),
                desc: t('performances.fire.desc')
              },
              {
                icon: <Sparkles className="w-12 h-12 text-blue-400" />,
                title: t('performances.led.title'),
                desc: t('performances.led.desc')
              },
              {
                icon: <Users className="w-12 h-12 text-amber-500" />,
                title: t('performances.circus.title'),
                desc: t('performances.circus.desc')
              }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="p-8 rounded-2xl bg-black border border-orange-900/20 hover:border-orange-500/50 transition-colors group"
              >
                <div className="mb-6 transform group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold tracking-wider uppercase mb-4 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
