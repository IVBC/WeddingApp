import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import { number } from 'yup';
import ListItem from './TableListItem';

import { Container, List } from './styles';

const TableList = ({ data: tables }) => {
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
  return (
    <Container>
      <List
        data={tables}
        keyExtractor={(table) => String(table.numberTable)}
        // onEndReached={loadGuests}
        // ListFooterComponent={moreLoading}
        // ListEmptyComponent={renderEmpty}
        renderItem={({ item: table }) => <ListItem data={table} />}
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
};

export default TableList;
