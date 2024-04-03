import './index.css'
const CommentItem = props => {
  const {comment, onToggeleLike, onDelete} = props
  const {name, text, liked, id} = comment

  const onToggle = () => {
    onToggeleLike(id)
  }

  const onDeleteComment = () => {
    onDelete(id)
  }

  return (
    <li className="list-Container">
      <div className="comment-Section">
        <p className="name">
          <span className="first-letter">{name[0]}</span> {name}{' '}
        </p>
        <p>{id}</p>
      </div>
      <p>{text}</p>
      <div className="icons">
        <button className="liked" onClick={onToggle}>
          {liked ? (
            <img src="https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png" />
          ) : (
            <img src="https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png" />
          )}
        </button>
        <button className="delete-button" onClick={onDeleteComment}>
          <img
            className="delete"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
          />
        </button>
      </div>
      <span className="line">
        <hr />
      </span>
    </li>
  )
}

export default CommentItem
