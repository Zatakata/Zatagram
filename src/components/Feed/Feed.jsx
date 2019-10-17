import React from 'react'
import Post from "./Post/Post";


const Feed = (props) => {
    const posts = props.state.feed.posts
    return (
        <div className='feed'>
            {
                posts.map(post => <Post post={post}/>)
            }
        </div>
    )
}

export default Feed;