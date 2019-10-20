import React from 'react'
import Aside from "./Aside";

const AsideContainer = (props) => {
    let users = props.store.getState().aside.users
    return (
        <Aside users={users} />
    )
}

export default AsideContainer;
