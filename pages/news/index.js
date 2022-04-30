function NewsList({ news }) {
    console.log(news)
    return (
        <div>
            <h1>list of Articles</h1>
            {news.map((article) => (
                <div key={article.id}>
                    <h2>
                        {article.name} {article.title} | {article.category}
                    </h2>
                </div>
            ))}
        </div>
    )
}

export default NewsList

export async function getServerSideProps() {
    const response = await fetch('http://localhost:4000/news')
    const data = await response.json()
    return {
        props: {
            news: data,
        },
    }
}
