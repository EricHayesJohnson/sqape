import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';
import { color } from '../../globalStyles/theme';
import { Wrapper, Progress } from './styles';

const ProgressBar = ({
  backgroundColor = `${color.gray}`,
  percentage,
  tooltipText,
}) => {
  const [progressWidth, setProgressWidth] = useState('0');

  useEffect(() => {
    requestAnimationFrame(() => {
      setProgressWidth(`${percentage}%`);
    });
  }, [percentage]);

  return (
    <Wrapper data-tip={tooltipText} data-offset="{'top': 14}">
      <ReactTooltip type="info" effect="solid" />
      <Progress
        style={{ width: progressWidth, background: backgroundColor }}
      ></Progress>
    </Wrapper>
  );
};

ProgressBar.propTypes = {
  backgroundColor: PropTypes.string,
  percentage: PropTypes.string,
  tooltipText: PropTypes.string,
};

export default ProgressBar;
