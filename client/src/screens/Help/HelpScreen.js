import React from 'react';
import { useSelector } from 'react-redux';

function HelpScreen() {
  const yourYearName = useSelector((state) => state.yourName)

  return (
    <main>
    <h1>Export some shit Yo. {yourYearName}</h1>
    </main>
  );
}

export default HelpScreen;
