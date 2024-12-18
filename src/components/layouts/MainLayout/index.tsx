'use client';

import React from 'react';
import { AppContextProvider } from '@/context/app.context';
import type { FCC } from '@/types';

import Header from './header';

const MainLayout: FCC = ({ children }) => {
  return (
    <AppContextProvider value={{}}>
      <Header />
      <main>
        <div>{children}</div>
      </main>
    </AppContextProvider>
  );
};

export default MainLayout;
