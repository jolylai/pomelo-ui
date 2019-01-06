import React from 'react';
import reactDOM from 'react-dom';
// import './index.less';

const createModalContainerNode = () => {
  let messageContainerNode = document.querySelector('.pomelo-modal-container');
  if (!messageContainerNode) {
    const bodyNode = document.body;
    const div = document.createElement('div');
    div.className = 'pomelo-modal-container';
    messageContainerNode = bodyNode.appendChild(div);
  }
  return messageContainerNode;
};

const Modal = props => {
  const { prefixCls, header, footer } = props;

  const renderFooter = () => {
    return <div />;
  };

  // return (
  //   <div>
  //     <div className={`${prefixCls}-modal-header`}>header</div>
  //     <div>content</div>
  //     <div>footer</div>
  //   </div>
  // );
  const modalNode = createModalContainerNode();
  return reactDOM.createPortal(<div>{props.children}</div>, modalNode);
};

Modal.defaultProps = {
  prefixCls: 'pomelo',
};

export default Modal;
