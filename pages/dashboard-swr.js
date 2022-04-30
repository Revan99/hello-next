import useSWR from 'swr'

const fetcher = (...args) => {
    console.log(args)
    return fetch(...args).then((res) => res.json())
}

function DashboardSWR() {
    const { data, error } = useSWR('http://localhost:4000/dashboard', fetcher)

    if (error) return <h2>failed to fetch date</h2>
    if (!data) return <h2>loading</h2>
    return (
        <>
            <h2>likes : {data.likes}</h2>
            <h2>Posts : {data.posts}</h2>
            <h2>following : {data.following}</h2>
            <h2>followers : {data.followers}</h2>
        </>
    )
}

export default DashboardSWR
