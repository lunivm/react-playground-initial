import React from 'react';
import './featured-section.css';
import Card from '../../components/card/card';

export default function FeaturedSection(props) {
  return (
    <div className='featured-section flex-container'>
      <h2 className='featured-items-header'>Featured items</h2>
      <div className='featured-items'>
        {props.featured.map(i => <Card key={i.id} header={i.title} image={i.image} vendorImage={i.vendorImage}/>)}
      </div>
    </div>
  );
}
