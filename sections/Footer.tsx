import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 px-4 bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto text-center text-gray-500">
        <p className="text-sm">&copy; {new Date().getFullYear()} ZEA CRM. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;