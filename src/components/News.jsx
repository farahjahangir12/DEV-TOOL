import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Cards from './Cards';
import Image from '../assets/pexels-pixabay-414860.jpg';

const API_KEY=NEWS_KEY
function News() {
    
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await axios.get(`https://newsdata.io/api/1/news?apikey=${API_KEY}&q=technology&language=en`
                   );
                const articles = response.data.results;
                setArticles(articles);
            } catch (error) {
                console.error("Error while fetching news:", error);
            }
        };
        fetchNews();
    }, []);

    const titled = articles.filter((article) => article.title && article.link!==undefined);

    return (
        <div className="flex flex-row flex-wrap gap-4 justify-center mt-4">
            {
                titled.map((element) => (
                    <Cards 
                        key={element.link} 
                        image={element.image_url || Image} 
                        title={element.title}  
                        content={element.link} 
                        className="cards" 
                    />
                ))
            }
        </div>
    );
}

export default News;
