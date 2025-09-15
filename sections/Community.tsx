import React from 'react';
import SocialIcons from '../components/SocialIcons';

const Community: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 px-4 bg-gray-900/50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Join Our <span className="text-[#fbbf24]">Community</span>
        </h2>
        <p className="text-base sm:text-lg text-gray-300 mb-10">
          Stay updated with the latest news, events, and innovations in CRM technology.
        </p>
        <SocialIcons />
      </div>
    </section>
  );
};

export default Community;