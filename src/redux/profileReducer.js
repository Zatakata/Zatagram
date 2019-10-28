const ADD_POST = 'add-post'
const CHANGE_POST_INPUT_TEXT = 'change-post-input-text'
const ADD_LIKE = 'add-like'
const REMOVE_LIKE = 'remove-like'
const SET_POSTS = 'set-posts'
const TOGGLE_FETCHING = 'toggle-fetching'

let initialState = {
    posts: [],
    isFetching: false,
    postsInputText: ''
}

let profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {name: 'name', photoSrc: action.src}],
                postsInputText: ''
            }
        case CHANGE_POST_INPUT_TEXT:
            return {
                ...state,
                postsInputText: action.text
            }
        case ADD_LIKE: {
            let stateCopy = {...state}
            stateCopy.posts = state.posts.map(post => {
                if (post._id === action.id) {
                    post.isLike = true
                    post.likes++
                    console.log(post.likes)
                }
                return post
            })
            return stateCopy
        }
        case REMOVE_LIKE: {
            let stateCopy = {...state}
            stateCopy.posts = state.posts.map(post => {
                if (post._id === action.id) {
                    post.isLike = false
                    post.likes--
                    console.log(post.likes)
                }
                return post
            })
            return stateCopy
        }
        case SET_POSTS:
            console.log(action.posts)
            return {
                ...state,
                posts: action.posts
            }
        case TOGGLE_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state
    }
}

export let addPostAction = (src) => ({
    type: 'add-post',
    src: src
})

export let changePostInputAction = (text) => ({
    type: 'change-post-input-text',
    text: text
})

export let addLikeAction = (id) => ({
    type: 'add-like',
    id: id
})

export let removeLikeAction = (id) => ({
    type: 'remove-like',
    id: id
})

export let setPosts = (posts) => ({
    type: 'set-posts',
    posts: posts
})

export let toggleFetchingAction = (isFetching) => ({
    type: 'toggle-fetching',
    isFetching: isFetching
})

export default profileReducer