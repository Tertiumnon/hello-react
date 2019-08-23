import React from 'react';
import { connect } from 'react-redux';
import {
  onSizeChange,
  onRadiusChange,
  addSquare,
  onPrev,
  onNext
} from '../../actions';
import './index.css';

const mapStateToProps = state => ({
  slider: state.slider
});

const CardsForm = connect(mapStateToProps)(({slider, dispatch}) => {
  const { size, radius, margin, count, active } = slider;

  return (
    <div className="cards-form">
    <div className="size">
      <input
        type="text"
        name="size"
        placeholder="Size"
        value={size}
        onChange={e => {dispatch(onSizeChange(e))}}
      />
    </div>
    <div className="radius">
      <input
        type="text"
        name="radius"
        id="radius"
        placeholder="Corner radius"
        value={radius}
        onChange={e => dispatch(onRadiusChange(e))}
      />
    </div>
    <div className="square">
      <button onClick={() => {
        addSquare(dispatch)
      }}>Add square</button>
    </div>
    <div className="prev">
      <button onClick={() => {
        dispatch(onPrev({margin, size, active}))
      }}>Prev</button>
    </div>
    <div className="next">
      <button onClick={() => {
        dispatch(onNext({count, margin, size, active}))
      }}>Next</button>
    </div>
  </div>
  )
});

export default CardsForm;
