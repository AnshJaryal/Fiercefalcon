import React, { useState } from 'react';
import { Calendar, Trophy, Users, Medal, Star, X, MapPin, Clock, User, Phone, Mail, ExternalLink } from 'lucide-react';
import EventModal from './EventModal';

interface Event {
  id: number;
  title: string;
  date: string;
  time?: string;
  location?: string;
  icon: JSX.Element;
  description: string;
  fullDescription: string;
  highlights: string[];
  image: string;
  category: string;
  status: 'upcoming' | 'ongoing' | 'completed';
  registrationLink?: string;
  contactPerson: {
    name: string;
    role: string;
    phone: string;
    email: string;
  };
  prizes?: string[];
  rules?: string[];
  schedule?: {
    day: string;
    events: string[];
  }[];
}

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const events: Event[] = [
    {
      id: 3,
      title: "Basketball",
      date: "2 September 2025",
      time: "10:00 AM Onwards ",
      location: "Hari Nagar Sports Complex",
      icon: <Trophy className="w-8 h-8 text-yellow-500" />,
      description: "The Fierce Falcons sports society is organizing Basketball Trials  for all boys and girls ",
      fullDescription: "Welcome to the Basketball  Trials Registration – GTB4CEC This form is to register for the upcoming Basketball Trials for both Boys and Girls (1st Year Only) . Please fill in the correct details to confirm your participation.  ",
      highlights: [],
      image: "/images/eventbasketball.jpg",
      category: "Traditional Sports",
      status: "ongoing",
      registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSeXby1i3IEAkQ_Bwghwhhdta_wWkqOkW8QgPV115EB-zymLuw/viewform?fbclid=PAQ0xDSwMf3W5leHRuA2FlbQIxMQABpwdVwkOE2EuDYUUad9Onh7ImjFZZHnGI2OvBMHtpeA1weRqpCBSMbAHZ-U8c_aem_r0Kjj4GrsSMO3NqI_0wNEg",
      contactPerson: {
        name: "Krrish Jain, Aryan Singh Rajawat,Nishika",
        role: "Club Head",
        phone: "+91 9871029692,+91 8130571824,+91 96507 94379",
        email: ""
      },
      prizes: [""],
      rules: [
        "Eligibility: Boys and Girls : 1st Year only ",
        "Equipment: Players must bring their own shoes and be in proper kit.",
      ],
      schedule: [
        
      ]
    },
    {
      id: 2,
      title: "Power Lifting",
      date: "3 September 2025",
      time: "10:30 AM onwards",
      location: "Guru Basement of GTBIT Gym ",
      icon: <Trophy className="w-8 h-8 text-yellow-500" />,
      description: "Welcome to the Powerlifting  Trials Registration – GTB4CEC",
      fullDescription: "Welcome to the Powerlifting Trials Registration – GTB4CEC This form is to register for the upcoming Powerlifting Trials for both Boys and Girls. Please fill in the correct details to confirm your participation",
      highlights: [],
      image: "/images/eventpowerlifting.jpg",
      category: "Traditional Sports",
      status: "ongoing",
      registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSffIvGh-VZTSW18k_0RrgiL3C9YgssMes5jLoAijBKx2DluHA/viewform?usp=sharing&ouid=111369235058581072528",
      contactPerson: {
        name: "Sneha, Garv Malhotra",
        role: "Club Head",
        phone: "+91 8595568784,+91 9315655865",
        email: ""
      },
      prizes: [],
      rules: [
        "Eligibility: Boys and Girls (All Years)",
        "Equipment: Participants must bring their own gym attire and lifting belt (if required)",
      ],
      schedule: [
        
      ]
    },
    {
      id: 3,
      title: "Tug Of War",
      date: "3 September 2025",
      time: "2:00 pM",
      location: "Ground In Front Of College",
      icon: <Trophy className="w-8 h-8 text-yellow-500" />,
      description: "The Fierce Falcons sports society is organizing Tug Of Wars Trials for all boys and Girls ",
      fullDescription: "The Fierce Falcons sports society is organizing Tug of war Trials  for all boys and girls.",
      highlights: [],
      image: "/images/eventtugofwar.jpg",
      category: "Traditional Sports",
      status: "ongoing",
      registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSd-eIhMGmGNANVM9G6mPRhNOrzMYQhuWyxtJ8-Cr4gqCwLJuQ/viewform?fbclid=PAQ0xDSwMf3YJleHRuA2FlbQIxMQABpx6vXNyUL8SOMrTzRtIYfV0Zs8XeLzS8XiqrgWWt2FTk-2AR8TGc_t82eSPL_aem_Qw5uxDLFOp_vDOTLyT_hZg",
      contactPerson: {
        name: "Sneha Aggarwal, Riya Sehgal",
        role: "Club Head",
        phone: "+919315655865,+91 8178847585  ",
        email: ""
      },
      prizes: [],
      rules: [
        
      ],
      schedule: [
        
      ]
    },
    {
      id: 4,
      title: "Football",
      date: "8 September 2025",
      time: "2:00 PM",
      location: " Guru Harkishan Public School (Maps link will be shared on match day)  ",
      icon: <Trophy className="w-8 h-8 text-yellow-500" />,
      description: "Fierce Falcon is organizing Football trials for first year boys and girls",
      fullDescription: "Welcome to the Football Trials Registration – GTB4CEC This form is to register for the upcoming Football Trials for both firt year Boys and Girls. Please fill in the correct details to confirm your participation",
      highlights: [],
      image: "/images/football.avif",
      category: "Traditional Sports",
      status: "ongoing",
      registrationLink: "https://docs.google.com/forms/d/13kRLsyLu-7gn5c7rhLscWxiDnN0s9ZxlGKQA6nBmBTs/edit",
      contactPerson: {
        name: "Rijul Upadhaya,Paras Singh",
        role: "Club Head",
        phone: "+91 7838908363,+918810455921",
        email: ""
      },
      prizes: [],
      rules: [
        "Eligibility: Men (1st Year only) and Women (all years).",
      ],
      schedule: [
        
      ]
    },
    {
      id: 5,
      title: "Yoga",
      date: "8 September 2025",
      time: "10:00 AM - 1:00 PM",
      location: "R1 MMS BLOCK ",
      icon: <Trophy className="w-8 h-8 text-yellow-500" />,
      description: "Welcome to the Yoga Registration – GTB4CEC",
      fullDescription: "The Fierce Falcons sports society is organizing Yoga Trials  for all boys and girls.",
      highlights: [],
      image: "/images/yoga.avif",
      category: "Traditional Sports",
      status: "ongoing",
      registrationLink: "https://docs.google.com/forms/d/1Dn3VEoz29Fkp_q971kPcn1-RlhuNDsIKeMq7THKLNOI/viewform?edit_requested=true",
      contactPerson: {
        name: "Bhavika  Paul,Himanshu Adhikari",
        role: "Club Head,Club President",
        phone: "+91 9999604946,918860043724",
        email: ""
      },
      prizes: [],
      rules: [
       " Selection will be based purely on skill and performance in the trials. Past experience  is collected only for record purposes. All players must report to the venue on time in proper attire with yoga mat (if available).",
      ],
      schedule: [
        
      ]
    },
    {
      id: 6,
      title: "Volleyball",
      date: "9 September 2025",
      time: "11:00 pm - 1:00 pm",
      location: "GTB4CEC Ground  ",
      icon: <Trophy className="w-8 h-8 text-yellow-500" />,
      description: "The Fierce Falcon is organizintg Volleyball trials for girls and boys",
      fullDescription: "Welcome to the Volleyball Trials Registration – GTB4CEC This form is to register for the upcoming Volleyball Trials for both Boys and Girls. Please fill in the correct details to confirm your participation",
      highlights: [],
      image: "/images/volley.avif",
      category: "Traditional Sports",
      status: "ongoing",
      registrationLink: "",
      contactPerson: {
        name: "Pushkar Tehlan,Piyush Negi,Ankit Dubey",
        role: "Club Head",
        phone: "91 96433 22672,91 98686 53366,9315239325",
        email: "https://docs.google.com/forms/d/1hoWdVVf9zC1MmvwryJTeN_aB9ykAWMIWLO1xVwH2kN8/viewform?edit_requested=true"
      },
      prizes: [],
      rules: [
        
      ],
      schedule: [
        
      ]
    },
    {
      id: 7,
      title: "Tennis",
      date: "To be revealed soon",
      time: "To be revealed soon",
      location: "To be revealed soon ",
      icon: <Trophy className="w-8 h-8 text-yellow-500" />,
      description: "The Fierce Falcon is organizintg Tennis trials for girls and boys",
      fullDescription: "Welcome to the Tennis Trials Registration – GTB4CEC This form is to register for the upcoming Tennis Trials for both Boys and Girls. Please fill in the correct details to confirm your participation",
      highlights: [],
      image: "/images/tennis.jpg",
      category: "Traditional Sports",
      status: "ongoing",
      registrationLink: "https://docs.google.com/forms/d/1kcy9HMPLPfrIaQCszDBEGFdI2ga34NPccX2kkoq0oMU/viewform?edit_requested=true",
      contactPerson: {
        name: "",
        role: "Club Head",
        phone: "",
        email: ""
      },
      prizes: [],
      rules: [
        
      ],
      schedule: [
        
      ]
    },
    {
      id: 8,
      title: "Table Tennis",
      date: "10 September 2025",
      time: "10:30 AM onwards",
      location: "TO Be Announced ",
      icon: <Trophy className="w-8 h-8 text-yellow-500" />,
      description: "The Fierce Falcon is organizintg Table Tennis trials for girls and boys",
      fullDescription: "Welcome to the Table Tennis Trials Registration – GTB4CEC This form is to register for the upcoming Table Tennis Trials for both Boys and Girls. Please fill in the correct details to confirm your participation",
      highlights: [],
      image: "/images/tt.avif",
      category: "Traditional Sports",
      status: "ongoing",
      registrationLink: "https://docs.google.com/forms/d/11MxgKk8g0q_p8js0_nw0XRsHaJJd3fZZ2qZKEvnXpAU/viewform?edit_requested=true",
      contactPerson: {
        name: "Aditya Saraswat,Janshi",
        role: "Club Head",
        phone: "91 81305 06388,87509 63078",
        email: ""
      },
      prizes: [],
      rules: [
        "Selection will be based purely on skill and performance in the trials. Past experience  is collected only for record purposes. All players must report to the venue on time in proper sports attire with your own TT racket (if available)"
      ],
      schedule: [
        
      ]
    },
    {
      id: 9,
      title: "Kabaddi",
      date: "10 September 2025",
      time: "2:00 PM",
      location: "Park Infront of College",
      icon: <Trophy className="w-8 h-8 text-yellow-500" />,
      description: "The Fierce Falcons sports society is organizing Kabadi Trials for all girls and boys!",
      fullDescription: "This form is to register for the upcoming Kabaddi Trials 2025. Please fill in the correct details to confirm your participation.  ",
      highlights: [],
      image: "/images/eventkabaddi.jpg",
      category: "Traditional Sports",
      status: "ongoing",
      registrationLink: "https://docs.google.com/forms/d/13dtjprGvPozqfxV8ZFQTyBIjLUyiNySI9oyBrev0k3c/edit",
      contactPerson: {
        name: "Gitesh Chaudhary, Sneha Agarwal",
        role: "Club Head",
        phone: "+918448560788,+91 93156 55865",
        email: ""
      },
      prizes: [],
      rules: [
        "Eligibility: All Year Students (Boys & Girls)",
       " Weight Criteria: Participants must weigh below 80–85 kg"
      ],
      schedule: [
        
      ]
    },
    {
      id: 10,
      title: "Kho-Kho",
      date: "6 September 2025",
      time: "10:30 AM onwards",
      location: "RKGIT College, Ghaziabad",
      icon: <Trophy className="w-8 h-8 text-yellow-500" />,
      description: "The RKGIT College is organizintg Kho-kho trials for girls and boys",
      fullDescription: "",
      highlights: [],
      image: "/images/kho-kho.jpg",
      category: "Traditional Sports",
      status: "ongoing",
      registrationLink: "",
      contactPerson: {
        name: "Himanshu Adhikari,Lakshita Bhatt,Saloni Nauriyal",
        role: "Club Head",
        phone: "918860043724,918368153056 ",
        email: ""
      },
      prizes: [],
      rules: [
        " Registration Fee:",
        "• Boys Team – ₹1500",
        " • Girls Team – ₹1000",
        " Each team must consist of 12 players only.",
        "✅ All players must carry their college ID cards.",
        "✅ Only students from the same college or college group are allowed.",
        "❌ Outside campus players are strictly prohibited. If found, the entire team will be disqualified immediately.",
       " ❌ Indisciplined teams will not be allowed to participate.",
        "⏰ All team members must enter through the gate together before 9:00 AM."
      ],
      schedule: [
        
      ]
    },
    {
      id: 11,
      title: "Athletics",
      date: "12 September 2025",
      time: "10:30 AM onwards",
      location: "TO BE REVEALED SOON ",
      icon: <Trophy className="w-8 h-8 text-yellow-500" />,
      description: "The Fierce Falcon is organizintg Athletics trials for girls and boys",
      fullDescription: "Welcome to the Athletics Trials Registration – GTB4CEC This form is to register for the upcoming Athletics Trials for both Boys and Girls. Please fill in the correct details to confirm your participation",
      highlights: [],
      image: "/images/athletic.jpg",
      category: "Traditional Sports",
      status: "ongoing",
      registrationLink: "https://docs.google.com/forms/d/1S8-2lrLl7ghm7DjE2kR8c63hom86BdvfVvjVLyZORsM/viewform?edit_requested=true",
      contactPerson: {
        name: "Himanshu Adhikari,Diksha Giri Basel",
        role: "Club Head",
        phone: "918860043724, 6002343611",
        email: ""
      },
      prizes: [],
      rules: [
        "Selection will be based purely on skill and performance in the trials. Past experience  is collected only for record purposes. All players must report to the venue on time in proper."
      ],
      schedule: [
        
      ]
    },
    {
      id:12,
      title: "KHO KHO Tournament",
      date: "30 August 2025",
      time: "9:00 AM - 6:00 PM",
      location: "Main Sports Ground",
      icon: <Trophy className="w-8 h-8 text-yellow-500" />,
      description: "This game is not about how fast you run, but how cleverly you tag",
      fullDescription: "The KHO KHO Tournament is a prestigious inter-college competition that celebrates one of India's most traditional and strategic sports. This tournament brings together the finest teams from across the region to compete in a sport that requires quick thinking, agility, and perfect coordination. Kho Kho is not just about speed; it's about strategy, teamwork, and the ability to outmaneuver your opponents through clever positioning and split-second decision making.",
      highlights: ["Trophies", "Attractive Prizes", "Certificates"],
      image: "/images/Untitled.jpg",
      category: "Traditional Sports",
      status: "upcoming",
      registrationLink: "",
      contactPerson: {
        name: "",
        role: "",
        phone: "",
        email: ""
      },
      prizes: ["various prizes"],
      rules: [
        "Each team must have 12 players (9 playing + 3 substitutes)",
        "Match duration: 2 innings of 9 minutes each",
        "Teams must register at least 7 days before the tournament",
        "All players must have valid college ID cards",
      ],
      schedule: [
        
      ]
    },
    {
      id: 13,
      title: "IPU Sports Meet 2025",
      date: "To Be Revealed",
      time: "TBA",
      location: "",
      icon: <Trophy className="w-8 h-8 text-yellow-500" />,
      description: "A grand inter-university sports competition featuring over 30+ colleges competing in 15+ sporting events.",
      fullDescription: "The IPU Sports Meet 2025 is set to be the most spectacular inter-university sports competition of the year. This mega event will bring together over 30 colleges from across the IPU network, featuring more than 15 different sporting disciplines. From track and field athletics to team sports like basketball, football, and volleyball, this meet promises to showcase the finest young sporting talent in the region. The event serves as a platform for students to demonstrate their athletic prowess while fostering inter-collegiate relationships and sportsmanship.",
      highlights: ["500+ participants", "15+ sports categories", "30 participating colleges"],
      image: "/images/comingsoon.jpg",
      category: "Inter-University",
      status: "upcoming",
      contactPerson: {
        name: "",
        role: "",
        phone: "",
        email: ""
      },
      prizes: ["Overall Championship Trophy", "Individual Event Medals", "Participation Certificates"],
      rules: [
        "Only IPU affiliated colleges can participate",
        "Each college can send maximum 50 participants",
        "Age limit: 18-25 years for all participants",
        "Valid student ID and sports medical certificate required"
      ]
    },
    {
      id: 14,
      title: "Intra Sports Week 2026",
      date: "To Be Revealed...",
      time: "TBA",
      location: "GTBIT Campus",
      icon: <Users className="w-8 h-8 text-blue-500" />,
      description: "A week-long celebration of sports featuring intense competitions between departments.",
      fullDescription: "The Intra Sports Week 2026 is our annual celebration of sporting excellence within the GTBIT community. This week-long extravaganza pits different departments against each other in friendly yet competitive matches across multiple sports disciplines. It's more than just competition; it's about building camaraderie, discovering hidden talents, and creating lasting memories. The event has grown tremendously over the years, now featuring both traditional sports and newer additions like esports and adventure sports.",
      highlights: ["Inter-department rivalry", "7 days of competition", "12 sports categories"],
      image: "/images/comingsoon.jpg",
      category: "Intra-College",
      status: "upcoming",
      contactPerson: {
        name: "",
        role: "",
        phone: "",
        email: ""
      },
      prizes: ["Departmental Trophy", "Individual Championships", "Special Recognition Awards"],
      rules: [
        "Allstudents can participate",
        "Must represent your enrolled department",
        "Maximum 5 events per individual participant",
        "Attendance in classes mandatory during sports week"
      ]
    },
    {
      id: 15,
      title: "Aahvaan DTU",
      date: "April 11, 2025",
      time: "8:00 AM - 8:00 PM",
      location: "Delhi Technological University",
      icon: <Trophy className="w-8 h-8 text-yellow-500" />,
      description: "Sports competition at DTU featuring multiple disciplines and cultural integration.",
      fullDescription: "Aahvaan DTU is one of Delhi's premier inter-college sports festivals, hosted by Delhi Technological University. This annual event has gained reputation for its excellent organization, competitive spirit, and the perfect blend of sports and cultural activities. The event attracts top-tier talent from engineering colleges across North India, making it a highly competitive and prestigious tournament. Aahvaan is known for its state-of-the-art facilities, fair play, and the warm hospitality extended to all participating teams.",
      highlights: ["25+ colleges", "Multiple sports", "Cultural integration"],
      image: "/images/aahvaan.png",
      category: "Inter-College",
      status: "upcoming",
      registrationLink: "https://dtu.ac.in/aahvaan2025",
      contactPerson: {
        name: "",
        role: "",
        phone: "",
        email: ""
      },
      prizes: ["Winner Trophies for each sport", "Cash prizes up to ₹1,00,000", "Participation certificates"],
      schedule: [
        {
          day: "April 11",
          events: ["Registration", "Opening Ceremony", "Preliminary Rounds", "Cultural Evening"]
        }
      ]
    },
    {
      id: 16,
      title: "Dr. Bharat Ram Inter College Sports Meet (LSR) 2025",
      date: "March 24, 2025",
      time: "9:00 AM - 6:00 PM",
      location: "Lady Shri Ram College for Women",
      icon: <Trophy className="w-8 h-8 text-yellow-500" />,
      description: "A comprehensive inter-college sports meet hosted at Lady Shri Ram College, featuring multiple sports disciplines and cultural events.",
      fullDescription: "Named after the visionary educationist Dr. Bharat Ram, this sports meet at Lady Shri Ram College is a testament to the college's commitment to holistic education. The event combines competitive sports with cultural festivities, creating an atmosphere that celebrates both physical and artistic excellence. LSR's beautiful campus provides the perfect backdrop for this prestigious event, which has become a highlight of Delhi University's sports calendar. The meet is particularly known for promoting women's participation in sports and creating an inclusive environment for all participants.",
      highlights: ["25+ colleges", "Multiple sports", "Cultural integration"],
      image: "/images/bharatram.png",
      category: "Inter-College",
      status: "completed",
      contactPerson: {
        name: "",
        role: "",
        phone: "",
        email: ""
      },
      prizes: ["Dr. Bharat Ram Trophy", "Individual medals", "Special awards for sportsmanship"],
      rules: [
        "Open to all DU affiliated colleges",
        "Mixed gender events encouraged",
        "Focus on women's participation",
        "Cultural performance alongside sports"
      ]
    },
    {
      id: 17,
      title: "Akhilesh Das Inter Tournament 2025 (Football)",
      date: "March 5-10, 2025",
      time: "Morning & Evening Sessions",
      location: " Football Grounds",
      icon: <Medal className="w-8 h-8 text-green-500" />,
      description: "A prestigious football tournament honoring the legacy of Akhilesh Das. Teams from across the country compete for glory.",
      fullDescription: "The Akhilesh Das Inter Tournament is a prestigious football championship that honors the memory and contributions of the late Akhilesh Das, a passionate sports enthusiast and philanthropist. This tournament has grown to become one of the most anticipated football events in the region, attracting teams from across the country. Known for its high-quality matches, excellent facilities, and the spirit of fair play it promotes, the tournament serves as a platform for emerging football talent to showcase their skills on a national stage.",
      highlights: ["16 team tournament", "knockout format", "Live streaming"],
      image: "/images/akhileshdas.png",
      category: "Football",
      status: "completed",
      registrationLink: "",
      contactPerson: {
        name: "",
        role: "",
        phone: "",
        email: ""
      },
      prizes: ["Winner: ₹2,00,000", "Runner-up: ₹1,00,000", "Best Player Award", "Best Goalkeeper Award"],
      schedule: [
        {
          day: "March 9-10",
          events: ["Final Match", "Prize Distribution"]
        }
      ]
    },
    {
      id: 18,
      title: "Athleema 2025 (Kho-Kho)",
      date: "April 1-3, 2025",
      time: "8:00 AM - 7:00 PM",
      location: "Traditional Sports Complex",
      icon: <Calendar className="w-8 h-8 text-red-500" />,
      description: "A specialized tournament celebrating the traditional sport of Kho-Kho, promoting indigenous sports and cultural heritage.",
      fullDescription: "Athleema 2025 is a unique sporting event dedicated entirely to Kho-Kho, one of India's most cherished traditional sports. This tournament goes beyond mere competition; it's a cultural celebration that aims to preserve and promote indigenous sporting traditions. The event features not only competitive matches but also workshops on the history and techniques of Kho-Kho, making it an educational experience for participants and spectators alike. Athleema has become a symbol of cultural pride and sporting excellence in traditional games.",
      highlights: ["12 teams", "Traditional sports focus", "Cultural events"],
      image: "/images/athelema.png",
      category: "Traditional Sports",
      status: "completed",
      contactPerson: {
        name: "",
        role: "",
        phone: "",
        email: ""
      },
      prizes: ["Traditional Trophies", "Cultural Prizes", "Heritage Certificates"],
      schedule: [
        {
          day: "April 1",
          events: ["Opening Ceremony", "Cultural Performances", "Pool Matches"]
        },
        {
          day: "April 2",
          events: ["Semi-Finals", "Traditional Games Workshop"]
        },
        {
          day: "April 3",
          events: ["Finals", "Prize Distribution", "Cultural Evening"]
        }
      ]
    },
    {
      id: 19,
      title: "Intra Sports Week 2025",
      date: "February 15-21, 2025",
      time: "",
      location: "GTBIT Campus",
      icon: <Users className="w-8 h-8 text-blue-500" />,
      description: "Building on last year's success, this edition introduced new sports categories and saw increased participation across departments.",
      fullDescription: "The Intra Sports Week 2025 was a phenomenal success, marking a new chapter in GTBIT's sporting history. This year's edition saw unprecedented participation from all departments, with students showcasing remarkable talent across multiple disciplines. The event successfully introduced several new sports categories including badminton doubles, table tennis, and chess tournaments. The week was characterized by intense competition, excellent sportsmanship, and memorable moments that will be cherished by the GTBIT community for years to come.",
      highlights: ["5+ departments participating", "New sports categories", "Record participation"],
      image: "/images/sportweek.jpg",
      category: "Intra-College",
      status: "completed",
      contactPerson: {
        name: "",
        role: "",
        phone: "",
        email: ""
      },
      prizes: ["Department-wise Trophies", "Individual Championships", "Best Sportsperson Award"]
    },
    {
      id: 20,
      title: "IPU Sports Meet 2024",
      date: "November 10-15, 2024",
      time: "Full Day Events",
      location: "Multiple IPU Campuses",
      icon: <Trophy className="w-8 h-8 text-yellow-500" />,
      description: "The latest edition of the prestigious inter-university sports meet, featuring enhanced categories and participation from across the region.",
      fullDescription: "IPU Sports Meet 2024 was a landmark event in the university's sporting calendar, featuring the largest participation in the event's history. With over 35 colleges and 600+ participants, this edition set new standards for inter-university sports competitions. The event was notable for its excellent organization, world-class facilities, and the introduction of several new sporting categories. The meet served as a breeding ground for future sports stars, with several participants going on to represent their states and the country in national competitions.",
      highlights: ["600+ participants", "20+ sports categories", "35 participating colleges"],
      image: "/images/ipu2024.jpeg",
      category: "Inter-University",
      status: "completed",
      contactPerson: {
        name: "",
        role: "",
        phone: "",
        email: ""
      },
      prizes: ["Overall Championship", "Individual Event Medals", "Best College Award"]
    },
    {
      id: 21,
      title: "GTBIT Silver Jubilee 2024",
      date: "January 25-27, 2024",
      time: "Three Day Celebration",
      location: "GTBIT Campus",
      icon: <Star className="w-8 h-8 text-purple-500" />,
      description: "Celebrating 25 years of excellence with a spectacular sports carnival and exhibition games marking this historic occasion.",
      fullDescription: "The GTBIT Silver Jubilee celebration in 2024 was a historic milestone, commemorating 25 years of the institution's commitment to excellence in education and sports. This three-day extravaganza combined sports competitions with cultural celebrations, creating an unforgettable experience for the entire GTBIT community. The event featured exhibition matches with alumni, showcase of the college's sporting achievements over the decades, and special ceremonies honoring the institution's sporting legends. It was not just a celebration but a testament to GTBIT's enduring legacy in nurturing well-rounded individuals.",
      highlights: ["Exhibition matches", "Cultural performances", "Alumni participation"],
      image: "/images/GTBITJUBLEE.jpg",
      category: "Institution Celebration",
      status: "completed",
      contactPerson: {
        name: "",
        role: "",
        phone: "",
        email: ""
      },
      prizes: ["Commemorative Trophies", "Silver Jubilee Medals", "Legacy Awards"]
    }
  ];

  const handleEventClick = (event: Event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
    // Scroll to top when modal opens
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'ongoing': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'completed': return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
      default: return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text mb-4">
            Events & Tournaments
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Celebrating excellence in sports through prestigious competitions and events
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <div
              key={event.id}
              onClick={() => handleEventClick(event)}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-105"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(event.status)}`}>
                    {event.status.toUpperCase()}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {event.title}
                  </h3>
                  <div className="flex items-center text-blue-600 dark:text-blue-400 font-semibold mb-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    {event.date}
                  </div>
                  {event.location && (
                    <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-2">
                      <MapPin className="w-4 h-4 mr-2" />
                      {event.location}
                    </div>
                  )}
                  <span className="inline-block px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-xs font-medium">
                    {event.category}
                  </span>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {event.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {event.highlights.slice(0, 3).map((highlight, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <User className="w-4 h-4 mr-1" />
                    {event.contactPerson.name}
                  </div>
                  <div className="text-blue-600 dark:text-blue-400 text-sm font-medium">
                    Click for details →
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <EventModal
        event={selectedEvent}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default Events;
