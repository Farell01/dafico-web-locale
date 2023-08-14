import { useTranslations } from 'next-intl';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import '@styles/globals.css';

const ProjectSection = ({ titleKey, descriptionKey, link, imageSrc }) => {
  const translations = useTranslations('Home');
  const title = translations(titleKey);
  const description = translations(descriptionKey);

  return (
    <div className="ProjectSection bg-white rounded-lg p-4 shadow-md mb-6">
      <div className="flex flex-col md:flex-row">
        <div className="ProjectImageContainer z-10 mr-4">
          <Image src={imageSrc} alt={title} width={150} height={150}   />
        </div>
        <div className="flex-1 project-description">
          <h2 className="text-lg font-semibold mb-2">{title}</h2>
          <p className="text-gray-700 mb-4">{description}</p>
          <Link href={link}>
            <button className="text-blue-500 hover:underline">
              {translations('home_projectSection_learnMore')}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const ProjectsGrid = () => {
  const translations = useTranslations('Home');

  const projects = [
    {
      titleKey: 'projects_camar_title',
      descriptionKey: 'projects_camar_description',
      link: '/projects/camar',
      imageSrc: '/assets/Camar.png',
    },
    {
      titleKey: 'projects_integratedSolutions_title',
      descriptionKey: 'projects_integratedSolutions_description',
      link: '/projects/integrated-solutions',
      imageSrc: '/assets/IntegratedSolutions.png',
    },
    {
      titleKey: 'projects_hydrogenRenewableEnergy_title',
      descriptionKey: 'projects_hydrogenRenewableEnergy_description',
      link: '/projects/hydrogen-renewable-energy',
      imageSrc: '/assets/green_energy.jpg',
    },
    // Add more projects as needed
  ];

  return (
    <div className="ProjectsGridContainer">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">
        {translations('home_projects_title')}
      </h1>
      <div className="ProjectsGrid mt-6 mx-20">
        {projects.map((project, index) => (
          <ProjectSection
            key={index}
            titleKey={project.titleKey}
            descriptionKey={project.descriptionKey}
            link={project.link}
            imageSrc={project.imageSrc}
          />
        ))}
      </div>
    </div>
  );
};

const MissionValuesSection = () => {
  const translations = useTranslations('Home');

  return (
    <div className="MissionValuesSection bg-gray-200 py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-4 text-center">
          {translations('missionValues_ourMission_title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">
              {translations('missionValues_ourMission_title')}
            </h3>
            <p className="text-gray-700">
              {translations('missionValues_ourMission_content')}
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">
              {translations('missionValues_ourValues_title')}
            </h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>{translations('missionValues_ourValues_value1')}</li>
              <li>{translations('missionValues_ourValues_value2')}</li>
              <li>{translations('missionValues_ourValues_value3')}</li>
              <li>{translations('missionValues_ourValues_value4')}</li>
              <li>{translations('missionValues_ourValues_value5')}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  const translations = useTranslations('Home');

  return (
    <div className="bg-gray-100">
      <div className="Header">
        <div className="HeaderContainer mx-10 md:mx-40  sm:mr-20 p-4 text-center bg-[rgba(0,0,0,0.537)]">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white justify-center">
            {translations('home_header_title')}
          </h1>
          <p className="text-xl md:text-2xl">
            <span className="inline-block px-4 text-white">
              {translations('home_header_subtitle')}
            </span>
          </p>
        </div>
      </div>
      <MissionValuesSection />
      <div className="ProjectsSection bg-blue-200 py-10">
        <ProjectsGrid />
      </div>
    </div>
  );
};

export default Home;
