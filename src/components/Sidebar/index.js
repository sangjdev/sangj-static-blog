import React, { Component, Fragment } from 'react';
import { Link, navigateTo } from 'gatsby';
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
    this.goLink = this.goLink.bind(this);
  }
  handleClickOutside = evt => {
    if (this.props.visible) {
      this.props.hideSidebar();
    }
  };
  goLink(linkName) {
    this.props.hideSidebar();
    navigateTo('/' + linkName);
  }
  render() {
    return (
      <Fragment>
        <div className="sidebar">
          <div className="sidebar__inner">
            <span onClick={() => this.goLink('about')}>
              About
            </span>
          </div>
          {/* <div className="sidebar__inner">
            <span onClick={() => this.goLink('posts')}>Posts</span>
          </div> */}
          <div className="sidebar__inner">
            <span onClick={() => this.goLink('tags')}>
              Tags
            </span>
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
