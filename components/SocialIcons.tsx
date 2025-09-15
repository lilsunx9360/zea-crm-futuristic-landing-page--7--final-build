import React from 'react';

const FacebookIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
);
const InstagramIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.316 1.363.364 2.427.048 1.067.06 1.407.06 4.155 0 2.748-.012 3.088-.06 4.155-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.316-2.427.364-1.067.048-1.407.06-4.155.06-2.748 0-3.088-.012-4.155-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.316-1.363-.364-2.427-.048-1.067-.06-1.407-.06-4.155 0-2.748.012-3.088.06-4.155.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.345 2.525c.636-.247 1.363-.316 2.427-.364C9.78 2.013 10.12 2 12.868 2h-1.11zM12 4.869c-3.935 0-7.099 3.163-7.099 7.099s3.164 7.099 7.099 7.099 7.099-3.163 7.099-7.099S15.935 4.869 12 4.869zm0 11.802c-2.599 0-4.706-2.106-4.706-4.706s2.107-4.706 4.706-4.706 4.706 2.106 4.706 4.706-2.107 4.706-4.706 4.706zm4.805-9.288a1.42 1.42 0 100-2.839 1.42 1.42 0 000 2.839z" clipRule="evenodd" /></svg>
);
const TwitterIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
);
const LinkedInIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
);
const YouTubeIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
);

const socialLinks = [
  { name: 'Facebook', href: 'https://www.facebook.com/people/ZEA-CRM/61580373855637/', icon: FacebookIcon },
  { name: 'Instagram', href: 'https://www.instagram.com/zea_crm/?next=%2F', icon: InstagramIcon },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/zea-crm', icon: LinkedInIcon },
];

const SocialIcons: React.FC = () => {
  return (
    <div className="flex justify-center space-x-4 sm:space-x-6">
      {socialLinks.map((item) => (
        <a key={item.name} href={item.href} className="text-gray-400 hover:text-[#fbbf24] transition-colors duration-300">
          <span className="sr-only">{item.name}</span>
          <item.icon />
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;