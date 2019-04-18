import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const useRipple = ref => {
  useEffect(() => {
    if (ref.current) {
      console.log('ref.current: ', ref.current);
      // ref.current.addEventListener('click', e => {
      //   console.log('click');
      // });
    }
  }, []);
};

const index = props => {
  const ref = useRef();
  console.log('ref: ', ref);

  useRipple(ref);
  return <div ref={ref}>button</div>;
};

index.propTypes = {};

export default index;
