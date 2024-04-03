import './index.css'

const CommentItem = props => {
  const {comment, onToggleLike, onDelete} = props // Corrected typo here
  const {name, text, liked, id, date, initialClassName} = comment

  const onToggle = () => {
    onToggleLike(id) // Corrected typo here
  }

  const onDeleteComment = () => {
    onDelete(id)
  }

  return (
    <ul className="list-Container">
      <li className="comment-Section">
        <p className="name">
          <span className={initialClassName}>{name[0]}</span> {name}
        </p>
        <p>{date}</p>
      </li>
      <p>{text}</p>
      <div className="icons">
        <div className="butons-Container">
          <button className="liked" onClick={onToggle}>
            {liked ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png"
                alt="Liked"
              />
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png"
                alt="like"
              />
            )}{' '}
            Like
          </button>
        </div>
        <div className="detele-container">
          <button
            className="delete-button"
            testid="delete"
            onClick={onDeleteComment}
          >
            <img
              className="delete"
              alt="delete"
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            />
          </button>
        </div>
      </div>
      <span className="line">
        <hr />
      </span>
    </ul>
  )
}

export default CommentItem
