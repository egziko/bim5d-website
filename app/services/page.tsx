'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'

export default function Services() {
  const servicesDetail = [
    {
      id: 1,
      title: 'Préparation de Budget',
      description:
        'Les services de préparation de budget de construction permettent de planifier efficacement les coûts d\'un projet de construction ou de rénovation.',
      benefits: [
        'Planification financière précise',
        'Analyse de faisabilité complète',
        'Économies jusqu\'à 50% en honoraires',
        'Modèle 3D dynamique inclus',
        'Budget détaillé par étape',
      ],
      targets: ['Particuliers', 'Entrepreneurs', 'Architectes', 'Promoteurs immobiliers'],
      icon: '💰',
    },
    {
      id: 2,
      title: 'Contrôle de Coût',
      description:
        'Les services de contrôle des coûts à l\'étape de conception visent à aligner le design du projet avec le budget disponible.',
      benefits: [
        'Minimisation des dépassements',
        'Optimisation du design',
        'Faisabilité économique confirmée',
        'Rapports de contrôle détaillés',
        'Analyse de variance budgétaire',
      ],
      targets: ['Promoteurs', 'Architectes', 'Ingénieurs'],
      icon: '📊',
    },
    {
      id: 3,
      title: 'Modélisation BIM 3D et 5D',
      description:
        'Nos services de modélisation incluent la création de modèles 3D détaillés avec intégration complète des données de coûts et de planification.',
      benefits: [
        'Expertise professionnelle qualifiée',
        'Solutions personnalisées',
        'Accompagnement complet',
        'Technologies innovantes',
        'Résultats haute qualité',
      ],
      targets: ['Tous les types de projets', 'Multilogements', 'Résidentiel', 'Commercial'],
      icon: '🏗️',
    },
    {
      id: 4,
      title: 'Appels d\'Offres',
      description:
        'L\'assistance au maître d\'ouvrage pour les appels d\'offres facilite le processus de sélection des prestataires et entreprises.',
      benefits: [
        'Technologie unique de numérisation',
        'Transparence garantie',
        'Processus efficace',
        'Conformité assurée',
        'Meilleures offres obtenues',
      ],
      targets: ['Gestionnaires de projets', 'Maîtres d\'ouvrage', 'Donneurs d\'ordre'],
      icon: '📋',
    },
  ]

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-50 to-accent-50 section-padding">
          <div className="container-custom text-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Nos Services en{' '}
              <span className="gradient-text">Estimation</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              À travers BIM 5D, nous offrons à nos clients des services d'expertise complets pour leurs projets immobiliers.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid gap-12">
              {servicesDetail.map((service) => (
                <div
                  key={service.id}
                  className="group border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="grid md:grid-cols-3 gap-0">
                    {/* Left - Icon & Title */}
                    <div className="bg-gradient-to-br from-primary-50 to-accent-50 p-8 md:p-12 flex flex-col justify-center">
                      <div className="text-6xl mb-4">{service.icon}</div>
                      <h2 className="font-display text-2xl font-bold text-dark-900">
                        {service.title}
                      </h2>
                    </div>

                    {/* Right - Content */}
                    <div className="md:col-span-2 p-8 md:p-12">
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {service.description}
                      </p>

                      <div className="grid md:grid-cols-2 gap-8">
                        {/* Benefits */}
                        <div>
                          <h3 className="font-display font-bold text-lg mb-4">
                            Avantages
                          </h3>
                          <ul className="space-y-2">
                            {service.benefits.map((benefit, idx) => (
                              <li
                                key={idx}
                                className="flex items-start space-x-3"
                              >
                                <Check
                                  size={20}
                                  className="text-primary-600 flex-shrink-0 mt-0.5"
                                />
                                <span className="text-gray-700">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Targets */}
                        <div>
                          <h3 className="font-display font-bold text-lg mb-4">
                            Pour qui?
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {service.targets.map((target, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                              >
                                {target}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <Link
                        href="/contact"
                        className="inline-flex items-center mt-8 text-primary-600 hover:text-primary-700 font-semibold group-hover:translate-x-2 transition-transform"
                      >
                        En Savoir Plus
                        <ArrowRight size={18} className="ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="bg-dark-900 text-white section-padding">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                  À Propos de <span className="gradient-text">Notre Expertise</span>
                </h2>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  Depuis 40 ans, j'ai acquis une réputation remarquable dans le domaine de l'estimation au Québec. Mon expérience couvre tous les types de projets, de la planification à l'appel d'offres.
                </p>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  Notre approche combine l'expertise traditionnelle avec les technologies les plus modernes pour garantir la meilleure valeur ajoutée à chaque projet.
                </p>
                <p className="text-gray-300 mb-8 font-semibold">
                  Yvon Chabot, ECA - Président
                </p>
                <Link href="/contact" className="btn-primary">
                  Nous Contacter
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/10 rounded-xl p-8 backdrop-blur border border-white/20">
                  <div className="text-4xl font-bold gradient-text mb-2">40+</div>
                  <p className="text-gray-300">Années d'expérience</p>
                </div>
                <div className="bg-white/10 rounded-xl p-8 backdrop-blur border border-white/20">
                  <div className="text-4xl font-bold gradient-text mb-2">100+</div>
                  <p className="text-gray-300">Projets réalisés</p>
                </div>
                <div className="bg-white/10 rounded-xl p-8 backdrop-blur border border-white/20">
                  <div className="text-4xl font-bold gradient-text mb-2">$</div>
                  <p className="text-gray-300">Milliards économisés</p>
                </div>
                <div className="bg-white/10 rounded-xl p-8 backdrop-blur border border-white/20">
                  <div className="text-4xl font-bold gradient-text mb-2">24/7</div>
                  <p className="text-gray-300">Support disponible</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-primary-600 to-accent-500 text-white section-padding">
          <div className="container-custom text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Découvrez comment BIM 5D peut transformer vos projets
            </h2>
            <Link href="/contact" className="btn-primary bg-white text-primary-600 hover:bg-gray-50">
              Demander une Consultation <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
