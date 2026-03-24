import { Link, Outlet, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Flame, Globe } from 'lucide-react';
import { useState } from 'react';

export default function Layout() {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'fr' ? 'en' : 'fr');
  };

  const navLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/performances', label: t('nav.performances') },
    { path: '/pricing', label: t('nav.pricing') },
    { path: '/gallery', label: t('nav.gallery') },
    { path: '/contact', label: t('nav.contact') },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col">
      <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-orange-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-2">
              <Flame className="w-8 h-8 text-orange-500" />
              <Link to="/" className="text-xl font-bold tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
                Les Troubadours
              </Link>
            </div>
            
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium uppercase tracking-widest transition-colors hover:text-orange-400 ${
                    location.pathname === link.path ? 'text-orange-500' : 'text-gray-300'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors ml-4"
              >
                <Globe className="w-4 h-4" />
                {i18n.language.toUpperCase()}
              </button>
            </nav>

            <div className="md:hidden flex items-center gap-4">
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-1 text-sm font-medium text-gray-300 hover:text-white"
              >
                <Globe className="w-4 h-4" />
                {i18n.language.toUpperCase()}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black border-b border-orange-900/30">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium uppercase tracking-wider ${
                    location.pathname === link.path
                      ? 'text-orange-500 bg-orange-950/30'
                      : 'text-gray-300 hover:text-white hover:bg-gray-900'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="bg-neutral-950 border-t border-orange-900/30 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Flame className="w-8 h-8 text-orange-500 mx-auto mb-6" />
          <h3 className="text-xl font-bold tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600 mb-2">
            Les Troubadours du Feu
          </h3>
          <p className="text-gray-400 mb-6">{t('contact.location')}</p>
          <a href="mailto:mathieugraf522@gmail.com" className="text-orange-400 hover:text-orange-300 transition-colors">
            mathieugraf522@gmail.com
          </a>
          <p className="text-gray-600 text-sm mt-8">
            &copy; {new Date().getFullYear()} Les Troubadours du Feu. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
