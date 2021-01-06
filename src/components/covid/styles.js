import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { size, color } from '../../globalStyles/theme';

export const KeyWrapper = styled.div`
  width: 600px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;
export const KeyDot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: ${size.s1};
  margin-bottom: ${size.s1};
`;
export const Chart = styled.div`
  background: #f7fff7;
  border: 1px solid ${color.black};
`;
export const drawLine = keyframes`
from {
    stroke-dashoffset: 1072;
  }
  to {
    stroke-dashoffset: 0;
  }
`;
