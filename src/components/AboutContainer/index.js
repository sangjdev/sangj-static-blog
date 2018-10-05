import React, { Component } from 'react';
import { Link } from 'gatsby';
import './style.scss';
import NProgress from 'nprogress';
// import scrollSnapPolyfill from 'css-scroll-snap-polyfill';

class index extends Component {
  // componentDidMount() {
  //   // whenever dom is ready
  //   scrollSnapPolyfill();
  // }
  componentDidMount() {
    NProgress.start();
    window.addEventListener('load', function() {
      NProgress.done();
    });
  }
  goLink() {
    window.open('https://github.com/sangjdev', '_blank');
  }
  render() {
    return (
      <div className="container pd0">
        <div className="page slateblue">
          <div className="page__self">
            자기소개
            <br />
            <span>준비 중입니다...</span>
          </div>
        </div>
        <div className="page slategray">
          <span onClick={() => this.goLink('')}>
            GITHUB
          </span>
        </div>
      </div>
    );
  }
}

export default index;
