import React, { Component, Fragment } from 'react';
import { Link, navigateTo } from 'gatsby';
import Hamburger from '../../Hamburger';
import { browserHistory } from 'react-router';
import './style.scss';

class index extends Component {
  handleSidebar = evt => {
    const {
      visible,
      hideSidebar,
      showSidebar,
    } = this.props;

    if (visible) {
      hideSidebar();
      //   evt.preventDefault();
      //   evt.stopPropagation();
    } else {
      showSidebar();
      //   evt.preventDefault();
      //   evt.stopPropagation();
    }
  };
  goLink(linkName) {
    this.props.hideSidebar();
    navigateTo('/' + linkName);
  }
  goBack() {
    this.props.hideSidebar();
    window.history.go(-1);
  }
  render() {
    const { handleSidebar } = this;
    const { visible, prevBtn } = this.props;
    return (
      <Fragment>
        {prevBtn && (
          <div className="header__menu-left">
            <span onClick={() => this.goBack()}>
              <i className="icon-left-open" />
            </span>
          </div>
        )}
        <div className="header__title">
          <span onClick={() => this.goLink('')}>
            Sang Jeong
          </span>
        </div>
        <div className="header__menu-right">
          <Hamburger
            onOpen={handleSidebar}
            active={visible}
          />
        </div>
      </Fragment>
    );
  }
}

export default index;
