import React, { Component } from 'react'

export default class GifSearch extends Component {
  state = {
    search: ""
  }

  handleChange = (event) => {
    this.setState({ search: event.target.value })
  }

  submitSearch = (event) => {
    event.preventDefault()
    this.props.handleSearch(this.state.search)
  }

  render() {
    return (
      <form onSubmit={this.submitSearch}>
        <input type="text" name="search" onChange={this.handleChange} value={this.state.search} />
      </form>
    )
  }
}
