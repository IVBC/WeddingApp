import React, { memo, useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useNavigation } from '@react-navigation/native';
import { format, parseISO } from 'date-fns';

import Progress from '~/components/ProgressSteps';

import {
  Container,
  Content,
  Guest,
  TitleIcon,
  TitleText,
  CheckIcon,
} from './styles';

const ListItem = ({ guest }) => {
  const { navigate } = useNavigation();

  const navigateToDetail = useCallback(() => navigate('Guests', { guest }), [
    navigate,
    guest,
  ]);

  // const formattedDate = useMemo(() => {
  //   return format(parseISO(guest.created_at), 'MM/dd/yyyy');
  // }, [guest.created_at]);

  return (
    <Container>
      <Content>
        <Guest>
          <TitleIcon />
          <TitleText>{guest.name}</TitleText>
        </Guest>
        {guest.isConfirmed ? (
          <CheckIcon name="check" color="#219653" />
        ) : (
          <CheckIcon name="close" color="#ff0000" />
        )}
        {/* <Progress status={guest.status} /> */}
      </Content>
    </Container>
  );
};

ListItem.propTypes = {
  guest: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default memo(ListItem);
