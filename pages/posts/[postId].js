import { useRouter } from 'next/router'

function Post({ post }) {
    const router = useRouter()

    if (router.isFallback) return <h2>Loading...</h2>
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

    if (!data.id) {
        return {
            notFound: true,
        }
    }
    return {
        props: {
            post: data,
        },
        revalidate: 10,
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
        paths: paths.slice(0, 10),
        fallback: true,
    }
}
