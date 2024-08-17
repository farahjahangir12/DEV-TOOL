import { useState , useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import Cards from './Cards'

function News(){
    const [articles,setArticles]=useState([]);
    useEffect( 
        ()=>{
    const fetchNews= async()=>{
    try{
    const response=await axios.get('https://newsapi.org/v2/everything?q=cybersecurity&from=2024-01-01sortBy=popularity&apiKey=3646f43dda1146d3a4cd95338cec5c0d');
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
