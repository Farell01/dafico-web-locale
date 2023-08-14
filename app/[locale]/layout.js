// components/RootLayout.js
import {useLocale} from 'next-intl';
import {notFound} from 'next/navigation';

import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import React from 'react';

export default function RootLayout({ children, params }) {

  const locale = useLocale();
 
  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound();
  }

  return (
    <html lang={locale}>
      <head>
        {/* Add your meta tags, title, and other head content here */}
      </head>
      <body>
        { <Navbar />}
        {children}
        { <Footer />}
      </body>
    </html>
  );
}
