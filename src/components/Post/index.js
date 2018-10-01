import React, { Component } from 'react';
import { Link } from 'gatsby';
import Tag from '../Tag';
import './style.scss';

class Post extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log('this.prosps POST @@ : ', this.props);

    return (
      <div className="post-container">
        <div className="posts">
          {/* <span>this is span tag...</span> */}
          <Link className="posts-link" to="/about">
            <div className="posts__card">
              <div className="posts__card__inner">
                <h3 className="posts__card__inner__title">
                  첫번째 게시글.
                </h3>
                <Tag name={'Java'} />
                <Tag name={'JS'} />
                <p className="posts__card__inner__sub-title">
                  첫번째 시리즈 : 블로그를 만들면서
                  배우는것들과, 앞으로의 진행방향.
                </p>
              </div>
            </div>
          </Link>
          <Link className="posts-link" to="/about">
            <div className="posts__card">
              <div className="posts__card__inner">
                <h3 className="posts__card__inner__title">
                  첫번째 게시글.
                </h3>
                <Tag name={'Java'} />
                <Tag name={'JS'} />
                <p className="posts__card__inner__sub-title">
                  첫번째 시리즈 : 블로그를 만들면서
                  배우는것들과, 앞으로의 진행방향.
                </p>
              </div>
            </div>
          </Link>
          <Link className="posts-link" to="/about">
            <div className="posts__card">
              <div className="posts__card__inner">
                <h3 className="posts__card__inner__title">
                  첫번째 게시글.
                </h3>
                <Tag name={'Java'} />
                <Tag name={'JS'} />
                <p className="posts__card__inner__sub-title">
                  첫번째 시리즈 : 블로그를 만들면서
                  배우는것들과, 앞으로의 진행방향.
                </p>
              </div>
            </div>
          </Link>
          <Link className="posts-link" to="/about">
            <div className="posts__card">
              <div className="posts__card__inner">
                <h3 className="posts__card__inner__title">
                  첫번째 게시글.
                </h3>
                <Tag name={'Java'} />
                <Tag name={'JS'} />
                <p className="posts__card__inner__sub-title">
                  첫번째 시리즈 : 블로그를 만들면서
                  배우는것들과, 앞으로의 진행방향.
                </p>
              </div>
            </div>
          </Link>
          <Link className="posts-link" to="/about">
            <div className="posts__card">
              <div className="posts__card__inner">
                <h3 className="posts__card__inner__title">
                  첫번째 게시글.
                </h3>
                <Tag name={'Java'} />
                <Tag name={'JS'} />
                <p className="posts__card__inner__sub-title">
                  첫번째 시리즈 : 블로그를 만들면서
                  배우는것들과, 앞으로의 진행방향.
                </p>
              </div>
            </div>
          </Link>
          <Link className="posts-link" to="/about">
            <div className="posts__card">
              <div className="posts__card__inner">
                <h3 className="posts__card__inner__title">
                  첫번째 게시글.
                </h3>
                <Tag name={'Java'} />
                <Tag name={'JS'} />
                <p className="posts__card__inner__sub-title">
                  첫번째 시리즈 : 블로그를 만들면서
                  배우는것들과, 앞으로의 진행방향.
                </p>
              </div>
            </div>
          </Link>
          <Link className="posts-link" to="/about">
            <div className="posts__card">
              <div className="posts__card__inner">
                <h3 className="posts__card__inner__title">
                  내 게시글.
                </h3>
                <Tag name={'자기개발'} />
                <p className="posts__card__inner__sub-title">
                  블로그를 만들면서 배우는것들과, 앞으로의
                  진행방향. 어쩌면 성장해가는 나의 모습을
                  오랫동안 볼 수 있을 곳.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default Post;
