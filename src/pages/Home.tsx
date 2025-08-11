import React, { useState, useEffect } from 'react';
import { Trophy, Calendar, Bell, ChevronLeft, ChevronRight, Star, Users, Award, Target, ArrowRight, Play } from 'lucide-react';
import { motion } from 'framer-motion';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const achievements = [
    {
      title: "National Champions",
      description: "Our basketball team secured the national championship title for the third consecutive year",
      stat: "3x Champions",
      icon: <Trophy className="w-8 h-8 text-yellow-500" />
    },
    {
      title: "Olympic Athletes",
      description: "Proud to have trained 12 Olympic athletes who represented our country in various sports",
      stat: "12 Athletes",
      icon: <Star className="w-8 h-8 text-purple-500" />
    },
    {
      title: "Community Impact",
      description: "Successfully mentored over 1000 young athletes through our youth development program",
      stat: "1000+ Athletes",
      icon: <Users className="w-8 h-8 text-blue-500" />
    },
    {
      title: "Facility Excellence",
      description: "State-of-the-art training facilities spanning over 50,000 square feet",
      stat: "50,000 sq ft",
      icon: <Award className="w-8 h-8 text-green-500" />
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % achievements.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % achievements.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + achievements.length) % achievements.length);
  };

  const upcomingEvents = [
    {
      title: "Annual Sports Festival 2025",
      date: "March 15-20, 2025",
      description: "Join us for our biggest sporting event of the year featuring competitions across all sports.",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Basketball Tournament",
      date: "April 5-6, 2025",
      description: "Inter-college basketball championship with teams from across the region.",
      image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Fitness Workshop",
      date: "April 12, 2025",
      description: "Learn advanced training techniques from professional athletes and certified trainers.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const news = [
    {
      title: "Our Cricket Team Wins National Championship",
      date: "February 28, 2025",
      description: "Congratulations to our cricket team for their outstanding performance in the nationals!",
      category: "Achievement"
    },
    {
      title: "New Swimming Pool Facility Opening",
      date: "February 25, 2025",
      description: "State-of-the-art swimming facility opening next month. Stay tuned for membership details.",
      category: "Facility"
    }
  ];

  const stats = [
    { number: "100+", label: "Active Members", icon: <Users className="w-6 h-6" /> },
    { number: "5+", label: "Sports Categories", icon: <Trophy className="w-6 h-6" /> },
    { number: "0+", label: "Tournaments Won", icon: <Award className="w-6 h-6" /> },
    { number: "2.5+", label: "Years of Excellence", icon: <Star className="w-6 h-6" /> }
  ];

  return (
    <div className="space-y-16 pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] rounded-3xl overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=2000"
            alt="Sports"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-purple-900/80 to-indigo-900/90"></div>
        </div>
        
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                  <Star className="w-5 h-5 text-yellow-400 mr-2" />
                  <span className="text-white font-semibold">GTB4CEC Official Sports Society</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">
                  Welcome to{' '}
                  <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-transparent bg-clip-text">
                    Fierce Falcons
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-white/90 max-w-2xl leading-relaxed">
                  Eyes on the Prize, Wings to the Skies! Empowering athletes, creating champions, and building a community of sports enthusiasts.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => window.open('https://chat.whatsapp.com/BQj0rR4GwB17znAhwSJXKS', '_blank')}
                    className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center justify-center"
                  >
                    Join Our Community
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                  
                  <button className="group bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:bg-white/20 flex items-center justify-center">
                    <Play className="w-5 h-5 mr-2" />
                    Watch Highlights
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-xl border border-gray-200/20 dark:border-gray-700/20 hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex justify-center mb-3 text-blue-600 dark:text-blue-400">
                {stat.icon}
              </div>
              <div className="text-3xl font-black text-gray-900 dark:text-white mb-1">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Vision Statement */}
      <section className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-12 text-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl"></div>
          <div className="relative">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mb-6">
              <Trophy className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl font-black bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text mb-6">
              Our Vision
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              "To be the leading sports society that nurtures talent, promotes sportsmanship, and creates opportunities for athletes to excel in their chosen sports while building a strong community of passionate sports enthusiasts."
            </p>
          </div>
        </motion.div>
      </section>

      {/* Achievements Carousel */}
      <section className="container mx-auto px-6">
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl border border-gray-200/20 dark:border-gray-700/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"></div>
          <div className="relative">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-black text-gray-900 dark:text-white flex items-center">
                <Trophy className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
                Our Achievements
              </h2>
              <div className="flex space-x-3">
                <button 
                  onClick={prevSlide}
                  className="p-3 rounded-full bg-blue-100 hover:bg-blue-200 dark:bg-gray-700 dark:hover:bg-gray-600 transition-all duration-300 shadow-lg"
                >
                  <ChevronLeft className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </button>
                <button 
                  onClick={nextSlide}
                  className="p-3 rounded-full bg-blue-100 hover:bg-blue-200 dark:bg-gray-700 dark:hover:bg-gray-600 transition-all duration-300 shadow-lg"
                >
                  <ChevronRight className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </button>
              </div>
            </div>
            
            <div className="relative h-[280px] overflow-hidden rounded-2xl">
              <div 
                className="absolute w-full transition-transform duration-700 ease-in-out flex"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {achievements.map((achievement, index) => (
                  <div 
                    key={index}
                    className="w-full flex-shrink-0 px-4"
                  >
                    <div className="bg-gradient-to-br from-white to-blue-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-8 h-full shadow-xl border border-gray-200/20 dark:border-gray-600/20">
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center space-x-4">
                          <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl">
                            {achievement.icon}
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{achievement.title}</h3>
                            <span className="text-3xl font-black text-blue-600 dark:text-blue-400">{achievement.stat}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">{achievement.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-center space-x-3 mt-6">
              {achievements.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index 
                      ? 'bg-blue-600 dark:bg-blue-400 scale-125' 
                      : 'bg-blue-200 dark:bg-gray-600 hover:bg-blue-300 dark:hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="container mx-auto px-6">
        <div className="mb-8">
          <h2 className="text-3xl font-black text-gray-900 dark:text-white flex items-center mb-4">
            <Calendar className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
            Upcoming Events
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">Don't miss out on these exciting upcoming events</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {upcomingEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200/20 dark:border-gray-700/20"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-3 py-1 bg-blue-600 text-white text-sm font-semibold rounded-full mb-2">
                    {event.date}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {event.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{event.description}</p>
                <button className="mt-4 text-blue-600 dark:text-blue-400 font-semibold flex items-center group-hover:translate-x-1 transition-transform">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Latest News */}
      <section className="container mx-auto px-6">
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl border border-gray-200/20 dark:border-gray-700/20">
          <div className="flex items-center mb-8">
            <Bell className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
            <h2 className="text-3xl font-black text-gray-900 dark:text-white">Latest News</h2>
          </div>
          
          <div className="space-y-6">
            {news.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex items-start space-x-4 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl hover:shadow-lg transition-all duration-300 border border-blue-200/20 dark:border-gray-600/20"
              >
                <div className="flex-shrink-0 w-1 h-16 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                      {item.category}
                    </span>
                    <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">{item.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;