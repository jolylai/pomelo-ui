import React, { useState } from 'react';

import getViewportSize from '../utils/dom/getViewportSize';
import { WindowEventHandler } from '../utils/component';

const Affix = props => {
  const { prefixCls, offsetTop, offsetBottom, zIndex, placeHoldClassName, children } = props;

  const [width, setWidth] = useState(null);
  const [height, setHeight] = useState(null);
  const setWidthAndHeight = () => {
    const element = document.querySelector(`.${prefixCls}`);
    setWidth(element.offsetWidth);
    setHeight(element.offsetHeight);
  };
  const resetWidthAndHeight = () => {
    setHeight(null);
    setWidth(null);
  };

  const [affix, setAffix] = useState(false);
  const [position, setPosition] = useState('static');
  const pin = () => {
    setAffix(true);
    setWidthAndHeight();
    setPosition('fixed');
  };

  const unpin = () => {
    setAffix(false);
    resetWidthAndHeight();
    setPosition('static');
  };

  const updatePin = () => {
    const affixDOMNode = document.querySelector(`.${prefixCls}`);
    let reallyOffset, propsOffset;

    // 如果有 offsetBottom 属性
    if (offsetBottom !== undefined) {
      reallyOffset = getViewportSize().height - affixDOMNode.getBoundingClientRect().bottom;
      propsOffset = offsetBottom;
    } else {
      reallyOffset = affixDOMNode.getBoundingClientRect().top;
      propsOffset = offsetTop;
    }

    if (affix && reallyOffset > propsOffset) {
      unpin();
    }

    if (!affix && reallyOffset <= propsOffset) {
      pin();
    }
  };

  const getStyleObj = () => {
    let styleObj = {};
    if (position === 'fixed') {
      styleObj = { position, zIndex, width };
      offsetBottom === undefined ? (styleObj.top = offsetTop) : (styleObj.bottom = offsetBottom);
    } else {
      styleObj = { position };
    }
    return styleObj;
  };

  const handleResize = () => {
    console.log('resize');
  };

  return (
    <div className={`${placeHoldClassName} ${prefixCls}`} style={{ width, height }}>
      <div style={getStyleObj()}>{children}</div>
      <WindowEventHandler eventName="scroll" callback={updatePin} />
      <WindowEventHandler eventName="resize" callback={handleResize} />
    </div>
  );
};

Affix.defaultProps = {
  prefixCls: 'pomelo-affix',
  zIndex: 1000,
  offsetTop: 0,
};

export default React.memo(Affix);
