import React from 'react'
import Collapsible from '../../components/Collapsible/Collapsible'
import Tiles from '../../components/Tiles/Tiles'
import { Link } from 'react-router-dom'

export default function Storybook() {
  return (
    <div>
        <h1>
            Tiles
        </h1>
        <div>
            <Tiles />
        </div>


        <br />

        <h1>
            Collapsible
        </h1>
        <div>
            <Collapsible/>
        </div>
    </div>
  )
}
