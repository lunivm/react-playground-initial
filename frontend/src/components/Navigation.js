import React from 'react';
import './Navigation.css';

import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <div className='navigation-items-section'>
      <div className='flex-container'>
        <nav>
          <ul className='navigation-items'>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
            <li>
              <Link to="/todos">TODOs</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
