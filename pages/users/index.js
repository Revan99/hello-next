import Link from 'next/link'
import User from '../../components/user'

const UserList = ({ users }) => {
    return (
        <div>
            <h1>UserList</h1>
            <ol>
                {users.map((user) => (
                    <User key={user.id} user={user} />
                ))}
            </ol>
        </div>
    )
}

export default UserList

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    return {
        props: {
            users: data,
        },
    }
}
