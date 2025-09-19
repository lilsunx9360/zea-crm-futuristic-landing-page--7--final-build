import React from 'react';

const BackArrowIcon = () => (
    <svg className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
    </svg>
);

interface VideoPlayerPageProps {
  videoId: string;
  benefitTitle: string;
  onBack: () => void;
}

const VideoPlayerPage: React.FC<VideoPlayerPageProps> = ({ videoId, benefitTitle, onBack }) => {
  // Use the standard and most reliable URL for embedding Google Drive videos.
  const embedUrl = `https://drive.google.com/file/d/${videoId}/preview`;

  return (
    <div className="min-h-screen bg-black text-white p-4 sm:p-6 md:p-8 animate-fade-in">
      <div className="max-w-5xl mx-auto">
        <button
          onClick={onBack}
          className="flex items-center text-amber-400 hover:text-amber-300 transition-colors mb-8 group font-semibold"
        >
          <BackArrowIcon />
          Back to {benefitTitle}
        </button>

        <div className="aspect-video bg-black rounded-lg overflow-hidden shadow-2xl shadow-amber-500/10">
          <iframe
            className="w-full h-full"
            src={embedUrl}
            title="Video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
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

export default VideoPlayerPage;
