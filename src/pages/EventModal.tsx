import React from 'react';
import { X, Calendar, Clock, MapPin, User, Phone, Mail, ExternalLink, Trophy, Users, Star } from 'lucide-react';

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
  registrationLink2: string;
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

interface EventModalProps {
  event: Event | null;
  isOpen: boolean;
  onClose: () => void;
}

const EventModal: React.FC<EventModalProps> = ({ event, isOpen, onClose }) => {
  if (!isOpen || !event) return null;

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'ongoing': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'completed': return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
      default: return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="w-full max-w-4xl">
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
          onClick={onClose}
        ></div>
        
        <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full overflow-hidden">
          {/* Header */}
          <div className="relative h-64 overflow-hidden">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <button
              onClick={onClose}
              className="absolute top-4 right-4 bg-white/20 backdrop-blur-md rounded-full p-2 text-white hover:bg-white/30 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex items-center justify-between mb-2">
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(event.status)}`}>
                  {event.status.toUpperCase()}
                </span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-2">{event.title}</h2>
              <p className="text-white/90 text-lg">{event.category}</p>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Event Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="md:col-span-2">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Event Details</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-700 dark:text-gray-300">
                    <Calendar className="w-5 h-5 mr-3 text-blue-500" />
                    <span className="font-medium mr-2">Date:</span>
                    {event.date}
                  </div>
                  {event.time && (
                    <div className="flex items-center text-gray-700 dark:text-gray-300">
                      <Clock className="w-5 h-5 mr-3 text-blue-500" />
                      <span className="font-medium mr-2">Time:</span>
                      {event.time}
                    </div>
                  )}
                  {event.location && (
                    <div className="flex items-center text-gray-700 dark:text-gray-300">
                      <MapPin className="w-5 h-5 mr-3 text-blue-500" />
                      <span className="font-medium mr-2">Location:</span>
                      {event.location}
                    </div>
                  )}
                </div>
                
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Description</h4>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  {event.fullDescription}
                </p>

                {/* Highlights */}
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Highlights</h4>
                <div className="flex flex-wrap gap-2 mb-6">
                  {event.highlights.map((highlight, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <User className="w-5 h-5 mr-2" />
                  Event Manager
                </h4>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">{event.contactPerson.name}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{event.contactPerson.role}</p>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <Phone className="w-4 h-4 mr-2" />
                    <a href={`tel:${event.contactPerson.phone}`} className="hover:text-blue-500">
                      {event.contactPerson.phone}
                    </a>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <Mail className="w-4 h-4 mr-2" />
                    <a href={`mailto:${event.contactPerson.email}`} className="hover:text-blue-500 break-all">
                      {event.contactPerson.email}
                    </a>
                  </div>
                </div>

                {event.registrationLink && (
                  <a
                    href={event.registrationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center justify-center transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Register Now
                  </a>
                  
                )}
                {event.registrationLink && (
                  <a
                    href={event.registrationLink2}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center justify-center transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Register Now
                  </a>
                  
                )}
              </div>
            </div>

            {/* Prizes */}
            {event.prizes && event.prizes.length > 0 && (
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <Trophy className="w-5 h-5 mr-2 text-yellow-500" />
                  Prizes & Awards
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {event.prizes.map((prize, index) => (
                    <div
                      key={index}
                      className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 text-center"
                    >
                      <Trophy className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                      <p className="font-medium text-gray-900 dark:text-white">{prize}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Schedule */}
            {event.schedule && event.schedule.length > 0 && (
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-blue-500" />
                  Event Schedule
                </h4>
                <div className="space-y-4">
                  {event.schedule.map((day, index) => (
                    <div key={index} className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                      <h5 className="font-semibold text-gray-900 dark:text-white mb-3">{day.day}</h5>
                      <ul className="space-y-2">
                        {day.events.map((eventItem, eventIndex) => (
                          <li key={eventIndex} className="flex items-center text-gray-600 dark:text-gray-300">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                            {eventItem}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Rules */}
            {event.rules && event.rules.length > 0 && (
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <Star className="w-5 h-5 mr-2 text-purple-500" />
                  Rules & Regulations
                </h4>
                <ul className="space-y-2">
                  {event.rules.map((rule, index) => (
                    <li key={index} className="flex items-start text-gray-600 dark:text-gray-300">
                      <span className="text-purple-500 mr-3 mt-1">{index + 1}.</span>
                      {rule}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default EventModal;
