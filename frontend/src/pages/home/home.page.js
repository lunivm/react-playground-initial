import React from 'react';
import { getAllFeatures } from './featured.service';
import FeaturedSection from './featured-section';

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

  render() {
    return (
      <div>
        <FeaturedSection featured={this.state.featured}/>
      </div>
    );
  }
}
