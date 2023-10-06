import React from 'react';
import './NewsArticle.css';
import Footer from '../Footer/Footer';

function NewsArticle({author, title , description, url, urlToImage, publishedAt}) {
  return (
    <>
    <div className='news-article-card'>
              <img src={urlToImage}    alt='' className='news-articles-img'/>
              <h1 className='article-title'>{title}</h1>
              <div className='article-info'>
                <p className='article-author'>{author}</p>
                <p className='article-publishedAt'>{publishedAt}</p>
              </div>
              <p className='article-description'>{description}</p>

              <a href={url} target='_blank' className='btn-readmore btn btn-primary'>Read More</a>
            </div>
    </>
  )
}

export default NewsArticle