import React from 'react';

import './index.less';

const index = () => {
  return (
    <label>
      <div className={`pomelo-radio`}>
        <input type="radio" className="pomelo-radio__native-control" />
        <div className="pomelo-radio__background">
          <div className="pomelo-radio__outer-circle" />
          <div className="pomelo-radio__inner-circle" />
        </div>
      </div>
      <span>radio</span>
    </label>
  );
};

export default index;
