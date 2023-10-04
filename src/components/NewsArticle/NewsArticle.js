import React from 'react';
import './NewsArticle.css';

function NewsArticle({author, title , description, url, urlToImage, publishedAt, content}) {
  return (
    <>
    <div className='news-article-card'>
              <img src={urlToImage}    alt='' className='news-articles-img'/>
              <h1>{title}</h1>
            </div>
    </>
  )
}

export default NewsArticle