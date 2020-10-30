import React, { useState } from 'react'
import { useSelector } from 'react-redux'

export default function UsersRating() {
  const posts = useSelector((state) => state.posts)
  const users = useSelector((state) => state.users)

  const reactionEmoji = {
    thumbsUp: '👍',
    hooray: '🎉',
    heart: '❤️',
    rocket: '🚀',
    eyes: '👀',
  }

  const [selected, setSelected] = useState('heart')

  const onSelectedChange = (e) => setSelected(e.target.value)

  const rating = posts.map((el, i) => {
    return (
      <h2 key={i}>
        {users[el.user].name}:{' '}
        <span style={{ color: '#0fa' }}>{el.reactions[selected]}</span>{' '}
        {reactionEmoji[selected]}
      </h2>
    )
  })

  return (
    <section className="usersRating">
      <h1>Rating list:</h1>
      <label htmlFor="postAuthor">Author:</label>
      <select id="postAuthor" value={selected} onChange={onSelectedChange}>
        <option>thumbsUp</option>
        <option>hooray</option>
        <option>heart</option>
        <option>rocket</option>
        <option>eyes</option>
      </select>
      <div className="">{rating}</div>
    </section>
  )
}
