import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Flame, Sparkles, Tent } from 'lucide-react';

export default function Performances() {
  const { t } = useTranslation();

  const sections = [
    {
      id: 'fire',
      title: t('performances.fire.title'),
      desc: t('performances.fire.desc'),
      icon: <Flame className="w-16 h-16 text-orange-500" />,
      color: 'from-orange-600 to-red-600',
      shadow: 'shadow-orange-500/20',
      bg: 'bg-orange-950/20'
    },
    {
      id: 'led',
      title: t('performances.led.title'),
      desc: t('performances.led.desc'),
      icon: <Sparkles className="w-16 h-16 text-blue-400" />,
      color: 'from-blue-500 to-cyan-400',
      shadow: 'shadow-blue-500/20',
      bg: 'bg-blue-950/20'
    },
    {
      id: 'circus',
      title: t('performances.circus.title'),
      desc: t('performances.circus.desc'),
      icon: <Tent className="w-16 h-16 text-amber-500" />,
      color: 'from-amber-500 to-yellow-400',
      shadow: 'shadow-amber-500/20',
      bg: 'bg-amber-950/20'
    }
  ];

  return (
    <>
      <Helmet>
        <title>{t('seo.performances.title')}</title>
        <meta name="description" content={t('seo.performances.desc')} />
      </Helmet>

      <div className="min-h-screen bg-black pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-24"
          >
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">
              {t('performances.title')}
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full" />
          </motion.div>

          <div className="space-y-32">
            {sections.map((section, idx) => (
              <motion.section
                key={section.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col ${idx % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 lg:gap-24`}
              >
                <div className="w-full md:w-1/2 space-y-8">
                  <div className={`inline-flex p-4 rounded-2xl ${section.bg} border border-white/5`}>
                    {section.icon}
                  </div>
                  <h2 className={`text-3xl md:text-5xl font-bold uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r ${section.color}`}>
                    {section.title}
                  </h2>
                  <p className="text-xl text-gray-400 leading-relaxed">
                    {section.desc}
                  </p>
                </div>

                <div className="w-full md:w-1/2">
                  <div className={`relative aspect-[4/3] rounded-3xl overflow-hidden ${section.bg} border border-white/10 ${section.shadow} shadow-2xl flex items-center justify-center group`}>
                    {/* Placeholder for images since none were provided */}
                    <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-transparent z-10" />
                    <div className="relative z-20 transform group-hover:scale-110 transition-transform duration-700">
                      {section.icon}
                    </div>
                    <div className="absolute inset-0 opacity-30 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
                  </div>
                </div>
              </motion.section>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
