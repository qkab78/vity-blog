import { useEffect, useState } from 'react'
import Post from './components/Post'
export interface IPost {
  id: number
  body: string
  title: string
  userId: number
}

function App() {
const [posts, setPosts] = useState<IPost[]>([])
  const url = 'https://jsonplaceholder.typicode.com/posts'
  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch(url)
      const data = await response.json()
      setPosts(data)
    }
    fetchPosts()
  }, [])
  
  return <>
    <div className="container">
      <h1>Welcome to my posts</h1>
      <ul>
        {posts.map((post) => <Post key={post.id} post={post} />)}
      </ul>
    </div>
  </>
}

export default App
