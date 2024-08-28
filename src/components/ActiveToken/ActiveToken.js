import React from 'react'
import Token from '../Token/Token'
import './ActiveToken.css'

export default function ({tokenColor, diceNum, positionsIdx, moveToken, activeColor}) {
    console.log(`position${positionsIdx}`)
  return (
      <div className={activeColor === tokenColor && diceNum !== null ? `blink position${positionsIdx}` : `position${positionsIdx}`}><Token color={tokenColor} onClick={moveToken} /></div>
)
}
