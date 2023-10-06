import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";
import NewsArticle from "../../components/NewsArticle/NewsArticle";


function Home() {
  const [news, setNews] = useState([]);
  const [searchQuery, setSearchQuery] = useState("nagpur");

  const loadNews = async () => {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=${searchQuery}&from=2023-09-06&sortBy=publishedAt&apiKey=${process.env.REACT_APP_API_KEY}`
      );
      setNews(response.data.articles);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadNews();
  }, []);

  useEffect(() => {
    loadNews();
  }, [searchQuery]);
  return (
    <>
       <div className="app-title-container">
        <h1 className="app-title text-center">News App🗞️</h1>
      </div>
      <input
        type="text"
        className="search-input"
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
      />

      <div className="news-container">
        {news.map((newsArticles, index) => {
          const {
            author,
            title,
            description,
            url,
            urlToImage,
            publishedAt,
            content,
          } = newsArticles;
          return (
            <NewsArticle
              author={author}
              title={title}
              description={description}
              url={url}
              urlToImage={urlToImage}
              publishedAt={publishedAt}
              content={content}
            />
          );
        })}
      </div>
    
    </>
  );
}

export default Home;
