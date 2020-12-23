import styled from '@emotion/styled';
import { size, color } from '../../globalStyles/theme';

export const ItemBody = styled.div`
  width: ${size.portfolioWidth};
  background: ${color.skyBlue};
  border-radius: ${size.s1};
  border: 1px solid ${color.black};
  padding: ${size.s1} ${size.s2};
  margin-bottom: ${size.s1};
`;
export const Title = styled.h1`
  color: ${color.black};
  margin-right: ${size.s2};
  font-weight: 400;
`;
export const Story = styled.div`
  color: ${color.black};
  background: ${color.lightGray};
  border-radius: ${size.s1};
  border: 1px solid ${color.black};
  padding: ${size.s1};
  width: 384px;
`;
export const Button = styled.button`
  width: 50px;
  line-height: 1.5;
  border: 1px solid ${color.black};
  border-radius: ${size.s1};
  font-size: ${size.s2};
  font-family: inherit;
  cursor: pointer;
  margin-right: ${size.s2};
  :focus {
    outline: none;
  }
`;
export const ItemLink = {
  color: `${color.lightGray}`,
  fontSize: `${size.s3}`,
  textDecoration: 'none',
  fontWeight: 300,
};
