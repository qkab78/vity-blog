import { useEffect, useState } from 'react'
import AddPost from './components/AddPost'
import Post from './components/Post'
export interface IPost {
  id: number
  body: string
  title: string
  userId: number
}

function App() {
  const [posts, setPosts] = useState<IPost[]>([])
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const url = 'https://jsonplaceholder.typicode.com/posts'

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch(url)
      const data = await response.json()
      setPosts(data)
    }
    fetchPosts()
  }, [])
  
  // useEffect(() => console.log('title =>', title), [title])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Envoyer le post au serveur
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        title: title,
        body: body,
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then((response) => response.json())
    .then((json) => {
      const newPost = { ...json, id: posts.length + 1 }
      setPosts((oldPosts)=> [newPost, ...oldPosts])
    });
    setTitle('')
    setBody('')
  }
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target // const value = e.target.value
    setTitle(value)
  }
  const handleBodyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {value} = e.target
    setBody(value)
  }

  return <>
    <div className="container">
      <h1>Welcome to my posts</h1>
      <div className="form">
        <h4>Ajouter un post</h4>
        <AddPost
          handleSubmit={handleSubmit}
          handleBodyChange={handleBodyChange}
          handleTitleChange={handleTitleChange}
          title={title}
          body={body}
        />
      </div>
      <ul>
        {posts.map((post) => <Post key={post.id} post={post} />)}
      </ul>
    </div>
  </>
}

export default App
