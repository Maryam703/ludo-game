import React from 'react'
import "./Token.css"

export default function Token({color}) {
  return (
    <div className={`token-container ${color}`}>
       <div className="inner-token"></div>
    </div>
  )
}
