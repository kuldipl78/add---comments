import './index.css'
import React, {Component} from 'react'
import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {count: 0, inputName: '', comment: '', comments: []}

  handleOnChangeName = event => {
    this.setState({inputName: event.target.value})
  }

  handleOnChangeComment = event => {
    this.setState({comment: event.target.value})
  }

  handleOnButtonElement = event => {
    event.preventDefault()

    const {inputName, comment} = this.state
    if (inputName.trim() && comment.trim()) {
      const newComment = {
        id: Date.now(),
        name: inputName,
        text: comment,
        liked: false,
      }
      this.setState(prevState => ({
        comments: [...prevState.comments, newComment],
        count: prevState.count + 1,
        inputName: '',
        comment: '',
      }))
    }
  }

  handleToggleLiked = id => {
    this.setState(prevState => ({
      comments: prevState.comments.map(comment =>
        comment.id === id ? {...comment, liked: !comment.liked} : comment,
      ),
    }))
  }

  handleDeleteComment = id => {
    this.setState(prevState => ({
      comments: prevState.comments.filter(comment => comment.id !== id),
      count: prevState.count - 1,
    }))
  }

  render() {
    const {count, comments, inputName, comment} = this.state
    return (
      <div className="main-Container">
        <div className="container">
          <div className="card">
            <h1 className="heading">Comments</h1>
            <form className="comment">
              <p className="label-Ele">Say Something about 4.o Technology</p>
              <input
                value={inputName}
                id="name"
                onChange={this.handleOnChangeName}
                className="name"
                placeholder="Your Name"
              />
              <input
                type="textarea"
                value={comment}
                onChange={this.handleOnChangeComment}
                className="comment-box"
                placeholder="Your Comment"
              />
              <button
                onClick={this.handleOnButtonElement}
                type="button"
                className="submit"
              >
                Add Comment
              </button>
            </form>
          </div>
          <div className="img-Container">
            <img
              alt="comments"
              className="comment-Image"
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            />
          </div>
        </div>
        <span className="line">
          <hr />
        </span>
        <div className="count-container">
          <p>
            <span className="count-comment">{count}</span> Comment{' '}
          </p>
        </div>
        <div className="comment-list">
          {comments.map(eachComment => (
            <CommentItem
              key={eachComment.id}
              comment={eachComment}
              onToggleLike={this.handleToggleLiked}
              onDelete={this.handleDeleteComment}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default Comments
