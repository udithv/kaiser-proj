import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Home() {
  const tiles = useSelector((state) => state.tiles.data)
  return (
    <div>
        {
          tiles.map(tile => (
              <p>{tile.t}</p>
          ))
        }
    </div>
  )
}
