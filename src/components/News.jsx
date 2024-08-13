import { useState , useEffect} from "react";
import axios from 'axios'
import Cards from './Cards'

const API_KEY=process.env.NEWS_KEY

function News(){
    const [articles,setArticles]=useState([]);
    useEffect( 
        ()=>{
    const fetchNews= async()=>{
    try{
    const response=await axios.get('https://newsapi.org/v2/everything?q=technology&from=2024-01-01sortBy=popularity&apiKey=API_KEY');
    const articles=response.data.articles;
    setArticles(articles);
    }
    catch (error){
        console.error("Error while fetching news");
    }
    };
    fetchNews();
    },[]);
     const titled=articles.filter((articles)=>articles.title);
    if (titled.url!=='Null')
    {
    return(
        <div className="flex flex-row flex-wrap gap-4 justify-center mt-4">
            
            {
            titled.map((element)=>{
                return (
                   <Cards image={element.urlToImage} title={element.title}  content={element.url} className="cards"/>
                );
               
            })
            
        }
        </div>
    )
    }
 
}

export default News;
