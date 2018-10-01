import React, { Component } from 'react';
import './style.scss';

class index extends Component {
  render() {
    const { name } = this.props;
    return <span className="tag">{name}</span>;
  }
}

export default index;
