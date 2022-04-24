import React from 'react'

function User({ user }) {
    return (
        <li>
            <p>{user.name}</p>
            <p>{user.email}</p>
        </li>
    )
}

export default User
