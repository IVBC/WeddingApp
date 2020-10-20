import React from 'react';
import PropTypes from 'prop-types';
import { Container, LegendOption, LegendIcon, LegendText } from './styles';
import colors from '~/styles/colors';

const Legend = ({ disabledIsPresent }) => {
  return (
    <Container>
      {!disabledIsPresent && (
        <LegendOption>
          <LegendIcon name="checkbox-marked-circle" color="#219653" />
          <LegendText>Presente</LegendText>
        </LegendOption>
      )}
      <LegendOption>
        <LegendIcon name="check" color="#219653" />
        <LegendText>Confirmado</LegendText>
      </LegendOption>
      <LegendOption>
        <LegendIcon name="close" color="#ff0000" />
        <LegendText>Recusado</LegendText>
      </LegendOption>
      <LegendOption>
        <LegendIcon name="window-minimize" color={colors.grey} />
        <LegendText>Pendente</LegendText>
      </LegendOption>
    </Container>
  );
};

export default Legend;

Legend.propTypes = {
  disabledIsPresent: PropTypes.bool,
};

Legend.defaultProps = {
  disabledIsPresent: false,
};
