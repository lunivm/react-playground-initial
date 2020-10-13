import React from 'react';
import './MainSearch.css';

export default class MainSearch extends React.Component {
  render() {
    return (
      <div className='main-search'>
        <input className='main-search-input' type='text' onChange={i => console.log('change', i)} onKeyPress={i => console.log('keypress', i.target)}/>
      </div>
    );
  }
}
