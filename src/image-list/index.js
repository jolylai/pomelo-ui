import React from 'react';
import classnames from 'classnames';

import './style/index.less';

const index = props => {
  const { prefixCls } = props;
  return (
    <ul className={`${prefixCls}-image-list ${prefixCls}-image-list-standard`}>
      <li className={`${prefixCls}-image-list-item`}>
        <div className={`${prefixCls}-image-list-image-container`}>
          <img
            className={`${prefixCls}-image-list-image`}
            src="https://gradientjoy.com/200x300"
            alt="image"
          />
        </div>
        <div className={`${prefixCls}-image-list-supporting`}>
          <span className={`${prefixCls}-image-list-label`}>Text label</span>
        </div>
      </li>
      <li>
        <div>
          <img src="https://gradientjoy.com/300x400?id=30" alt="image" />
        </div>
        <div>
          <span>Text label</span>
        </div>
      </li>
    </ul>
  );
};

index.defaultProps = {
  prefixCls: 'pomelo',
};

export default index;
