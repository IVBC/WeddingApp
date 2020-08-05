import React, { memo, useMemo, useCallback } from 'react';
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

const TableListItem = () => {
  const { navigate } = useNavigation();

  const navigateToDetail = useCallback(
    () => navigate('DetailControl', { oi: 'table' }),
    [navigate]
  );
  return (
    <Container onPress={navigateToDetail}>
      <Info>
        <TableContainer>
          <TableIndicator>
            <TableName>MESA</TableName>
            <NumberTable>05</NumberTable>
          </TableIndicator>
        </TableContainer>
        <DetailContainer>
          <Row>
            <DataContainer>
              <DataText>Total</DataText>
              <DataValue>11</DataValue>
            </DataContainer>
            <DataContainer>
              <DataText>Presentes</DataText>
              <DataValue color="#37930C">11</DataValue>
            </DataContainer>
            <DataContainer>
              <DataText>Ausentes</DataText>
              <DataValue color="#E00202">11</DataValue>
            </DataContainer>
          </Row>
          <ChildrenContainer>
            <ChildrenText>Total de crianças:</ChildrenText>
            <ChildrenValue>2</ChildrenValue>
          </ChildrenContainer>
        </DetailContainer>
      </Info>
      <Icon name="chevron-right" />
    </Container>
  );
};

export default TableListItem;
