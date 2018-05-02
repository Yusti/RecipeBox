import React, { PureComponent } from 'react';

import Button from './styles';

type Props = {
  onClick: Function,
  title: string,
};

export default class LinkedButton extends PureComponent {
  props: Props;
  render() {
    return <Button onClick={this.props.onClick}>{this.props.title}</Button>;
  }
}
