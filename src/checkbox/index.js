import React from 'react';

import './index.less';

const index = props => {
  const { disabled } = props;
  return (
    <div>
      <div className="pomelo-checkbox">
        <input type="checkbox" id="pomelo-checkbox" className="pomelo-checkbox__native-control" />
        <div className="pomelo-checkbox__background">
          <svg class="pomelo-checkbox__checkmark" viewBox="0 0 24 24">
            <path
              class="pomelo-checkbox__checkmark-path"
              fill="none"
              d="M1.73,12.91 8.1,19.28 22.79,4.59"
            />
          </svg>
        </div>
      </div>
      <label htmlFor="pomelo-checkbox">Checkbox</label>
    </div>
  );
};

export default index;
