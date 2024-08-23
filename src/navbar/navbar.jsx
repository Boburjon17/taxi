import React from 'react'
import "./navbar.scss"

const Navbar = () => {
  return (
    


      <nav>
        <div className='nav-container'>
        
      <i className="fa-solid fa-bars"></i>
      
        <img src="logo.png" alt="" />
        <ul>
          <li><a href='#afzal'>Bizning afzalliklarimiz</a></li>
          <li><a href='#foydalanuvchi'>Foydalanuvchi dasturi</a></li>
          <li><a href='#haydovchi'>Haydovchi dasturi</a></li>
          <li><a href='#mijoz'>Mijozlar izohlari</a></li>
          <li><p>FAQ</p></li>
          <li><a href='#aloqa'>Aloqa</a></li>
        </ul>
        {/* <div className="contact">
         
            <p>+998 97 628 28 82</p>
        
        </div> */}

        <button>
        <p>+998 97 628 28 82</p>
        </button>
        </div>
      </nav>
    
  )
}

export default Navbar