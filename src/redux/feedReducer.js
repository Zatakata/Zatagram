let initialState = {
    posts: [
        {
            author: '@zatakata',
            date: '12.10.2019',
            likes: 20,
            comments: 15,
            views: 101,
            src: 'https://images.unsplash.com/photo-1570640717412-bac2dc91ae86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
            desc: 'Мой первый пост!'
        },
        {
            author: '@nonename',
            date: '12.10.2019',
            likes: 24,
            comments: 7,
            views: 67,
            src: 'https://images.unsplash.com/photo-1549174292-0e5ae176b8b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
            desc: 'Второй пост!'
        }
    ]
}


let feedReducer = (state = initialState, action) => {

    return state
}

export default feedReducer