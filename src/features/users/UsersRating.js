import React from 'react'
import { useSelector } from 'react-redux'

export default function UsersRating() {
  const posts = useSelector((state) => state.posts)
  const users = useSelector((state) => state.users)

  const rating = posts.map((el, i) => {
    return (
      <h2 key={i}>
        {users[el.user].name}:{' '}
        <span style={{ color: '#0fa' }}>{el.reactions.heart}</span> likes
      </h2>
    )
  })

  return (
    <div className="usersRating">
      <h1>Rating list:</h1>
      <div className="">{rating}</div>
    </div>
  )
}
