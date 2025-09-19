import React from 'react';
import { ServiceCategory } from '../types';
import SocialIcons from '../components/SocialIcons';
import TrialForm from '../components/TrialForm';

interface ServiceDetailPageProps {
  category: ServiceCategory;
  onBack: () => void;
  onPlayVideo: (videoId: string, videoTitle: string) => void;
  onBookAppointment: () => void;
}

const BackArrowIcon = () => (
  <svg className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-6 h-6 text-[#fbbf24] mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const PlayIcon = () => (
    <svg className="w-6 h-6 ml-2 text-gray-400 group-hover:text-[#fbbf24] transition-colors flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path></svg>
);

const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ category, onBack, onPlayVideo, onBookAppointment }) => {
  return (
    <div className="min-h-screen bg-black text-white p-4 sm:p-6 md:p-8 animate-fade-in">
      <div className="max-w-5xl mx-auto">
        <button
          onClick={onBack}
          className="flex items-center text-amber-400 hover:text-amber-300 transition-colors mb-8 group font-semibold"
        >
          <BackArrowIcon />
          Back to Services
        </button>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 text-white">
          {category.heading}
        </h1>

        <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#fbbf24] mb-6">Key Benefits</h2>
            <ul className="space-y-6">
              {category.points.map((point, index) => (
                <li key={index} className="flex items-start">
                  <CheckIcon />
                  <div className="flex-1">
                    <button 
                        onClick={() => onPlayVideo(point.videoId, point.title)}
                        className="group text-left text-base sm:text-lg font-bold text-white hover:text-[#fbbf24] transition-colors flex items-center w-full"
                        aria-label={`Play video for ${point.title}`}
                    >
                        <span>{point.title}</span>
                        <PlayIcon />
                    </button>
                    <p className="text-gray-400 mt-1 text-base">{point.description}</p>
                  </div>
                </li>
              ))}
            </ul>
        </div>
        
        <section className="mt-16">
            <div className="max-w-md mx-auto bg-slate-800 border border-slate-700 rounded-2xl shadow-lg p-4 sm:p-6 md:p-8">
                <TrialForm onBookAppointment={onBookAppointment} />
            </div>
        </section>

        <div className="mt-16 text-center border-t border-gray-800 pt-10">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">
            Stay <span className="text-[#fbbf24]">Connected</span>
          </h3>
          <SocialIcons />
        </div>

      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default ServiceDetailPage;