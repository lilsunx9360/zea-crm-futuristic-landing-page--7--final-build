import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 px-4 bg-black border-t border-gray-800">
  <div className="max-w-7xl mx-auto text-center text-gray-500">
    <p className="text-sm">
      &copy; {new Date().getFullYear()} ZEA CRM. All Rights Reserved.
    </p>
    <p className="text-sm mt-2">
      Powered by{" "}
      <a
        href="https://urlfactory.website"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:underline"
      >
        URL Factory
      </a>
    </p>
  </div>
</footer>

  );
};

export default Footer;