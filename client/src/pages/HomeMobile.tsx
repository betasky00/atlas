import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Mic2, BookOpen } from 'lucide-react';
import { BackgroundPaths } from '@/components/ui/background-paths';

/**
 * Home Page Mobile - Atlas Media
 * 
 * Design Philosophy: Optimized for mobile with compact spacing and zoomed animation
 * - Hero section with centered logo on zoomed animation
 * - Text section below animation
 * - Simplified sections for mobile
 */
export default function HomeMobile() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Background Animation - Logo Only */}
      <section className="relative h-screen bg-background overflow-hidden flex flex-col items-center justify-center">
        <BackgroundPaths />
        <div className="relative z-10 flex items-center justify-center h-full w-full">
          {/* Centered logo on animation - smaller for mobile */}
          <img 
            src="/logo-clean.webp" 
            alt="Atlas" 
            className="h-32 w-auto object-contain drop-shadow-lg px-4"
          />
        </div>
      </section>

      {/* Text Section - Below Animation */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h1 className="text-4xl font-serif font-bold text-foreground mb-6 leading-tight">
            Explorez la Culture, Découvrez le Monde
          </h1>
          <p className="text-base text-muted-foreground mb-8 leading-relaxed font-light">
            Atlas est un média indépendant fondé sur une conviction simple : une bonne histoire mérite d'être bien racontée.
          </p>
          <div className="flex flex-col gap-3">
            <Link href="/podcasts">
              <a>
                <Button className="w-full bg-accent text-white hover:bg-accent/90 text-base py-5">
                  Écouter In Situ
                  <Play className="ml-2" size={16} />
                </Button>
              </a>
            </Link>
            <Link href="/newsletter">
              <a>
                <Button variant="outline" className="w-full border-2 border-accent text-accent hover:bg-accent/5 text-base py-5">
                  Rester Connecté
                  <ArrowRight className="ml-2" size={16} />
                </Button>
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* About Atlas Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-8 leading-tight">
            Atlas : Une Approche Différente
          </h2>
          
          <div className="space-y-5">
            <p className="text-sm text-muted-foreground leading-relaxed font-light">
              Atlas est née d'une envie simple et exigeante : créer. Fondée par une équipe de quatre personnes aux profils complémentaires 
              — image et vidéo, entrepreneuriat, événementiel, branding — Atlas réunit des gens qui auraient pu rester dans leur couloir.
            </p>
            
            <p className="text-sm text-muted-foreground leading-relaxed font-light">
              Ce qui les unit, c'est une conviction : une bonne histoire mérite d'être bien racontée. Atlas dispose du matériel et des compétences 
              pour le faire — de la captation à la post-production, du son à l'image.
            </p>
          </div>
        </div>
      </section>

      {/* In Situ Podcast Showcase */}
      <section className="py-16 bg-white border-t border-border">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-3 leading-tight">
              In Situ : Le Podcast
            </h2>
            <div className="w-12 h-1 bg-accent"></div>
          </div>

          <div className="space-y-6">
            <p className="text-sm text-muted-foreground leading-relaxed font-light">
              <span className="font-semibold text-foreground">In Situ</span> n'est pas un magazine. C'est une conversation — dense, ancrée, sans filet. 
              On ne comprend vraiment quelqu'un qu'en allant le retrouver là où il vit, crée, pense.
            </p>

            <p className="text-sm text-muted-foreground leading-relaxed font-light">
              Chaque épisode se déroule sur le lieu choisi par l'invité. Ce lieu devient un personnage à part entière, changeant la nature même de la conversation.
            </p>

            <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg p-6 border border-accent/20 space-y-4">
              <div>
                <h3 className="text-xs font-semibold text-accent uppercase tracking-wider mb-1">Format</h3>
                <p className="text-base text-foreground font-serif">~1 heure</p>
              </div>
              <div>
                <h3 className="text-xs font-semibold text-accent uppercase tracking-wider mb-1">Structure</h3>
                <p className="text-xs text-foreground leading-relaxed">
                  Lieu • Origines • Signature • Rencontres • Sens
                </p>
              </div>
            </div>

            <Link href="/podcasts">
              <a>
                <Button className="w-full bg-accent text-white hover:bg-accent/90 text-base py-5">
                  Découvrir les Épisodes
                  <Mic2 className="ml-2" size={16} />
                </Button>
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-10 leading-tight">
            Ce Que Nous Offrons
          </h2>

          <div className="space-y-6">
            {/* Podcasts */}
            <div className="space-y-3">
              <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                <Mic2 className="text-accent" size={20} />
              </div>
              <h3 className="text-lg font-serif font-bold text-foreground">
                Podcasts
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-light">
                Des conversations longues et profondes avec des créateurs et penseurs.
              </p>
            </div>

            {/* Contenu */}
            <div className="space-y-3">
              <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                <BookOpen className="text-accent" size={20} />
              </div>
              <h3 className="text-lg font-serif font-bold text-foreground">
                Contenu
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-light">
                Articles, analyses et perspectives sur la culture et l'art.
              </p>
            </div>

            {/* Production */}
            <div className="space-y-3">
              <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                <Play className="text-accent" size={20} />
              </div>
              <h3 className="text-lg font-serif font-bold text-foreground">
                Production
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-light">
                Captation, post-production, son et image de qualité rare.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section - Pure Black */}
      <section className="py-16 bg-secondary text-secondary-foreground relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-10"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-serif font-bold mb-4 leading-tight">
            Rejoignez Notre Communauté
          </h2>
          <p className="text-sm opacity-90 mb-8 font-light">
            Restez connecté avec Atlas pour les dernières actualités culturelles et podcasts exclusifs.
          </p>
          <Link href="/newsletter">
            <a>
              <Button className="w-full bg-accent text-white hover:bg-accent/90 text-base py-5">
                S'abonner
                <ArrowRight className="ml-2" size={16} />
              </Button>
            </a>
          </Link>
        </div>
      </section>
    </div>
  );
}
