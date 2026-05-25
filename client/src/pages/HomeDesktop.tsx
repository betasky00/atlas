import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Mic2, BookOpen } from 'lucide-react';
import { BackgroundPaths } from '@/components/ui/background-paths';

/**
 * Home Page Desktop - Atlas Media
 * 
 * Design Philosophy: Premium editorial with sophisticated typography and spacing
 * - Hero section with centered logo on animation
 * - Text section below animation
 * - About Atlas section with clear hierarchy
 * - In Situ podcast showcase
 * - Features section with clean cards
 * - Strong CTA with black background
 */
export default function HomeDesktop() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Background Animation - Logo Only */}
      <section className="relative h-screen bg-background overflow-hidden flex flex-col items-center justify-center">
        <BackgroundPaths />
        <div className="relative z-10 flex items-center justify-center h-full w-full">
          {/* Centered logo on animation */}
          <img 
            src="/logo-clean.webp" 
            alt="Atlas" 
            className="h-52 w-auto object-contain drop-shadow-lg"
          />
        </div>
      </section>

      {/* Text Section - Below Animation */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h1 className="text-6xl font-serif font-bold text-foreground mb-8 leading-tight">
            Explorez la Culture, Découvrez le Monde
          </h1>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed font-light">
            Atlas est un média indépendant fondé sur une conviction simple : une bonne histoire mérite d'être bien racontée. 
            Avec une équipe aux profils complémentaires et une exigence de production rare, nous créons du contenu qui plonge, 
            qui explore, qui transforme.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/podcasts">
              <a>
                <Button className="bg-accent text-white hover:bg-accent/90 text-base px-8 py-6">
                  Écouter In Situ
                  <Play className="ml-2" size={18} />
                </Button>
              </a>
            </Link>
            <Link href="/newsletter">
              <a>
                <Button variant="outline" className="border-2 border-accent text-accent hover:bg-accent/5 text-base px-8 py-6">
                  Rester Connecté
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* About Atlas Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-serif font-bold text-foreground mb-12 leading-tight">
              Atlas : Une Approche Différente
            </h2>
            
            <div className="space-y-8">
              <p className="text-lg text-muted-foreground leading-relaxed font-light">
                Atlas est née d'une envie simple et exigeante : créer. Fondée par une équipe de quatre personnes aux profils complémentaires 
                — image et vidéo, entrepreneuriat, événementiel, branding — Atlas réunit des gens qui auraient pu rester dans leur couloir. 
                Ils ont choisi de tout mettre dans le même projet.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed font-light">
                Ce qui les unit, c'est une conviction : une bonne histoire mérite d'être bien racontée. Atlas dispose du matériel et des compétences 
                pour le faire — de la captation à la post-production, du son à l'image — avec une exigence de production rare pour un média indépendant.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* In Situ Podcast Showcase */}
      <section className="py-32 bg-white border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="mb-16">
              <h2 className="text-5xl font-serif font-bold text-foreground mb-4 leading-tight">
                In Situ : Le Podcast d'Atlas
              </h2>
              <div className="w-16 h-1 bg-accent"></div>
            </div>

            <div className="grid grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed font-light">
                  <span className="font-semibold text-foreground">In Situ</span> n'est pas un magazine. Ce n'est pas une interview de promotion. 
                  C'est une conversation — dense, ancrée, sans filet. On ne comprend vraiment quelqu'un qu'en allant le retrouver là où il vit, 
                  crée, pense.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed font-light">
                  Chaque épisode se déroule sur le lieu choisi par l'invité — un stade, un studio d'enregistrement, une cuisine de chef, 
                  un bureau envahi de livres. Ce lieu devient un personnage à part entière, changeant la nature même de la conversation.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed font-light">
                  Le format long — environ une heure — suit une structure narrative en cinq temps : le lieu, les origines, la signature, 
                  les rencontres, et enfin le sens. On plonge dans une vie, on ne la survole pas.
                </p>

                <Link href="/podcasts">
                  <a>
                    <Button className="mt-4 bg-accent text-white hover:bg-accent/90 text-base px-8 py-6">
                      Découvrir les Épisodes
                      <Mic2 className="ml-2" size={18} />
                    </Button>
                  </a>
                </Link>
              </div>

              <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg p-8 border border-accent/20">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">Format</h3>
                    <p className="text-lg text-foreground font-serif">~1 heure de conversation</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">Structure</h3>
                    <p className="text-foreground text-sm leading-relaxed">
                      Lieu • Origines • Signature • Rencontres • Sens
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">Invités</h3>
                    <p className="text-foreground text-sm leading-relaxed">
                      Créateurs, entrepreneurs, artistes, sportifs, scientifiques — des gens qui ont construit quelque chose.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-serif font-bold text-foreground mb-16 leading-tight">
              Ce Que Nous Offrons
            </h2>

            <div className="grid grid-cols-3 gap-8">
              {/* Podcasts */}
              <div className="space-y-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Mic2 className="text-accent" size={24} />
                </div>
                <h3 className="text-2xl font-serif font-bold text-foreground">
                  Podcasts
                </h3>
                <p className="text-muted-foreground leading-relaxed font-light">
                  Des conversations longues et profondes avec des créateurs et penseurs qui façonnent notre époque.
                </p>
              </div>

              {/* Contenu */}
              <div className="space-y-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <BookOpen className="text-accent" size={24} />
                </div>
                <h3 className="text-2xl font-serif font-bold text-foreground">
                  Contenu
                </h3>
                <p className="text-muted-foreground leading-relaxed font-light">
                  Articles, analyses et perspectives sur la culture, l'art et les enjeux contemporains.
                </p>
              </div>

              {/* Production */}
              <div className="space-y-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Play className="text-accent" size={24} />
                </div>
                <h3 className="text-2xl font-serif font-bold text-foreground">
                  Production
                </h3>
                <p className="text-muted-foreground leading-relaxed font-light">
                  Captation, post-production, son et image — une exigence de qualité rare pour un média indépendant.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section - Pure Black */}
      <section className="py-32 bg-secondary text-secondary-foreground relative overflow-hidden">
        {/* Subtle accent element */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-6xl font-serif font-bold mb-6 leading-tight">
            Rejoignez Notre Communauté
          </h2>
          <p className="text-xl opacity-90 mb-12 max-w-2xl mx-auto font-light">
            Restez connecté avec Atlas pour les dernières actualités culturelles, 
            les podcasts exclusifs et les perspectives uniques sur le monde.
          </p>
          <Link href="/newsletter">
            <a>
              <Button className="bg-accent text-white hover:bg-accent/90 text-lg px-10 py-6">
                S'abonner à la Newsletter
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </a>
          </Link>
        </div>
      </section>
    </div>
  );
}
