import "@core/styles/globals.css";
import type { Metadata } from 'next'
import AppProvider from "@/components/common/provider";
import Navbar from '@layout/Navbar';
import Footer from '@layout/Footer';
import React from 'react';
import Suspense from '@/components/Suspense';
import { Container } from '@core/components';
// import { getServerSession } from 'next-auth/next';
// import { options } from '@auth/config';
// import ClientSessionProvider from '@/components/client-session-provider';


export const metadata: Metadata = {
  title: {
    default: 'Inventory',
    template: '%s | Dashboard',
  },
  description:
    'Dashboard',
}

export default async function RootLayout({ children }: React.PropsWithChildren) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <AppProvider>
          <Navbar />
          <Suspense option="circle">
            {children}
          </Suspense>
          <Footer />
        </AppProvider>
      </body>
    </html>
  )
}