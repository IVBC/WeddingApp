import React, { memo, useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';

import {
  Container,
  Info,
  TableContainer,
  TableIndicator,
  TableName,
  NumberTable,
  DetailContainer,
  Row,
  DataContainer,
  DataText,
  DataValue,
  ChildrenContainer,
  ChildrenText,
  ChildrenValue,
  Icon,
} from './styles';

const TableListItem = ({
  data: { numberTable, absents, countChilds, presents, total },
}) => {
  const { navigate } = useNavigation();

  const navigateToDetail = useCallback(
    () => navigate('DetailControl', { numberTable }),
    [navigate]
  );
  return (
    <Container onPress={navigateToDetail}>
      <Info>
        <TableContainer>
          <TableIndicator>
            <TableName>MESA</TableName>
            <NumberTable>
              {numberTable < 10 ? `0${numberTable}` : numberTable}
            </NumberTable>
          </TableIndicator>
        </TableContainer>
        <DetailContainer>
          <Row>
            <DataContainer>
              <DataText>Total</DataText>
              <DataValue> {total < 10 ? `0${total}` : total}</DataValue>
            </DataContainer>
            <DataContainer>
              <DataText>Presentes</DataText>
              <DataValue color="#37930C">
                {presents < 10 ? `0${presents}` : presents}
              </DataValue>
            </DataContainer>
            <DataContainer>
              <DataText>Ausentes</DataText>
              <DataValue color="#E00202">
                {absents < 10 ? `0${absents}` : absents}
              </DataValue>
            </DataContainer>
          </Row>
          <ChildrenContainer>
            <ChildrenText>Total de crianças:</ChildrenText>
            <ChildrenValue>{countChilds}</ChildrenValue>
          </ChildrenContainer>
        </DetailContainer>
      </Info>
      <Icon name="chevron-right" />
    </Container>
  );
};

TableListItem.propTypes = {
  data: PropTypes.shape({
    numberTable: PropTypes.number,
    absents: PropTypes.number,
    countChilds: PropTypes.number,
    presents: PropTypes.number,
    total: PropTypes.number,
  }).isRequired,
};

export default TableListItem;
