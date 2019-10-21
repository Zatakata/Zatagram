const ADD_POST = 'add-post'
const CHANGE_POST_INPUT_TEXT = 'change-post-input-text'

let initialState = {
    posts: [
        {
            name: 'name',
            src: 'https://images.unsplash.com/photo-1570640717412-bac2dc91ae86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
        },
        {
            name: 'name',
            src: 'https://images.unsplash.com/photo-1570630992840-0bdd5732442e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
        },
        {
            name: 'name',
            src: 'https://images.unsplash.com/photo-1565121504582-6dbd18772bb2?ixlib=rb-1.2.1&auto=format&fit=crop&w=719&q=80'
        },
        {
            name: 'name',
            src: 'https://images.unsplash.com/photo-1549174292-0e5ae176b8b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
        },
        {
            name: 'name',
            src: 'https://images.unsplash.com/photo-1567066245527-7097def64260?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
        },
        {
            name: 'name',
            src: 'https://images.unsplash.com/photo-1563544955328-fefce27148fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=611&q=80'
        },
        {
            name: 'name',
            src: 'https://images.unsplash.com/photo-1569683795645-b62e50fbf103?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
        },
        {
            name: 'name',
            src: 'https://images.unsplash.com/photo-1566310421012-827cd561e657?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
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

export default profileReducer