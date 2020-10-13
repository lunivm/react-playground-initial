import React from 'react';
import { getAllFeatures } from './featuredAPI';
import FeaturedSection from './FeaturedSection';

export default class Home extends React.Component {
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
