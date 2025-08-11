import React, { useState } from 'react';
import { Trophy, Star, Medal, ChevronRight, X, Plus, Award, Globe, Users } from 'lucide-react';

interface Athlete {
  id: number;
  name: string;
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
    // National Level Achievements
    // {
    //   id: 1,
    //   name: "John Smith",
    //   sport: "Swimming",
    //   year: "2024",
    //   achievement: "Olympic Gold Medalist",
    //   imageUrl: "https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&q=80&w=2070",
    //   quote: "Champions aren't made in gyms. Champions are made from something they have deep inside them.",
    //   category: "national"
    // },
    // {
    //   id: 2,
    //   name: "Sarah Johnson",
    //   sport: "Track & Field",
    //   year: "2023",
    //   achievement: "World Record Holder - 100m Sprint",
    //   imageUrl: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&q=80&w=2070",
    //   quote: "Success isn't about the destination, it's about the journey.",
    //   category: "national"
    // },
    {
      id: 3,
      name: "Michael Chen",
      sport: "Basketball",
      year: "2024",
      achievement: "National Team Captain",
      imageUrl: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=2070",
      quote: "Leadership is about making others better.",
      category: "national"
    },
    // {
    //   id: 4,
    //   name: "Emma Wilson",
    //   sport: "Gymnastics",
    //   year: "2023",
    //   achievement: "National Championship Gold",
    //   imageUrl: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=2070",
    //   quote: "Perfection is not attainable, but if we chase perfection we can catch excellence.",
    //   category: "national"
    // },
    // {
    //   id: 5,
    //   name: "David Lee",
    //   sport: "Tennis",
    //   year: "2024",
    //   achievement: "Davis Cup Winner",
    //   imageUrl: "https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?auto=format&fit=crop&q=80&w=2070",
    //   quote: "The more I practice, the luckier I get.",
    //   category: "national"
    // },
    // {
    //   id: 6,
    //   name: "Maria Garcia",
    //   sport: "Boxing",
    //   year: "2023",
    //   achievement: "National Champion - Lightweight",
    //   imageUrl: "https://images.unsplash.com/photo-1517438476312-10d79c077509?auto=format&fit=crop&q=80&w=2070",
    //   quote: "Float like a butterfly, sting like a bee.",
    //   category: "national"
    // },
    // Inter College Achievements
    {
      id: 7,
      name: "Alex Thompson",
      sport: "Football",
      year: "2024",
      achievement: "Inter-University Championship MVP",
      imageUrl: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&q=80&w=2070",
      quote: "Talent wins games, but teamwork wins championships.",
      category: "interCollege"
    },
    {
      id: 8,
      name: "Jessica Brown",
      sport: "Volleyball",
      year: "2023",
      achievement: "Best Setter - Inter-College Tournament",
      imageUrl: "https://images.unsplash.com/photo-1592656094267-764a45160876?auto=format&fit=crop&q=80&w=2070",
      quote: "The strength of the team is each individual member.",
      category: "interCollege"
    },
    {
      id: 9,
      name: "Ryan Martinez",
      sport: "Cricket",
      year: "2024",
      achievement: "Inter-College Tournament Best Bowler",
      imageUrl: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80&w=2070",
      quote: "Cricket is not just a game, it's a way of life.",
      category: "interCollege"
    },
    // {
    //   id: 10,
    //   name: "Sophie Anderson",
    //   sport: "Hockey",
    //   year: "2023",
    //   achievement: "Top Scorer - Inter-University League",
    //   imageUrl: "https://images.unsplash.com/photo-1580679568899-be51739ba2df?auto=format&fit=crop&q=80&w=2070",
    //   quote: "Success is where preparation and opportunity meet.",
    //   category: "interCollege"
    // },
    // {
    //   id: 11,
    //   name: "Thomas Wright",
    //   sport: "Rugby",
    //   year: "2024",
    //   achievement: "Inter-College Championship Captain",
    //   imageUrl: "https://images.unsplash.com/photo-1628779238951-be2c9f2a59f4?auto=format&fit=crop&q=80&w=2070",
    //   quote: "In rugby, there's a place for everyone on the field.",
    //   category: "interCollege"
    // },
    {
      id: 12,
      name: "Lisa Kumar",
      sport: "Badminton",
      year: "2023",
      achievement: "Inter-University Singles Champion",
      imageUrl: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&q=80&w=2070",
      quote: "The shuttle is my canvas, and the court is my stage.",
      category: "interCollege"
    },
    // Intra College Achievements
    
    {
      id: 14,
      name: "Rachel Kim",
      sport: "Chess",
      year: "2023",
      achievement: "College Tournament Winner",
      imageUrl: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&q=80&w=2070",
      quote: "In chess, as in life, forethought wins.",
      category: "intraCollege"
    },
    // {
    //   id: 15,
    //   name: "James Wilson",
    //   sport: "Swimming",
    //   year: "2024",
    //   achievement: "College Record Holder - 200m Freestyle",
    //   imageUrl: "https://images.unsplash.com/photo-1519315901367-f34ff9154487?auto=format&fit=crop&q=80&w=2070",
    //   quote: "The water is my second home.",
    //   category: "intraCollege"
    // },
    {
      id: 16,
      name: "Emily Chen",
      sport: "Athletics",
      year: "2023",
      achievement: "College Sports Person of the Year",
      imageUrl: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&q=80&w=2070",
      quote: "Run when you can, walk when you have to, crawl if you must.",
      category: "intraCollege"
    },
    {
      id: 17,
      name: "Mohammed Ali",
      sport: "Basketball",
      year: "2024",
      achievement: "College Tournament MVP",
      imageUrl: "https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&q=80&w=2070",
      quote: "Height doesn't measure heart.",
      category: "intraCollege"
    },
    {
      id: 18,
      name: "Anna Lopez",
      sport: "Volleyball",
      year: "2023",
      achievement: "Best Spiker - College Tournament",
      imageUrl: "https://images.unsplash.com/photo-1592656094267-764a45160876?auto=format&fit=crop&q=80&w=2070",
      quote: "The higher you jump, the closer you get to your dreams.",
      category: "intraCollege"
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
          alt={athlete.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="flex items-center space-x-2 mb-2">
              <Medal className="w-5 h-5 text-yellow-400" />
              <span className="text-yellow-400 font-semibold">{athlete.year}</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-1">{athlete.name}</h3>
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
      <section className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {athletes.filter(a => a.category === 'national').map(renderAthleteCard)}
        </div>
      </section>

      
      <section className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {athletes.filter(a => a.category === 'interCollege').map(renderAthleteCard)}
        </div>
      </section>

      
      <section className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {athletes.filter(a => a.category === 'intraCollege').map(renderAthleteCard)}
        </div>
      </section>

      {/* Achievement Modal */}
      {selectedAthlete && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative h-[300px]">
              <img
                src={selectedAthlete.imageUrl}
                alt={selectedAthlete.name}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedAthlete(null)}
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/60 to-transparent">
                <h3 className="text-3xl font-bold text-white mb-2">{selectedAthlete.name}</h3>
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