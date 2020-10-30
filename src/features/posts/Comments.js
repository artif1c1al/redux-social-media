import React from 'react'
import { useSelector } from 'react-redux'
import AddComment from './AddComment'
export default function Comments({ postId }) {
  const post = useSelector((state) =>
    state.posts.find((post) => post.id === postId)
  )

  const comments = post.comments.map((el, index) => {
    return (
      <article className="post-excerpt" key={index}>
        <h4>{el.title}</h4>
        <p>{el.comment}</p>
      </article>
    )
  })

  return (
    <div className="comments">
      <AddComment postId={postId} />
      <div>{comments}</div>
    </div>
  )
}
