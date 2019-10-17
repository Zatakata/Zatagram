const ADD_POST = 'add-post'
const CHANGE_POST_INPUT_TEXT =  'change-post-input-text'

let profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            state.posts.push({name: 'name', src: action.src})
            state.postsInputText = ''
            return state
        case CHANGE_POST_INPUT_TEXT:
            state.postsInputText = action.text
            return state
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