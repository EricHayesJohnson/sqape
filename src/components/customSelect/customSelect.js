import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const CustomSelect = ({ placeholder, options, onSelectChange }) => {
  const [isActive, setIsActive] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const allOptions = useRef();

  const handleOnClick = (event) => {
    [...allOptions.current.children].forEach((el) => {
      el.classList.remove('selected');
    });
    event.target.classList.add('selected');
    setSelectedOption(event.target.textContent);
    onSelectChange(event.target.textContent);
  };

  return (
    <div className="select-wrapper" onClick={() => setIsActive(!isActive)}>
      <div className={isActive ? 'select open' : 'select'}>
        <div className="select-trigger">
          <span>{selectedOption === null ? placeholder : selectedOption}</span>
          <div className="arrow"></div>
        </div>
        <div className="select-options" ref={allOptions}>
          {options.map((name, index) => {
            return (
              <span
                className="select-option"
                onClick={handleOnClick}
                key={index}
                data-value={name}
              >
                {name}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

CustomSelect.propTypes = {
  placeholder: PropTypes.string,
  options: PropTypes.array,
  onSelectChange: PropTypes.func,
};

export default CustomSelect;
