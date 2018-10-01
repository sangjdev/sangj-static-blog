import React, { Component, Fragment } from 'react';
import { Link } from 'gatsby';
import onClickOutside from 'react-onclickoutside';
import './style.scss';
import * as baseActions from '../../state/modules/base';
import { connect } from 'react-redux';

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.handleClickOutside = this.handleClickOutside.bind(
      this,
    );
  }
  handleClickOutside = evt => {
    if (this.props.visible) {
      this.props.hideSidebar();
    }
  };
  render() {
    return (
      <Fragment>
        <div className="sidebar">
          <div className="sidebar__inner">
            <Link to="/about">About</Link>
          </div>
          <div className="sidebar__inner">
            <Link to="/posts">Posts</Link>
          </div>
          <div className="sidebar__inner">
            <Link to="/tags">Tags</Link>
          </div>
        </div>
        <div className="dim-layer" />
      </Fragment>
    );
  }
}

Sidebar = onClickOutside(Sidebar);

Sidebar = connect(
  state => ({
    visible: state.base.visible,
  }),
  dispatch => ({
    hideSidebar: () => dispatch(baseActions.hideSidebar()),
    showSidebar: () => dispatch(baseActions.showSidebar()),
  }),
)(Sidebar);

export default Sidebar;
