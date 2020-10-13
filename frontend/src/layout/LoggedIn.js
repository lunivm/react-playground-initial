import React from 'react';
import './LoggedIn.css';

import Navigation from '../components/Navigation';
import MainSearch from '../components/MainSearch';

export default function LoggedIn(props) {
  return (
    <div>
      <header className='logged-in-header'>
        <div className='top-header-line'/>

        <Navigation/>

        <div className='main-search-section'>
          <MainSearch/>
        </div>
      </header>

      <main>
        {props.children}
      </main>
    </div>
  );
}
