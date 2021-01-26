import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import {
  AppBody,
  TitleText,
  RedDot,
  FadeInOut,
  Swipe,
  Input,
  ButtonWrapper,
  Button,
} from './styles';
import CustomSelect from '../customSelect/customSelect';

const LoadingAnimation = () => {
  return (
    <div
      style={{
        height: '32px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '32px',
      }}
    >
      <TitleText
        css={css`
          animation: ${FadeInOut} ease 4s;
        `}
      >
        inner
      </TitleText>
      <RedDot
        css={css`
          animation: ${FadeInOut} ease 2.1s, ${Swipe} ease 2s;
          animation-delay: 1.8s;
        `}
      />
    </div>
  );
};

const ScreenOne = (props) => {
  return (
    <ButtonWrapper>
      <Input
        type="text"
        placeholder="enter a goal"
        value={props.goalValue}
        onChange={props.setGoal}
      />
      <div style={{ width: '40px', height: '40px' }} />
      <CustomSelect
        placeholder="select a time frame"
        options={['today', 'this week', 'this month']}
        onSelectChange={props.setTime}
      />
      <Button
        onClick={() => props.onButtonClick(2)}
        disabled={props.goalValue && props.timeValue ? false : true}
      >
        Continue
      </Button>
    </ButtonWrapper>
  );
};

const ScreenTwo = (props) => {
  return (
    <ButtonWrapper>
      <div>{props.goalValue}</div>
      <div>{props.timeValue}</div>
      <Button>Share with inner circle</Button>
    </ButtonWrapper>
  );
};

const InnerApp = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [screenNum, setScreenNum] = useState(0);
  const [goalValue, setGoalValue] = useState('');
  const [timeValue, setTimeValue] = useState('');

  const setDisplay = () => {
    if (screenNum === 1) {
      return (
        <ScreenOne
          onButtonClick={(newVal) => setScreenNum(newVal)}
          setGoal={(event) => setGoalValue(event.target.value)}
          setTime={(newVal) => setTimeValue(newVal)}
          goalValue={goalValue}
          timeValue={timeValue}
        />
      );
    } else if (screenNum === 2) {
      return <ScreenTwo goalValue={goalValue} timeValue={timeValue} />;
    } else {
      return null;
    }
  };

  useEffect(() => {
    const id = setTimeout(() => {
      setIsLoading(false);
      setScreenNum(1);
    }, 4000);
    return () => clearTimeout(id);
  }, [isLoading]);

  return (
    <AppBody>
      {isLoading ? LoadingAnimation() : null}
      {setDisplay()}
    </AppBody>
  );
};

ScreenOne.propTypes = {
  goalValue: PropTypes.string,
  timeValue: PropTypes.string,
  setGoal: PropTypes.func,
  setTime: PropTypes.func,
  onButtonClick: PropTypes.func,
};
ScreenTwo.propTypes = {
  goalValue: PropTypes.string,
  timeValue: PropTypes.string,
  onButtonClick: PropTypes.func,
};

export default InnerApp;
