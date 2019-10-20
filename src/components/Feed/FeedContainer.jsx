import React from 'react'
import Feed from "./Feed";


const FeedContainer = (props) => {

    const posts = props.store.getState().feed.posts
    return (
        <Feed posts={posts}/>
    )
}

export default FeedContainer;