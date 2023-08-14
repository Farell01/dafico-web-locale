
import React from 'react';

const FeatureItem = ({ title, description }) => (
  <li>
    <strong>{title}:</strong> {description}
  </li>
);

const ProjectDetail = ({ project }) => {
  const { title, description, features, about } = project;

  return (
    <div className="backgroundAll">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="max-w-md mx-auto">
            <div className="text-container bg-white p-4 rounded-lg shadow-md">
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
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
