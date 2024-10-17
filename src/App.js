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

  handleSearch = (query)=>{
    this.setState({searchQuery: query})
  }
  
  render() {
    const pageSize = 9;
    return (
      <>
      <Router>
      <Navbar onSearch = {this.handleSearch}/>
      <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        height={4}
      />
      <div className="container my-3">
        <Routes>
          <Route exact path = "/" element = {<News setProgress = {this.setProgress} apiKey = {this.apiKey}  key = "home" pageSize = {pageSize} country = "us" category ="general" searchQuery = {this.state.searchQuery}/>}/>
          <Route exact path = "/business" element = {<News setProgress = {this.setProgress} apiKey = {this.apiKey}  key = "business" pageSize = {pageSize} country = "us" category ="business"/>}/>
          <Route exact path = "/entertainment" element = {<News setProgress = {this.setProgress} apiKey = {this.apiKey}  key = "entertainment" pageSize = {pageSize} country = "us" category ="entertainment"/>}/>
          <Route exact path = "/general" element = {<News setProgress = {this.setProgress} apiKey = {this.apiKey}  key = "general" pageSize = {pageSize} country = "us" category ="general"/>}/>
          <Route exact path = "/health" element = {<News setProgress = {this.setProgress} apiKey = {this.apiKey}  key = "health" pageSize = {pageSize} country = "us" category ="health"/>}/>
          <Route exact path = "/sports" element = {<News setProgress = {this.setProgress} apiKey = {this.apiKey}  key = "sports" pageSize = {pageSize} country = "us" category ="sports"/>}/>
          <Route exact path = "/science" element = {<News setProgress = {this.setProgress} apiKey = {this.apiKey}  key = "science" pageSize = {pageSize} country = "us" category ="science"/>}/>
          <Route exact path = "/technology" element = {<News setProgress = {this.setProgress} apiKey = {this.apiKey}  key = "technology" pageSize = {pageSize} country = "us" category ="technology"/>}/>
        </Routes>
              
      </div>
      </Router>
      </>
    )
  }
}

