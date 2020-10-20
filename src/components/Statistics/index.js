import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  Row,
  Data,
  DataText,
  DataValue,
  DataChildren,
  DataValueChildren,
} from './styles';

const Statistics = ({ data: { total, presents, countChilds, absents } }) => {
  return (
    <Container>
      <Row>
        <Data>
          <DataText>Total</DataText>
          <DataValue> {total < 10 ? `0${total}` : total}</DataValue>
        </Data>
        <Data color="#37930C">
          <DataText>Presentes</DataText>
          <DataValue color="#37930C">
            {presents < 10 ? `0${presents}` : presents}
          </DataValue>
        </Data>
        <Data color="#E00202">
          <DataText>Ausentes</DataText>
          <DataValue color="#E00202">
            {absents < 10 ? `0${absents}` : absents}
          </DataValue>
        </Data>
      </Row>
      <DataChildren>
        <DataText>Total de crianças:</DataText>
        <DataValueChildren> {countChilds}</DataValueChildren>
      </DataChildren>
    </Container>
  );
};

export default Statistics;

Statistics.propTypes = {
  data: PropTypes.shape({
    total: PropTypes.number,
    presents: PropTypes.number,
    countChilds: PropTypes.number,
    absents: PropTypes.number,
  }).isRequired,
};
