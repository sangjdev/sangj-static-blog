import React, { Component, Fragment } from "react";
import { Link } from "gatsby";
import Hamburger from "../Hamburger";
import Sidebar from "../Sidebar";
import "./style.scss";
import * as baseActions from "../../state/modules/base";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { throttle } from "lodash";
import MHeader from "../Mobile/Header";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks
} from "body-scroll-lock";

class Header extends Component {
  targetElement = null;
  componentDidMount() {
    // 2. Get a target element that you want to persist scrolling for (such as a modal/lightbox/flyout/nav).
    this.targetElement = document.querySelector("html");
  }

  showTargetElement = () => {
    // ... some logic to show target element

    console.log("showTargetElement", this.targetElement);
    // 3. Disable body scroll
    disableBodyScroll(this.targetElement);
  };

  hideTargetElement = () => {
    // ... some logic to hide target element

    // 4. Re-enable body scroll
    enableBodyScroll(this.targetElement);
  };

  handleScroll = throttle(e => {
    const { visible } = this.props;
    console.log("eee", e);
    if (visible) {
      console.log("important event ", e);
    } else {
      console.log("!!!!!!!!!!!!!!!!!!!!!");
    }
  }, 500);

  componentWillUnmount() {
    // 5. Useful if we have called disableBodyScroll for multiple target elements,
    // and we just want a kill-switch to undo all that.
    // OR useful for if the `hideTargetElement()` function got circumvented eg. visitor
    // clicks a link which takes him/her to a different page within the app.
    clearAllBodyScrollLocks();
  }
  shouldComponentUpdate(nextProps) {
    console.log("next props ", nextProps);
    if (nextProps.visible) {
      console.log("showTargetElement");
      this.showTargetElement();
    } else {
      console.log("hideTargetElement");
      this.hideTargetElement();
    }
    return true;
  }
  render() {
    const { visible } = this.props;
    return (
      <Fragment>
        <div className="header">
          <MHeader {...this.props} />
          <div className="header__sub-title">
            <Link to="/about">About</Link>
            <Link to="/about">Posts</Link>
            <Link to="/about">Tags</Link>
          </div>
        </div>
        {visible && (
          <Sidebar
            // 처음에 이걸썼는데 링크가 안된다. 이거는 이벤트 취소이고
            // preventDefault={true}
            // preventDefault={true}

            // 이거를 쓰자니 뒤에 posts의 link가 클릭이 전파되고
            outsideClickIgnoreClass={"fix-menu"}
            // 이거는 이벤트 부모한테 전파못하게 하는거임. 하나도 못막음
            // stopPropagation={true}

            // 스크롤을막고 무조건 메뉴로만 닫게한다면 가능성잇음.
            disableOnClickOutside={true}
          />
        )}
      </Fragment>
    );
  }
}

export default connect(
  state => ({
    visible: state.base.visible
  }),
  dispatch => ({
    BaseActions: bindActionCreators(baseActions, dispatch),
    hideSidebar: () => dispatch(baseActions.hideSidebar()),
    showSidebar: () => dispatch(baseActions.showSidebar())
  })
)(Header);
