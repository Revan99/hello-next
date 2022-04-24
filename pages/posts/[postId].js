function Post({ post }) {
    return (
        <>
            <h1>
                {post.id} {post.title}
            </h1>
            <p>{post.body}</p>
        </>
    )
}

export default Post

export async function getStaticProps({ params }) {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${params.postId}`
    )
    const data = await response.json()

    return {
        props: {
            post: data,
        },
    }
}

export async function getStaticPaths() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const data = await response.json()

    const paths = data.map((post) => ({
        params: {
            postId: `${post.id}`,
        },
    }))
    return {
        paths,
        fallback: false,
    }
}
