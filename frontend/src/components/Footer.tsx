'use client';

import Link from 'next/link';
import { Github, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-neon-purple/10 mt-20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-6 h-6 rounded-lg bg-gradient-neon" />
              <span className="text-lg font-bold">FrameFusion</span>
            </div>
            <p className="text-gray-400 text-sm">Professional sprite sheet conversion for game developers.</p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/convert" className="hover:text-neon-purple transition-colors">Converter</Link></li>
              <li><Link href="#" className="hover:text-neon-purple transition-colors">Asset Tools</Link></li>
              <li><Link href="#" className="hover:text-neon-purple transition-colors">Pricing</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/docs" className="hover:text-neon-purple transition-colors">Documentation</Link></li>
              <li><Link href="#" className="hover:text-neon-purple transition-colors">API Docs</Link></li>
              <li><Link href="#" className="hover:text-neon-purple transition-colors">Guides</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="#" className="hover:text-neon-purple transition-colors">Privacy</Link></li>
              <li><Link href="#" className="hover:text-neon-purple transition-colors">Terms</Link></li>
              <li><Link href="#" className="hover:text-neon-purple transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neon-purple/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm">&copy; {currentYear} FrameFusion Studio. All rights reserved.</p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-neon-purple transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-neon-purple transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-neon-purple transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
