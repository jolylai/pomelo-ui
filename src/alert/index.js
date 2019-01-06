import React from 'react';
import { useState } from 'react';
import classnames from 'classnames';

// import Icon from '../icon';

import './index.less';

const alertIcon = {
  success: 'checkmark',
  info: 'volume-up-outline',
};

const Alert = props => {
  const {
    message,
    description,
    type,
    closable,
    prefixCls,
    afterClose,
    showIcon,
    icon,
    closeText,
  } = props;

  const checkAlertType = alertType => alertType === type;
  const alertCls = classnames(prefixCls, {
    [`${prefixCls}-info`]: checkAlertType('info'),
    [`${prefixCls}-success`]: checkAlertType('success'),
    [`${prefixCls}-warning`]: checkAlertType('warning'),
    [`${prefixCls}-error`]: checkAlertType('error'),
    [`${prefixCls}-with-description`]: description,
  });

  const alertProps = {
    className: alertCls,
  };

  const [close, setClose] = useState(false);

  if (close) {
    if (typeof afterClose === 'function') afterClose();
    return null;
  }

  return (
    <div {...alertProps}>
      {showIcon && <i className={`${prefixCls}-icon`}>{icon ? icon : 'defalut'}</i>}
      <div>{message}</div>
      <div className={`${prefixCls}-description`}>{description}</div>
      {closable && (
        <a className={`${prefixCls}-close-icon`} onClick={() => setClose(true)}>
          {closeText ? closeText : 'x'}
        </a>
      )}
    </div>
  );
};

Alert.defaultProps = {
  prefixCls: 'pomelo-alert',
  type: 'info',
};

export default Alert;
