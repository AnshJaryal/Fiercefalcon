import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Calendar, User, Crown, Shield, Users } from 'lucide-react';

interface LeadershipMember {
  name: string;
  position: string;
  duration: string;
  email?: string;
  phone?: string;
  image: string;
  isActive: boolean;
  description?: string;
}

function Contact() {
  const leadership: LeadershipMember[] = [
    // Current Heads
    {
      name: "Himanshu Adhikari",
      position: "Current President",
      duration: "2025-2026",
      email: "fiercefalconbackup",
      phone: "+91 88600 43724",
      image: "/images/himanshu.jpg",
      isActive: true,
      description: "Passionate about cricket and basketball, leading with vision"
    },
    {
      name: "Krrish Jain",
      position: "Current President",
      duration: "2025-2026",
      email: "fiercefalconbackup",
      phone: "9871029692",
      image:"/images/krrish.jpg",
      isActive: true,
      description: "Football enthusiast driving excellence in all sports"
    },
    // Vice Head
    {
      name: "Sneha Agarwal",
      position: "Vice President",
      duration: "2025-2026",
      email: "fiercefalconbackup@gmail.com",
      phone: "+91 93156 55865",
      image: "/images/sneha.jpg",
      isActive: true,
      description: "Coordinating events and managing team activities"
    },
    //general Secretary
    {
      name: "Gitesh Chaudhary",
      position: "General Secretary",
      duration: "2025-2026",
      email: "fiercefalconbackup",
      phone: "+380630404654",
      image: "/images/bhavesh.jpg",
      isActive: true,
      description: "Football enthusiast driving excellence in all sports"
    },

    
    // Previous Head
    {
      name: "Utkarsh Tiwari",
      position: "Previous President",
      duration: "2023-2025",
      image: "/images/utkarsh.jpg",
      isActive: false,
      description: "Mentor"
    },
    //previous vice president
    {
      name: "Navneet Singh",
      position: "Previous Vice President",
      duration: "2023-2025",
      image: "/images/nav.jpg",
      isActive: false,
      description: "Mentor"
    },
    
    //Prev General Sec
    {
      name: "Bhavesh Choudhary",
      position: "Previous Genral Secretary ",
      duration: "2023-2025",
      image: "/images/gitesh.jpg",
      isActive: false,
      description: "Mentor"
    }
  ];

  const facultyIncharge = {
    name: "Mr Yogesh Kumar",
    position: "Sports Society Faculty Incharge",
    department: "Sports  Department",
    // email: "dr.rajesh.verma@gtb4cec.edu.in",
    // phone: "+91 11-2234-5678",
    image: "/images/yogesh.jpg",
    experience: ""
  };

  const getPositionIcon = (position: string) => {
    if (position.includes('Head') && position.includes('Current')) return Crown;
    if (position.includes('Previous')) return User;
    if (position.includes('Vice')) return Shield;
    return Users;
  };

  const getPositionColor = (position: string) => {
    if (position.includes('Head') && position.includes('Current')) return 'from-yellow-500 to-orange-500';
    if (position.includes('Previous')) return 'from-gray-500 to-gray-600';
    if (position.includes('Vice')) return 'from-blue-500 to-indigo-500';
    return 'from-purple-500 to-pink-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-transparent bg-clip-text tracking-tight leading-none mb-6">
              CONTACT US
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-light tracking-wide">
              Meet Our Leadership Team
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-6 space-y-16 pb-20">
        {/* Faculty Incharge Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-white/95 to-green-50/95 dark:from-gray-800/95 dark:to-gray-700/95 backdrop-blur-lg p-8 md:p-12 rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/20"
        >
          <h2 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-green-600 to-blue-600 text-transparent bg-clip-text mb-8 flex items-center">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center mr-4">
              <Users className="w-6 h-6 text-white" />
            </div>
            Faculty Incharge
          </h2>
          
          <div className="bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-200/30 dark:border-gray-600/30">
            <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8">
              <div className="relative">
                <div className="w-32 h-32 rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src={facultyIncharge.image} 
                    alt={facultyIncharge.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                  <Users className="w-4 h-4 text-white" />
                </div>
              </div>
              
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {facultyIncharge.name}
                </h3>
                <p className="text-lg font-semibold text-green-600 dark:text-green-400 mb-1">
                  {facultyIncharge.position}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {facultyIncharge.department}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                  {facultyIncharge.experience}
                </p>
                
              </div>
            </div>
          </div>
        </motion.div>

        {/* Student Leadership Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-white/95 to-purple-50/95 dark:from-gray-800/95 dark:to-gray-700/95 backdrop-blur-lg p-8 md:p-12 rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/20"
        >
          <h2 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text mb-8 flex items-center">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mr-4">
              <Crown className="w-6 h-6 text-white" />
            </div>
            Student Leadership
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadership.map((member, index) => {
              const IconComponent = getPositionIcon(member.position);
              const colorClass = getPositionColor(member.position);
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group w-full"
                >
                  <div className={`bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-200/30 dark:border-gray-600/30 hover:shadow-xl transition-all duration-300 ${member.isActive ? 'ring-2 ring-blue-500/20' : ''}`}>
                    <div className="flex flex-col items-center text-center">
                      {/* Profile Image */}
                      <div className="relative mb-4">
                        <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-lg">
                          <img 
                            src={member.image} 
                            alt={`Profile picture of ${member.name}`}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                      </div>

                      {/* Member Info */}
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                        {member.name}
                      </h3>
                      <p className={`text-sm font-semibold bg-gradient-to-r ${colorClass} text-transparent bg-clip-text mb-2`}>
                        {member.position}
                      </p>
                      
                      <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 mb-3">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{member.duration}</span>
                      </div>

                      {member.description && (
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 leading-relaxed break-words">
                          {member.description}
                        </p>
                      )}

                      {/* Contact Info for Active Members */}
                      {member.isActive && member.email && member.phone && (
                        <div className="w-full space-y-2">
                          <a 
                            href={`mailto:${member.email}`}
                            className="flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-2 rounded-xl text-sm hover:shadow-lg transition-all duration-300 w-full"
                          >
                            <Mail className="w-4 h-4" />
                            <span className="truncate max-w-[200px]">{member.email}</span>
                          </a>
                          <a 
                            href={`tel:${member.phone}`}
                            className="flex items-center justify-center space-x-2 bg-white dark:bg-gray-600 text-gray-700 dark:text-gray-200 px-3 py-2 rounded-xl text-sm border border-gray-200 dark:border-gray-500 hover:shadow-lg transition-all duration-300 w-full"
                          >
                            <Phone className="w-4 h-4" />
                            <span className="break-words">{member.phone}</span>
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>


        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-white/95 to-blue-50/95 dark:from-gray-800/95 dark:to-gray-700/95 backdrop-blur-lg p-8 md:p-12 rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/20"
        >
          <h2 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text mb-8 text-center">
            Get In Touch
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-white/50 dark:bg-gray-700/50 rounded-2xl">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Email Us</h3>
              <p className="text-gray-600 dark:text-gray-300 break-all">
                fierce.falcons@gtb4cec.edu.in
              </p>
            </div>
            
            <div className="text-center p-6 bg-white/50 dark:bg-gray-700/50 rounded-2xl">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Call Us</h3>
              <p className="text-gray-600 dark:text-gray-300">
                +91 11-2234-5678
              </p>
            </div>
            
            <div className="text-center p-6 bg-white/50 dark:bg-gray-700/50 rounded-2xl">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Visit Us</h3>
              <p className="text-gray-600 dark:text-gray-300">
                GTB4CEC Campus, Sports Complex
              </p>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 p-12 rounded-3xl shadow-2xl text-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-3xl"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
              Ready to Join Our Team?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contact any of our current leaders or faculty incharge to learn more about joining Fierce Falcons!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.open('https://chat.whatsapp.com/BQj0rR4GwB17znAhwSJXKS', '_blank')}
                className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                Join WhatsApp Community
              </button>
              <button
                onClick={() => window.open('mailto:fierce.falcons@gtb4cec.edu.in')}
                className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/30 transition-all duration-300"
              >
                Send Email
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;