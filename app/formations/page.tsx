'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'

export default function Formation() {
  const trainings = [
    {
      id: 1,
      title: 'WEBINAIRE pour Promoteur immobilier',
      description:
        'Ce webinaire s\'adresse aux promoteurs immobiliers et aux décideurs souhaitant maximiser la rentabilité de leurs projets grâce au BIM 5D.',
      objective:
        'Découvrez comment cette technologie peut révolutionner l\'analyse de faisabilité, en intégrant coût, délais et optimisation des ressources dès les premières phases.',
      target: 'Promoteurs immobiliers, Décideurs',
      icon: '🎯',
      type: 'Webinaire',
    },
    {
      id: 2,
      title: 'WEBINAIRE pour Architecte',
      description:
        'Le BIM 5D révolutionne la manière dont les architectes conçoivent et gèrent leurs projets en intégrant les dimensions de coût et de planification.',
      objective:
        'Découvrez comment optimiser vos processus, améliorer la prise de décision et accroître la rentabilité de vos projets grâce au BIM 5D.',
      target: 'Architectes, Professionnels du design',
      icon: '🏗️',
      type: 'Webinaire',
    },
    {
      id: 3,
      title: 'Guide de Modélisation BIM 5D',
      description:
        'Ce document complet vise à expliquer les principes de la modélisation 5D dans le cadre du Building Information Modeling.',
      objective:
        'Le BIM 5D permet de lier les coûts aux éléments du modèle 3D pour une estimation budgétaire dynamique et précise, favorisant une meilleure prise de décision et une gestion optimisée des ressources.',
      target: 'Tous les professionnels de la construction',
      icon: '📚',
      type: 'Guide',
    },
  ]

  const benefits = [
    'Comprendre les principes du BIM 5D',
    'Intégrer coûts et planification dans vos projets',
    'Optimiser vos processus de conception',
    'Améliorer la prise de décision',
    'Réduire les risques financiers',
    'Maximiser la rentabilité des projets',
  ]

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-50 to-accent-50 section-padding">
          <div className="container-custom text-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Nos Formations en <span className="gradient-text">BIM 5D</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Développez vos compétences en modélisation BIM 5D et transformez votre approche de gestion de projet.
            </p>
          </div>
        </section>

        {/* Training Programs */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid gap-12 mb-12">
              {trainings.map((training) => (
                <div
                  key={training.id}
                  className="rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow"
                >
                  <div className="grid md:grid-cols-3 gap-0">
                    {/* Left - Icon */}
                    <div className="bg-gradient-to-br from-primary-50 to-accent-50 p-8 md:p-12 flex flex-col justify-center items-center">
                      <div className="text-7xl mb-4">{training.icon}</div>
                      <span className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
                        {training.type}
                      </span>
                    </div>

                    {/* Right - Content */}
                    <div className="md:col-span-2 p-8 md:p-12">
                      <h3 className="font-display text-2xl md:text-3xl font-bold text-dark-900 mb-3">
                        {training.title}
                      </h3>
                      <p className="text-gray-600 mb-6">{training.description}</p>

                      <div className="mb-6 pb-6 border-b border-gray-200">
                        <h4 className="font-semibold text-dark-900 mb-2">Objectif:</h4>
                        <p className="text-gray-600">{training.objective}</p>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold text-dark-900 mb-2">Pour qui?</h4>
                        <p className="text-gray-600 mb-4">{training.target}</p>
                      </div>

                      <Link
                        href="/contact"
                        className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold group hover:translate-x-2 transition-transform"
                      >
                        En Savoir Plus <ArrowRight size={18} className="ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-gray-50 section-padding">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                  Ce que vous <span className="gradient-text">apprendrez</span>
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Nos formations vous permettront de maîtriser tous les aspects du BIM 5D et de l'appliquer efficacement à vos projets.
                </p>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Check size={20} className="text-primary-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl p-8 min-h-96 flex flex-col justify-center items-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">📖</div>
                  <h3 className="font-display text-2xl font-bold mb-3 text-dark-900">
                    Accès complet aux ressources
                  </h3>
                  <p className="text-gray-700 mb-6">
                    Webinaires enregistrés, guides téléchargeables et support professionnel.
                  </p>
                  <Link href="/contact" className="btn-primary">
                    S'inscrire maintenant
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Expert Section */}
        <section className="bg-white section-padding">
          <div className="container-custom">
            <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 md:p-12 text-center">
              <div className="max-w-2xl mx-auto">
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                  Apprenez des <span className="gradient-text">experts</span>
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Yvon Chabot et son équipe de professionnels qualifiés partageront leurs 40 années d'expérience et leurs meilleures pratiques.
                </p>
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div>
                    <div className="text-4xl font-bold gradient-text mb-2">40+</div>
                    <p className="text-gray-700 font-semibold">Années d'expérience</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold gradient-text mb-2">1000+</div>
                    <p className="text-gray-700 font-semibold">Professionnels formés</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold gradient-text mb-2">100%</div>
                    <p className="text-gray-700 font-semibold">Satisfaction client</p>
                  </div>
                </div>
                <Link href="/contact" className="btn-primary">
                  Nous Contacter pour s'inscrire
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Accompaniment Section */}
        <section className="bg-dark-900 text-white section-padding">
          <div className="container-custom">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
              Accompagnement <span className="gradient-text">Numérique</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 rounded-xl p-8 backdrop-blur border border-white/20">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="font-display text-xl font-bold mb-3">
                  Virage Numérique
                </h3>
                <p className="text-gray-300 mb-4">
                  Notre entreprise est accréditée pour l'accompagnement des entreprises dans leur transformation numérique.
                </p>
                <p className="text-gray-300">
                  Nous proposons des plans d'action adaptés à vos réalités et à vos objectifs spécifiques.
                </p>
              </div>
              <div className="bg-white/10 rounded-xl p-8 backdrop-blur border border-white/20">
                <div className="text-4xl mb-4">👥</div>
                <h3 className="font-display text-xl font-bold mb-3">
                  Formations et Accompagnements
                </h3>
                <p className="text-gray-300 mb-4">
                  Accompagnement et formation complète pour les entreprises souhaitant effectuer leur virage numérique.
                </p>
                <Link href="/contact" className="text-primary-400 hover:text-primary-300 font-semibold inline-flex items-center">
                  En savoir plus <ArrowRight size={18} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-primary-600 to-accent-500 text-white section-padding">
          <div className="container-custom text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Augmentez vos compétences en BIM 5D
            </h2>
            <p className="text-xl text-primary-50 mb-8 max-w-2xl mx-auto">
              Inscrivez-vous à nos formations et rejoignez les professionnels qui transforment l'industrie de la construction.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold bg-white text-primary-600 hover:bg-gray-50 transition-colors"
            >
              S'inscrire Maintenant <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
