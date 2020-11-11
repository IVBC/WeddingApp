import React from 'react';
import PropTypes from 'prop-types';

import Shimmer from '~/components/Shimmer';

import {
  Container,
  Row,
  Data,
  DataText,
  DataValue,
  DataChildren,
  DataValueChildren,
} from './styles';

const Statistics = ({
  data: { total, presents, countChilds, absents },
  loading,
}) => {
  return (
    <Container>
      <Row>
        <Data>
          <DataText>Total</DataText>
          <Shimmer
            visible={!loading}
            shimmerColors={['#F2F5FF', '#CED4ED', '#F2F5FF']}
            style={{ height: 40, width: '100%', borderRadius: 25 }}
          >
            <DataValue>{total < 10 ? `0${total}` : total}</DataValue>
          </Shimmer>
        </Data>
        <Data color="#37930C">
          <DataText>Presentes</DataText>
          <Shimmer
            visible={!loading}
            shimmerColors={['#F2F5FF', '#D3EDCE', '#F2F5FF']}
            style={{ height: 40, width: '100%', borderRadius: 25 }}
          >
            <DataValue color="#37930C">
              {presents < 10 ? `0${presents}` : presents}
            </DataValue>
          </Shimmer>
        </Data>
        <Data color="#E00202">
          <DataText>Ausentes</DataText>
          <Shimmer
            visible={!loading}
            shimmerColors={['#F2F5FF', '#EDCECE', '#F2F5FF']}
            style={{ height: 40, width: '100%', borderRadius: 25 }}
          >
            <DataValue color="#E00202">
              {absents < 10 ? `0${absents}` : absents}
            </DataValue>
          </Shimmer>
        </Data>
      </Row>
      <DataChildren>
        <DataText>Total de crianças:</DataText>

        <Shimmer
          visible={!loading}
          shimmerColors={['#F2F5FF', '#CED4ED', '#F2F5FF']}
          style={{ width: 35, marginLeft: 4, borderRadius: 25 }}
        >
          <DataValueChildren> {countChilds}</DataValueChildren>
        </Shimmer>
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
  loading: PropTypes.bool.isRequired,
};
