// components/RootLayout.js
import {useLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import { PageWrapper } from "@components/PageWrapper";
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import React from 'react';
import style from "@styles/globals.css"
import "@styles/globals.css"

export default function RootLayout({ children, params }) {

  const locale = useLocale();
 
  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body style={style.backgroundAll}>
        
        { <Navbar />}
        <PageWrapper>
          <div className="content-container"> {/* Add a container */}
            {children}
          </div>
        
        { <Footer />}
        </PageWrapper>
      </body>
    </html>
  );
}
