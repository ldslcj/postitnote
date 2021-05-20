import React from 'react'

const PostEdit = (props) => {
    const {post} = props
    return(
        <>
            <div>
                <h1>Edit Note Form</h1>
                <form action = {`/posts/${post.id}`} method='post'>
                    <input type = "hidden" name = "_method" value = "patch" />

                    <p>Note Title</p>
                    <input defaultValue = {post.title} name = 'post[title]' />
                    <p>Note Description</p>
                    <textarea defaultValue = {post.description} name = 'post[description]' />

                    <button type = "submit">Edit Note</button>
                </form>
            </div>
        </>
    )
}

export default PostEdit