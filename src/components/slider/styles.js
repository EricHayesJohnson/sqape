import styled from '@emotion/styled';
import { color } from '../../globalStyles/theme';

export const SliderInput = styled.input`
  -webkit-appearance: none;
  width: 100%;
  background: transparent;
  &::-ms-track {
    width: 100%;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }
  &:focus {
    outline: none;
  }

  /* Chrome */
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    background-color: #f7fff7;
    height: 20px;
    width: 20px;
    border: 2px solid ${color.darkGray};
    border-radius: 50%;
    cursor: pointer;
    margin-top: -9px;
    transition: box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    &:hover {
      box-shadow: 0px 0px 0px 8px rgba(25, 118, 210, 0.16);
    }
    &:active {
      box-shadow: 0px 0px 0px 14px rgba(25, 118, 210, 0.16);
    }
  }
  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 2px;
    cursor: pointer;
    border-radius: 1px;
    background-color: ${color.darkGray};
  }

  /* Firefox */
  &::-moz-range-thumb {
    background-color: #f7fff7;
    height: 20px;
    width: 20px;
    border: 2px solid ${color.darkGray};
    border-radius: 50%;
    cursor: pointer;
    margin-top: -9px;
    transition: box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    &:hover {
      box-shadow: 0px 0px 0px 6px rgba(25, 118, 210, 0.16);
    }
    &:active {
      box-shadow: 0px 0px 0px 10px rgba(25, 118, 210, 0.16);
    }
  }
  &::-moz-range-track {
    width: 100%;
    height: 2px;
    cursor: pointer;
    border-radius: 1px;
    background-color: ${color.darkGray};
  }
`;
