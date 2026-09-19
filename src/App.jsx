// NOBROWSE™ - Application Root

import React from 'react';
import { Browser } from './components/Browser';

export default function App() {
  return (
    <div className="h-screen w-screen bg-[#c0c0c0] flex flex-col justify-center overflow-hidden font-sans select-none">
      <Browser />
    </div>
  );
}
