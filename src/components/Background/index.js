import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header';

import { Container, Content, StatusBar } from './styles';

export default function Background({ children }) {
  return (
    <Container>
      <StatusBar />
      {/* <StyledBackground /> */}
      <Header />
      <Content>{children}</Content>
    </Container>
  );
}

Background.propTypes = {
  children: PropTypes.element.isRequired,
};
