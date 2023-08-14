import React from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import '@styles/globals.css';

const ProjectPage = () => {
  const t = useTranslations('ProjectPage3'); // Initialize useTranslations

  const projectTitle = t('projectTitle');

  // Define paragraphs as separate string variables
  const paragraphs = [
    t('paragraph1'),
    t('paragraph2'),
    t('paragraph3'),
    t('paragraph4'),
    t('paragraph5'),
    t('paragraph6'),
    t('paragraph7'),
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">{projectTitle}</h1>
          <img
            src="/path/to/your/image-placeholder.jpg" // Replace with your image placeholder
            alt={projectTitle}
            className="w-96 h-72 object-cover rounded-md shadow-md mb-6"
          />
          {/* Render each paragraph */}
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="text-gray-700 text-lg text-center mx-8 md:mx-16 lg:mx-16 xl:mx-24 mb-8">
              {paragraph}
            </p>
          ))}
          <Link href="/projects" passHref>
            <button className="mt-8 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md">
              {t('backToProjects')}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
