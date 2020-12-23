import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { Global, css } from '@emotion/react';
import styled from '@emotion/styled';
import { size, color } from '../globalStyles/theme';

const Wrapper = styled('div')`
  width: 100vw;
  height: 100vh;
  background: ${color.lightGray};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  font-family: helvetica;
  padding-top: ${size.s4};
  box-sizing: border-box;
`;
const Title = styled.h1`
  color: ${color.black};
  min-width: ${size.headingWidth};
  margin: ${size.s1};
`;
const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-bottom: ${size.s3};
`;
export const homeLink = {
  color: `${color.black}`,
  fontSize: `${size.s3}`,
  fontWeight: 300,
  paddingRight: `${size.s3}`,
};

const HomeLink = () => {
  return (
    <Link to="/" style={homeLink}>
      home
    </Link>
  );
};

const Layout = ({ children, name, hasHomeLink }) => {
  return (
    <Wrapper>
      <Global
        styles={css`
          body {
            margin: 0;
          }
        `}
      />
      <HeaderWrapper>
        {hasHomeLink ? HomeLink() : null}
        <Title>{name}</Title>
      </HeaderWrapper>
      {children}
    </Wrapper>
  );
};

Layout.propTypes = {
  children: PropTypes.any,
  name: PropTypes.string,
  hasHomeLink: PropTypes.bool,
};

export default Layout;
