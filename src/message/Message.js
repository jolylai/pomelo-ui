import React from 'react';
import ReactDOM from 'react-dom';
import MessageContent from './MessageContent';

let containerId = 0;
let defaultDuration = 800;
const containerList = {};

const createContainerId = () => {
  return ++containerId;
};

const messageCallback = callback => {
  if (typeof callback === 'function') {
    callback();
  }
};

const closeMessage = containerId => {
  const containerObj = containerList[containerId];
  if (!containerObj) return;
  const { container, callback, timeoutId } = containerObj;
  clearTimeout(timeoutId);
  ReactDOM.unmountComponentAtNode(container);
  delete containerList[containerId];
  messageCallback(callback);
};

/**
 * 创建message容器
 */
const createMessageContainerNode = () => {
  let messageContainerNode = document.querySelector('.pomelo-message-container');
  if (!messageContainerNode) {
    const bodyNode = document.body;
    const div = document.createElement('div');
    div.className = 'pomelo-message-container';
    messageContainerNode = bodyNode.appendChild(div);
  }
  return messageContainerNode;
};

const show = (text, duration, status, callback) => {
  let container = document.createElement('div');
  const messageContainerNode = createMessageContainerNode();

  const props = {
    text,
    duration,
    status,
    isIn: true,
    selector: messageContainerNode,
  };

  ReactDOM.render(React.createElement(MessageContent, props), container);

  const containerId = createContainerId();
  const timeoutId = setTimeout(() => {
    ReactDOM.render(
      <MessageContent {...props} isIn={false} close={() => closeMessage(containerId)} />,
      container
    );
  }, defaultDuration);

  containerList[containerId] = { container, callback, timeoutId };
  return containerId;
};

export function success(text, duration, callback) {
  return show(text, duration, 'success', callback);
}

export function error(text, duration, callback) {
  return show(text, duration, 'error', callback);
}

export function warning(text, duration, callback) {
  return show(text, duration, 'warning', callback);
}

export function info(text, duration, callback) {
  return show(text, duration, 'info', callback);
}
