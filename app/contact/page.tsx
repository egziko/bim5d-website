'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Contact() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-50 to-accent-50 section-padding">
          <div className="container-custom text-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Nous <span className="gradient-text">Contacter</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Prêt à transformez votre projet? Contactez-nous aujourd'hui pour une consultation gratuite.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Contact Info Cards */}
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                <div className="text-4xl mb-4">📞</div>
                <h3 className="font-display text-xl font-bold mb-3">Téléphone</h3>
                <p className="text-gray-600 mb-4">Appelez-nous directement pour une discussion rapide.</p>
                <a
                  href="tel:+14388742498"
                  className="inline-block text-primary-600 hover:text-primary-700 font-semibold text-lg"
                >
                  (438) 874-2498
                </a>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                <div className="text-4xl mb-4">✉️</div>
                <h3 className="font-display text-xl font-bold mb-3">E-mail</h3>
                <p className="text-gray-600 mb-4">Envoyez-nous vos questions ou demandes d'informations.</p>
                <a
                  href="mailto:info@bim5d.org"
                  className="inline-block text-primary-600 hover:text-primary-700 font-semibold"
                >
                  info@bim5d.org
                </a>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                <div className="text-4xl mb-4">📍</div>
                <h3 className="font-display text-xl font-bold mb-3">Adresse</h3>
                <address className="not-italic text-gray-600">
                  2475 chemin de Chambly<br />
                  Longueuil, QC, Canada
                </address>
              </div>
            </div>

            {/* Form Section */}
            <div className="max-w-2xl mx-auto">
              <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 md:p-12">
                <h2 className="font-display text-3xl font-bold mb-2 text-dark-900">
                  Envoyez-nous un Message
                </h2>
                <p className="text-gray-600 mb-8">
                  Remplissez le formulaire ci-dessous et nous vous répondrons dans les 24 heures.
                </p>

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        placeholder="Jean Dupont"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        E-mail *
                      </label>
                      <input
                        type="email"
                        placeholder="jean@example.com"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        placeholder="(438) 123-4567"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Adresse
                      </label>
                      <input
                        type="text"
                        placeholder="Votre adresse"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Objet *
                    </label>
                    <select
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                    >
                      <option value="">Sélectionnez un sujet</option>
                      <option value="prepa-budget">Préparation de budget</option>
                      <option value="controle-cout">Contrôle de coût</option>
                      <option value="modelisation">Modélisation 3D/5D</option>
                      <option value="appels-offres">Appels d'offres</option>
                      <option value="formation">Formation</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Message *
                    </label>
                    <textarea
                      placeholder="Décrivez votre projet ou vos questions..."
                      rows={6}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary"
                  >
                    Envoyer le Message
                  </button>

                  <p className="text-xs text-gray-600 text-center">
                    Nous respectons votre confidentialité. Vos informations ne seront jamais partagées.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Schedule Section */}
        <section className="bg-dark-900 text-white section-padding">
          <div className="container-custom text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Ou Programmez une <span className="gradient-text">Consultation</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Prenez rendez-vous directement avec Yvon Chabot pour une consultation personnalisée.
            </p>
            <a
              href="https://calendly.com/yvon-chabot-bim5d/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold bg-primary-600 text-white hover:bg-primary-700 transition-colors"
            >
              Réserver une Consultation <ArrowRight className="ml-2" size={20} />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
