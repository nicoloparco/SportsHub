import _ from 'lodash';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions';
import Comments from "./post_detail/comments";





class PostList extends Component {

  componentDidMount() {
    this.props.fetchPosts();
  }

  renderTags(tags) {
    return tags.map(tag => {
      return <span className="badge badge-info span-with-margin" key={tag}>{tag}</span>;
    });
  }

  renderPostSummary(post) {
    return (
      <div key={post._id}>
        <h3>
          <Link className="link-without-underline" to={`/posts/${post._id}`}>
            {post.title}
          </Link>
        </h3>
        {this.renderTags(post.categories)}
        <span className="span-with-margin text-grey"> • </span>
        <span className="span-with-margin text-grey">{post.authorName}</span>
        <span className="span-with-margin text-grey"> • </span>
        <span className="span-with-margin text-grey">{new Date(post.time).toLocaleString()}</span>
        <Link className = "btn btn d-inline commentButton" to="/comments/new" style = {{backgroundColor: "#f0f1f5"}}><i className="fas fa-comments"></i></Link>
        <Comments />
        <hr />
      </div>
    );
  }

  render() {
    // console.log(this.props.posts);
    return (
      <div className="post">
        <Link className="btn btn-success mb-3" to={'/posts/new'}>Publish A New Post &raquo;</Link>
        {_.map(this.props.posts, post => {
          return this.renderPostSummary(post);
          
        })}
     
      </div>
      
      
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostList);