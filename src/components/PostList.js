import React, { Component } from "react"
import { connect } from "react-redux"
import { fetchPosts } from "../actions"
import PostItems from "./PostItems"

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPosts()
  }
  render() {
    console.log(this.props)
    const { posts } = this.props
    return (
      <div className="ui relaxed divided list">
        {posts.map((post) => (
          <PostItems post={post} key={post.id} />
        ))}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  }
}

export default connect(mapStateToProps, { fetchPosts })(PostList)
