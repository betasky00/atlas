import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

/**
 * Home Page - Atlas Media
 * 
 * Design Philosophy: Editorial minimalism with clear hierarchy
 * - Hero section with mission statement
 * - Feature highlights
 * - Call-to-action sections
 * - Generous whitespace
 */
export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground mb-6 leading-tight">
              Explorez la Culture, Découvrez le Monde
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Atlas est votre fenêtre sur la culture française et les actualités du monde. 
              À travers nos podcasts, nos newsletters et nos contenus, nous vous offrons 
              une perspective unique sur les enjeux culturels et mondiaux qui façonnent notre époque.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/podcasts">
                <a>
                  <Button className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90">
                    Écouter nos Podcasts
                    <ArrowRight className="ml-2" size={18} />
                  </Button>
                </a>
              </Link>
              <Link href="/newsletter">
                <a>
                  <Button variant="outline" className="w-full sm:w-auto border-border hover:bg-secondary">
                    S'abonner à la Newsletter
                  </Button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 md:py-32 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Mission Item 1 */}
            <div className="space-y-4">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                <span className="text-accent-foreground font-serif font-bold text-lg">01</span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-foreground">
                Podcasts Inspirants
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Découvrez des conversations avec des personnalités comme Stéphane de Bourgies, 
                un photographe français renommé. Nos podcasts explorent la culture, l'art et les perspectives uniques.
              </p>
            </div>

            {/* Mission Item 2 */}
            <div className="space-y-4">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                <span className="text-accent-foreground font-serif font-bold text-lg">02</span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-foreground">
                Actualités Culturelles
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Restez informé des dernières nouvelles culturelles et des événements mondiaux 
                qui façonnent notre société. Nos articles offrent une perspective française unique.
              </p>
            </div>

            {/* Mission Item 3 */}
            <div className="space-y-4">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                <span className="text-accent-foreground font-serif font-bold text-lg">03</span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-foreground">
                Contenu Exclusif
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Accédez à du contenu exclusif via notre newsletter. Recevez les meilleures 
                histoires, analyses et insights directement dans votre boîte mail.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Podcast Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Podcast en Vedette
            </h2>
            <div className="w-16 h-1 bg-accent"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-serif font-bold text-foreground mb-4">
                Conversation avec Stéphane de Bourgies
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Plongez dans une conversation captivante avec le photographe français renommé 
                Stéphane de Bourgies. Découvrez son parcours, sa vision artistique et son 
                regard unique sur la culture contemporaine.
              </p>
              <Link href="/podcasts">
                <a>
                  <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                    Écouter le Podcast
                    <ArrowRight className="ml-2" size={18} />
                  </Button>
                </a>
              </Link>
            </div>

            <div className="bg-muted rounded-lg h-64 flex items-center justify-center">
              <div className="text-center">
                <p className="text-muted-foreground mb-4">Vignette du podcast</p>
                <p className="text-sm text-muted-foreground">
                  Stéphane de Bourgies - Photographe Français
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Rejoignez Notre Communauté
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Restez connecté avec Atlas pour les dernières actualités culturelles, 
            les podcasts exclusifs et les perspectives uniques sur le monde.
          </p>
          <Link href="/newsletter">
            <a>
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6">
                S'abonner Maintenant
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </a>
          </Link>
        </div>
      </section>
    </div>
  );
}
