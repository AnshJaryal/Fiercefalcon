import React, { useState } from 'react';
import { Trophy, Star, Medal, ChevronRight, X } from 'lucide-react';

interface Athlete {
  id: number;
  sport: string;
  year: string;
  achievement: string;
  imageUrl: string;
  quote: string;
  category: 'national' | 'interCollege' | 'intraCollege';
}

const HallOfFame = () => {
  const [selectedAthlete, setSelectedAthlete] = useState<Athlete | null>(null);

  const athletes: Athlete[] = [
    { id: 1, sport: "Tug Of War", year: "2024", achievement: "Olympic Gold Medalist", imageUrl: "/images/tugofwar.png", quote: "Champions aren't made in gyms. Champions are made from something they have deep inside them.", category: "national" },
    { id: 2, sport: "Basketball", year: "2024", achievement: "National Team Captain", imageUrl: "/images/basketball.png", quote: "Leadership is about making others better.", category: "national" },
    { id: 3, sport: "Football", year: "2024", achievement: "Inter-University Championship MVP", imageUrl: "/images/football.png", quote: "Talent wins games, but teamwork wins championships.", category: "interCollege" },
    { id: 4, sport: "Volleyball", year: "2023", achievement: "Best Setter - Inter-College Tournament", imageUrl: "/images/volleyball.png", quote: "The strength of the team is each individual member.", category: "interCollege" },
    { id: 5, sport: "Cricket", year: "2024", achievement: "Inter-College Tournament Best Bowler", imageUrl: "/images/cricket.png", quote: "Cricket is not just a game, it's a way of life.", category: "interCollege" },
    { id: 6, sport: "Badminton", year: "2023", achievement: "Inter-University Singles Champion", imageUrl: "/images/badminton.png", quote: "The shuttle is my canvas, and the court is my stage.", category: "interCollege" },
    { id: 7, sport: "Chess", year: "2023", achievement: "College Tournament Winner", imageUrl: "/images/chess.png", quote: "In chess, as in life, forethought wins.", category: "intraCollege" },
    { id: 8, sport: "Athletics", year: "2023", achievement: "College Sports Person of the Year", imageUrl: "/images/running.png", quote: "Run when you can, walk when you have to, crawl if you must.", category: "intraCollege" }
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
              <span className="text-yellow-400 font-semibold">{athlete.year}</span>
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
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Hall of Fame</h1>
              <p className="text-xl text-white/90">Celebrating Excellence in Sports</p>
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
      {selectedAthlete && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
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
              <div className="flex items-center space-x-2 mb-4">
                <Star className="w-6 h-6 text-yellow-400" />
                <span className="text-xl font-semibold dark:text-white">{selectedAthlete.achievement}</span>
              </div>
              <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600 dark:text-gray-300">
                "{selectedAthlete.quote}"
              </blockquote>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HallOfFame;
