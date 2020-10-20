import React, { memo, useCallback } from 'react';
import Proptypes from 'prop-types';

import { Container, Title, Content, Button, ButtonText } from './styles';

const FilterGuest = ({ typePresent, setTypePresent }) => {
  const handlePresent = useCallback(() => {
    setTypePresent(true);
  }, [setTypePresent]);

  const handleAbselent = useCallback(() => {
    setTypePresent(false);
  }, [setTypePresent]);

  return (
    <Container>
      <Title>CONVIDADOS</Title>
      <Content>
        <Button onPress={handlePresent}>
          <ButtonText selected={typePresent}>Presentes</ButtonText>
        </Button>
        <Button onPress={handleAbselent}>
          <ButtonText selected={!typePresent}>Ausentes</ButtonText>
        </Button>
      </Content>
    </Container>
  );
};

FilterGuest.propTypes = {
  typePresent: Proptypes.bool.isRequired,
  setTypePresent: Proptypes.func.isRequired,
};

export default memo(FilterGuest);
