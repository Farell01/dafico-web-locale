import React from 'react';
import { useTranslations } from 'next-intl';
import "@styles/globals.css"
import { FaInstagram, FaTwitter, FaPhone, FaWhatsapp, FaEnvelope } from 'react-icons/fa'; // Import icons from react-icons

export default function ContactUs() {
  const t = useTranslations('contactUs');

  return (
    <div className="contactcontainer mx-auto mt-8 p-4">
      <h1 className="text-4xl font-bold text-center mb-6">
        {t('title')}
      </h1>
      <div className="flex flex-col md:flex-row justify-center space-y-5 md:space-y-0 md:space-x-16">
        <ContactInfo />
        <SocialMediaLinks />
      </div>
    </div>
  );
}

function generateWhatsAppLink(phoneNumber, message) {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
}

function ContactInfo() {
  const t = useTranslations('contactUs');
  const phoneNumber = '+1234567890';
  const email = 'contact@example.com';
  const whatsappMessage = t('whatsappMessage');

  return (
    <div>
      <div>
        <h2 className="text-lg font-semibold mb-2">{t('contactInfo.title')}</h2>
        <div className="flex items-center mb-2">
          <FaPhone className="mr-2" /> {phoneNumber}
        </div>
        <div className="flex items-center mb-2">
          <FaWhatsapp className="mr-2" /> {phoneNumber}
        </div>
        <div className="flex items-center">
          <FaEnvelope className="mr-2" /> {email}
        </div>
        <div className="mt-4">
          <a
            href={generateWhatsAppLink(phoneNumber, whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
          >
            {t('whatsappButton')}
          </a>
        </div>
      </div>
    </div>
  );
}

function SocialMediaLinks() {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Social Media</h2>
      <div className="flex flex-col md:flex-row md:space-x-5 md:space-y-0 space-y-2">
        <SocialLink href="https://www.instagram.com/your_instagram" icon="instagram" alt="Instagram" />
        <SocialLink href="https://twitter.com/your_twitter" icon="twitter" alt="Twitter" />
        {/* Add more social media links here */}
      </div>
    </div>
  );
}

function SocialLink({ href, icon, alt }) {
  const iconMap = {
    instagram: FaInstagram,
    twitter: FaTwitter,
    // Add more social media icons here
  };
  const SocialIcon = iconMap[icon];

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
      <SocialIcon size={40} alt={alt} />
    </a>
  );
}
