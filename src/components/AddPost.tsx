import React from 'react'

type AddPostProps = {
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
    handleTitleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    handleBodyChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    title:string
    body:string
}

const AddPost = ({handleSubmit,handleTitleChange,handleBodyChange,title,body}:AddPostProps) => {
  return (
    <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Titre" value={title} onChange={handleTitleChange} />
        <input type="text" name="body" placeholder="Contenu" value={body} onChange={handleBodyChange} />
        <button type="submit">Ajouter</button>
    </form>
  )
}

export default AddPost