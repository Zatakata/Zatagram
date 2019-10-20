import React from 'react'
import Post from "./Post/Post";


const Feed = (props) => {
    return (
        <div className='feed'>
            {props.posts.map(post => <Post post={post}/>)}
        </div>
    )
}

export default Feed;