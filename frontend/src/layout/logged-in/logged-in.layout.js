import React from 'react';
import './logged-in.layout.css';

import Navigation from './navigation';
import MainSearch from './main-search';

export default function LoggedIn(props) {
  return (
    <div>
      <header className='logged-in-header'>
        <div className='top-header-line'/>
        <Navigation/>
        <MainSearch/>
      </header>

      <main>
        {props.children}
      </main>
    </div>
  );
}
