function Category({ articles }) {
    return (
        <div>
            <h1>List of article by category</h1>
            {articles.map((article) => (
                <div key={article.id}>
                    <h2>
                        {article.id} {article.title} | {article.category}
                    </h2>
                </div>
            ))}
        </div>
    )
}

export default Category

export async function getServerSideProps({ params }) {
    const { category } = params
    const response = await fetch(
        `http://localhost:4000/news?category=${category}`
    )
    const data = await response.json()

    if (!data.length)
        return {
            notFound: true,
        }
    return {
        props: {
            articles: data,
        },
    }
}
