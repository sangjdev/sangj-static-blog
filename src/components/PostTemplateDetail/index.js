import React, { Component } from 'react';
import Tag from '../../components/Tag';
import NProgress from 'nprogress';
import './style.scss';

class index extends Component {
  componentDidMount() {
    NProgress.start();
    window.addEventListener('load', function() {
      NProgress.done();
    });
  }
  render() {
    const page = this.props.data.markdownRemark;
    console.log('page', page);
    return (
      <div className="container">
        <div className="postDetail">
          <div className="postDetail__title">
            <h3>{page.frontmatter.title}</h3>
          </div>
          <div className="postDetail__status">
            <Tag name={page.frontmatter.date} />
            <Tag name={page.frontmatter.tags} />
          </div>
          <div
            className="postDetail__content"
            dangerouslySetInnerHTML={{ __html: page.html }}
          >
            {/* contnet */}
          </div>
        </div>
      </div>
    );
  }
}

export default index;
