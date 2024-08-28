import React from 'react'
import "./Token.css"

export default function Token({color,onClick}) {
  
  return (
    <div className={`token-container ${color}`} onClick={onClick}>
       <div className="inner-token">
       </div>
    </div>
  )
}
