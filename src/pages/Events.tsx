import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Trophy, Users, Medal, Star } from 'lucide-react';

const Events = () => {
  const events = [
    // {
    //   id: 1,
    //   title: "IPU Sports Meet 2023",
    //   date: "October 15-20, 2023",
    //   icon: <Trophy className="w-8 h-8 text-yellow-500" />,
    //   description: "A grand inter-university sports competition featuring over 30 colleges competing in 15+ sporting events. Witnessed record-breaking performances in athletics and team sports.",
    //   highlights: ["500+ participants", "15+ sports categories", "30 participating colleges"],
    //   image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    // },
    {
      id: 2,
      title: "GTBIT Silver Jubilee 2024",
      date: "January 25-27, 2024",
      icon: <Star className="w-8 h-8 text-purple-500" />,
      description: "Celebrating 25 years of excellence with a spectacular sports carnival. Special alumni matches and exhibition games marked this historic occasion.",
      highlights: ["Alumni tournaments", "Exhibition matches", "Cultural performances"],
      image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 3,
      title: "Intra Sports Week 2025",
      date: "March 1-7, 2023",
      icon: <Users className="w-8 h-8 text-blue-500" />,
      description: "A week-long celebration of sports featuring intense competitions between departments. Showcased extraordinary talent and sportsmanship among students.",
      highlights: ["Inter-department rivalry", "7 days of competition", "12 sports categories"],
      image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 4,
      title: "IPU Sports Meet 2024",
      date: "November 10-15, 2024",
      icon: <Trophy className="w-8 h-8 text-yellow-500" />,
      description: "The latest edition of the prestigious inter-university sports meet, featuring enhanced categories and participation from across the region.",
      highlights: ["600+ participants", "20+ sports categories", "35 participating colleges"],
      image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 5,
      title: "Intra Sports Week 2024",
      date: "February 15-21, 2024",
      icon: <Users className="w-8 h-8 text-blue-500" />,
      description: "Building on last year's success, this edition introduced new sports categories and saw increased participation across departments.",
      highlights: ["15 departments participating", "New sports categories", "Record participation"],
      image: "/images/intrasportweek.png"
    },
    {
      id: 6,
      title: "Akhilesh Das Inter Tournament 2025 (Football)",
      date: "March 5-10, 2025",
      icon: <Medal className="w-8 h-8 text-green-500" />,
      description: "A prestigious football tournament honoring the legacy of Akhilesh Das. Teams from across the country compete for glory.",
      highlights: ["16 team tournament", "knockout format", "Live streaming"],
      image: "/images/akhileshdas.png"
    },
    {
      id: 7,
      title: "Athleema 2024 (Kho-Kho)",
      date: "April 1-3, 2024",
      icon: <Calendar className="w-8 h-8 text-red-500" />,
      description: "A specialized tournament celebrating the traditional sport of Kho-Kho, promoting indigenous sports and cultural heritage.",
      highlights: ["12 teams", "Traditional sports focus", "Cultural events"],
      image: "/images/athelema.png"
    },
    {
      id: 8,
      title: "Dr. Bharat Ram Inter College Sports Meet (LSR) 2024",
      date: "September 20-25, 2024",
      icon: <Trophy className="w-8 h-8 text-yellow-500" />,
      description: "A comprehensive inter-college sports meet hosted at Lady Shri Ram College, featuring multiple sports disciplines and cultural events.",
      highlights: ["25+ colleges", "Multiple sports", "Cultural integration"],
      image: "/images/bharatram.png"
    },
    {
      id: 9,
      title: "Aahvaan DTU",
      date: "April 11, 2025",
      icon: <Trophy className="w-8 h-8 text-yellow-500" />,
      description: "Sports competetion at DTU",
      highlights: ["25+ colleges", "Multiple sports", "Cultural integration"],
      image: "/images/aahvaan.png"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text mb-4">
            Events & Tournaments
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Celebrating excellence in sports through prestigious competitions and events
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg">
                  {event.icon}
                </div>
              </div>
              
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {event.title}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold">
                    {event.date}
                  </p>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {event.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {event.highlights.map((highlight, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;