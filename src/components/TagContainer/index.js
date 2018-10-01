import React, { Component } from 'react';
// import Tags from '../../components/Tag';
import _ from 'lodash';
import '../../assets/fontello-dcb66a77/css/fontello.css';
import './style.scss';
import { navigateTo } from 'gatsby';

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: ['Java', 'Js', 'Css', 'NodeJS', 'ReactJS'],
      remainArr: [],
      stage: '',
    };
    this.handleStage = this.handleStage.bind(this);
    this.goLink = this.goLink.bind(this);
  }
  componentDidMount() {
    console.log('tet', this.props);
  }
  handleStage(content) {
    let arr = this.state.arr;
    if (this.state.stage !== '') {
      arr.push(this.state.stage);
    }
    this.setState({
      arr: arr,
    });
    const a = _.without(this.state.arr, content);
    this.setState({
      stage: content,
    });
    this.setState({
      arr: a,
    });
  }
  goLink = evt => {
    // evt.navigateTo('/about');
    // evt.push('/about');
    console.log('this.sattte', this.state.stage);
    if (this.state.stage === '') {
      return false;
    } else {
      navigateTo(this.state.stage);
    }

    console.log('@@@evt', evt);
  };
  render() {
    return (
      <div className="container">
        <div className="tags">
          <div className="tags__header">
            {/* <Tags name="JS" /> */}
            {this.state.stage === '' ? (
              'Select Tag!!'
            ) : (
              <span className="tags__show-tag-title">
                {this.state.stage}
              </span>
            )}
          </div>
          <div className="tags__content">
            {this.state.arr.map((content, i) => {
              return (
                <span
                  className="tags__show-tag"
                  onClick={() => this.handleStage(content)}
                  key={i}
                >
                  {content}
                  <i className="icon-plus-1" />
                </span>
              );
            })}
            {/* <span className="tags__show-tag">
              Java
              <i class="icon-plus-1" />
            </span>
            <span className="tags__show-tag">
              JS
              <i class="icon-plus-1" />
            </span>
            <span className="tags__show-tag">
              Css5
              <i class="icon-plus-1" />
            </span>
            <span className="tags__show-tag">
              Html
              <i class="icon-plus-1" />
            </span>
            <span className="tags__show-tag">
              REACTJS
              <i class="icon-plus-1" />
            </span>
            <span className="tags__show-tag">
              vanila
              <i class="icon-plus-1" />
            </span>
            <span className="tags__show-tag">
              nodejs
              <i class="icon-plus-1" />
            </span>
            <span className="tags__show-tag">
              Java
              <i class="icon-plus-1" />
            </span>
            <span className="tags__show-tag">
              JS
              <i class="icon-plus-1" />
            </span>
            <span className="tags__show-tag">
              Css5
              <i class="icon-plus-1" />
            </span>
            <span className="tags__show-tag">
              Html
              <i class="icon-plus-1" />
            </span>
            <span className="tags__show-tag">
              REACTJS
              <i class="icon-plus-1" />
            </span>
            <span className="tags__show-tag">
              vanila
              <i class="icon-plus-1" />
            </span>
            <span className="tags__show-tag">
              nodejs
              <i class="icon-plus-1" />
            </span>
            <span className="tags__show-tag">
              Java
              <i class="icon-plus-1" />
            </span>
            <span className="tags__show-tag">
              JS
              <i class="icon-plus-1" />
            </span>
            <span className="tags__show-tag">
              Css5
              <i class="icon-plus-1" />
            </span>
            <span className="tags__show-tag">
              Html
              <i class="icon-plus-1" />
            </span>
            <span className="tags__show-tag">
              REACTJS
              <i class="icon-plus-1" />
            </span>
            <span className="tags__show-tag">
              vanila
              <i class="icon-plus-1" />
            </span>
            <span className="tags__show-tag">
              nodejs
              <i class="icon-plus-1" />
            </span>
            <span className="tags__show-tag">
              Java
              <i class="icon-plus-1" />
            </span>
            <span className="tags__show-tag">
              vanila
              <i class="icon-plus-1" />
            </span>
            <span className="tags__show-tag">
              nodejs
              <i class="icon-plus-1" />
            </span>
            <span className="tags__show-tag">
              Java
              <i class="icon-plus-1" />
            </span> */}
          </div>
          <div className="tags__footer">
            <div className="tags__footer__btn-wrap">
              <span
                className="tags__footer__btn"
                onClick={this.goLink}
              >
                이동하기
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default index;
