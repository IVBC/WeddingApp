import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const List = styled.FlatList.attrs(() => ({
  // onEndReachedThreshold: 0.3,
  showsVerticalScrollIndicator: false,
  // removeClippedSubviews: true,
  // initialNumToRender: 10,
  // maxToRenderPerBatch: 100,
  contentContainerStyle: { flexGrow: 1 },
}))`
  margin-top: 12px;
`;
