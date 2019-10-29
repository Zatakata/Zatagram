const ADD_POST = 'ADD_POST'
const CHANGE_POST_INPUT_TEXT = 'CHANGE_POST_INPUT_TEXT'
const ADD_LIKE = 'ADD_LIKE'
const REMOVE_LIKE = 'REMOVE_LIKE'
const SET_POSTS = 'SET_POSTS'
const TOGGLE_FETCHING = 'TOGGLE_FETCHING'
const TOGGLE_MODAL_ADD_POST = 'TOGGLE_MODAL_ADD_POST'

let initialState = {
    posts: [],
    isFetching: false,
    postsInputText: '',
    modalAddPostActive: false
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
        case ADD_LIKE:
            return {
                ...state,
                posts: [...state.posts.map(post => {
                    if (post._id === action.id) {
                        post.isLike = true
                        post.likes++
                    }
                    return post
                })]
            }
        case REMOVE_LIKE: {
            let stateCopy = {...state}
            stateCopy.posts = state.posts.map(post => {
                if (post._id === action.id) {
                    post.isLike = false
                    post.likes--
                }
                return post
            })
            return stateCopy
        }
        case SET_POSTS:
            return {
                ...state,
                posts: action.posts
            }
        case TOGGLE_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_MODAL_ADD_POST:
            return {
                ...state,
                modalAddPostActive: action.isActive
            }
        default:
            return state
    }
}

export let addPostAction = (src) => ({
    type: ADD_POST,
    src: src
})

export let changePostInputAction = (text) => ({
    type: CHANGE_POST_INPUT_TEXT,
    text: text
})

export let addLikeAction = (id) => ({
    type: ADD_LIKE,
    id: id
})

export let removeLikeAction = (id) => ({
    type: REMOVE_LIKE,
    id: id
})

export let setPosts = (posts) => ({
    type: SET_POSTS,
    posts: posts
})

export let toggleFetchingAction = (isFetching) => ({
    type: TOGGLE_FETCHING,
    isFetching: isFetching
})

export let toggleModalAddPostAction = (isActive) => ({
    type: TOGGLE_MODAL_ADD_POST,
    isActive
})


export default profileReducer