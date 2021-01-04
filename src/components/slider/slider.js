import React from 'react';
import PropTypes from 'prop-types';
import { SliderInput } from './styles';

const Slider = ({ min, max, value, onSliderChange }) => {
  const handleChange = (event) => {
    onSliderChange(parseInt(event.target.value));
  };

  return (
    <SliderInput
      type="range"
      min={min}
      max={max}
      value={value}
      onChange={handleChange}
    />
  );
};

Slider.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  value: PropTypes.number,
  onSliderChange: PropTypes.func,
};

export default Slider;
