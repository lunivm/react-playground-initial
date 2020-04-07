import React from 'react';
import './main-search.css';

export default class MainSearch extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='main-search-section'>
        <div className='main-search'>
          <input className='main-search-input' type='text'/>
        </div>
      </div>
    );
  }
}
