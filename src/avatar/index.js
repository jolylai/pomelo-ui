import React from 'react';
import classnames from 'classnames';
import isNumber from 'lodash/isNumber';

import Icon from '../icon';

import './index.less';

const NO_STYLE = {};
const HIDDEN_STYLE = { opacity: 0 };

class index extends React.PureComponent {
  static defaultProps = {
    prefixCls: 'pomelo',
    size: 'default',
    shape: 'circle',
    className: '',
    bordered: false,
  };

  state = {
    textScale: 1,
    textReady: false,
  };

  componentDidMount() {
    this.updateTextScale();
  }

  componentWillReceiveProps = nextProps => {
    if (nextProps.children !== this.props.children) {
      this.setState({
        textReady: false,
      });
    }
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.children !== this.props.children) {
      this.updateTextScale();
    }
  };

  updateTextScale = () => {
    const { children } = this.props;
    if (children) {
      const scale = fixText(this.avatarNode, this.textNode);

      this.setState({
        textScale: scale,
        textReady: true,
      });
    }
  };

  saveAvatar = node => {
    this.avatarNode = node;
  };

  saveTextNode = node => {
    this.textNode = node;
  };

  render() {
    const { icon, size, shape, bordered, src, className, style, prefixCls, children } = this.props;
    const avatarClx = classnames(className, [`${prefixCls}-avatar`], {
      [`${prefixCls}-avatar-size-large`]: size === 'large',
      [`${prefixCls}-avatar-size-default`]: size === 'default',
      [`${prefixCls}-avatar-size-small`]: size === 'small',
      [`${prefixCls}-avatar-shape-circle`]: shape === 'circle',
      [`${prefixCls}-avatar-shape-square`]: shape === 'square',
      [`${prefixCls}-avatar-bordered`]: bordered,
      [`${prefixCls}-avatar-type-icon`]: icon,
      [`${prefixCls}-avatar-type-image`]: src,
      [`${prefixCls}-avatar-type-string`]: children,
    });
    if (icon) {
      return (
        <span className={avatarClx}>
          <Icon type={icon} />
        </span>
      );
    }
    if (src) {
      return (
        <span className={avatarClx}>
          <img src={src} className={`${prefixCls}-avatar-image`} />
        </span>
      );
    }

    const { textScale, textReady } = this.state;
    const { textNode } = this;
    let textStyle = NO_STYLE;

    if (!textReady) {
      textStyle = HIDDEN_STYLE;
    } else if (textScale === 1) {
      textStyle = NO_STYLE;
    } else {
      const textTransformString = `scale(${textScale})`;
      textStyle = {
        msTransform: textTransformString,
        WebkitTransform: textTransformString,
        MozTransform: textTransformString,
        position: 'absolute',
        display: 'inline-block',
        left: `calc(50% - ${Math.floor(textNode.offsetWidth / 2)}px)`,
      };
    }

    const avatarStyle = isNumber(size)
      ? {
          width: `${size}px`,
          height: `${size}px`,
          lineHeight: `${size}px`,
          ...style,
        }
      : style;

    return (
      <span className={avatarClx} style={avatarStyle} ref={this.saveAvatar}>
        <span className={`${prefixCls}-avatar-string`} style={textStyle} ref={this.saveTextNode}>
          {children}
        </span>
      </span>
    );
  }
}

function fixText(containerNode, textNode) {
  const containerWidth = containerNode.getBoundingClientRect().width;
  const textWidth = textNode.offsetWidth;

  const visualWidth = containerWidth - 6;

  if (visualWidth > textWidth) {
    return 1;
  }

  return visualWidth / textWidth;
}

export default index;
