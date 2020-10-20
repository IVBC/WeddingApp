import React, { memo } from 'react';
import PropTypes from 'prop-types';
// import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Content,
  Guest,
  TitleIcon,
  TitleText,
  CheckIcon,
} from './styles';
import colors from '~/styles/colors';

const ListItem = ({ guest, toogleConfirmGuest }) => {
  // const { navigate } = useNavigation();

  // const navigateToDetail = useCallback(() => navigate('Guests', { guest }), [
  //   navigate,
  //   guest,
  // ]);

  // const formattedDate = useMemo(() => {
  //   return format(parseISO(guest.created_at), 'MM/dd/yyyy');
  // }, [guest.created_at]);

  return (
    <Container onPress={() => toogleConfirmGuest(guest.id)}>
      <Content>
        <Guest>
          <TitleIcon isChild={guest.isChild} />
          <TitleText>{guest.name}</TitleText>
        </Guest>
        {guest.isConfirmed ? (
          <CheckIcon name="check" color="#219653" />
        ) : (
          <>
            {guest.isConfirmed === null ? (
              <CheckIcon name="window-minimize" color={colors.grey} />
            ) : (
              <CheckIcon name="close" color="#ff0000" />
            )}
          </>
        )}
      </Content>
    </Container>
  );
};

ListItem.propTypes = {
  guest: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string,
    isConfirmed: PropTypes.bool,
    isChild: PropTypes.bool,
  }).isRequired,
  toogleConfirmGuest: PropTypes.func.isRequired,
};

export default memo(ListItem);
