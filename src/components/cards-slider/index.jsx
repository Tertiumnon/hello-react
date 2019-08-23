import React from 'react';
import { connect } from 'react-redux';
import { getOpacity } from '../../actions';
import './index.css';

const mapStateToProps = state => ({
  slider: state.slider
});

const CardsSlider = connect(mapStateToProps)(({slider}) => {
  const { size, radius, margin, count, active } = slider;
  return (
    <div
      className="cards-slider"
      style={{
        'width': count * (size + 10),
        'marginLeft': margin + 'px'
      }}
    >
      {slider.cards.map((card, i) => (
        <div
          className="card"
          key={card.id}
          style={{
            'width': size,
            'height': size,
            'borderRadius': radius,
            'opacity': getOpacity({active, i}),
          }}
        >
          <img src={card.src} alt=""
            style={{
              'width': size,
              'height': size,
            }}
          />
        </div>
      ))}
    </div>
  )
});

export default CardsSlider;
