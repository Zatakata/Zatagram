import React from 'react'
import {
    addLikeAction,
    addPostAction,
    changePostInputAction,
    removeLikeAction,
    setPosts, toggleFetchingAction, toggleModalAddPostAction
} from "../../../redux/profileReducer";
import {connect} from "react-redux";
import axios from "axios";
import Posts from "./Posts";


class PostsContainer extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.toggleFetching(true)

        axios.get('http://127.0.0.1:8080/api/users/5db5663600638b0804a491a6')
            .then(response => {
                this.props.setPosts(response.data.posts)
                this.props.toggleFetching(false)
            })
    }

    render() {
        return (
            <Posts
                posts={this.props.posts}
                inpElement={this.inpElement}
                postsInputText={this.props.postsInputText}
                changePostText={this.props.changePostText}
                addPost={this.props.addPost}
                addLike={this.props.addLike}
                removeLike={this.props.removeLike}
                setPosts={this.props.setPosts}
                isFetching={this.props.isFetching}
                toggleFetching={this.props.toggleFetching}
                modalAddPostActive={this.props.modalAddPostActive}
                toggleModalAddPost={this.props.toggleModalAddPost}
            />
        )
    }
}


let mapStateToProps = (state) => {
    return {
        posts: state.profile.posts,
        postsInputText: state.profile.postsInputText,
        isFetching: state.profile.isFetching,
        modalAddPostActive: state.profile.modalAddPostActive
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: src => {
            dispatch(addPostAction(src))
        },
        changePostText: text => {
            dispatch(changePostInputAction(text))
        },
        addLike: id => {
            dispatch(addLikeAction(id))
        },
        removeLike: id => {
            dispatch(removeLikeAction(id))
        },
        setPosts: posts => {
            dispatch(setPosts(posts))
        },
        toggleFetching: isFetching => {
            dispatch(toggleFetchingAction(isFetching))
        },
        toggleModalAddPost: isActive => {
            dispatch(toggleModalAddPostAction(isActive))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer)
