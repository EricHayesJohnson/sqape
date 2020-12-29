import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ToggleLabel, ToggleInput } from './styles';
import { css } from '@emotion/react';

const Toggle = ({ name, color, onChange }) => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (onChange) {
      onChange(isChecked);
    }
  }, [isChecked]);

  return (
    <>
      <ToggleInput
        type="checkbox"
        name={name}
        id={name}
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
        css={css`
          &:checked {
            background-color: ${color};
          }
        `}
      />
      <ToggleLabel htmlFor={name}></ToggleLabel>
    </>
  );
};

Toggle.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  onChange: PropTypes.func,
};

export default Toggle;
