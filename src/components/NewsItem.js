import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, desc, imageUrl, newsUrl, source, author} = this.props
    return (
        <>
        <div className="card my-3">
        <img src={imageUrl} className="card-img-top" alt="..."/>
        <div className="card-body my-3">
          <h5 className="card-title">{title?title:""}</h5>
          <p className="card-text">{desc?desc:""}</p>
          <h5>   Author: {author}</h5>
          <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-dark btn-primary">Read More</a>
          <br/>
          <p>   Source: {source}</p>
        </div>
      </div>
      </>
    )
  }
}

export default NewsItem