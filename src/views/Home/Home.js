import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.css';
import NewsArticle from '../../components/NewsArticle/NewsArticle';

function Home() {
    const [news, setNews] = useState([]);

    const loadNews = async ()=>{
      const response = await axios.get("https://newsapi.org/v2/everything?q=tesla&from=2023-09-04&sortBy=publishedAt&apiKey=d17b81c0712d431688c1cdfe245707bc")
      setNews(response.data.articles)
    } 

    useEffect(()=>{
        loadNews()
    },[])
  return (
    <>
    <h2 className='text-center'>News App...📰</h2>
    {
        news.map((newsArticles, index)=>{
            const {author, title , description, url, urlToImage, publishedAt, content} = newsArticles 
        return( 
          <NewsArticle author={author} title={title} description={description} url={url} urlToImage={urlToImage} publishedAt={publishedAt} content={content}/>
        )
        })
    }
    </>
  )
}

export default Home