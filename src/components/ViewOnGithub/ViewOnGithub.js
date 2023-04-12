import React from 'react'
// import GithubIcon from '../Icons/GithubIcon'

import './ViewOnGithub.css'

export default function ViewOnGithub() {
  return (
    <div className='fixed-wrapper'>
        <a href="https://github.com/udithv/kaiser-proj" target="_blank" rel="noreferrer">
            <span className='vog-text'>View on Github</span>
            {/* <GithubIcon /> */}
        </a>
    </div>
  )
}
