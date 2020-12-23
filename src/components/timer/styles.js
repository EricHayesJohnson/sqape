import styled from '@emotion/styled';

export const Body = styled.div`
  width: 460px;
  height: 450px;
  background: #c0daab;
  border-radius: 110px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
    inset -6px -3px 51px rgba(255, 255, 255, 0.23),
    inset -6px -3px 51px rgba(0, 0, 0, 0.2),
    inset 8px 2px 8px rgba(255, 255, 255, 0.25);
`;
export const Display = styled.div`
  width: 345px;
  background: #959b9b;
  border-radius: 40px;
  box-shadow: inset 2px 4px 2px rgba(0, 0, 0, 0.25);
  margin-top: 76px;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 345px;
  margin-left: 56px;
`;
export const TimerButton = styled.button`
  background: #e1e4ed;
  border-radius: 50%;
  border: 1px solid black;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  vertical-align: middle;
  text-decoration: none;
  cursor: pointer;
  :active {
    box-shadow: 0px 0px 2px;
  }
  :focus {
    outline: none;
  }
`;
