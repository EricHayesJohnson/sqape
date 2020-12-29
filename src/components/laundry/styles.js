import styled from '@emotion/styled';
import { size, color } from '../../globalStyles/theme';

export const Body = styled.div`
  background: ${color.gray};
  padding: ${size.s4};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Spinner = styled.div`
  position: absolute;
  width: 150px;
  height: 150px;
  ${'' /* margin-top to account for the off center image */}
  margin-top: 36px;
  border: 12px solid ${color.black};
  border-top: 12px solid ${color.skyBlue};
  border-radius: 50%;

  transition-property: transform;
  animation-name: spin;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
export const ToggleWrapper = styled.div`
  position: absolute;
  top: 132px;
  width: 580px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;
