import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Mail, Zap } from 'lucide-react';
import { BackgroundPaths } from '@/components/ui/background-paths';
import { motion } from 'framer-motion';

/**
 * Home Page - Atlas Media
 * 
 * Modern, Interactive Design:
 * - Large centered logo over animated background
 * - Dynamic hero section with visual stimulation
 * - Interactive cards with hover effects
 * - Modern gradient elements
 */
export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Logo Centered on Animation */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <BackgroundPaths />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 text-center px-4"
        >
          {/* Large Centered Logo */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="mb-8"
          >
            <img 
              src="/logo.png" 
              alt="Atlas" 
              className="h-32 w-auto object-contain mx-auto drop-shadow-2xl"
            />
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-8xl font-serif font-bold text-foreground mb-6 leading-tight"
          >
            Explorez la Culture
          </motion.h1>

          {/* Subheading with Accent */}
          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <p className="text-2xl md:text-3xl text-accent font-semibold mb-4">
              Découvrez le Monde
            </p>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Plongez dans une expérience médiatique unique. Podcasts, actualités culturelles, 
              et perspectives mondiales réunies en un seul endroit.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/podcasts">
              <a>
                <Button className="bg-accent text-white hover:bg-accent/90 text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2">
                  <Play size={20} />
                  Écouter les Podcasts
                </Button>
              </a>
            </Link>
            <Link href="/newsletter">
              <a>
                <Button variant="outline" className="border-2 border-accent text-accent hover:bg-accent/10 text-lg px-8 py-6 rounded-lg flex items-center gap-2">
                  <Mail size={20} />
                  Newsletter
                </Button>
              </a>
            </Link>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-accent"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section - Interactive Cards */}
      <section className="py-20 md:py-32 bg-white relative">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Feature 1 */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(255, 167, 0, 0.15)" }}
              className="p-8 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:border-accent transition-all duration-300 cursor-pointer"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-orange-600 rounded-full flex items-center justify-center mb-6 shadow-lg">
                <Play className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-foreground mb-3">
                Podcasts Inspirants
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Conversations approfondies avec des personnalités remarquables. Explorez la culture, l'art et les perspectives uniques qui façonnent notre monde.
              </p>
              <motion.div
                whileHover={{ x: 5 }}
                className="mt-4 text-accent font-semibold flex items-center gap-2"
              >
                Découvrir <ArrowRight size={18} />
              </motion.div>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(255, 167, 0, 0.15)" }}
              className="p-8 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:border-accent transition-all duration-300 cursor-pointer"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-orange-600 rounded-full flex items-center justify-center mb-6 shadow-lg">
                <Zap className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-foreground mb-3">
                Actualités Culturelles
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Restez au courant des dernières tendances culturelles et des événements mondiaux. Une perspective française unique sur l'actualité.
              </p>
              <motion.div
                whileHover={{ x: 5 }}
                className="mt-4 text-accent font-semibold flex items-center gap-2"
              >
                Lire plus <ArrowRight size={18} />
              </motion.div>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(255, 167, 0, 0.15)" }}
              className="p-8 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:border-accent transition-all duration-300 cursor-pointer"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-orange-600 rounded-full flex items-center justify-center mb-6 shadow-lg">
                <Mail className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-foreground mb-3">
                Contenu Exclusif
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Accédez à du contenu réservé aux abonnés. Les meilleures histoires, analyses et insights livrés directement dans votre boîte mail.
              </p>
              <motion.div
                whileHover={{ x: 5 }}
                className="mt-4 text-accent font-semibold flex items-center gap-2"
              >
                S'abonner <ArrowRight size={18} />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Podcast Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10"></div>

        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-4">
              Podcast en Vedette
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent to-orange-600 rounded-full"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h3 className="text-4xl font-serif font-bold text-foreground mb-6">
                Conversation avec Stéphane de Bourgies
              </h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Plongez dans une conversation captivante avec le photographe français renommé Stéphane de Bourgies. Découvrez son parcours artistique, sa vision unique de la photographie et son regard sur la culture contemporaine. Un podcast incontournable pour les amateurs de photographie et de culture.
              </p>
              <Link href="/podcasts">
                <a>
                  <Button className="bg-accent text-white hover:bg-accent/90 text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                    Écouter le Podcast
                    <ArrowRight className="ml-2" size={20} />
                  </Button>
                </a>
              </Link>
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative h-80 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-accent to-orange-600 flex items-center justify-center cursor-pointer group"
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300"></div>
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="relative z-10 w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
              >
                <Play className="text-white" size={40} fill="white" />
              </motion.div>
              <p className="absolute bottom-6 left-6 text-white font-semibold text-lg">
                Stéphane de Bourgies
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-primary to-primary/80 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 text-center relative z-10"
        >
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            Rejoignez Notre Communauté
          </h2>
          <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
            Restez connecté avec Atlas pour les dernières actualités culturelles, 
            les podcasts exclusifs et les perspectives uniques sur le monde.
          </p>
          <Link href="/newsletter">
            <a>
              <Button className="bg-accent text-white hover:bg-accent/90 text-lg px-10 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                S'abonner à la Newsletter
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </a>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
