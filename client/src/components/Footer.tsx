import { Mail, Instagram, Youtube } from 'lucide-react';

/**
 * Footer Component
 * 
 * Design Philosophy: Minimal footer with contact info and social links
 * - Clean layout with brand info
 * - Social media links
 * - Copyright information
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-2">ATLAS</h3>
            <p className="text-sm opacity-80">
              Média culturelle française. Podcasts, actualités et nouvelles du monde.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Liens Rapides</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="hover:text-accent transition-colors">
                  Accueil
                </a>
              </li>
              <li>
                <a href="/podcasts" className="hover:text-accent transition-colors">
                  Podcasts
                </a>
              </li>
              <li>
                <a href="/newsletter" className="hover:text-accent transition-colors">
                  Newsletter
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4">Nous Suivre</h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
              <a
                href="mailto:contact@atlas.media"
                className="hover:text-accent transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <p className="text-sm text-center opacity-80">
            © {currentYear} Atlas. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
