import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { number } from 'yup';
import { Text } from 'react-native';
import Shimmer from '~/components/Shimmer';
import ListItem from './TableListItem';

import { Container, List } from './styles';
import colors from '~/styles/colors';

const TableList = ({ data: tables, loading }) => {
  // const [tables, setTables] = useState([
  //   {
  //     id: '123455',
  //     number_table: 1,
  //     total: 11,
  //     presents: 8,
  //     absents: 3,
  //     totalChildren: 3,
  //   },
  //   {
  //     id: '123452',
  //     number_table: 4,
  //     total: 12,
  //     presents: 10,
  //     absents: 2,
  //     totalChildren: 1,
  //   },
  //   {
  //     id: '123451',
  //     number_table: 14,
  //     total: 13,
  //     presents: 6,
  //     absents: 7,
  //     totalChildren: 0,
  //   },
  // ]);

  const renderFooter = useCallback(() => {
    if (!loading) return null;
    return (
      <Shimmer
        visible={!loading}
        shimmerColors={['#F2F5FF', '#CED4ED', '#F2F5FF']}
        style={{ width: '100%', height: 8, borderRadius: 25 }}
      >
        <Text>Loading</Text>
      </Shimmer>
    );
  }, [loading]);

  return (
    <Container>
      <List
        data={tables}
        keyExtractor={(table) => String(table.numberTable)}
        // onEndReached={loadGuests}
        // ListFooterComponent={moreLoading}
        // ListEmptyComponent={renderEmpty}
        renderItem={({ item: table }) => {
          if (loading) return null;
          return <ListItem data={table} />;
        }}
        ListFooterComponent={renderFooter}
      />
    </Container>
  );
};

TableList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      numberTable: number,
      absents: number,
      countChilds: number,
      presents: number,
      total: number,
    })
  ).isRequired,
  loading: PropTypes.bool.isRequired,
};

export default TableList;
