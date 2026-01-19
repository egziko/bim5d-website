'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Projets() {
  const projects = [
    {
      title: 'Complexe hôtelier',
      category: 'Commercial',
      description: 'Modélisation complète et estimation d\'un complexe hôtelier multidimensionnel.',
    },
    {
      title: 'Projet résidentiel',
      category: 'Résidentiel',
      description: 'Développement résidentiel avec planification complète et gestion des coûts.',
    },
    {
      title: 'Logements de 100 unités',
      category: 'Multilogement',
      description: 'Estimation et modélisation d\'un projet d\'envergure majeure.',
    },
    {
      title: 'Complexe immobilier',
      category: 'Commercial',
      description: 'Projet complexe combinant différents usages avec intégration budgétaire.',
    },
    {
      title: 'Logements (12 unités)',
      category: 'Résidentiel',
      description: 'Petit projet résidentiel avec modélisation 5D complète.',
    },
    {
      title: 'Complexe sportif',
      category: 'Infrastructure',
      description: 'Modélisation d\'une installation sportive avec planification détaillée.',
    },
    {
      title: 'Centre communautaire',
      category: 'Institutionnel',
      description: 'Projet communautaire avec mise en œuvre de la plateforme BIM 5D.',
    },
    {
      title: 'Construction CPE',
      category: 'Institutionnel',
      description: 'Centre de petite enfance avec gestion optimisée des ressources.',
    },
    {
      title: 'Agrandissement résidentiel',
      category: 'Résidentiel',
      description: 'Extension d\'une propriété résidentielle avec contrôle de coûts.',
    },
    {
      title: 'Bureau (préfabrication)',
      category: 'Commercial',
      description: 'Complexe de bureaux utilisant des éléments préfabriqués.',
    },
    {
      title: 'RPA de 60 unités',
      category: 'Multilogement',
      description: 'Résidence pour personnes âgées avec modélisation complète.',
    },
    {
      title: 'Condominium',
      category: 'Résidentiel',
      description: 'Immeuble de condominiums avec gestion intégrée des étapes.',
    },
    {
      title: 'Logements sociaux et espace communautaire',
      category: 'Social',
      description: 'Projet d\'utilité publique combinant logement et services.',
    },
    {
      title: 'Transformation d\'une église en logements',
      category: 'Rénovation',
      description: 'Reconversion d\'un bâtiment patrimonial en logements modernes.',
    },
    {
      title: 'Stade avec complexe hôtelier',
      category: 'Infrastructure',
      description: 'Grand projet mixte associant équipement sportif et hébergement.',
    },
    {
      title: 'RPA (65 unités)',
      category: 'Multilogement',
      description: 'Autre projet de résidence pour personnes âgées.',
    },
    {
      title: 'Complexe aquatique',
      category: 'Infrastructure',
      description: 'Installation aquatique avec modélisation détaillée et budgétisation.',
    },
    {
      title: 'Logement (150 unités)',
      category: 'Multilogement',
      description: 'Projet de grande envergure en résidentiel collectif.',
    },
    {
      title: 'Bibliothèque',
      category: 'Institutionnel',
      description: 'Bâtiment public avec optimisation spatiale et budgétaire.',
    },
    {
      title: 'Résidence étudiante et commercial',
      category: 'Mixte',
      description: 'Projet mixte combinant logement étudiant et commerces au rez-de-chaussée.',
    },
    {
      title: 'Logements (préfabrication)',
      category: 'Résidentiel',
      description: 'Projet utilisant la construction modulaire et préfabriquée.',
    },
  ]

  const categories = ['Tous', ...Array.from(new Set(projects.map(p => p.category)))]

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-50 to-accent-50 section-padding">
          <div className="container-custom text-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Nos <span className="gradient-text">Projets Réalisés</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez quelques projets réalisés en utilisant nos services de modélisation 3D et 5D avec la plateforme BIM 5D.
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="section-padding">
          <div className="container-custom">
            {/* Categories */}
            <div className="flex flex-wrap gap-3 justify-center mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`px-6 py-2 rounded-full font-semibold transition-all ${
                    cat === 'Tous'
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-primary-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="group rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-300"
                >
                  {/* Project Image Placeholder */}
                  <div className="relative h-48 bg-gradient-to-br from-primary-100 to-accent-100 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 backdrop-blur">
                      <Link
                        href="/contact"
                        className="text-white font-semibold flex items-center space-x-2 hover:text-accent-300"
                      >
                        <span>En Savoir Plus</span>
                        <ArrowRight size={18} />
                      </Link>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                      <div className="text-center">
                        <div className="text-4xl mb-2">🏗️</div>
                        <p className="text-sm font-semibold">{project.category}</p>
                      </div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-semibold mb-3">
                      {project.category}
                    </span>
                    <h3 className="font-display text-lg font-bold text-dark-900 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-dark-900 text-white section-padding">
          <div className="container-custom">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
              Notre <span className="gradient-text">Réussite</span> en Chiffres
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <p className="font-display text-5xl font-bold gradient-text mb-2">21+</p>
                <p className="text-gray-300">Projets présentés</p>
              </div>
              <div className="text-center">
                <p className="font-display text-5xl font-bold gradient-text mb-2">7</p>
                <p className="text-gray-300">Types de projets</p>
              </div>
              <div className="text-center">
                <p className="font-display text-5xl font-bold gradient-text mb-2">$</p>
                <p className="text-gray-300">Milliards gérés</p>
              </div>
              <div className="text-center">
                <p className="font-display text-5xl font-bold gradient-text mb-2">40+</p>
                <p className="text-gray-300">Années d'expérience</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-primary-600 to-accent-500 text-white section-padding">
          <div className="container-custom text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Vous avez un projet?
            </h2>
            <p className="text-xl text-primary-50 mb-8 max-w-2xl mx-auto">
              Contactez-nous pour en savoir plus sur comment BIM 5D peut transformer votre projet.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold bg-white text-primary-600 hover:bg-gray-50 transition-colors"
            >
              Nous Contacter <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
