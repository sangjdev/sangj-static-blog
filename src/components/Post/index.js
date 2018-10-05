import React, { Component } from 'react';
import NProgress from 'nprogress';
import { Link } from 'gatsby';
import Tag from '../Tag';
import './style.scss';
// First way to import
import { BeatLoader } from 'react-spinners';
// Another way to import
// import ClipLoader from 'react-spinners/ClipLoader';

class Post extends Component {
  componentDidMount() {
    NProgress.start();
    window.addEventListener('load', function() {
      NProgress.done();
    });
  }
  render() {
    const post = this.props.data.allMarkdownRemark.edges;
    return (
      <div className="post-container">
        <div className="posts">
          {post.map((content, i) => {
            return (
              <Link
                className="posts-link"
                to={`/posts/${
                  content.node.frontmatter.title
                }`}
                key={i}
              >
                <div className="posts__card">
                  <div className="posts__card__inner">
                    <h3 className="posts__card__inner__title">
                      {content.node.frontmatter.title}
                    </h3>
                    {content.node.frontmatter.tags.map(
                      (tag, j) => {
                        return <Tag name={tag} key={j} />;
                      },
                    )}
                    <p className="posts__card__inner__sub-title">
                      {content.node.frontmatter.description}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Post;
