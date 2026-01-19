'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-24 md:pt-32 md:pb-40 bg-white border-b border-gray-200">

          <div className="container-custom">
            <div className="max-w-3xl">
              <h1 className="font-display text-5xl md:text-6xl font-bold leading-tight mb-6">
                Budget, estimation et{' '}
                <span className="text-primary-700">BIM 5D</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                De la préparation de budget à la construction
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary">
                  Demandez une Démonstration <ArrowRight className="ml-2" size={20} />
                </Link>
                <a
                  href="tel:+14388742498"
                  className="btn-secondary"
                >
                  Appelez-nous
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-dark-900 text-white section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <p className="font-display text-5xl md:text-6xl font-bold text-primary-400 mb-3">25%</p>
                <p className="text-gray-300 text-sm">d'économie des coûts de construction</p>
              </div>
              <div className="text-center">
                <p className="font-display text-5xl md:text-6xl font-bold text-primary-400 mb-3">50%</p>
                <p className="text-gray-300 text-sm">de temps en moins pour les plans et devis</p>
              </div>
              <div className="text-center">
                <p className="font-display text-5xl md:text-6xl font-bold text-primary-400 mb-3">75%</p>
                <p className="text-gray-300 text-sm">de temps en moins pour les soumissions</p>
              </div>
              <div className="text-center">
                <p className="font-display text-5xl md:text-6xl font-bold text-primary-400 mb-3">100%</p>
                <p className="text-gray-300 text-sm">de modélisation prise en charge</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Estimation Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-16 text-center">
              Nos services en <span className="text-primary-700">estimation</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="text-3xl font-bold text-primary-600 flex-shrink-0">1</div>
                  <div>
                    <h3 className="font-display text-xl font-bold mb-3">Préparation de budget</h3>
                    <p className="text-gray-600">
                      Nous aidons les promoteurs et les architectes à mieux estimer les coûts dès le démarrage du projet.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="text-3xl font-bold text-primary-600 flex-shrink-0">2</div>
                  <div>
                    <h3 className="font-display text-xl font-bold mb-3">Contrôle de coûts</h3>
                    <p className="text-gray-600">
                      L'assurance que votre projet ne dépasse pas le budget prévu.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="text-3xl font-bold text-primary-600 flex-shrink-0">3</div>
                  <div>
                    <h3 className="font-display text-xl font-bold mb-3">Modélisation BIM</h3>
                    <p className="text-gray-600">
                      La modélisation BIM nous permet de proposer des estimations plus précises et complètes.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="text-3xl font-bold text-primary-600 flex-shrink-0">4</div>
                  <div>
                    <h3 className="font-display text-xl font-bold mb-3">Appels d'offres</h3>
                    <p className="text-gray-600">
                      Optimisez vos processus d'appels d'offres avec notre plateforme BIM 5D.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BIM Services Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-16 text-center">
              Nos services en <span className="text-primary-700">gestion BIM</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="text-3xl font-bold text-primary-600 flex-shrink-0">1</div>
                  <div>
                    <h3 className="font-display text-xl font-bold mb-3">
                      Accompagnement dans le virage numérique
                    </h3>
                    <p className="text-gray-600">
                      Transformez vos processus pour intégrer la modélisation BIM dans vos projets.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="text-3xl font-bold text-primary-600 flex-shrink-0">2</div>
                  <div>
                    <h3 className="font-display text-xl font-bold mb-3">
                      Modélisation BIM
                    </h3>
                    <p className="text-gray-600">
                      Création de modèles BIM détaillés pour tous les types de projets.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="text-3xl font-bold text-primary-600 flex-shrink-0">3</div>
                  <div>
                    <h3 className="font-display text-xl font-bold mb-3">
                      Résidentiel et multilogement
                    </h3>
                    <p className="text-gray-600">
                      Solutions BIM spécialisées pour les projets résidentiels et multilogements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Formation Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-16 text-center">
              Nos <span className="text-primary-700">formations</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-gray-200 rounded-xl p-8 hover:border-primary-300 hover:shadow-lg transition-all">
                <div className="flex items-start gap-4">
                  <div className="text-3xl font-bold text-primary-600 flex-shrink-0">1</div>
                  <div>
                    <h3 className="font-display text-xl font-bold mb-3">
                      Webinaire pour les promoteurs
                    </h3>
                    <p className="text-gray-600">
                      Découvrez comment BIM 5D peut améliorer vos estimations de budget et vos processus de gestion des coûts.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border border-gray-200 rounded-xl p-8 hover:border-primary-300 hover:shadow-lg transition-all">
                <div className="flex items-start gap-4">
                  <div className="text-3xl font-bold text-primary-600 flex-shrink-0">2</div>
                  <div>
                    <h3 className="font-display text-xl font-bold mb-3">
                      Webinaire pour les architectes
                    </h3>
                    <p className="text-gray-600">
                      Apprenez comment utiliser BIM 5D pour optimiser vos processus de conception et de modélisation.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border border-gray-200 rounded-xl p-8 hover:border-primary-300 hover:shadow-lg transition-all">
                <div className="flex items-start gap-4">
                  <div className="text-3xl font-bold text-primary-600 flex-shrink-0">3</div>
                  <div>
                    <h3 className="font-display text-xl font-bold mb-3">
                      Guide pour la modélisation BIM
                    </h3>
                    <p className="text-gray-600">
                      Un guide complet pour bien démarrer avec la modélisation BIM dans tous vos projets.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* GestionBIM 5D Section */}
        <section className="section-padding bg-primary-900 text-white">
          <div className="container-custom">
            <div className="max-w-3xl">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Découvrez GestionBIM 5D
              </h2>
              <p className="text-xl text-primary-100 mb-8 leading-relaxed">
                Notre plateforme intègre la modélisation BIM, la gestion des coûts et la planification en un seul outil. Simplifiez vos processus et gagnez du temps.
              </p>
              <Link href="/bim-5d" className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold bg-white text-primary-600 hover:bg-gray-50 transition-colors">
                En Savoir Plus <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Nos <span className="text-primary-700">projets</span>
            </h2>
            <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
              Explorez les projets sur lesquels nous avons travaillé avec nos clients
            </p>
            <Link href="/projects" className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold bg-primary-600 text-white hover:bg-primary-700 transition-colors">
              Voir Tous les Projets <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="section-padding bg-primary-900 text-white">
          <div className="container-custom text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Prêt à transformer vos projets?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Contactez-nous dès aujourd'hui
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold bg-white text-primary-600 hover:bg-gray-50 transition-colors"
              >
                Demander une Démo <ArrowRight className="ml-2" size={20} />
              </Link>
              <a
                href="tel:+14388742498"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold border-2 border-white text-white hover:bg-white hover:text-primary-600 transition-colors"
              >
                (438) 874-2498
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
