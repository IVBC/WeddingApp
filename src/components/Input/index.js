import React, {
  useRef,
  useEffect,
  useState,
  useImperativeHandle,
  useCallback,
  forwardRef,
} from 'react';
import PropTypes from 'prop-types';
import { useField } from '@unform/core';

import { Container, TInput, TextError, Icon } from './styles';
import colors from '~/styles/colors';

const Input = ({ name, style, icon, ...rest }, ref) => {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue = '', error } = useField(name);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!inputRef.current._lastNativeText);
  }, []);

  useImperativeHandle(ref, () => ({
    focus() {
      inputRef.current.focus();
    },
  }));

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: '_lastNativeText',
      getValue(_ref) {
        return _ref._lastNativeText || '';
      },
      setValue(_ref, value) {
        _ref.setNativeProps({ text: value });
        _ref._lastNativeText = value;
      },
      clearValue(_ref) {
        _ref.setNativeProps({ text: '' });
        _ref._lastNativeText = '';
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container style={style} isFocused={isFocused} isErrored={!!error}>
      {icon && (
        <Icon
          name={icon}
          size={20}
          color={
            error
              ? colors.error
              : isFocused || isFilled
              ? colors.primary
              : colors.fontLight
          }
        />
      )}

      <TInput
        {...rest}
        ref={inputRef}
        defaultValue={defaultValue}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />

      {error && <TextError>{error}</TextError>}
    </Container>
  );
};

export default forwardRef(Input);

Input.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  icon: PropTypes.string,
};

Input.defaultProps = {
  style: {},
  label: null,
  icon: null,
};
