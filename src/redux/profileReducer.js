const ADD_POST = 'add-post'
const CHANGE_POST_INPUT_TEXT = 'change-post-input-text'
const ADD_LIKE = 'add-like'
const REMOVE_LIKE = 'remove-like'

let initialState = {
    posts: [
        {
            id: 1,
            name: 'name',
            src: 'https://images.unsplash.com/photo-1570640717412-bac2dc91ae86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
            likes: 0,
            isLike: false
        },
        {
            id: 2,
            name: 'name',
            src: 'https://images.unsplash.com/photo-1570630992840-0bdd5732442e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
            likes: 0,
            isLike: false
        },
    ],
    users: [
        {id: 1, avatar: 'https://i.pinimg.com/originals/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64.jpg'},
        {id: 2, avatar: 'https://cs16planet.ru/steam-avatars/images/avatar2700.jpg'},
        {id: 3, avatar: 'https://bipbap.ru/wp-content/uploads/2017/07/1426228433_iv6tzpo0bia.jpg'},
        {id: 4, avatar: 'https://7zabav.club/wp-content/uploads/2019/03/avatarki_memy_36_02084115-600x600.jpg'},
        {id: 5, avatar: 'https://вайбер-ок.рф/wp-content/uploads/2018/06/4wx8ecia-min.jpg'},
        {
            id: 6,
            avatar: 'http://zabavnik.club/wp-content/uploads/2018/02/kartinki_krutye_na_avu_1_01062305-e1517466234253.jpg'
        },
    ],
    postsInputText: ''
}

let profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {name: 'name', src: action.src}],
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
                if (post.id === action.id) {
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
                if (post.id === action.id) {
                    post.isLike = false
                    post.likes--
                    console.log(post.likes)
                }
                return post
            })
            return stateCopy
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

export default profileReducer