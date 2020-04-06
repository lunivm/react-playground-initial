import React from 'react';
import Card from '../../components/card/card';

export default function FeaturedSection(props) {
  return (
    <div className='featured-section'>
      {props.featured.map(i => <Card key={i.id} header={i.title} image={i.image} vendorImage={i.vendorImage}/>)}
    </div>
  );
}
