import Link from 'next/link'
import { useRouter } from 'next/router'

function Home() {
    const router = useRouter()
    const handleClick = () => {
        router.push('/product')
    }
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h1>Home Page</h1>
            <Link href="/blog">
                <a>Blog</a>
            </Link>
            <Link href="/product">
                <a>Product</a>
            </Link>
            <Link href="/posts">
                <a>Product</a>
            </Link>
            <button onClick={handleClick}>submit order</button>
        </div>
    )
}

export default Home
