import styled from '@emotion/styled';
import { color } from '../../globalStyles/theme';

export const ToggleInput = styled.input`
  appearance: none;
  width: 62px;
  height: 32px;
  display: inline-block;
  position: relative;
  border-radius: 50px;
  outline: none;
  cursor: pointer;
  background-color: ${color.darkGray};
  transition: background-color ease 0.4s;
  &:before {
    content: '';
    display: block;
    position: absolute;
    width: 28px;
    height: 28px;
    background: white;
    left: 2px;
    top: 2px;
    border-radius: 50%;
    transition: all 0.4s;
  }
  &:checked:before {
    left: 32px;
  }
`;
export const ToggleLabel = styled.label`
  display: block;
  overflow: hidden;
  cursor: pointer;
`;
