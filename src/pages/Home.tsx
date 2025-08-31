import React, { useState, useEffect } from 'react';
import { Trophy, Calendar, Bell, ChevronLeft, ChevronRight, Star, Users, Award, Target, ArrowRight, Play } from 'lucide-react';
import { motion } from 'framer-motion';


const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const achievements = [
    {
      title: "IPU Sports Meet",
      description: "Our Kho-kho Female team secured the  championship title for the  year",
      stat: "kho-kho Champions",
      icon: <Trophy className="w-8 h-8 text-yellow-500" />
    },
    {
      title: "Victory at DU Inter — 2 Silver & 1 Bronze",
      description: "Congratulations to our Athletic Club",
      stat: "2 Athletes",
      icon: <Users className="w-8 h-8 text-blue-500" />
    },
    {
      title: "Silver Jubilee 2024",
      description: "Our Tug of War  team secured the  championship title for the  year",
      stat: "Tug of War Champions",
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
      title: "Kho-Kho Tournament",
      date: "6th September",
      description: "Join us for the biggest sporting event of the year featuring competitions in the game.",
      image: "/images/kho-kho.jpg"
    },
    {
      title: "IPU Sports Meet 2025",
      date: "Coming Soon",
      description: "Join us for the trials of the biggest Sports event in the university",
      image: "/images/sportsmeet.jpg"
    },
    {
      title: "Intra Sports Week",
      date: "Coming Soon",
      description: "Keep a watch over the upcoming Intra Sports week , Stay tuned",
      image: "/images/sportweek.jpg"
    }
  ];

  const news = [
    
    {
      title: "Main Team Trial Form Out ",
      date: "Live Now",
      description: "Check Event page to Know more",
      category: "News",
      link: ""
    },
    {
      title: "Our kho-kho Boys team wins bronze in IPU Sports Meet 2024",
      date: "November 15 ,2024",
      description: "Congratulations to our kho-kho team for their outstanding performance in the Event!",
      category: "Achievement",
      link: " "
    },
    {
      title: "Our Athletics club wins 2 silver and bronze ",
      date: "March 24, 2025",
      description: "Congratulations to our Athletic team for their outstanding performance in the Event!",
      category: "Achievement",
      link: " "
    }
  ];

  const stats = [
    { number: "500+", label: "Active Members", icon: <Users className="w-6 h-6" /> },
    { number: "10+", label: "Sports Categories", icon: <Trophy className="w-6 h-6" /> },
    { number: "3", label: "Tournaments Won", icon: <Award className="w-6 h-6" /> },
    { number: "2.5+", label: "Years of Excellence", icon: <Star className="w-6 h-6" /> }
  ];

  return (
    <div className="space-y-16 pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] rounded-3xl overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/home.jpg"
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
                  
                  <a
                    href="https://www.instagram.com/reel/DNz5n6iZKHw/?igsh=MTJicTJxdmRlejhiZg%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 
                              rounded-2xl font-bold text-lg transition-all duration-300 hover:bg-white/20 
                              flex items-center justify-center"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    Watch Highlights
                  </a>

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
      {/* Latest News */}
      <section className="container mx-auto px-6">
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 md:p-8 shadow-2xl border border-gray-200/20 dark:border-gray-700/20">
          <div className="flex items-center mb-6 md:mb-8">
            <Bell className="w-6 h-6 md:w-8 md:h-8 text-blue-600 dark:text-blue-400 mr-2 md:mr-3" />
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white">Latest News</h2>
          </div>
          
          <div className="space-y-4 md:space-y-6">
            {news.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex flex-col md:flex-row md:items-start gap-4 md:gap-6 p-4 md:p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl hover:shadow-lg transition-all duration-300 border border-blue-200/20 dark:border-gray-600/20"
              >
                <div className="flex-shrink-0 w-full md:w-1 h-1 md:h-16 bg-gradient-to-r md:bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="px-2 py-1 md:px-3 md:py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                      {item.category}
                    </span>
                    <span className="text-xs md:text-sm text-blue-600 dark:text-blue-400 font-medium">
                      {item.date}
                    </span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-1 md:mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                {item.link && (
                  <div className="mt-2 md:mt-0">
                    {/* <button
                      onClick={() => setCurrentPage(item.link)}
                      className="inline-block px-3 py-2 md:px-4 md:py-2 text-xs md:text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Read More
                    </button> */}
                  </div>
                )}

              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Achievements Carousel */}
      <section className="container mx-auto px-6">
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 md:p-8 shadow-2xl border border-gray-200/20 dark:border-gray-700/20 relative">
          <div className="flex items-center justify-between mb-6 md:mb-8 flex-wrap gap-4">
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white flex items-center">
              <Trophy className="w-6 h-6 md:w-8 md:h-8 text-blue-600 dark:text-blue-400 mr-2 md:mr-3" />
              Our Achievements
            </h2>
            <div className="flex space-x-2 md:space-x-3">
              <button 
                onClick={prevSlide}
                className="p-2 md:p-3 rounded-full bg-blue-100 hover:bg-blue-200 dark:bg-gray-700 dark:hover:bg-gray-600 transition-all duration-300 shadow-lg"
              >
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-blue-600 dark:text-blue-400" />
              </button>
              <button 
                onClick={nextSlide}
                className="p-2 md:p-3 rounded-full bg-blue-100 hover:bg-blue-200 dark:bg-gray-700 dark:hover:bg-gray-600 transition-all duration-300 shadow-lg"
              >
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-blue-600 dark:text-blue-400" />
              </button>
            </div>
          </div>

          <div className="relative h-auto overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="w-full flex-shrink-0 px-2 sm:px-4"
                >
                  <div className="bg-gradient-to-br from-white to-blue-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-6 md:p-8 h-full shadow-xl border border-gray-200/20 dark:border-gray-600/20">
                    <div className="flex items-start justify-between mb-4 md:mb-6">
                      <div className="flex items-center space-x-3 md:space-x-4">
                        <div className="p-2 md:p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl">
                          {achievement.icon}
                        </div>
                        <div>
                          <h3 className="text-lg md:text-2xl font-bold text-gray-900 dark:text-white">
                            {achievement.title}
                          </h3>
                          <span className="block text-xl md:text-3xl font-black text-blue-600 dark:text-blue-400">
                            {achievement.stat}
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center space-x-2 md:space-x-3 mt-4 md:mt-6">
            {achievements.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-blue-600 dark:bg-blue-400 scale-125' 
                    : 'bg-blue-200 dark:bg-gray-600 hover:bg-blue-300 dark:hover:bg-gray-500'
                }`}
              />
            ))}
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
                {/* <button className="mt-4 text-blue-600 dark:text-blue-400 font-semibold flex items-center group-hover:translate-x-1 transition-transform">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </button> */}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;