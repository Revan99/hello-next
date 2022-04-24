import Link from 'next/link'

function PostList({ posts }) {
    return (
        <>
            <h1>List of Posts</h1>
            {posts.map((post) => (
                <Link href={`/posts/${post.id}`} passHref key={post.id}>
                    <div>
                        <h3>
                            {post.id} {post.title}
                        </h3>
                        <hr />
                    </div>
                </Link>
            ))}
        </>
    )
}

export default PostList

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()

    return {
        props: {
            posts: data,
        },
    }
}
