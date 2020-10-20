import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  Content,
  Guest,
  TitleIcon,
  TitleText,
  CheckIcon,
} from './styles';

const ListItem = ({ guest, toogleConfirmGuest }) => {
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
        {guest.isPresent ? (
          <CheckIcon name="checkbox-marked-circle" color="#219653" />
        ) : (
          <>
            {guest.isConfirmed ? (
              <CheckIcon name="check" color="#219653" />
            ) : (
              <CheckIcon name="close" color="#ff0000" />
            )}
          </>
        )}
        {/* <Progress status={guest.status} /> */}
      </Content>
    </Container>
  );
};

ListItem.propTypes = {
  guest: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string,
    isConfirmed: PropTypes.bool,
    isPresent: PropTypes.bool,
    isChild: PropTypes.bool,
  }).isRequired,
  toogleConfirmGuest: PropTypes.func.isRequired,
};

export default ListItem;
