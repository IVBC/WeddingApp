import React from 'react';
import { View } from 'react-native';

import {
  Container,
  Row,
  Data,
  DataText,
  DataValue,
  DataChildren,
  DataValueChildren,
} from './styles';

const Statistics = () => {
  return (
    <Container>
      <Row>
        <Data>
          <DataText>Total</DataText>
          <DataValue>167</DataValue>
        </Data>
        <Data color="#37930C">
          <DataText>Presentes</DataText>
          <DataValue color="#37930C">135</DataValue>
        </Data>
        <Data color="#E00202">
          <DataText>Ausentes</DataText>
          <DataValue color="#E00202">32</DataValue>
        </Data>
      </Row>
      <DataChildren>
        <DataText>Total de crianças:</DataText>
        <DataValueChildren> 7</DataValueChildren>
      </DataChildren>
    </Container>
  );
};

export default Statistics;
