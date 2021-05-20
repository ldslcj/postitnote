import React from 'react'

const PostNew = (props) => {
    return(
        <>
            <div>
                <h1>New Note Form</h1>
                <form action = '/posts' method='post'>
                    <p>Note Title</p>
                    <input name = 'post[title]' />
                    <p>Note Description</p>
                    <textarea name = 'post[description]' />
                    <button type="submit">Add Note</button>
                </form>
            </div>
        </>
    )
}


export default PostNew