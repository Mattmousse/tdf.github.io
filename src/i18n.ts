import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  fr: {
    translation: {
      "nav.home": "Accueil",
      "nav.performances": "Spectacles",
      "nav.pricing": "Tarifs",
      "nav.gallery": "Galerie",
      "nav.contact": "Contact",
      "home.title": "Les Troubadours du Feu",
      "home.subtitle": "Artistes de Cirque, Feu & Lumière",
      "home.description": "Plongez dans un univers fascinant où le feu danse et la lumière sculpte l'espace. Spectacles de feu, animations LED et arts du cirque pour des événements inoubliables.",
      "home.book": "Réserver un spectacle",
      "home.contact": "Nous contacter",
      "performances.title": "Nos Spectacles",
      "performances.fire.title": "Spectacle de Feu",
      "performances.fire.desc": "Cracheur de feu, jonglerie enflammée, staff et bolas. Une performance ardente et hypnotique pour illuminer vos soirées.",
      "performances.led.title": "Spectacle LED & Lumière",
      "performances.led.desc": "Des performances lumineuses modernes avec des équipements LED programmables. Parfait pour les événements en intérieur ou les ambiances futuristes.",
      "performances.circus.title": "Animation Cirque",
      "performances.circus.desc": "Échassiers, jongleurs, et ateliers d'initiation. Des animations interactives pour tous les âges.",
      "pricing.title": "Tarifs & Prestations",
      "pricing.desc": "Nos tarifs sont indicatifs et personnalisables selon votre événement (mariage, festival, événement d'entreprise, soirée privée).",
      "pricing.base": "À partir de",
      "pricing.fire_supplement": "Supplément Cracheur de Feu",
      "pricing.quote": "Demander un devis",
      "pricing.weddings": "Mariages",
      "pricing.corporate": "Entreprises",
      "pricing.festivals": "Festivals",
      "gallery.title": "Galerie",
      "contact.title": "Contactez-nous",
      "contact.name": "Nom",
      "contact.email": "Email",
      "contact.message": "Message",
      "contact.send": "Envoyer",
      "contact.location": "Basé en Belgique / Europe",
      "contact.email_us": "Écrivez-nous :",
      "seo.home.title": "Les Troubadours du Feu | Artiste Cirque Bruxelles",
      "seo.home.desc": "Spectacles de feu, cracheurs de feu en Belgique et animations cirque pour mariages et événements. Basé à Bruxelles.",
      "seo.performances.title": "Spectacles de Feu et LED | Cracheur de feu Belgique",
      "seo.performances.desc": "Découvrez nos spectacles de feu, cracheurs de feu, jonglerie LED et animations de cirque pour tous vos événements en Belgique.",
      "seo.pricing.title": "Tarifs Spectacle de Cirque Mariage | Les Troubadours du Feu",
      "seo.pricing.desc": "Consultez nos tarifs pour les spectacles de feu, animations LED et cirque pour mariages, festivals et événements d'entreprise.",
      "seo.gallery.title": "Galerie Photos | Artiste Cirque Bruxelles",
      "seo.gallery.desc": "Découvrez en images nos performances de feu et de lumière à travers la Belgique et l'Europe.",
      "seo.contact.title": "Contact | Cracheur de feu Bruxelles",
      "seo.contact.desc": "Contactez Les Troubadours du Feu pour réserver un spectacle de cirque, de feu ou de lumière pour votre événement."
    }
  },
  en: {
    translation: {
      "nav.home": "Home",
      "nav.performances": "Performances",
      "nav.pricing": "Pricing",
      "nav.gallery": "Gallery",
      "nav.contact": "Contact",
      "home.title": "Les Troubadours du Feu",
      "home.subtitle": "Fire & Light Circus Performers",
      "home.description": "Dive into a fascinating universe where fire dances and light sculpts space. Fire shows, LED animations, and circus arts for unforgettable events.",
      "home.book": "Book a show",
      "home.contact": "Contact us",
      "performances.title": "Our Performances",
      "performances.fire.title": "Fire Show",
      "performances.fire.desc": "Fire breathing, fire juggling, staff, and poi. A blazing and hypnotic performance to illuminate your nights.",
      "performances.led.title": "LED & Light Show",
      "performances.led.desc": "Modern light performances with programmable LED equipment. Perfect for indoor events or futuristic atmospheres.",
      "performances.circus.title": "Circus Animation",
      "performances.circus.desc": "Stilt walkers, jugglers, and introductory workshops. Interactive animations for all ages.",
      "pricing.title": "Pricing & Services",
      "pricing.desc": "Our prices are indicative and customizable according to your event (wedding, festival, corporate event, private party).",
      "pricing.base": "Starting from",
      "pricing.fire_supplement": "Fire Breathing Supplement",
      "pricing.quote": "Request a quote",
      "pricing.weddings": "Weddings",
      "pricing.corporate": "Corporate",
      "pricing.festivals": "Festivals",
      "gallery.title": "Gallery",
      "contact.title": "Contact Us",
      "contact.name": "Name",
      "contact.email": "Email",
      "contact.message": "Message",
      "contact.send": "Send",
      "contact.location": "Based in Belgium / Europe",
      "contact.email_us": "Email us:",
      "seo.home.title": "Les Troubadours du Feu | Circus Artist Brussels",
      "seo.home.desc": "Fire shows, fire breathers in Belgium, and circus animations for weddings and events. Based in Brussels.",
      "seo.performances.title": "Fire and LED Shows | Fire Breather Belgium",
      "seo.performances.desc": "Discover our fire shows, fire breathers, LED juggling, and circus animations for all your events in Belgium.",
      "seo.pricing.title": "Circus Show Wedding Pricing | Les Troubadours du Feu",
      "seo.pricing.desc": "Check our pricing for fire shows, LED animations, and circus acts for weddings, festivals, and corporate events.",
      "seo.gallery.title": "Photo Gallery | Circus Artist Brussels",
      "seo.gallery.desc": "Discover our fire and light performances in pictures across Belgium and Europe.",
      "seo.contact.title": "Contact | Fire Breather Brussels",
      "seo.contact.desc": "Contact Les Troubadours du Feu to book a circus, fire, or light show for your event."
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "fr",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
