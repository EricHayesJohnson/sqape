import styled from '@emotion/styled';
import { color } from '../../globalStyles/theme';

export const Wrapper = styled.div`
  position: absolute;
  width: 200px;
  height: 22px;
  top: 160px;
  background: ${color.gray};
  border-radius: 10px;
  margin-top: 32px;
  border: 6px solid ${color.black};
`;
export const Progress = styled.div`
  height: 100%;
  border-radius: 4px;
  transition: width 2s;
`;
