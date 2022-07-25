import React, { Component } from "react";
import NewsItem from "./NewsItem";
import CardSkeleton from "./CardSkeleton";
// import Spinner from "./Spinner";
import PropTypes from 'prop-types'

export default class News extends Component {
  static defaultProps = {
    pageSize : 8,
    country : "in",
    category : "general"
  }

  static propTypes = {
    pageSize : PropTypes.number,
    country : PropTypes.string,
    category : PropTypes.string
  }

  articles = [];
  // url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=8130cd86b4a64f589ff541901ed96262`

  constructor() {
    super();
    console.log("Inside  Constructor");
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
    };
  }
  async componentDidMount() {
    console.log("Inside componentDidMount");
    let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8130cd86b4a64f589ff541901ed96262&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading : false,
    });
  }

  handleNext = async () => {
    console.log("Handle Next");
    if (!((this.state.page + 1) > Math.ceil(this.state.totalResults / this.props.pageSize))) {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8130cd86b4a64f589ff541901ed96262&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true})
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading : false,
      });
    }
  };

  handlePrevious = async () => {
    console.log("Handle Previous");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8130cd86b4a64f589ff541901ed96262&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading : false
    });
  };


  render() {
    console.log("Inside Render");
    return (
      <>
        <div className="container my-3">
          <h2 className="text-center">News Monkey - Top Headlines</h2>
          <div className="container d-flex justify-content-between">
            <button
              disabled={this.state.page < 2}
              type="button"
              className="btn btn-dark"
              onClick={this.handlePrevious}
              >
              &larr;Previous
            </button>
            <button
              type="button"
              className="btn btn-dark"
              disabled={
                this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)
              }
              onClick={this.handleNext}
              >
              Next&rarr;
            </button>
          </div>
          {/* {this.state.loading && <Spinner/>} */}
          {this.state.loading && <CardSkeleton/>}
          <div className="row my-4">
            {!this.state.loading && this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title}
                    desc={element.description}
                    imageUrl={
                      element.urlToImage
                        ? element.urlToImage
                        : "https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg"
                    }
                    newsUrl={element.url}
                    source={element.source.name}
                    author={element.author}
                  />
                </div>
              );
            })}
          </div>
          <div className="container d-flex justify-content-between">
            <button
              disabled={this.state.page < 2}
              type="button"
              className="btn btn-dark"
              onClick={this.handlePrevious}
            >
              &larr;Previous
            </button>
            <button
              type="button"
              className="btn btn-dark"
              disabled={
                this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)
              }
              onClick={this.handleNext}
            >
              Next&rarr;
            </button>
          </div>
        </div>
      </>
    );
  }
}
