import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Target, Users, Star, ArrowRight } from 'lucide-react';

const Sports = () => {
  const sports = [
    {
      name: "Basketball",
      description: "Join our championship-winning basketball team. Regular training sessions and competitive matches with professional coaching.",
      // achievements: "3-time University Champions",
      image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=800",
      // icon: <Trophy className="w-6 h-6 text-orange-500" />,
      members: "45+ Active Players",
      level: "Beginner to Professional"
    },
    {
      name: "Football",
      description: "Experience the thrill of football with state-of-the-art training facilities and expert coaching staff.",
      // achievements: "Regional Tournament Winners 2023",
      image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&q=80&w=800",
      // // icon: <Target className="w-6 h-6 text-green-500" />,
      members: "60+ Active Players",
      level: "All Skill Levels"
    },
    {
      name: "Cricket",
      description: "Be part of our prestigious cricket program with professional training and competitive match exposure.",
      // achievements: "Inter-College Cricket Champions",
      image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80&w=800",
      // // icon: <Award className="w-6 h-6 text-blue-500" />,
      members: "35+ Active Players",
      level: "Intermediate to Advanced"
    },
    {
      name: "Athletics",
      description: "Comprehensive athletics program covering track and field events with expert guidance and training.",
      // achievements: "Multiple National Records",
      image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&q=80&w=800",
      // // icon: <Star className="w-6 h-6 text-purple-500" />,
      members: "50+ Athletes",
      level: "All Levels Welcome"
    },
    {
      name: "Kho-Kho",
      description: "Traditional Indian sport promoting agility, strategy, and teamwork with modern training techniques.",
      // achievements: "State Championship Runners-up",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800",
      // // icon: <Users className="w-6 h-6 text-red-500" />,
      members: "25+ Players",
      level: "Beginner Friendly"
    },
    // {
    //   name: "Kabaddi",
    //   description: "Ancient sport of strength and strategy, building physical fitness and mental toughness.",
    //   // achievements: "Regional Champions 2024",
    //   image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800",
    //   icon: <Trophy className="w-6 h-6 text-yellow-600" />,
    //   members: "30+ Warriors",
    //   level: "All Fitness Levels"
    // },
    {
      name: "Badminton",
      description: "Fast-paced racquet sport with professional courts and coaching for singles and doubles play.",
      // achievements: "University Singles Champion",
      image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&q=80&w=800",
      // // icon: <Target className="w-6 h-6 text-pink-500" />,
      members: "40+ Players",
      level: "Recreational to Competitive"
    },
    {
      name: "Chess",
      description: "Strategic mind sport with regular tournaments and coaching from certified chess masters.",
      // achievements: "Inter-College Chess Champions",
      image: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&q=80&w=800",
      // // icon: <Award className="w-6 h-6 text-indigo-500" />,
      members: "20+ Players",
      level: "Beginner to Grandmaster"
    },
    {
      name: "Table Tennis",
      description: "High-speed indoor sport with professional tables and equipment for competitive play.",
      // achievements: "Regional Table Tennis Champions",
      image: "https://images.unsplash.com/photo-1534158914592-062992fbe900?auto=format&fit=crop&q=80&w=800",
      // // icon: <Star className="w-6 h-6 text-teal-500" />,
      members: "35+ Players",
      level: "All Skill Levels"
    },
    // {
    //   name: "Tennis",
    //   description: "Classic racquet sport with professional courts and coaching for singles and doubles matches.",
    //   // achievements: "University Tennis Champions",
    //   image: "https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?auto=format&fit=crop&q=80&w=800",
    //   icon: <Trophy className="w-6 h-6 text-lime-500" />,
    //   members: "25+ Players",
    //   level: "Beginner to Advanced"
    // },
    {
      name: "Tug of War",
      description: "Team strength sport building camaraderie and physical fitness through competitive pulling.",
      // achievements: "Inter-College Champions 2023",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800",
      // // icon: <Users className="w-6 h-6 text-orange-600" />,
      members: "40+ Team Members",
      level: "Team Sport - All Welcome"
    },
    {
      name: "Powerlifting",
      description: "Strength sport focusing on squat, bench press, and deadlift with professional training and safety.",
      // achievements: "National Powerlifting Medalists",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800",
      // // icon: <Award className="w-6 h-6 text-gray-600" />,
      members: "20+ Lifters",
      level: "Intermediate to Elite"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-20">
      <div className="container mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-6">
            <Trophy className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
            <span className="text-blue-600 dark:text-blue-400 font-semibold">Sports & Clubs</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-transparent bg-clip-text mb-6 leading-tight">
            Join Our Elite Programs
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover your passion and excel in sports with our comprehensive training programs, 
            professional coaching, and state-of-the-art facilities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sports.map((sport, index) => (
            <motion.div
              key={sport.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-200/20 dark:border-gray-700/20 hover:border-blue-300/30 dark:hover:border-blue-600/30"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={sport.image}
                  alt={sport.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                
                {/* <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2">
                  {sport.icon}
                </div> */}
                
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white mb-2">{sport.name}</h3>
                  <div className="flex items-center space-x-2">
                    {/* <Star className="w-4 h-4 text-yellow-400" /> */}  
                    {/* <span className="text-yellow-400 font-semibold text-sm">{sport.achievements}</span> */}
                  </div>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {sport.description}
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500 dark:text-gray-400">Members:</span>
                    <span className="font-semibold text-gray-900 dark:text-white">{sport.members}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500 dark:text-gray-400">Level:</span>
                    <span className="font-semibold text-gray-900 dark:text-white">{sport.level}</span>
                  </div>
                </div>
                
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-2xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center group">
                  Join {sport.name}
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-3xl p-12 shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join Fierce Falcons today and become part of a legacy of champions. 
              No experience required - just passion and dedication!
            </p>
            <button
              onClick={() => window.open('https://chat.whatsapp.com/BQj0rR4GwB17znAhwSJXKS', '_blank')}
              className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Join Our WhatsApp Community
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Sports;