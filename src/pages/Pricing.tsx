import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Check, Flame, Sparkles, Building2, PartyPopper } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Pricing() {
  const { t } = useTranslation();

  const plans = [
    {
      title: t('pricing.weddings'),
      icon: <PartyPopper className="w-8 h-8 text-pink-400" />,
      price: "450€",
      features: [
        "Spectacle de 30-45 minutes",
        "Jonglerie et manipulation de feu",
        "Interaction avec le public",
        "Photos avec les mariés"
      ],
      color: "from-pink-500 to-rose-400"
    },
    {
      title: t('pricing.corporate'),
      icon: <Building2 className="w-8 h-8 text-blue-400" />,
      price: "600€",
      features: [
        "Spectacle sur mesure",
        "Intégration logo (LED)",
        "Accueil enflammé",
        "Assurance professionnelle incluse"
      ],
      color: "from-blue-500 to-cyan-400",
      featured: true
    },
    {
      title: t('pricing.festivals'),
      icon: <Sparkles className="w-8 h-8 text-amber-400" />,
      price: "Sur devis",
      features: [
        "Passages multiples",
        "Déambulation",
        "Spectacle grand format",
        "Effets pyrotechniques"
      ],
      color: "from-amber-500 to-yellow-400"
    }
  ];

  return (
    <>
      <Helmet>
        <title>{t('seo.pricing.title')}</title>
        <meta name="description" content={t('seo.pricing.desc')} />
      </Helmet>

      <div className="min-h-screen bg-black pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">
              {t('pricing.title')}
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              {t('pricing.desc')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={`relative p-8 rounded-3xl border ${
                  plan.featured 
                    ? 'border-orange-500 bg-orange-950/20 shadow-[0_0_40px_rgba(234,88,12,0.15)]' 
                    : 'border-white/10 bg-neutral-950 hover:border-white/20'
                } transition-all duration-300 flex flex-col`}
              >
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full text-xs font-bold uppercase tracking-widest">
                    Populaire
                  </div>
                )}
                
                <div className="mb-8">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${plan.color} bg-opacity-10 mb-6`}>
                    {plan.icon}
                  </div>
                  <h3 className="text-2xl font-bold uppercase tracking-wider mb-2">{plan.title}</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-sm text-gray-400 uppercase tracking-widest">{t('pricing.base')}</span>
                    <span className="text-4xl font-black text-white">{plan.price}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3 text-gray-300">
                      <Check className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`w-full py-4 rounded-xl font-bold uppercase tracking-widest text-center transition-all ${
                    plan.featured
                      ? 'bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-400 hover:to-red-500 text-white shadow-lg'
                      : 'bg-white/5 hover:bg-white/10 text-white'
                  }`}
                >
                  {t('pricing.quote')}
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-20 p-8 rounded-3xl bg-gradient-to-r from-orange-950/40 to-red-950/40 border border-orange-500/20 max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-6 justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-orange-500/20 rounded-full">
                <Flame className="w-8 h-8 text-orange-500" />
              </div>
              <div>
                <h4 className="text-xl font-bold uppercase tracking-wider text-orange-400 mb-1">
                  {t('pricing.fire_supplement')}
                </h4>
                <p className="text-gray-400 text-sm">
                  Ajoutez un cracheur de feu à n'importe quelle prestation.
                </p>
              </div>
            </div>
            <div className="text-3xl font-black text-white">+150€</div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
