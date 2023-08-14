// ProjectPage.js
import React from 'react';

import '@styles/globals.css'


const FeatureItem = ({ title, description }) => (
  <li>
    <strong>{title}:</strong> {description}
  </li>
);

const ProjectPage = ({ project }) => {
  const { title, description, features, about } = project;

  return (
    <div className="backgroundAll min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      {/* Add the second text box */}
      <div className="max-w-3xl bg-white p-6 rounded-lg shadow-md mb-6 mt-10">
              <h1 className="text-3xl font-semibold mb-4">{title}</h1>
              
              <p className="text-gray-600">
                {description}
              </p>

              <div className="mt-4">
                <h2 className="text-lg font-semibold mb-2">Features:</h2>
                <ul className="list-disc list-inside text-gray-600">
                  {features.map((feature, index) => (
                    <FeatureItem key={index} title={feature.title} description={feature.description} />
                  ))}
                </ul>
              </div>

              <p className="text-gray-600 mt-4">
                {about}
              </p>
            </div>
          </div>

  );
};

const projectData = {
  camarSmartFishing: {
    title: 'CAMAR Smart Fishing',
    description:
      "CAMAR Smart Fishing is the embodiment of visionary collaboration, the result of a dynamic partnership " +
      "between BRIN (formerly known as BPPT), PT.Navicom Indonesia, and PT Dafico Prima Persada. This remarkable synergy marries cutting-edge satellite " +
      "technology, remote sensing prowess, and the navigational finesse of GPS and AIS systems, all curated to enhance fishing yield, " +
      "optimize fuel efficiency, and elevate maritime safety within Indonesia's vast aquatic realm. This convergence of innovation is " +
      "poised to chart a transformative course, aimed at uplifting the livelihoods of Indonesian fishermen.",
    features: [
      {
        title: 'Fish Potential Estimation Map (PELOPI)',
        description:
          'Uncover the hidden rhythms of the sea, as PELOPI paints a vivid canvas of potential fishing zones, guiding you to ' +
          'bountiful catches with precision.',
      },
      {
        title: 'Shipping Line Tracking',
        description:
          "Navigate maritime pathways with confidence, as our technology harmonizes celestial navigation with terrestrial wisdom, " +
          "enhancing each voyage's safety and efficiency.",
      },
      {
        title: 'SOS Button',
        description:
          'A guardian in the waves, the SOS button offers reassurance, a beacon of assistance at your fingertips when the tides turn challenging.',
      },
      {
        title: 'GPS & AIS Monitoring',
        description:
          'Elevate your maritime prowess with the elegance of GPS and AIS monitoring, a seamless duet that ensures accurate positioning ' +
          'and vessel awareness.',
      },
      {
        title: 'AIS Transponders',
        description:
          'Illuminate the seas with a constellation of AIS transponders, fostering a secure environment where vessels communicate, ' +
          'contributing to safer maritime adventures.',
      },
    ],
    about:
      'CAMAR Smart Fishing beckons you to explore a new era of marine excellence, as we set sail towards enhanced productivity, ' +
      'sustainable practices, and the prosperity of Indonesia\'s fishing legacy. Join us in charting a course towards a brighter future on the waves.',
  },
  // ... Add more projects here if needed
  // ... Add more projects here if needed
  project2: {
    title: 'Project 2',
    description: 'Description for Project 2',
    features: [
      { title: 'Feature 1', description: 'Description for Feature 1' },
      { title: 'Feature 2', description: 'Description for Feature 2' },
    ],
    about: 'About Project 2',
  },
};

const ProjectPageWrapper = ({ projectKey }) => {
  const project = projectData[projectKey];

  if (!project) {
    return <div>Error: Project data not found.</div>;
  }

  return (
    <ProjectPage project={project} />
  );
};

export default ProjectPageWrapper;
