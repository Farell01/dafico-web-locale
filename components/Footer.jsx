import React from 'react';
import { FaHome, FaBriefcase, FaImages, FaUsers, FaEnvelope, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // Import icons from react-icons
import { useTranslations } from 'next-intl'; // Import the useTranslations function
import Link from 'next/link';

function Footer() {
  const t = useTranslations('Footer'); // Replace 'yourTranslationNamespace' with your actual translation namespace

  const links = [
    { icon: <FaHome />, label: t('Home'), href: '/' },
    { icon: <FaBriefcase />, label: t('Projects'), href: '/projects' },
    { icon: <FaUsers />, label: t('About'), href: '/about' },
    { icon: <FaImages />, label: t('Gallery'), href: '/gallery' },
    { icon: <FaEnvelope />, label: t('Contact'), href: '/contact' },
  ];

  return (
    <div className='bg-gray-800 '>
      <div className=' py-2 flex flex-col md:flex-row  md:justify-between'>
        <div className='flex flex-col space-y-1 md:space-y-2 ml-3 mr-3 md:ml-6 md:mr-0 md:justify-center'>
          <div className='text-white text-lg font-semibold mb-2 text-center md:text-start'>{t('quickLinks')}</div>
          {links.map((link, index) => (
            <FooterLink key={index} icon={link.icon} label={link.label} href={link.href} />
          ))}
        </div>
        <div className='text-white text-center md:text-left mr-3 ml-3 mt-5 md:mt-0 md:mr-0 md:ml-0'>
          <div className='text-white text-lg font-semibold mb-2'>{t('headquarters')}</div>
          <p>{t('address1')}</p>
          <p>{t('address2')}</p>
          <p>{t('phone')}</p>
        </div>
              {/* Add social media icons */}
        <div className='flex flex-row space-x-5  md:space-y-0 md:space-x-5 mt-5 md:mt-2 md:mr-16  ml-3 justify-center md:justify-start'>
          <a href='https://www.facebook.com/your_facebook' target='_blank' rel='noopener noreferrer' className='text-white hover:space-y-2'>
            <FaFacebook size={24} />
          </a>
          <a href='https://www.twitter.com/your_twitter' target='_blank' rel='noopener noreferrer' className='text-white hover:space-y-2'>
            <FaTwitter size={24} />
          </a>
          <a href='https://www.instagram.com/your_instagram' target='_blank' rel='noopener noreferrer' className='text-white hover:space-y-2'>
            <FaInstagram size={24} />
          </a>
          {/* Add more social media icons here */}
        </div>
      </div>
      <div className='bg-gray-900 py-4 flex-grow md:text-center mt-4 text-white'>
        &copy; {new Date().getFullYear()} PT. Dafico Prima Perkasa
      </div>
    </div>
  );
}

function FooterLink({ icon, label, href }) {
  return (
    <a href={href} className='text-white'>
      <div className='flex items-center justify-center md:justify-start'>
        <div className='mr-2'>{icon}</div>
        <span>{label}</span>
      </div>
    </a>
  );
}

export default Footer;


