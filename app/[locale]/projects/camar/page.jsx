import React from 'react';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { useTranslations } from 'next-intl'; // Import useTranslations
import '@styles/globals.css';

const ProjectPage = () => {
  const t = useTranslations('ProjectPage1'); // Initialize useTranslations
  const projectTitle = t('projectTitle'); // Use translated content
  const projectDescription = t('projectDescription');
  const projectFeatures = t('projectFeatures');
  const projectDescriptionFooter = t('projectDescriptionFooter');

  return (
    <div className="min-h-screen bg-gray-100 py-8 flex justify-center">
      <div className="container  text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{projectTitle}</h1>
        <div className="flex flex-wrap justify-center">
          <div className="mx-2">
            <img
              src="/assets/Camar.png"
              alt={projectTitle}
              className="w-72 h-72 mb-2"
            />
            <p className="text-sm">{t('camarImageCaption')}</p>
          </div>
          <div className="mx-2">
            <img
              src="/assets/Camar-device.png"
              alt={projectTitle}
              className="w-72 h-72 mb-2"
            />
            <p className="text-sm">{t('transceiverImageCaption')}</p>
          </div>
          <div className="mx-2 mb-8">
            <img
              src="/assets/antena-gps.png"
              alt={projectTitle}
              className="w-72 h-72 mb-2"
            />
            <p className="text-sm">{t('gpsImageCaption')}</p>
          </div>
          <br />
        </div>
        <div className="mx-4 md:mx-16 lg:mx-16 xl:mx-24 mb-8">
          {projectDescription}
          <br />
          <br />
          <ReactMarkdown
            className="text-gray-700 text-left"
            children={projectFeatures}
          />
          <br />
          {projectDescriptionFooter}
        </div>
        <Link href="/projects" passHref>
          <button className="mt-8 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md">
            {t('backToProjects')}
          </button>
        </Link>
        {/* New section for additional images */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">{t('additionalImages')}</h2>
          <div className="flex flex-wrap justify-center">
            <div className="flex flex-wrap justify-center">
              {/* Flexible-width image placeholders */}
              {Array.from({ length: 6 }, (_, index) => (
                <div
                  key={index}
                  className=" h-60 object-cover rounded-md shadow-md mb-6 mx-1"
                >
                  <img
                    src={`/assets/camar${index + 1}.jpg`}
                    alt={t('additionalImageCaption', { index: index + 1 })}
                    className="w-full h-full"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
