import React, { useState } from 'react';
import { View } from 'react-native';

import ListItem from './TableListItem';

import { Container, List } from './styles';

const TableList = () => {
  const [tables, setTables] = useState([
    {
      id: '123455',
      number_table: 1,
      total: 11,
      presents: 8,
      absents: 3,
      totalChildren: 3,
    },
    {
      id: '123452',
      number_table: 4,
      total: 12,
      presents: 10,
      absents: 2,
      totalChildren: 1,
    },
    {
      id: '123451',
      number_table: 14,
      total: 13,
      presents: 6,
      absents: 7,
      totalChildren: 0,
    },
  ]);
  return (
    <Container>
      <List
        data={tables}
        keyExtractor={(table) => String(table.id)}
        // onEndReached={loadGuests}
        // ListFooterComponent={moreLoading}
        // ListEmptyComponent={renderEmpty}
        renderItem={({ item: table }) => <ListItem dataTable={table} />}
      />
    </Container>
  );
};

export default TableList;
