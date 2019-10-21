import React from 'react'
import Feed from "./Feed";
import {connect} from "react-redux";


// const FeedContainer = (props) => {
//
//     const posts = props.store.getState().feed.posts
//     return (
//         <Feed posts={posts}/>
//     )
// }

let mapStateToProps = (state) => {
    return {
        posts: state.feed.posts
    }
}

let mapDispatchToProps = (dispatch) => {

}

const FeedContainer = connect(mapStateToProps, mapDispatchToProps)(Feed)

export default FeedContainer;