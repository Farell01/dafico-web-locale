import React from 'react';
import { useTranslations } from 'next-intl';
import '@styles/globals.css';

function About() {
  const t = useTranslations('About'); // Initialize useTranslations

  return (
    <div className="backgroundAll min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      {/* Add the second text box */}
      <div className="max-w-3xl bg-white p-6 rounded-lg shadow-md mb-6 mt-10">
        <h1 className="text-4xl font-bold mb-4 text-blue-700">{t('aboutUsTitle')}</h1>
        <div className="text-gray-800">
          <h2 className="text-xl font-semibold mb-2"></h2>
          <p className="text-base text-gray-700">
            {t('aboutUsDescription')}
            <br />
            <br />
            {t('aboutUsPartnership')}
            <br />
            <br />
            {t('aboutUsFounded')}
            <br />
            <br />
            {t('aboutUsFocus')}
            <br />
            <br />
            {t('aboutUsExpansion')}
          </p>
        </div>
      </div>

      <div className="max-w-3xl bg-white p-6 rounded-lg shadow-md mb-10">
        <h2 className="text-xl font-semibold mb-2 text-gray-800">{t('companyDetailsTitle')}</h2>
        <p className="text-base text-gray-700">
          <span className="font-semibold">{t('companyName')}</span><br />
          {t('companyNameValue')}<br />
          {t('companyEstablished')}<br />
          <br />
          <span className="font-semibold">{t('director')}</span><br />
          {t('directorName')}<br />
          {t('directorMobile')}<br />
          <br />
          <span className="font-semibold">{t('address')}</span><br />
          {t('headOffice')}<br />
          {t('addressDetails')}<br />
          <br />
          <span className="font-semibold">{t('coreBusiness')}</span><br />
          {t('coreBusinessValues')}<br />
          <br />
          <span className="font-semibold">{t('contactDetails')}</span><br />
          {t('telephone')}<br />
          {t('email')}<br />
          {t('npwpNumber')}<br />
          {t('nibNumber')}
        </p>
      </div>
    </div>
  );
}

export default About;
