import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl'; // Import useTranslations
import '@styles/globals.css';

const ProjectCard = ({ titleKey, descriptionKey, imageUrl, url }) => {
  const t = useTranslations('Projects'); // Initialize useTranslations

  const title = t(titleKey);
  const description = t(descriptionKey);

  return (
    <div className="ml-5 p-4 shadow-md rounded-md bg-gray-200 project-card">
      <img
        src={imageUrl}
        alt={title}
        className="h-70 w-full object-cover rounded-md mb-4"
      />
      <div className=" flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-gray-600">{description}</p>
          <Link href={url} passHref>
            <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
              {t('home_projectSection_learnMore')}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};


const Projects = () => {
  const t = useTranslations('Projects'); // Initialize useTranslations
  const projectsData = [
    {
      titleKey: 'projects_camar_title',
      descriptionKey: 'projects_camar_description',
      imageUrl: '../assets/Camar.png',
      url: '/projects/camar',
    },
    {
      titleKey: 'projects_integratedSolutions_title',
      descriptionKey: 'projects_integratedSolutions_description',
      imageUrl: '../assets/image.png',
      url: '/projects/integrated-solutions',
    },
    {
      titleKey: 'projects_hydrogenRenewableEnergy_title',
      descriptionKey: 'projects_hydrogenRenewableEnergy_description',
      imageUrl: '../assets/green_energy.jpg',
      url: '/projects/hydrogen-renewable-energy',
    }
    // Add more projects data as needed
  ];

  return (
    <div className="backgroundAll  bg-gray-800 py-8">
      <div className="container  mx-auto  grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
