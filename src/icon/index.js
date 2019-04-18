import React from 'react';
import classnames from 'classnames';

const getClassnames = props => {
  const { type, spin, className } = props;
  const cls = classnames('fa', {
    'fa-spin': spin,
    [className]: !!className,
    [`fa-${type}`]: !!type,
  });
  return cls;
};

const Icon = props => {
  const { color, size } = props;

  const cls = getClassnames(props);
  return <i class={cls} style={{ fontSize: size, color }} />;
};

Icon.defaultProps = {
  size: 26,
};

export default React.memo(Icon);
