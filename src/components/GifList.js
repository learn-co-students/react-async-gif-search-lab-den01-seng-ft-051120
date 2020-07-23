import React from 'react'

export default function GifList({ gif }) {
  return (
    <li>
      <img src={gif} alt="Gif" />
    </li>
  )
}
