import React from 'react';
import cx from 'classnames';

import './index.less';

const Icon = props => {
  const { type, className, spin, ...otherProps } = props;
  const cls = cx(className, {
    fab: type,
    [`fa-${type}`]: type,
    'fa-spin': spin,
  });

  return <i className={cls} {...otherProps} />;
};

Icon.defaultProps = {
  className: '',
  spin: false,
};

export default React.memo(Icon);
