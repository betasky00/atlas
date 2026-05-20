import { ExternalLink } from 'lucide-react';

/**
 * Podcasts Page - Atlas Media
 * 
 * Design Philosophy: Grid-based podcast showcase with YouTube integration
 * - Featured podcast with thumbnail
 * - Description and link to YouTube
 * - Clean card design with hover effects
 */
export default function Podcasts() {
  const podcasts = [
    {
      id: 1,
      title: 'Conversation avec Stéphane de Bourgies',
      photographer: 'Stéphane de Bourgies',
      description: 'Plongez dans une conversation captivante avec le photographe français renommé Stéphane de Bourgies. Découvrez son parcours artistique, sa vision unique de la photographie et son regard sur la culture contemporaine. Un podcast incontournable pour les amateurs de photographie et de culture.',
      youtubeUrl: 'https://www.youtube.com/watch?v=YIvcCG-2t5Y',
      youtubeId: 'YIvcCG-2t5Y',
      thumbnailUrl: 'https://i.ytimg.com/vi/YIvcCG-2t5Y/maxresdefault.jpg',
      duration: '45 min',
      date: 'Avril 2025',
    },
    {
      id: 2,
      title: 'Tendances Culturelles 2025',
      photographer: 'À venir',
      description: 'Explorez les tendances culturelles qui façonnent 2025. Nos experts analysent les mouvements artistiques, les évolutions sociales et les perspectives qui définissent notre époque.',
      youtubeUrl: '#',
      youtubeId: '',
      thumbnailUrl: '',
      duration: 'À venir',
      date: 'Juin 2025',
    },
    {
      id: 3,
      title: 'Photographie et Identité',
      photographer: 'À venir',
      description: 'Comment la photographie façonne notre identité culturelle ? Une exploration profonde des liens entre l\'art photographique et l\'expression de soi.',
      youtubeUrl: '#',
      youtubeId: '',
      thumbnailUrl: '',
      duration: 'À venir',
      date: 'Juillet 2025',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-4">
            Nos Podcasts
          </h1>
          <div className="w-16 h-1 bg-accent mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Découvrez nos conversations inspirantes avec des personnalités remarquables. 
            Des discussions approfondies sur la culture, l'art et les perspectives uniques 
            qui façonnent notre monde.
          </p>
        </div>
      </section>

      {/* Podcasts Grid */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-16">
            {podcasts.map((podcast, index) => (
              <div
                key={podcast.id}
                className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'md:grid-cols-2 md:[&>*:first-child]:order-2' : ''
                }`}
              >
                {/* Thumbnail */}
                <div className="group">
                  {podcast.youtubeUrl !== '#' ? (
                    <a
                      href={podcast.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block relative overflow-hidden rounded-lg bg-muted aspect-video"
                    >
                      {podcast.thumbnailUrl ? (
                        <img
                          src={podcast.thumbnailUrl}
                          alt={podcast.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="text-center">
                            <p className="text-muted-foreground mb-2">Podcast à venir</p>
                            <p className="text-sm text-muted-foreground">{podcast.date}</p>
                          </div>
                        </div>
                      )}
                      {podcast.youtubeUrl !== '#' && (
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                          <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                            <svg
                              className="w-8 h-8 text-accent-foreground ml-1"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>
                        </div>
                      )}
                    </a>
                  ) : (
                    <div className="block relative overflow-hidden rounded-lg bg-muted aspect-video flex items-center justify-center">
                      <div className="text-center">
                        <p className="text-muted-foreground mb-2">Podcast à venir</p>
                        <p className="text-sm text-muted-foreground">{podcast.date}</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-accent mb-2">
                      {podcast.photographer}
                    </p>
                    <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                      {podcast.title}
                    </h3>
                  </div>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {podcast.description}
                  </p>

                  <div className="flex flex-wrap gap-4 pt-4">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">Durée :</span>
                      <span className="font-semibold text-foreground">{podcast.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">Date :</span>
                      <span className="font-semibold text-foreground">{podcast.date}</span>
                    </div>
                  </div>

                  {podcast.youtubeUrl !== '#' && (
                    <a
                      href={podcast.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors font-semibold"
                    >
                      Regarder sur YouTube
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Abonnez-vous pour les Nouveaux Podcasts
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Recevez une notification dès que nous publions un nouveau podcast. 
            Restez connecté avec Atlas pour ne rien manquer.
          </p>
          <a
            href="/newsletter"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
          >
            S'abonner à la Newsletter
          </a>
        </div>
      </section>
    </div>
  );
}
