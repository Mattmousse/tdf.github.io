import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Mail, MapPin, Send, Instagram, Facebook, Youtube } from 'lucide-react';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('seo.contact.title')}</title>
        <meta name="description" content={t('seo.contact.desc')} />
      </Helmet>

      <div className="min-h-screen bg-black pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">
              {t('contact.title')}
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-12"
            >
              <div>
                <h2 className="text-2xl font-bold uppercase tracking-wider text-white mb-8">
                  {t('contact.email_us')}
                </h2>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 text-gray-300 hover:text-orange-400 transition-colors">
                    <div className="p-4 rounded-full bg-orange-950/30 border border-orange-500/20">
                      <Mail className="w-6 h-6 text-orange-500" />
                    </div>
                    <a href="mailto:mathieugraf522@gmail.com" className="text-lg font-medium">
                      mathieugraf522@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-4 text-gray-300">
                    <div className="p-4 rounded-full bg-orange-950/30 border border-orange-500/20">
                      <MapPin className="w-6 h-6 text-orange-500" />
                    </div>
                    <span className="text-lg font-medium">{t('contact.location')}</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold uppercase tracking-wider text-white mb-6">
                  Suivez-nous
                </h3>
                <div className="flex gap-4">
                  {[
                    { icon: <Instagram className="w-6 h-6" />, href: "#" },
                    { icon: <Facebook className="w-6 h-6" />, href: "#" },
                    { icon: <Youtube className="w-6 h-6" />, href: "#" }
                  ].map((social, idx) => (
                    <a
                      key={idx}
                      href={social.href}
                      className="p-4 rounded-full bg-neutral-900 border border-white/10 text-gray-400 hover:text-white hover:bg-orange-600 hover:border-orange-500 transition-all duration-300"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-neutral-950 border border-white/10 rounded-3xl p-8 shadow-2xl"
            >
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 uppercase tracking-widest mb-2">
                    {t('contact.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 uppercase tracking-widest mb-2">
                    {t('contact.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                    placeholder="votre@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 uppercase tracking-widest mb-2">
                    {t('contact.message')}
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors resize-none"
                    placeholder="Comment pouvons-nous vous aider ?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white font-bold tracking-widest uppercase rounded-xl flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(234,88,12,0.2)] hover:shadow-[0_0_30px_rgba(234,88,12,0.4)]"
                >
                  <Send className="w-5 h-5" />
                  {t('contact.send')}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
