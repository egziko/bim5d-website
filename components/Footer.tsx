'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-900 text-white">
      {/* Main Footer */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
                B5D
              </div>
              <span className="font-display font-bold text-lg">BIM 5D</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Transformez vos projets de construction avec la modélisation BIM 5D et l'estimation précise.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/services" className="hover:text-primary-400 transition-colors">
                  Préparation de budget
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary-400 transition-colors">
                  Contrôle de coût
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary-400 transition-colors">
                  Modélisation 3D/5D
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary-400 transition-colors">
                  Appels d'offres
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/" className="hover:text-primary-400 transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/bim-5d" className="hover:text-primary-400 transition-colors">
                  Plateforme
                </Link>
              </li>
              <li>
                <Link href="/formations" className="hover:text-primary-400 transition-colors">
                  Formation
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-primary-400 transition-colors">
                  Projets
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Contact</h3>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-start space-x-3">
                <Phone size={18} className="text-primary-400 mt-0.5 flex-shrink-0" />
                <a href="tel:+14388742498" className="hover:text-primary-400 transition-colors">
                  (438) 874-2498
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Mail size={18} className="text-primary-400 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@bim5d.org" className="hover:text-primary-400 transition-colors break-all">
                  info@bim5d.org
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-primary-400 mt-0.5 flex-shrink-0" />
                <address className="not-italic">
                  2475 chemin de Chambly<br />
                  Longueuil, QC, Canada
                </address>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm text-gray-400">
              © {currentYear} BIM 5D. Tous droits réservés.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <a
                href="https://www.linkedin.com/company/bim-5d/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <Link href="/services" className="text-sm text-gray-400 hover:text-primary-400 transition-colors">
                Conditions
              </Link>
              <Link href="/contact" className="text-sm text-gray-400 hover:text-primary-400 transition-colors">
                Politique de confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
