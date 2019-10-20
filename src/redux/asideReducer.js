let initialState = {
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


let asideReducer = (state = initialState, action) => {
    return state
}

export default asideReducer