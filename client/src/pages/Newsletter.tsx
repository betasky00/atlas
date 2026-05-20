import { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

/**
 * Newsletter Page - Atlas Media
 * 
 * Design Philosophy: Clean signup form with benefit highlights
 * - Newsletter subscription form
 * - Benefits showcase
 * - Testimonials or highlights
 */
export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast.error('Veuillez entrer votre adresse email');
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setEmail('');
      toast.success('Merci de votre inscription !');
      
      // Reset after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1000);
  };

  const benefits = [
    {
      icon: '📰',
      title: 'Actualités Culturelles',
      description: 'Les dernières nouvelles culturelles et artistiques du monde, sélectionnées pour vous.',
    },
    {
      icon: '🎙️',
      title: 'Accès aux Podcasts',
      description: 'Découvrez nos derniers podcasts en avant-première et recevez les liens d\'écoute.',
    },
    {
      icon: '✨',
      title: 'Contenu Exclusif',
      description: 'Accédez à du contenu exclusif réservé aux abonnés de notre newsletter.',
    },
    {
      icon: '🌍',
      title: 'Perspectives Mondiales',
      description: 'Une vision française unique sur les enjeux culturels et mondiaux.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-4">
            Notre Newsletter
          </h1>
          <div className="w-16 h-1 bg-accent mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Restez informé des dernières actualités culturelles, des nouveaux podcasts 
            et des perspectives uniques sur le monde. Une newsletter hebdomadaire 
            directement dans votre boîte mail.
          </p>
        </div>
      </section>

      {/* Subscription Form */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-secondary rounded-lg p-8 md:p-12">
              <div className="flex items-center gap-3 mb-6">
                <Mail className="text-accent" size={32} />
                <h2 className="text-3xl font-serif font-bold text-foreground">
                  S'abonner à Atlas
                </h2>
              </div>

              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-accent mx-auto mb-4" />
                  <h3 className="text-2xl font-serif font-bold text-foreground mb-2">
                    Inscription Confirmée !
                  </h3>
                  <p className="text-muted-foreground">
                    Merci de votre inscription. Vous recevrez bientôt notre première newsletter.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                      Votre adresse email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="vous@exemple.fr"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                      disabled={isLoading}
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90 py-3 font-semibold"
                  >
                    {isLoading ? 'Inscription en cours...' : 'S\'abonner Maintenant'}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Nous respectons votre vie privée. Désinscription facile à tout moment.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 md:py-32 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4 text-center">
            Ce que Vous Recevrez
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-background rounded-lg p-8 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-serif font-bold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Frequency Info */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-secondary rounded-lg p-8 text-center">
            <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
              Fréquence d'Envoi
            </h3>
            <p className="text-lg text-muted-foreground mb-4">
              Nous envoyons notre newsletter <strong>une fois par semaine</strong>, 
              généralement le jeudi matin. Vous recevrez les meilleures histoires, 
              analyses et insights de la semaine.
            </p>
            <p className="text-sm text-muted-foreground">
              Vous pouvez vous désabonner à tout moment d'un simple clic.
            </p>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">
            Rejoignez Notre Communauté
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div>
              <p className="text-4xl font-bold mb-2">5000+</p>
              <p className="opacity-90">Abonnés Actifs</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">52</p>
              <p className="opacity-90">Newsletters Publiées</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">98%</p>
              <p className="opacity-90">Taux de Satisfaction</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
