import React from 'react'
import Post from "./Post/Post";


const Feed = (props) => {
    return (
        <div className='feed'>
            {
                props.state.posts.map(post => <Post post={post}/>)
            }
        </div>
    )
}

export default Feed;