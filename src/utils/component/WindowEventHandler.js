import React, { useEffect } from 'react';

const WindowEventHandler = props => {
  const { eventName, callback, useCapture = false } = props;
  useEffect(() => {
    window.addEventListener(eventName, callback, useCapture);
    return () => {
      window.removeEventListener(eventName, callback, useCapture);
    };
  });
  return null;
};

export default React.memo(WindowEventHandler);
