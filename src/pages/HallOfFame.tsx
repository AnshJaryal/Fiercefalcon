import React, { useState, useEffect } from "react";
import { Medal, ChevronRight, Trophy, X, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Athlete {
  id: number;
  sport: string;
  year: string;
  achievement: string;
  imageUrl: string;
  quote: string;
  playername: {
    player1?: string;
    player2?: string;
    player3?: string;
    player4?: string;
    player5?: string;
    player6?: string;
    player7?: string;
    player8?: string;
    player9?: string;
    player10?: string;
    player11?: string;
    player12?: string;
    player13?: string;
  };
  category: string;
}

const HallOfFame = () => {
  const [selectedAthlete, setSelectedAthlete] = useState<Athlete | null>(null);

  const athletes: Athlete[] = 
  [
    {
      id: 1,
      sport: "Athletics",
      year: "2025",
      achievement: "2 SILVER and a BRONZE medal at Dr. Bharat Ram Inter College Sports Meet(LSR) 2024",
      imageUrl: "/images/medal.jpg",
      quote: "MEET OUR STAR PERFORMER AT INTER COLLEGE EVENT",
      playername: {
        player1: "Rupesh Singh Rawat (SILVER - Long Jump , BRONZE - Hurdle Race) ",
        player2: "Himanshu Adhikari (SILVER - Hurdle Race )",
      },
      category: "Intra College"
    },
    {
      id: 1,
      sport: "KHO-KHO BOYS",
      year: "2024",
      achievement: "IPU SPORT MEET KHO-KHO CHAMPION 2024",
      imageUrl: "/images/kho.jpeg",
      quote: "Strong alone, unstoppable together – that’s the spirit of champions.",
      playername: {
         player1: "Himanshu Adhikari (C) ",
        player2: "Paras Singh (VC)",
        player3: "Yash Chaudhary",
        player4: "Rupesh Singh Rawat",
        player5: "Utkarsh Tiwari",
        player6: "Prashant Raj",
        player7: "Deepanshu Singh",
        player8: "Anshuman Chaudhary",
        player9: "Geetansh",
        player10: "Ayush Mishra",
        player11: "Aryan Rajawat",
        player12: "Aditya Kr. Sharma",
      },
      category: "Inter College/IPU Sports Meet"
    },
    {
      id: 1,
      sport: "KHO-KHO GIRLS",
      year: "2024",
      achievement: "IPU SPORT MEET CHAMPION 2024",
      imageUrl: "/images/khogirls.jpg",
      quote: "MEET OUR IPU SPORTS MEET KHO-KHO CHAMPIONS GIRLS ",
      playername: {
        player1: "Lakshita Bhatt (C) ",
        player2: "Saloni Nouriyal(VC)",
        player3: "Diksha Giri Basel",
        player4: "Geet Gulati",
        player5: "Tripti Negi",
        player6: "Lipika Sharma",
        player7: "Toshika Verma",
        player8: "Aditi Gupta",
        player9: "Komal Joshi",
        player10: "Bhumika Joshi",
        player11: "Rashmi ",
        player12: "Ruchi Bhalla",
      },
      category: "Inter College/IPU Sports Meet"
    },
    {
      id: 1,
      sport: "WEIGHTLIFTING",
      year: "2024",
      achievement: "GTBIT'S 25th Silver Jubilee 2024",
      imageUrl: "/images/weight.jpg",
      quote: "MEET OUR 2024 WEIGHTLIFTING CHAMPIONS",
      playername: {
        player1: "Love Kumar Basista (GOLD)",
        player2: "Garv (silver)",
        player3: "Utkarsh Tiwari (BRONZE)",
      },
      category: "Intra College"
    },
    {
      id: 1,
      sport: "Table Tennis",
      year: "2024",
      achievement: "GTBIT'S 25th Silver Jubilee 2024",
      imageUrl: "/images/tt2.jpg",
      quote: "Aditya Saraswat takes away the runner-up title in table tennis",
      playername: {
        player1: "Aditya Saraswat(SILVER)",
      },
      category: "Intra College"
    },
    {
      id: 1,
      sport: "Table Tennis Doubles",
      year: "2024",
      achievement: "GTBIT'S 25th Silver Jubilee 2024",
      imageUrl: "/images/tt1.jpg",
      quote: "Aditya Saraswat adn Vedant Sharma takes away the champion title in table tennis",
      playername: {
        player1: "Aditya Saraswat(GOLD)",
        player2: "Vedant Sharma(GOLD)"
      },
      category: "Intra College"
    },
    
    {
      id: 1,
      sport: "Athletics",
      year: "2024",
      achievement: "GTBIT'S 25th Silver Jubilee 2024",
      imageUrl: "/images/athl.jpg",
      quote: "4X100 , 4X200 RELAY RACE WINNERS",
      playername: {
        player1: "krrish Jain",
        player2: "Shivam Tiwari",
        player3: "Karan Dalal",
        player4: "Rupesh Singh Rawat"
      },
      category: "Intra College"
    },
    {
      id: 1,
      sport: "KHO-KHO BOYS",
      year: "2024",
      achievement: "GTBIT'S 25th Silver Jubilee 2024",
      imageUrl: "/images/kh.jpg",
      quote: "KHO - KHO CHAMPIONS ",
      playername: {
         player1: "Himanshu Adhikari (C) ",
        player2: "Paras Singh (VC)",
        player3: "Utkarsh Tiwari",
        player4: "Lipika Sharma",
        player5: "NAman Fuloria",
        player6: "Kartikey Panwar",
        player7: "Kartik Uniyal",
        player8: "Sahil Lakra",
        player9: "Love Kumar Basista",
        player10: "Anuj Lohia",
        player11: "Pranay Gupta",
        player12: "Anurag Kumar",
        player13: "Krrish Jain"
      },
      category: "Intra College"
    },
    {
      id: 1,
      sport: "TUG OF WAR",
      year: "2025",
      achievement: "GTBIT'S 25th Silver Jubilee 2024",
      imageUrl: "/images/tugof.jpg",
      quote: "MEET OUR 2024 TUG OF WAR CHAMPIONS",
      playername: {
        player1: "Priyansh Chaudhary ",
        player2: "Jaikrit Arora",
        player3: "Sanishya Dixit",
        player4: "Aakansh Singh",
        player5: "Rishi Bajaj",
        player6: "Gagan Gaur",
        player7: "Akshat Tanwar",
        player8: "Yash Bhardwaj",
        player9: "Bhavesh Gautam",
        player10: "Navneet Singh",
        player11: "",
        player12: "",
      },
      category: "Inter College/IPU Sports Meet"
    },
    
    {
      id: 3,
      sport: "Tug Of War",
      year: "2025",
      achievement: "Inter College Winner",
      imageUrl: "/images/tugofwar.png",
      quote: "Champions aren't made in gyms. Champions are made from something they have deep inside them.",
      playername: {
        player1: "Priyansh Chaudhary ",
        player2: "Jaikrit Arora",
        player3: "Sanishya Dixit",
        player4: "Aakansh Singh",
        player5: "Rishi Bajaj",
        player6: "Gagan Gaur",
        player7: "Akshat Tanwar",
        player8: "Yash Bhardwaj",
        player9: "Bhavesh Gautam",
        player10: "Navneet Singh",
        player11: "",
        player12: "",
      },
      category: "Inter College"
    },
    {
      id: 4,
      sport: "Basketball",
      year: "2025",
      achievement: "",
      imageUrl: "/images/basketball.png",
      quote: "Leadership is about making others better.",
      playername: {
      },
      category: "Inter College"
    },
    {
      id: 5,
      sport: "Football",
      year: "2025",
      achievement: "Inter-University Championship MVP",
      imageUrl: "/images/football.png",
      quote: "Talent wins games, but teamwork wins championships.",
      playername: {},
      category: "inter College"
    },
    {
      id: 6,
      sport: "Volleyball",
      year: "2025",
      achievement: "Best Setter - Inter-College Tournament",
      imageUrl: "/images/volleyball.png",
      quote: "The strength of the team is each individual member.",
      playername: {},
      category: "Inter College"
    },
    {
      id: 7,
      sport: "Cricket",
      year: "2025",
      achievement: "Inter-College Tournament Best Bowler",
      imageUrl: "/images/cricket.png",
      quote: "Cricket is not just a game, it's a way of life.",
      playername: {},
      category: "Inter College"
    },
    {
      id: 8,
      sport: "Badminton",
      year: "2025",
      achievement: "Inter-University Singles Champion",
      imageUrl: "/images/badminton.png",
      quote: "The shuttle is my canvas, and the court is my stage.",
      playername: {},
      category: "Inter College"
    },
    {
      id: 9,
      sport: "Chess",
      year: "2023",
      achievement: "College Tournament Winner",
      imageUrl: "/images/chess.png",
      quote: "In chess, as in life, forethought wins.",
      playername: {},
      category: "Intra College"
    },
    {
      id: 10,
      sport: "Athletics",
      year: "2023",
      achievement: "College Sports Person of the Year",
      imageUrl: "/images/running.png",
      quote: "Run when you can, walk when you have to, crawl if you must.",
      playername: {},
      category: "Intra College"
    }
  ];

  const renderAthleteCard = (athlete: Athlete) => (
    <div
      key={athlete.id}
      className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
      onClick={() => setSelectedAthlete(athlete)}
    >
      <div className="relative h-[400px] overflow-hidden">
        <img
          src={athlete.imageUrl}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="flex items-center space-x-2 mb-2">
              <Medal className="w-5 h-5 text-yellow-400" />
              <span className="text-yellow-400 font-semibold">
                {athlete.year}
              </span>
            </div>
            <p className="text-white/80 mb-2">{athlete.sport}</p>
            <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
              <span className="text-sm">View Achievement</span>
              <ChevronRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative h-[300px] rounded-xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/40">
          <div className="h-full flex items-center justify-center">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Trophy className="w-16 h-16 text-yellow-400 animate-float" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Hall of Fame
              </h1>
              <p className="text-xl text-white/90">
                Celebrating Excellence in Sports
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Unified Grid for All Athletes */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {athletes.map(renderAthleteCard)}
        </div>
      </section>

      {/* Achievement Modal */}
      <AnimatePresence>
        {selectedAthlete && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex justify-center items-start z-50 p-4 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Overlay */}
            <motion.div
              className="absolute inset-0 bg-black/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedAthlete(null)}
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative mt-16 bg-white dark:bg-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-xl z-10"
              ref={(el) => {
                if (el) {
                  el.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
            >
              <div className="relative h-[300px]">
                <img
                  src={selectedAthlete.imageUrl}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setSelectedAthlete(null)}
                  className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/60 to-transparent">
                  <p className="text-white/90">{selectedAthlete.sport}</p>
                </div>
              </div>

              <div className="p-6">
                {/* Achievement */}
                <div className="flex items-center space-x-2 mb-4">
                  <Star className="w-6 h-6 text-yellow-400" />
                  <span className="text-xl font-semibold dark:text-white">
                    {selectedAthlete.achievement}
                  </span>
                </div>

                {/* Quote */}
                <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600 dark:text-gray-300 mb-4">
                  "{selectedAthlete.quote}"
                </blockquote>

                {/* Players */}
                <h3 className="text-lg font-semibold mb-2 dark:text-white">
                  Players
                </h3>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                  {Object.values(selectedAthlete.playername)
                    .filter((name) => name && name.trim() !== "")
                    .map((name, idx) => (
                      <li key={idx}>{name}</li>
                    ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HallOfFame;