import React from 'react'
import { Link } from "react-router-dom";

import './NavBar.css';

const navlinks = [
    {
        navtext: 'Home',
        path: '/'
    },
    {
        navtext: 'Package Management',
        path: '/'
    },
    {
        navtext: 'Utilities',
        path: '/'
    },
    {
        navtext: 'Resource Management',
        path: '/'
    },
    {
        navtext: 'Section',
        path: '/'
    },
    {
        navtext: 'StoryBook',
        path: '/storybook'
    },

]
export default function NavBar() {
  return (
    <nav className='navbar'>
        <ul>
            {
                navlinks.map(nl => (
                    <li>
                        <Link to={nl.path}>{nl.navtext}</Link>
                    </li>
                ))
            }
          
          
        </ul>
      </nav>
  )
}
