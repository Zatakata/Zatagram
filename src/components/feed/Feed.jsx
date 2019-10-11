import React from 'react'
import Post from "./post/Post";


const Feed = (props) => {
    return (
        <div className='feed'>
            {
                props.state.posts.map(post => <Post author={post.author} src={post.src} />)
            }
        </div>
    )
}

export default Feed;