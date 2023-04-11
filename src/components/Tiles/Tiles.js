import React from 'react'
import { useSelector } from 'react-redux'

import './Tiles.css';

export default function Tiles() {
  const tiles = useSelector((state) => state.tiles.data)
  return (
    <>
      {
          tiles.map(tile => (
              <div className='column-4 tile'>
                <h3>{tile.t}</h3>
              </div>
          ))
        }
    </>
  )
}
