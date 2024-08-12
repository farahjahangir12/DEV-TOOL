import {useState,useEffect} from 'react'
import Cards from "./Cards"
function General(){
    const tags=["webdevelopment","artificalintelligence","softwaredevelopment","cybersecurity","applicationdevelopment"];
    const likes=20;
    const [articles,setArticles]=useState([]);
    
    useEffect(()=>{
        const fetchArticles = async(tag)=> {
            try{
                const result = await fetch(`https://dev.to/api/articles?tag=${tag}`);
                const response=await result.json();

                const currentDate=new Date();
                const startDate= new Date(currentDate.getFullYear(),currentDate.getMonth(),1);

                return response.filter(article=>{
                    const publishedDate=new Date(article.published_at);
                    return publishedDate >= new Date(startDate) && publishedDate <=new Date(currentDate);

                })     
            }
            catch(err)
            {
                console.log(err);
            }
            
        }

        const filteredArticles=async()=>{
            try {
                const devArticles=[];
                for(const tag of tags){
                    const articles= await fetchArticles(tag);
                    devArticles.push(...articles);
                }
                setArticles(devArticles);
            }
            catch(err){
                console.log(err);
            }

        }
       filteredArticles();


},[])
 

 return(
    <div className="flex flex-row flex-wrap gap-3 justify-content-center">
            
    {
    articles.map((element,index)=>{
        return (
           <Cards image={element.cover_image} title={element.title} content={element.url} key={element.id || index}
           />
        );
       
    })
    
}
</div>
)
}

export default General;