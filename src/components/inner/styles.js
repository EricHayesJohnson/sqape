import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { size } from '../../globalStyles/theme';

const appColors = {
  black: '#434659',
  grey: '#c3c3c3',
  red: '#ff6262',
};

export const AppBody = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: ${appColors.black};
`;
export const TitleText = styled.div`
  color: ${appColors.grey};
  font-family: Helvetica Neue;
  font-weight: 600;
  font-size: ${size.s4};
  letter-spacing: ${size.s3};
  padding-left: 16px;
  opacity: 0;
`;
export const RedDot = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50px;
  background-color: ${appColors.red};
  margin-top: 8px;
  opacity: 0;
  transform: translate3d(-274px, 0, 0);
`;
export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: ${size.s4};
  width: 84%;
`;
export const Input = styled.input`
  width: 100%;
  height: 62px;
  box-sizing: border-box;
  margin-top: 32px;
  background-color: ${appColors.black};
  border: 2px solid ${appColors.grey};
  border-radius: 10px;
  font-family: Helvetica Neue;
  font-weight: 400;
  font-size: ${size.s3};
  padding-left: 32px;
  color: ${appColors.grey};
  &::placeholder {
    color: ${appColors.grey};
    font-size: ${size.s3};
  }
  &:focus {
    outline: none;
    border: 2px solid ${appColors.red};
  }
`;
export const Button = styled.button`
  width: 300px;
  margin-top: 265px;
  line-height: 1.5;
  font-weight: 400;
  color: white;
  background-color: ${appColors.grey};
  border: 1px solid ${appColors.grey};
  border-radius: 10px;
  padding: ${size.s1}; ${size.s2};;
  cursor: pointer;
  font-size: ${size.s3};
  &:focus {
    outline: none;
  }
  &:disabled {
    border: 1px solid #949494;
    background-color: #949494;
    color: $dg-white;
    cursor: default;
    opacity: 0.5;
  }
}
`;
export const FadeInOut = keyframes`
    0% {
      opacity: 0;
    }
    80% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
`;
export const Swipe = keyframes`
 0% {
    transform: translate3d(0,-30px,0);
  }
  50% {
    transform: translate3d(0,0,0);
  }
  60% {
    transform: translate3d(0,0,0);
  }
  100% {
    transform: translate3d(-274px,0,0);
  }
`;
