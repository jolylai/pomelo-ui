import React from 'react';
import classnames from 'classnames';

import Icon from '../icon';

import './index.less';

const getClassNames = props => {
  const { prefixCls, size, shape, icon, src } = props;
  return classnames(`${prefixCls}-avatar`, {
    [`${prefixCls}-avatar-shape__circle`]: shape === 'circle',
    [`${prefixCls}-avatar-shape__square`]: shape === 'square',
    [`${prefixCls}-avatar-size__small`]: size === 'small',
    [`${prefixCls}-avatar-size__large`]: size === 'large',
    [`${prefixCls}-avatar-type__icon`]: !!icon,
    [`${prefixCls}-avatar-type__image`]: !!src,
  });
};

const index = props => {
  const { src, icon, children } = props;

  const avatarCls = getClassNames(props);

  if (src) {
    return (
      <span className={avatarCls}>
        <img src={src} />
      </span>
    );
  }

  if (icon) {
    return (
      <span className={avatarCls}>
        <Icon />
      </span>
    );
  }

  return <span className={avatarCls}>{children}</span>;
};

index.defaultProps = {
  prefixCls: 'pomelo',
  shape: 'circle',
};

export default index;
