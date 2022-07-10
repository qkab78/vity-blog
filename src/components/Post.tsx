import React from 'react'
import { IPost } from '../App'

type PostProps = {
    post: IPost
}

const Post = ({ post }: PostProps) => {
  return (
    <li>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
    </li>
  )
}

export default Post