import React from 'react';
import { getAllFeatures } from './featured.service';
import Card from '../../components/card/card';

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      featured: []
    };
  }

  async componentDidMount() {
    const featured = (await getAllFeatures()).items || [];
    this.setState({featured});
  }

  renderFeaturedItems() {
    return this.state.featured.map(i => <Card key={i.id} header={i.title} image={i.image} vendorImage={i.vendorImage}/>)
  }

  render() {
    return (
      <div>
        <h1>Home Component</h1>

        <div className='featured-section'>
          {this.renderFeaturedItems()}
        </div>
      </div>
    );
  }
}
