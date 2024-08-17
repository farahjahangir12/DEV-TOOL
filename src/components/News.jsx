import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Cards from './Cards';

function News() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await axios.get('https://newsapi.org/v2/top-headlines?country=us', {
                    headers: {
                        'Authorization': `Bearer 3646f43dda1146d3a4cd95338cec5c0d`,
                        'Content-Type': 'application/json'
                    }
                });
                const articles = response.data.articles;
                setArticles(articles);
            } catch (error) {
                console.error("Error while fetching news:", error);
            }
        };
        fetchNews();
    }, []);

    const titled = articles.filter((article) => article.title && article.url !== 'Null');

    return (
        <div className="flex flex-row flex-wrap gap-4 justify-center mt-4">
            {
                titled.map((element) => (
                    <Cards 
                        key={element.url} 
                        image={element.urlToImage} 
                        title={element.title}  
                        content={element.url} 
                        className="cards" 
                    />
                ))
            }
        </div>
    );
}

export default News;
