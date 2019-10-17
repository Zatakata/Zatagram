import profileReducer from "./profileReducer";

let store = {
    _state: {
        profile: {
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
            postsInputText: ''
        },
        feed: {
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
        },
        aside: {
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
            ]
        }

    },
    _callSubscriber() {
        console.log('rerender is undefined')
    },
    getState() {
        return this._state
    },
    dispatch(action) {

        this._state.profile = profileReducer(this._state.profile, action)
        this._callSubscriber()

        // if (action.type === 'add-post') {
        //     this._state.profile.posts.push({name: 'name', src: action.src})
        //     this._state.profile.postsInputText = ''
        //     this._callSubscribe()
        // }
        // else if (action.type === 'post-input-text-change') {
        //     this._state.profile.postsInputText = action.text
        //     this._callSubscribe()
        // }

    },
    subscribe (callback) {
        this._callSubscriber = callback
    }
}



export default store