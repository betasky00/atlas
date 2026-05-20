import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

/**
 * Contact Page - Atlas Media
 * 
 * Design Philosophy: Clean contact form with multiple contact options
 * - Contact form
 * - Contact information
 * - Social media links
 */
export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast.error('Veuillez remplir tous les champs');
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      toast.success('Message envoyé avec succès !');
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'contact@atlas.media',
      link: 'mailto:contact@atlas.media',
    },
    {
      icon: Phone,
      title: 'Téléphone',
      value: '+33 (0)1 XX XX XX XX',
      link: 'tel:+33100000000',
    },
    {
      icon: MapPin,
      title: 'Localisation',
      value: 'Paris, France',
      link: '#',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-4">
            Nous Contacter
          </h1>
          <div className="w-16 h-1 bg-accent mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Vous avez des questions, des suggestions ou vous souhaitez collaborer avec Atlas ? 
            Nous serions ravis de vous entendre. Contactez-nous dès aujourd'hui.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <h2 className="text-3xl font-serif font-bold text-foreground mb-8">
                Informations de Contact
              </h2>

              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-accent/90 transition-colors">
                      <Icon className="text-accent-foreground" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {info.title}
                      </h3>
                      <p className="text-muted-foreground group-hover:text-accent transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </a>
                );
              })}

              {/* Social Links */}
              <div className="pt-8 border-t border-border">
                <h3 className="font-semibold text-foreground mb-4">Nous Suivre</h3>
                <div className="flex gap-4">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                    aria-label="Instagram"
                  >
                    <span className="text-sm font-bold">f</span>
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                    aria-label="YouTube"
                  >
                    <span className="text-sm font-bold">▶</span>
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                    aria-label="Twitter"
                  >
                    <span className="text-sm font-bold">𝕏</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-secondary rounded-lg p-8 md:p-12">
                <h2 className="text-3xl font-serif font-bold text-foreground mb-8">
                  Envoyez-nous un Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                      Nom Complet
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Votre nom"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background"
                      disabled={isLoading}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                      Adresse Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="vous@exemple.fr"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background"
                      disabled={isLoading}
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-foreground mb-2">
                      Sujet
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="Sujet de votre message"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background"
                      disabled={isLoading}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Votre message..."
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background resize-none"
                      disabled={isLoading}
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90 py-3 font-semibold flex items-center justify-center gap-2"
                  >
                    {isLoading ? 'Envoi en cours...' : 'Envoyer le Message'}
                    {!isLoading && <Send size={18} />}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4 text-center">
            Questions Fréquentes
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-12"></div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: 'Comment puis-je m\'abonner à la newsletter ?',
                answer: 'Vous pouvez vous abonner à notre newsletter en visitant la page Newsletter et en entrant votre adresse email.',
              },
              {
                question: 'Où puis-je écouter les podcasts ?',
                answer: 'Tous nos podcasts sont disponibles sur YouTube. Visitez la page Podcasts pour accéder à tous nos épisodes.',
              },
              {
                question: 'Comment puis-je collaborer avec Atlas ?',
                answer: 'Nous sommes toujours à la recherche de collaborations intéressantes. Contactez-nous via le formulaire ci-dessus avec vos propositions.',
              },
              {
                question: 'Quelle est la fréquence de publication des contenus ?',
                answer: 'Nous publions une newsletter hebdomadaire et de nouveaux podcasts régulièrement. Suivez-nous sur les réseaux sociaux pour les mises à jour.',
              },
            ].map((faq, index) => (
              <div key={index} className="bg-background rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-2">
                  {faq.question}
                </h3>
                <p className="text-muted-foreground">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
