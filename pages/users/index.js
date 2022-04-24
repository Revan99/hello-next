import Link from 'next/link'

const UserList = ({ users }) => {
    return (
        <div>
            <h1>UserList</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <Link href={`/user/${user.id}`}>
                            <a>{user.name}</a>
                        </Link>
                    </li>
                ))}
            </ul>
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
