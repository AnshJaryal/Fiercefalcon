import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, MessageCircle, Youtube } from 'lucide-react';

function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section with FIERCE FALCON text */}
      <section className="relative pt-24 pb-16">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-12">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-transparent bg-clip-text tracking-tight leading-none mb-6">
              FIERCE FALCON
            </h1>
            <p className="text-2xl md:text-3xl lg:text-4xl text-gray-600 dark:text-gray-400 font-light tracking-wide">
              EMPOWERING CHAMPIONS
            </p>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="container mx-auto px-6 space-y-24 pb-20">
        {/* About Fierce Falcons */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-white/95 to-blue-50/95 dark:from-gray-800/95 dark:to-gray-700/95 backdrop-blur-lg p-8 md:p-12 rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/20"
        >
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center">
              <span className="text-white font-bold text-2xl">FF</span>
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                About Fierce Falcons
              </h2>
              <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold italic">
                Eyes on the Prize, Wings to the Skies!
              </p>
            </div>
          </div>
          
          <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              Fierce Falcons is the official sports society of GTB4CEC, built to foster a competitive and spirited sporting culture. 
              We are a community of passionate athletes, dedicated teams, and sports enthusiasts who strive for excellence in every game we play.
            </p>
            <p>
              From intra-college tournaments to inter-college battles and the IPU Sports Meet, our players give their best on every field. 
              We have proudly represented our college at various levels, securing podium finishes and making a mark in the sporting world.
            </p>
          </div>
        </motion.div>

        {/* What We Do */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-white/95 to-purple-50/95 dark:from-gray-800/95 dark:to-gray-700/95 backdrop-blur-lg p-8 md:p-12 rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/20"
        >
          <h2 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text mb-8 flex items-center">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mr-4">
              <span className="text-white font-bold">⚡</span>
            </div>
            What We Do
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Train and develop players in multiple sports",
              "Organize intra-college tournaments to promote campus-wide participation",
              "Compete in inter-college championships and IPU Sports Meet",
              "Recognize outstanding athletes through our Hall of Fame & Achievement Tags System",
              "Create a strong sports network through our WhatsApp Community"
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-white/50 dark:hover:bg-gray-700/50 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-sm">✓</span>
                </div>
                <span className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Join Us */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-white/95 to-green-50/95 dark:from-gray-800/95 dark:to-gray-700/95 backdrop-blur-lg p-8 md:p-12 rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/20"
        >
          <h2 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text mb-8 flex items-center">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center mr-4">
              <span className="text-white font-bold">🎯</span>
            </div>
            Why Join Us?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                title: "Open for All", 
                desc: "Any GTB4CEC student can join",
                icon: "🚪",
                color: "from-blue-500 to-cyan-500"
              },
              { 
                title: "No Membership Fee", 
                desc: "It's completely free!",
                icon: "💰",
                color: "from-green-500 to-emerald-500"
              },
              { 
                title: "Beginner-Friendly", 
                desc: "No prior experience required",
                icon: "🌟",
                color: "from-purple-500 to-pink-500"
              },
              { 
                title: "Build a Legacy", 
                desc: "Get featured in our Hall of Fame",
                icon: "🏆",
                color: "from-yellow-500 to-orange-500"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm p-6 rounded-2xl transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl border border-gray-200/30 dark:border-gray-600/30">
                  <div className={`w-14 h-14 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform duration-300`}>
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                  <h3 className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Opportunities Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-white/95 to-yellow-50/95 dark:from-gray-800/95 dark:to-gray-700/95 backdrop-blur-lg p-8 md:p-12 rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/20"
        >
          <h2 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text mb-8 flex items-center">
            <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-red-500 rounded-xl flex items-center justify-center mr-4">
              <span className="text-white font-bold">🚀</span>
            </div>
            Opportunities to Compete
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Intra-College Events",
                desc: "Participate in campus-wide tournaments and build your skills",
                icon: "🏫"
              },
              {
                title: "Inter-College Championships",
                desc: "Compete against other colleges and showcase your talent",
                icon: "🏟️"
              },
              {
                title: "National-Level Events",
                desc: "Represent your college at prestigious national competitions",
                icon: "🌟"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-200/30 dark:border-gray-600/30 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-3">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 p-12 rounded-3xl shadow-2xl text-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-3xl"></div>
          <div className="relative z-10">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <span className="text-4xl">🦅</span>
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
              Join the Falcons and Be Part of the Legacy!
            </h2>
            <p className="text-xl md:text-2xl text-white/90 italic mb-8 max-w-3xl mx-auto">
              🏆 Sportsmanship, Teamwork & Excellence – That's the Falcon Spirit! 🏆
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.open('https://chat.whatsapp.com/BQj0rR4GwB17znAhwSJXKS', '_blank')}
                className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                Join WhatsApp Community
              </button>
              <button
                onClick={() => window.open('https://www.instagram.com/fierce.falcons/?hl=e', '_blank')}
                className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/30 transition-all duration-300"
              >
                Follow on Instagram
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer for About Us page */}
      <footer className="bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Logo and Description */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">FF</span>
                </div>
                <div>
                  <h3 className="text-2xl font-black">Fierce Falcons</h3>
                  <p className="text-blue-300">GTB4CEC Sports Society</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed max-w-md">
                Eyes on the Prize, Wings to the Skies! Empowering athletes, creating champions, 
                and building a community of passionate sports enthusiasts.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-4 text-blue-300">Quick Links</h4>
              <ul className="space-y-2">
                {['About Us', 'Sports & Clubs', 'Events', 'Hall of Fame'].map((link) => (
                  <li key={link}>
                    <button className="text-gray-300 hover:text-white transition-colors">
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-bold mb-4 text-blue-300">Connect With Us</h4>
              <div className="space-y-4">
                <a 
                  href="https://www.instagram.com/fierce.falcons/?hl=e" 
                  target="_blank" 
                  className="flex items-center space-x-3 text-gray-300 hover:text-pink-400 transition-colors"
                >
                  <Instagram size={20} />
                  <span>@fierce.falcons</span>
                </a>
                <a 
                  href="https://chat.whatsapp.com/BQj0rR4GwB17znAhwSJXKS" 
                  target="_blank" 
                  className="flex items-center space-x-3 text-gray-300 hover:text-green-400 transition-colors"
                >
                  <MessageCircle size={20} />
                  <span>WhatsApp Community</span>
                </a>
                <a 
                  href="#" 
                  target="_blank" 
                  className="flex items-center space-x-3 text-gray-300 hover:text-red-400 transition-colors"
                >
                  <Youtube size={20} />
                  <span>YouTube Channel</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Fierce Falcons. All rights reserved. | GTB4CEC Sports Society
            </p>
            <p className="text-gray-400 text-sm mt-4 md:mt-0">
              Made with ❤️ for our sports community
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default AboutUs;