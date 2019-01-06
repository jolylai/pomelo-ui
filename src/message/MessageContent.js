import React from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import './MessageContent.less';

const MessageTransition = ({ children, ...props }) => {
  return (
    <CSSTransition {...props} timeout={800} classNames="message">
      {children}
    </CSSTransition>
  );
};

const MessageContent = props => {
  const { prefixCls, status, text, isIn, close } = props;
  return ReactDOM.createPortal(
    <MessageTransition
      appear
      unmountOnExit
      in={isIn}
      onExited={() => {
        close();
      }}
    >
      <div className={prefixCls}>
        <div className={`${prefixCls}-content ${prefixCls}-content-${status}`}>{text}</div>
      </div>
    </MessageTransition>,
    props.selector
  );
};

MessageContent.defaultProps = {
  prefixCls: 'pomelo-message',
};

export default MessageContent;
