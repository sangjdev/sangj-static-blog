import React, { Component } from 'react';
import NProgress from 'nprogress';
import { Link } from 'gatsby';
import _ from 'lodash';
import '../../assets/fontello-f8478b33/css/fontello.css';
import './style.scss';

class index extends Component {
  state = {
    opened: false,
    openedNum: '',
    arr: [],
  };
  handleMenu(index) {
    if (index === this.state.openedNum) {
      this.setState({
        openedNum: '',
        opened: false,
      });
      return false;
    }
    this.setState({
      openedNum: index,
      opened: true,
    });
  }
  componentDidMount() {
    let tempArr = [];
    const data = this.props.data.allMarkdownRemark.edges;
    data.map((content, i) => {
      tempArr.push(content.node.frontmatter.tags[0]);
    });
    tempArr = _.uniq(tempArr);
    this.setState({
      arr: tempArr,
    });
    NProgress.start();
    window.addEventListener('load', function() {
      NProgress.done();
    });
  }
  render() {
    console.log('this,props@@@@', this.props);
    const datas = this.props.data.allMarkdownRemark.edges;
    console.log('this.datas@@@@, ', datas);
    return (
      <div className="container">
        <div className="lists">
          {/* 이전 형제 선택자 메뉴 css 초기화 */}
          {this.state.arr.map((content, i) => {
            {
              let count = 0;
              datas.map((post, j) => {
                if (
                  content === post.node.frontmatter.tags[0]
                ) {
                  count = count + 1;
                }
              });

              // if (this.state.openedNum === i) {
              //   이걸로 list => list__on 으로 바꾸고,
              //   this.state.opened 로 display block으로 바꾼다.
              // }

              return (
                <div
                  className={
                    this.state.openedNum === i
                      ? 'list__on'
                      : this.state.openedNum &&
                        this.state.openedNum - i === 1
                        ? 'list yebor'
                        : 'list'
                  }
                  key={i}
                >
                  <div
                    className={
                      this.state.openedNum &&
                      this.state.openedNum - i === 1
                        ? 'list-menu nobor'
                        : 'list-menu'
                    }
                  >
                    <span>{content}</span>
                    <div className="list-menu__right">
                      <span className="list-count">
                        {count}
                      </span>
                      <span
                        className="list-toggle"
                        onClick={() => {
                          this.handleMenu(i);
                        }}
                      >
                        <i
                          className={
                            this.state.openedNum === i
                              ? 'icon-minus-1'
                              : 'icon-plus-1'
                          }
                        />
                      </span>
                    </div>
                  </div>

                  <div
                    className="list-menu-sub"
                    style={
                      this.state.openedNum === i
                        ? this.state.opened
                          ? { display: 'block' }
                          : { display: 'none' }
                        : null
                    }
                  >
                    <span className="list-menu-sub__title">
                      Posts
                    </span>
                    {datas.map((post, j) => {
                      if (
                        content ===
                        post.node.frontmatter.tags[0]
                      ) {
                        return (
                          <Link
                            to={`posts/${
                              post.node.frontmatter.title
                            }`}
                            key={j}
                          >
                            <span className="list-menu-sub__content">
                              <i className="icon-doc-text" />
                              {post.node.frontmatter.title}
                            </span>
                          </Link>
                        );
                      }
                    })}
                  </div>
                </div>
              );
            }

            // if (
            //   this.state.openedNum &&
            //   this.state.openedNum - i === 1
            // ) {
            //   return (
            //     <div className="list yebor" key={i}>
            //       <div className="list-menu nobor">
            //         <span>자바스크립트 -{content}</span>
            //         <div className="list-menu__right">
            //           <span className="list-count">5</span>
            //           <i
            //             className="icon-plus-1"
            //             onClick={() => {
            //               this.handleMenu(i);
            //             }}
            //           />
            //         </div>
            //       </div>
            //       <div
            //         className="list-menu-sub"
            //         style={{ display: 'none' }}
            //       >
            //         <span className="list-menu-sub__title">
            //           Posts
            //         </span>
            //         <span className="list-menu-sub__content">
            //           <i className="icon-doc-text" />
            //           How to learn react JS
            //         </span>
            //         <span className="list-menu-sub__content">
            //           <i className="icon-doc-text" />
            //           List component build
            //         </span>
            //         <span className="list-menu-sub__content">
            //           <i className="icon-doc-text" />
            //           List component build
            //         </span>
            //       </div>
            //     </div>
            //   );
            // }
            // 오픈됬을경우 - 로 바뀌는 컴포넌틑
            // if (this.state.openedNum === i) {
            //   return (
            //     <div className="list__on" key={i}>
            //       <div className="list-menu">
            //         <span>자바스크립트 -{content}</span>
            //         <div className="list-menu__right">
            //           <span className="list-count">5</span>
            //           <i
            //             className="icon-minus-1"
            //             onClick={() => {
            //               this.handleMenu(i);
            //             }}
            //           />
            //         </div>
            //       </div>
            //       <div
            //         className="list-menu-sub"
            //         style={
            //           this.state.opened
            //             ? { display: 'block' }
            //             : { display: 'none' }
            //         }
            //       >
            //         <span className="list-menu-sub__title">
            //           Posts
            //         </span>
            //         <span className="list-menu-sub__content">
            //           {/* <i className="icon-doc-text" /> */}
            //           - How to learn react JS
            //         </span>
            //         <span className="list-menu-sub__content">
            //           {/* <i className="icon-doc-text" /> */}
            //           - List component build
            //         </span>
            //         <span className="list-menu-sub__content">
            //           {/* <i className="icon-doc-text" /> */}
            //           - List component build
            //         </span>
            //       </div>
            //     </div>
            //   );
            // } else {
            //   return (
            //     <div className="list" key={i}>
            //       <div className="list-menu">
            //         <span>자바스크립트 -{content}</span>
            //         <div className="list-menu__right">
            //           <span className="list-count">5</span>
            //           <i
            //             className="icon-plus-1"
            //             onClick={() => {
            //               this.handleMenu(i);
            //             }}
            //           />
            //         </div>
            //       </div>
            //       <div className="list-menu-sub">
            //         <span className="list-menu-sub__title">
            //           Posts
            //         </span>
            //         <span className="list-menu-sub__content">
            //           <i className="icon-doc-text" />
            //           How to learn react JS
            //         </span>
            //         <span className="list-menu-sub__content">
            //           <i className="icon-doc-text" />
            //           List component build
            //         </span>
            //         <span className="list-menu-sub__content">
            //           <i className="icon-doc-text" />
            //           List component build
            //         </span>
            //       </div>
            //     </div>
            //   );
            // }
          })}

          {/* 열었을때 메뉴 */}
          {/* <div className="list__on">
            <div className="list-menu">
              <span>Tags</span>
              <div className="list-menu__right">
                <span className="list-count">5</span>
                <i className="icon-minus-1" />
              </div>
            </div>
            <div className="list-menu-sub">
              <span className="list-menu-sub__title">
                Posts
              </span>
              <span className="list-menu-sub__content">
                <i className="icon-doc-text" />
                How to learn react JS
              </span>
              <span className="list-menu-sub__content">
                <i className="icon-doc-text" />
                List component build
              </span>
              <span className="list-menu-sub__content">
                <i className="icon-doc-text" />
                List component build
              </span>
            </div>
          </div> */}
          {/* 열기전 메뉴 */}
          {/* <div className="list">
            <div className="list-menu">
              <span>Js</span>
              <div className="list-menu__right">
                <span className="list-count">5</span>
                <i className="icon-plus-1" />
              </div>
            </div>
          </div> */}
        </div>
      </div>
    );
  }
}

export default index;
