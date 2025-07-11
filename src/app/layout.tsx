'use client';

import './globals.css';
import { montserrat } from '@/config/fonts';
import { ReactNode } from 'react';
import { ApolloProvider } from '@apollo/client';
import client from '@/config/apollo-client';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="font-sans">
        <ApolloProvider client={client}>
          {children}
        </ApolloProvider>
      </body>
    </html>
  );
}