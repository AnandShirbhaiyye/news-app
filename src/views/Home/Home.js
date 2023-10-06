import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link} from 'react-router-dom'
import "./Home.css";
import NewsArticle from "../../components/NewsArticle/NewsArticle";


function Home() {
  const [news, setNews] = useState([]);
  const [searchQuery, setSearchQuery] = useState("nagpur");

  const loadNews = async () => {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=${searchQuery}&from=2023-09-06&sortBy=publishedAt&apiKey=$d17b81c0712d431688c1cdfe245707bc`
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
      <nav class="navbar navbar-dark bg-dark text-light">
        <h3 class="navbar-brand ms-3">News App🗞️</h3>
        <form class="form-inline">
          <input
            class="form-control mr-sm-2 me-5"
            type="search"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            aria-label="Search"
          />
        </form>
      </nav>

      <div className="news-container mt-3">
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
