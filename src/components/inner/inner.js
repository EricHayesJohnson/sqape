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
  Wrapper,
  Button,
  Text,
  ReviewText,
  Strike,
} from './styles';
import Toggle from '../toggle/toggle';
import CustomSelect from '../customSelect/customSelect';

const strikeThru = css`
  position: relative;
  &:after {
    content: '';
    position: absolute;
    display: block;
    width: 100%;
    height: 6px;
    margin-top: -24px;
    background: #ff6262;
    transform-origin: center left;
    animation: ${Strike} 0.6s cubic-bezier(0.55, 0, 0.1, 1) 1;
  }
`;

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
    <>
      <Wrapper>
        <Input
          type="text"
          placeholder="Enter a goal"
          value={props.goalValue}
          onChange={props.setGoal}
        />
        <div style={{ width: '40px', height: '40px' }} />
        <CustomSelect
          placeholder="Select a time"
          options={['Today', 'This week', 'This month']}
          onSelectChange={props.setTime}
        />
      </Wrapper>
      <Button
        onClick={() => props.onButtonClick(2)}
        disabled={props.goalValue && props.timeValue ? false : true}
      >
        Continue
      </Button>
    </>
  );
};

const ScreenTwo = (props) => {
  const [isComplete, setIsComplete] = useState(false);
  return (
    <>
      <Wrapper>
        <Text>Your goal</Text>
        <ReviewText css={isComplete ? '' : strikeThru}>
          {props.goalValue}
        </ReviewText>
        <Text>Complete by</Text>
        <ReviewText>{props.timeValue}</ReviewText>
        <Text>Mark complete</Text>
        <div style={{ alignSelf: 'start', marginTop: '8px' }}>
          <Toggle color="#ff6262" onChange={() => setIsComplete(!isComplete)} />
        </div>
      </Wrapper>
      <Button onClick={() => props.onButtonClick(3)} disabled={isComplete}>
        Share
      </Button>
    </>
  );
};

const ScreenThree = () => {
  return (
    <>
      <Wrapper>
        <Text>To be continued...</Text>
      </Wrapper>
    </>
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
      return (
        <ScreenTwo
          onButtonClick={(newVal) => setScreenNum(newVal)}
          goalValue={goalValue}
          timeValue={timeValue}
        />
      );
    } else if (screenNum === 3) {
      return <ScreenThree />;
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
