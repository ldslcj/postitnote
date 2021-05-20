import React from 'react'

const Posts = (props) => {
    const posts = props.posts
    
    const renderPosts = () => {
        return posts.map( (post) => {
            return(
                <div>
                    <h1>{post.title}</h1>
                    <p>{post.description}</p>
                    <button><a href={`/posts/${post.id}/edit`}>Edit Note</a></button>
                    <button><a href={`/posts/${post.id}`} data-method="delete">Delete Note</a></button>
                </div>
            )
        })
    }

    return (
        <div>
            <h1>CJ's Note App</h1>
            <button><a href = '/posts/new'>Create a New Note</a></button>
            {renderPosts()}
        </div>
    )
}

export default Posts