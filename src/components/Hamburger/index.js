import React, { Component } from 'react';
import classNames from 'classnames';
import styles from './style.scss';
const cx = classNames.bind(styles);

const Hamburger = ({ onOpen, active }) => {
  return (
    <button
      className={cx('hamburger hamburger--minus', {
        'is-active': active,
      })}
      type="button"
      onClick={onOpen}
    >
      <span className="hamburger-box">
        <span className="hamburger-inner" />
      </span>
    </button>
    // <div className="hamburger" onClick={onOpen}>
    //   <i className="icon-menu" />
    // </div>
  );
};

export default Hamburger;
