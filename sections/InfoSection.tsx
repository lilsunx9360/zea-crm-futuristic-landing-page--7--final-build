import React from 'react';

const InfoSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 px-4 bg-gray-900/50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Why <span className="text-[#fbbf24]">Choose</span> Us?
        </h2>
        <p className="text-base sm:text-lg text-gray-300 mb-8 leading-relaxed">
          At ZeaCRM, we're not just a service provider; we're your growth partner. Our platform is built on a foundation of cutting-edge technology, user-centric design, and deep industry expertise to help you build lasting customer relationships.
        </p>
        <ul className="text-left max-w-2xl mx-auto space-y-3 text-gray-300">
          <li className="flex items-start">
            <CheckIcon />
            <span><strong>Unified Platform:</strong> Manage sales, marketing, and customer service from a single, intuitive dashboard.</span>
          </li>
          <li className="flex items-start">
            <CheckIcon />
            <span><strong>Scalable Infrastructure:</strong> Grow your business without worrying about technology limitations.</span>
          </li>
          <li className="flex items-start">
            <CheckIcon />
            <span><strong>Identify Barriers, Drive Results:</strong>  We help you identify hidden challenges in your healthcare institution and automate solutions to drive success.</span>
          </li>
           <li className="flex items-start">
            <CheckIcon />
            <span><strong>Technology Meets Customer-Friendly Solutions:</strong> With over a decade serving US businesses, we blend digital marketing expertise and technology to create solutions your customers actually love.</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

const CheckIcon = () => (
  <svg className="w-6 h-6 text-[#fbbf24] mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

export default InfoSection;