import React from 'react';
import classnames from 'classnames';

import  Icon  from '../icon';

import './index.less';

const Button = props => {
  const {
    type,
    loading,
    disabled,
    onClick,
    prefixCls,
    size,
    children,
    block,
    href,
    target,
    icon,
  } = props;

  const checkBtnType = btnType => type === btnType;
  const checkBtnSize = btnSize => btnSize === size;
  const btnCls = classnames(prefixCls, {
    [`${prefixCls}-primary`]: checkBtnType('primary'),
    [`${prefixCls}-success`]: checkBtnType('success'),
    [`${prefixCls}-warning`]: checkBtnType('warning'),
    [`${prefixCls}-danger`]: checkBtnType('danger'),
    [`${prefixCls}-info`]: checkBtnType('info'),
    [`${prefixCls}-link`]: checkBtnType('link'),
    [`${prefixCls}-dashed`]: checkBtnType('dashed'),
    [`${prefixCls}-danger`]: checkBtnType('danger'),
    [`${prefixCls}-sm`]: checkBtnSize('small'),
    [`${prefixCls}-lg`]: checkBtnSize('large'),
    [`${prefixCls}-disabled`]: disabled || loading,
    [`${prefixCls}-block`]: block,
  });

  const buttonProps = {
    onClick,
    className: btnCls,
  };

  if (href || target) {
    return (
      <a {...buttonProps} href={href} target={target}>
        <span>{children}</span>
      </a>
    );
  }

  return (
    <button {...buttonProps}>
      {icon && <Icon type={icon} />}
      {loading && <Icon className="fas fa-spinner" spin />}
      <span>{children}</span>
    </button>
  );
};

Button.defaultProps = {
  prefixCls: 'pomelo-btn',
  loading: false,
  block: false,
};
export default Button;
