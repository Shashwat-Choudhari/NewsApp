import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
  
  constructor(props){
    super(props);
    this.state = {query: ''};
  }
  
  handleChange = (event)=>{
    this.setState({query: event.target.value});
  }

  handleSearch = ()=>{
    console.log("Search button is clicked")
    this.props.onSearch(this.state.query);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.searchQuery !== this.props.searchQuery) {
      this.setState({ searchInput: this.props.searchQuery }); // Sync search input with the query prop
    }
  }
  
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" onClick={this.props.resetSearchQuery}>NewsApp</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/" onClick={this.props.resetSearchQuery}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/business" onClick={this.props.resetSearchQuery}>Business</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/entertainment" onClick={this.props.resetSearchQuery}>Entertainment</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/general" onClick={this.props.resetSearchQuery}>General</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/health" onClick={this.props.resetSearchQuery}>Health</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/science" onClick={this.props.resetSearchQuery}>Science</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sports" onClick={this.props.resetSearchQuery}>Sports</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/technology" onClick={this.props.resetSearchQuery}>Technology</Link>
              </li>
            </ul>
            <div className="d-flex">
              <input className="form-control me-2" type="text" placeholder="Search" aria-label="Search" onChange={this.handleChange} value={this.state.query}/>
              <button className="btn btn-outline-success" type="submit" onClick={this.handleSearch}>Search</button>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar