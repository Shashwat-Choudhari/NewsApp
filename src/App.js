import './App.css';
import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
  
  apiKey = process.env.REACT_APP_NEWS_API

  constructor(){
    super();
    this.state ={progress: 0, searchQuery: ''};
  }

  setProgress = (progress)=>{
    this.setState({progress: progress});
  }

  onSearch = async (word)=>{
    console.log(`onSeacrh function is called with query = ${word}`);
    await this.setState({searchQuery: word});
    console.log(`searchQuery is now = ${this.state.searchQuery}`);
  }

  resetSearchQuery = async () => {
    await this.setState({ searchQuery: '' });
  };
  
  render() {
    const pageSize = 9;
    return (
      <>
      <Router>
      <Navbar onSearch = {this.onSearch} searchQuery = {this.state.searchQuery}/>
      <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        height={4}
      />
      <div className="container my-3">
        <Routes>
          <Route exact path = "/" element = {<News setProgress = {this.setProgress} apiKey = {this.apiKey}  key = "home" pageSize = {pageSize} country = "us" category ="general" searchQuery = {this.state.searchQuery} resetSearchQuery = {this.resetSearchQuery}/>}/>
          <Route exact path = "/business" element = {<News setProgress = {this.setProgress} apiKey = {this.apiKey}  key = "business" pageSize = {pageSize} country = "us" category ="business" searchQuery = {this.state.searchQuery} resetSearchQuery = {this.resetSearchQuery}/>}/>
          <Route exact path = "/entertainment" element = {<News setProgress = {this.setProgress} apiKey = {this.apiKey}  key = "entertainment" pageSize = {pageSize} country = "us" category ="entertainment" searchQuery = {this.state.searchQuery} resetSearchQuery = {this.resetSearchQuery}/>}/>
          <Route exact path = "/general" element = {<News setProgress = {this.setProgress} apiKey = {this.apiKey}  key = "general" pageSize = {pageSize} country = "us" category ="general" searchQuery = {this.state.searchQuery} resetSearchQuery = {this.resetSearchQuery}/>}/>
          <Route exact path = "/health" element = {<News setProgress = {this.setProgress} apiKey = {this.apiKey}  key = "health" pageSize = {pageSize} country = "us" category ="health" searchQuery = {this.state.searchQuery} resetSearchQuery = {this.resetSearchQuery}/>}/>
          <Route exact path = "/sports" element = {<News setProgress = {this.setProgress} apiKey = {this.apiKey}  key = "sports" pageSize = {pageSize} country = "us" category ="sports" searchQuery = {this.state.searchQuery} resetSearchQuery = {this.resetSearchQuery}/>}/>
          <Route exact path = "/science" element = {<News setProgress = {this.setProgress} apiKey = {this.apiKey}  key = "science" pageSize = {pageSize} country = "us" category ="science" searchQuery = {this.state.searchQuery} resetSearchQuery = {this.resetSearchQuery}/>}/>
          <Route exact path = "/technology" element = {<News setProgress = {this.setProgress} apiKey = {this.apiKey}  key = "technology" pageSize = {pageSize} country = "us" category ="technology" searchQuery = {this.state.searchQuery} resetSearchQuery = {this.resetSearchQuery}/>}/>
        </Routes>
              
      </div>
      </Router>
      </>
    )
  }
}

