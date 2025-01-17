import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './button.module.scss';

const Button = ({
  variant = 'primary',
  cornerDecoration = false,
  fullWidth = false,
  children,
  ...props
}) => {
  return (
    <button
      className={classNames(
        styles.button,
        {
          [styles['button--primary']]: variant === 'primary',
          [styles['button--outlined']]: variant === 'outlined',
          'w-full md:w-auto': fullWidth, // <-- čia keičiam iš sm į md
        }
      )}
      style={{
        borderRadius: cornerDecoration ? '16px 16px 16px 0px' : '16px',
      }}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'outlined']),
  cornerDecoration: PropTypes.bool,
  fullWidth: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Button;
