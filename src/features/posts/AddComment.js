import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { commentAdded } from './postsSlice'

export default function AddComment({ postId }) {
  // console.log(postId)
  const [title, setTitle] = useState('')
  const [comment, setComment] = useState('')
  const [like, setLike] = useState(false)

  const onTitleChange = (e) => setTitle(e.target.value)
  const onContentChange = (e) => setComment(e.target.value)
  const onLikeChange = (e) => setLike(!like)

  const dispatch = useDispatch()

  const canSave = Boolean(postId) && Boolean(title) && Boolean(comment)

  const submit = () => {
    if (title && comment) {
      dispatch(commentAdded({ title, comment, id: postId, like }))
      setTitle('')
      setComment('')
    }
  }

  return (
    <section>
      <form>
        <input
          type="text"
          value={title}
          onChange={onTitleChange}
          placeholder="Enter title"
        />
        <div>
          <span>Do you like this post? </span>
          <input
            id="doYouLikeIt"
            value={like}
            onChange={onLikeChange}
            type="checkbox"
          />
        </div>
        <textarea
          value={comment}
          onChange={onContentChange}
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Enter comment"
        ></textarea>
      </form>
      <button onClick={submit} disabled={!canSave}>
        Create comment
      </button>
    </section>
  )
}
