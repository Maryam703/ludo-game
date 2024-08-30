import React, {useState}  from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

export default function Home() {
   
  return (
      <>
      <div className='header'>
        <div className='user-img-box'><div className='user-img'><img src='https://images.unsplash.com/photo-1689907994060-8a1c4347e788?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' /></div></div>
        <div className='setting'><i class="fa-solid fa-gear"></i></div>
      </div>

      <div className='body'>
        <Link to={`/Ludo/2player`} className='playerCard'>2 Players</Link>
        <Link to={`/Ludo/4player`} className='playerCard'>4 Players</Link>
        <Link to={`/Ludo/offline`} className='playerCard'>Offline</Link>
      </div>

      <div className='footer'>
        <div className='footer-icons'><i class="fa-solid fa-gift"></i><div className='icons-name'>Reward</div></div>
        <div className='footer-icons'><i class="fa-solid fa-user-shield"></i><div className='icons-name'>Clubs</div></div>
         <div className='footer-icons'><i class="fa-solid fa-house"></i><div className='icons-name'>Lobby</div></div>
        <div className='footer-icons'><i class="fa-solid fa-dice"></i><div className='icons-name'>Dice</div></div>
        <div className='footer-icons'><i class="fa-solid fa-cart-shopping"></i><div className='icons-name'>Shop</div></div>
      </div>
    </>
    
  )
}
