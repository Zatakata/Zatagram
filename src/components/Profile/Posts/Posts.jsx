import React from 'react'
import Post from './Post/Post'
import s from './Posts.module.css'
import axios from "axios";


class Posts extends React.Component{
    constructor(props) {
        super(props)
        this.inpElement = React.createRef()
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8080/api/users/5db5663600638b0804a491a6')
            .then(response => {
                this.props.setPosts(response.data.posts)
            })
    }

    onAddPost = () => {
        let src = this.inpElement.current.value
        this.props.addPost(src)
    }

    onChangePostText = () => {
        let text = this.inpElement.current.value
        this.props.changePostText(text)
    }

    render() {
        return (
            <div>
                <input ref={this.inpElement} onChange={this.onChangePostText} value={this.props.postsInputText}
                       className={s.inp} type="text" placeholder='URL картинки'/>
                <button onClick={this.onAddPost}>Добавить</button>

                <div className={s.posts}>
                    {this.props.posts.map(post => <Post key={post._id} post={post} addLike={this.props.addLike}
                                                        removeLike={this.props.removeLike}/>)}
                </div>
            </div>
        )
    }
}

export default Posts;