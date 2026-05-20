import { useState } from 'react';
import { Link } from 'wouter';
import { Menu, X } from 'lucide-react';

/**
 * Navigation Component
 * 
 * Design Philosophy: Minimal, editorial navigation with the Atlas logo
 * - Clean header with logo and navigation links
 * - Responsive mobile menu
 * - Accent color (gold) for active/hover states
 */
export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Accueil', href: '/' },
    { label: 'Podcasts', href: '/podcasts' },
    { label: 'Newsletter', href: '/newsletter' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <a className="flex items-center hover:opacity-80 transition-opacity">
            <img 
              src="/logo.png" 
              alt="Atlas" 
              className="h-12 w-auto object-contain"
            />
          </a>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <a className="text-sm font-medium text-foreground hover:text-accent transition-colors duration-200">
                {item.label}
              </a>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-secondary rounded transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-secondary">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a
                  className="text-sm font-medium text-foreground hover:text-accent transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
