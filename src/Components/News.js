import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner.js';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component"

export class News extends Component {

  static defaultProps = {
    country: 'us',
    category: 'general',
    pageSize: 9,
    searchQuery: ''
  }

  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number,
    searchQuery: PropTypes.string
  }

  constructor(props) {
    super(props);
    this.state = { articles: [], loading: false, page: 1, totalResults: 0 };
    document.title = `NewsApp - ${this.props.category==='general'?'Top Headlines':this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)}`
  }

  async updateNews(pageNo) {
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&q=${this.props.searchQuery}&apiKey=${this.props.apiKey}&page=${pageNo}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles, totalArticles: parsedData.totalResults, loading: false, page: pageNo });
    this.props.setProgress(100);
  }

  async componentDidMount() {
    this.updateNews(1);
  }

  // handleNext = async () => {
  //   console.log("Next page was clicked");
  //   this.updateNews(this.state.page + 1);
  // }

  // handlePrevious = async () => {
  //   console.log("Previous page was clicked");
  //   this.updateNews(this.state.page - 1);
  // }

  fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&q=${this.props.searchQuery}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: this.state.articles.concat(parsedData.articles), totalArticles: parsedData.totalResults, page: this.state.page + 1 })
  }


  render() {
    return (
      <>
        <div className='container my-2'>
          <h1 className='text-center' style={{marginTop: "90px"}}>NewsApp - Top Headlines {this.props.category === "general" ? "" : `on ${this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)}`}</h1>
          <hr />
          {/* {this.state.loading && <Spinner />} */}
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalArticles}
            loader={<Spinner />}
          >
            <div className="container">

              <div className="row">
                {this.state.articles.map((element) => {
                  return <div className="col-md-4" key={element.url}>
                    <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                  </div>
                })}
              </div>
            </div>
          </InfiniteScroll>
        </div>
        {/* <div className='container d-flex justify-content-between'>
          <button disabled={this.state.page <= 1} type="button" className="btn btn-success" onClick={this.handlePrevious}>&larr; Previous</button>
          <button disabled={this.state.page >= Math.ceil(this.state.totalArticles / this.props.pageSize)} type="button" className="btn btn-success" onClick={this.handleNext}>Next &rarr;</button>
        </div> */}
      </>
    )
  }
}

export default News