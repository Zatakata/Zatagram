import React from 'react'
import MyPost from './my_post/My_post'
import s from './My_posts.module.css'


const My_posts = () => {
    return (
        <div className={s.posts}>
            <MyPost src='https://images.unsplash.com/photo-1570640717412-bac2dc91ae86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80' />
            <MyPost src='https://images.unsplash.com/photo-1570630992840-0bdd5732442e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80' />
            <MyPost src='https://images.unsplash.com/photo-1565121504582-6dbd18772bb2?ixlib=rb-1.2.1&auto=format&fit=crop&w=719&q=80' />
            <MyPost src='https://images.unsplash.com/photo-1549174292-0e5ae176b8b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80' />
            <MyPost src='https://images.unsplash.com/photo-1567066245527-7097def64260?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80' />
            <MyPost src='https://images.unsplash.com/photo-1563544955328-fefce27148fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=611&q=80' />
            <MyPost src='https://images.unsplash.com/photo-1569683795645-b62e50fbf103?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80' />
            <MyPost src='https://images.unsplash.com/photo-1566310421012-827cd561e657?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' />
        </div>
    )
}

export default My_posts;