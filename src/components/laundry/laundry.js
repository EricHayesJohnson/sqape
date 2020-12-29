import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Body, Spinner, ToggleWrapper } from './styles';
import ProgressBar from '../progressBar/progressBar';
import Toggle from '../toggle/toggle';
import { color } from '../../globalStyles/theme';
import washingMachine from '../../images/washing-machine.svg';
import checkMark from '../../images/check-mark.svg';
import xMark from '../../images/x-mark.svg';

const DisplayGraphic = ({ source }) => {
  return (
    <img
      src={source}
      style={{ position: 'absolute', top: '360px' }}
      alt="laundry day graphic"
    />
  );
};

const Laundry = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLaundryDay, setIsLaundryDay] = useState('');
  const [cloudCover, setCloudCover] = useState('');
  const [isToggleChecked, setIsToggleChecked] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => {
      setIsLoading(false);
      if (isToggleChecked) {
        setCloudCover('30');
        setIsLaundryDay(true);
      } else {
        setCloudCover('100');
        setIsLaundryDay(false);
      }
    }, 3000);

    return () => clearTimeout(id);
  }, [isLoading, isToggleChecked]);

  const handleOnChange = () => {
    setIsLoading(true);
    setCloudCover('0');
    setIsToggleChecked(!isToggleChecked);
  };

  return (
    <Body>
      <ToggleWrapper>
        <Toggle
          name="weather-toggle"
          color={color.warningRed}
          onChange={handleOnChange}
        />
      </ToggleWrapper>
      <ProgressBar
        percentage={cloudCover}
        backgroundColor={color.skyBlue}
        tooltipText={`Cloud cover for ${moment().format(
          'MMM DD, YYYY',
        )} is ${cloudCover}%`}
      ></ProgressBar>
      {isLoading ? <Spinner /> : null}
      <img src={washingMachine} alt="washing machine" />
      {isLoading ? null : (
        <DisplayGraphic source={isLaundryDay ? checkMark : xMark} />
      )}
    </Body>
  );
};

DisplayGraphic.propTypes = {
  source: PropTypes.node.isRequired,
};

export default Laundry;
