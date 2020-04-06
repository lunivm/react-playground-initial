import React from 'react';
import './card.css';
import PropTypes from 'prop-types';

import ImageContainer from '../image-container';


const likeIcon = <svg height="16" viewBox="0 0 16 14" width="18">
  <g fill="transparent">
    <path _ngcontent-mev-c29="" className="save-icon"
      d="m6.84,13.104084c-4.12,-3.563 -6.84,-5.913 -6.84,-8.797c0,-2.35 1.936,-4.196 4.4,-4.196c1.392,0 2.728,0.618 3.6,1.595c0.872,-0.977 2.208,-1.595 3.6,-1.595c2.464,0 4.4,1.846 4.4,4.196c0,2.884 -2.72,5.234 -6.84,8.805l-1.16,0.999l-1.16,-1.007z"
      fill="currentColor" stroke="currentColor"></path>
  </g>
</svg>;
const cardBgImage = image => ({ backgroundImage: `url(${image})`});

const Header = props => <div className="header-image" style={cardBgImage(props.image)}/>;

const Body = props => (
  <div className="body">
    <div className="vendor-logo"><ImageContainer url={props.vendorImage}/></div>

    <h4 className="card-header">{props.header}</h4>

    <div className="actions">
      <button className="btn like-btn">
        {likeIcon}
      </button>
    </div>
  </div>
);

export default class Card extends React.Component {
  render() {
    return (
      <div data-component="Card">
        <Header image={this.props.image}/>
        <Body header={this.props.header} vendorImage={this.props.vendorImage}/>
      </div>
    );
  }
}

Card.propTypes = {
  image: PropTypes.string,
  header: PropTypes.string,
  vendorImage: PropTypes.string
};
