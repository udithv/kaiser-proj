import React, { useState } from 'react'
import './ExpandablePanel.css';

export default function ExpandablePanel({ children, panelname,  }) {

  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <button onClick={() => setIsActive(!isActive)} className='accordion'>{panelname}</button>
      {isActive && (<div className='panel'>
        {children}
      </div>)}
    </>
  )
}
