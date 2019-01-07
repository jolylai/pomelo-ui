import React from 'react';
import classnames from 'classnames';

const Content = props => {
  const { prefixCls } = props;
  console.log('props: ', props);
  const contentCls = classnames(`${prefixCls}-content`);
  return <div className={contentCls}>{props.children}</div>;
};

Content.defaultProps = {
  prefixCls: 'pomelo-popover',
};

export default Content;
