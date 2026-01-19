'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowRight, Zap, Target, TrendingUp } from 'lucide-react'

export default function Plateforme() {
  const features = [
    {
      icon: <Target size={24} />,
      title: 'Modélisation 3D Avancée',
      description: 'Créez des maquettes numériques avec une précision architecturale complète.',
    },
    {
      icon: <TrendingUp size={24} />,
      title: 'Estimation 5D Intégrée',
      description: 'Suivez l\'évolution des coûts à chaque étape du projet en temps réel.',
    },
    {
      icon: <Zap size={24} />,
      title: 'Planification 4D',
      description: 'Planifiez l\'organisation du chantier en amont avec précision.',
    },
    {
      icon: <Target size={24} />,
      title: 'Optimisation des Ressources',
      description: 'Prévoyez les coûts, réduisez les imprévus et anticipez les retards.',
    },
    {
      icon: <TrendingUp size={24} />,
      title: 'Collaboration Simplifiée',
      description: 'Partagez des données précises avec toutes les parties prenantes.',
    },
    {
      icon: <Zap size={24} />,
      title: 'Rapports en Temps Réel',
      description: 'Accédez à des analyses détaillées et des insights pour mieux décider.',
    },
  ]

  const process = [
    {
      number: '1',
      title: 'Analyse',
      description: 'Nous analysons votre projet et vos besoins spécifiques.',
    },
    {
      number: '2',
      title: 'Modélisation',
      description: 'Création de votre modèle 3D avec tous les détails.',
    },
    {
      number: '3',
      title: 'Intégration',
      description: 'Intégration des données de coûts et de planification.',
    },
    {
      number: '4',
      title: 'Livraison',
      description: 'Accès complet à votre modèle 5D sur la plateforme.',
    },
  ]

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-50 via-white to-accent-50 section-padding">
          <div className="container-custom">
            <div className="max-w-3xl">
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Plateforme BIM 5D<br />
                <span className="gradient-text">Gestion Intégrée</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Exploitez tout le potentiel du BIM 5D pour optimiser la planification, la gestion des coûts et le contrôle de votre projet.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary">
                  Demander une Démo <ArrowRight className="ml-2" size={20} />
                </Link>
                <Link href="/contact" className="btn-secondary">
                  Nous Contacter
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* What is BIM 5D */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                  Qu'est-ce que le <span className="gradient-text">BIM 5D?</span>
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Le BIM 5D va au-delà de la modélisation 3D traditionnelle en intégrant des données de coûts (4D) et de planification (5D) dans le modèle 3D.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Cette approche permet une visualisation en temps réel des coûts et des plannings tout au long du cycle de vie du projet, offrant ainsi une compréhension approfondie de l'impact financier de chaque décision.
                </p>
                <p className="text-lg text-gray-600">
                  Le résultat? Une meilleure prise de décision, une gestion optimisée des ressources et une réduction significative des risques financiers.
                </p>
              </div>
              <div className="bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl p-8 aspect-square flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold gradient-text mb-4">5D</div>
                  <p className="text-gray-700 font-semibold mb-4">
                    3D (Modèle) + 4D (Temps) + 5D (Coût)
                  </p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>✓ Visualisation 3D complète</p>
                    <p>✓ Planification temporelle</p>
                    <p>✓ Gestion des coûts intégrée</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="bg-gray-50 section-padding">
          <div className="container-custom">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
              Fonctionnalités <span className="gradient-text">Principales</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
                >
                  <div className="text-primary-600 mb-4">{feature.icon}</div>
                  <h3 className="font-display text-lg font-bold mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
              Notre <span className="gradient-text">Processus</span>
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <div key={index} className="relative">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-primary-600 text-white flex items-center justify-center font-display text-2xl font-bold mb-4">
                      {step.number}
                    </div>
                    <h3 className="font-display text-lg font-bold text-center mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-center text-sm">
                      {step.description}
                    </p>
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-1 bg-gradient-to-r from-primary-600 to-accent-500 transform -translate-y-1/2"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-gradient-to-r from-primary-600 to-accent-500 text-white section-padding">
          <div className="container-custom">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
              Bénéfices Concrets
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 rounded-xl p-8 backdrop-blur border border-white/20">
                <div className="text-4xl font-bold mb-3">📊</div>
                <h3 className="font-display text-xl font-bold mb-3">Économies</h3>
                <p>Réduisez vos coûts de construction jusqu'à 25% grâce à une meilleure planification.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-8 backdrop-blur border border-white/20">
                <div className="text-4xl font-bold mb-3">⏱️</div>
                <h3 className="font-display text-xl font-bold mb-3">Temps</h3>
                <p>Gagnez 50% de temps dans la préparation des plans et des devis.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-8 backdrop-blur border border-white/20">
                <div className="text-4xl font-bold mb-3">✅</div>
                <h3 className="font-display text-xl font-bold mb-3">Qualité</h3>
                <p>Augmentez la qualité de vos projets avec une visualisation complète en 3D.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Prêt à transformer votre approche?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Découvrez comment la plateforme BIM 5D peut révolutionner votre gestion de projet.
            </p>
            <Link
              href="/contact"
              className="btn-primary"
            >
              Demander une Démonstration <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
