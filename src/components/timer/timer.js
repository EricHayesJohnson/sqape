import React, { useState, useEffect } from 'react';
import { Body, TimerButton, Display, ButtonWrapper } from './styles';
import resetText from '../../images/reset.svg';
import { padWithZero } from '../../helper/formatting';

const Timer = () => {
  const MAX_TIME = 6000;
  const ONE_MINUTE = 60;
  const ONE_SECOND = 1;

  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [minuteHasReset, setMinuteHasReset] = useState(false);
  const [secondHasReset, setSecondHasReset] = useState(false);

  // count down functionality
  useEffect(() => {
    const id = setInterval(() => {
      if (!isRunning || time <= 0) return;
      setTime(time - 1);
      if (time - 1 === 0) {
        setIsRunning(false);
      }
    }, 1000);

    return () => clearInterval(id);
  }, [time, isRunning]);

  // reset functionality
  useEffect(() => {
    if (minuteHasReset && secondHasReset) {
      setTime(0);
      setIsRunning(false);
      setMinuteHasReset(false);
      setSecondHasReset(false);
    }
  }, [minuteHasReset, secondHasReset]);

  const calculateMinutes = () => padWithZero(Math.floor(time / ONE_MINUTE));
  const calculateSeconds = () => padWithZero(time % ONE_MINUTE);

  const handleMinuteClick = (event) => {
    if (event.metaKey && event.target.id === 'minutes') {
      setMinuteHasReset(true);
    } else if (MAX_TIME - time > ONE_MINUTE) {
      setTime(time + ONE_MINUTE);
    }
  };

  const handleSecondClick = (event) => {
    if (event.metaKey && event.target.id === 'seconds') {
      setSecondHasReset(true);
    } else if (MAX_TIME - time > ONE_SECOND) {
      setTime(time + ONE_SECOND);
    }
  };

  return (
    <Body>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Display>
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'center',
              paddingTop: '8px',
            }}
          >
            <div style={{ fontSize: '156px', width: '180px' }}>
              {calculateMinutes()}
            </div>
            <div
              style={{ fontSize: '100px', marginTop: '12px', width: '112px' }}
            >
              {calculateSeconds()}
            </div>
          </div>
        </Display>
      </div>
      <img style={{ margin: '8px 0 0 90px' }} src={resetText} alt="reset" />
      <ButtonWrapper>
        <TimerButton
          id="minutes"
          style={{ width: '80px', height: '80px' }}
          onClick={handleMinuteClick}
        >
          M
        </TimerButton>
        <TimerButton
          id="seconds"
          style={{ width: '80px', height: '80px' }}
          onClick={handleSecondClick}
        >
          S
        </TimerButton>
        <TimerButton
          style={{ width: '100px', height: '100px' }}
          onClick={() => {
            if (time > 0) setIsRunning(!isRunning);
          }}
        >
          {isRunning ? 'Stop' : 'Start'}
        </TimerButton>
      </ButtonWrapper>
    </Body>
  );
};

export default Timer;
