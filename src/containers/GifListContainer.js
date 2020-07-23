import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'
export default class GifListContainer extends Component {
  state = {
    gifs: []
  }

  handleSearch = (searchValue) => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${searchValue}&api_key=dc6zaTOxFJmzC&rating=g`)
      .then(response => response.json())
      .then(this.addToState)
  }

  addToState = gifObject => {
    const results = gifObject.data.slice(0, 3)
    this.setState({ gifs: results })
  }

  displayGifs = () => {
    return this.state.gifs.map(gif => {
      return <GifList gif={gif.images.original.url} />
    })
  }

  render() {
    return (
      <div>
        <GifSearch handleSearch={this.handleSearch} />
        <ul>
          {this.displayGifs()}
        </ul>
      </div>
    )
  }
}
