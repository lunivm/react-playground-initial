import React from 'react';
import Navigation from './navigation';

export default function LoggedIn(props) {
  return (
    <div>
      <header>
        <Navigation/>
      </header>

      <main>
        {props.children}
      </main>
    </div>
  );
}
