import React, { useEffect, useState } from 'react'
import "./navbar.scss"

const Navbar = () => {
  const  [bars , setBars]= useState(false)



  return (
    <div className='nav-container'>


      <nav>
        
          <div className="img-i">

          <i onClick={()=> setBars(!bars)}  className="fa-solid fa-bars  "></i>
         <img src="logo.png" alt="" />

          </div>

         
        
     
        <ul>
          <li><a href='#afzal'>Bizning afzalliklarimiz</a></li>
          <li><a href='#foydalanuvchi'>Foydalanuvchi dasturi</a></li>
          <li><a href='#haydovchi'>Haydovchi dasturi</a></li>
          <li><a href='#mijoz'>Mijozlar izohlari</a></li>
          <li><a href='#faq'>FAQ</a></li>
          <li><a href='#aloqa'>Aloqa</a></li>
        </ul>

        <button>
        <p>+998 97 628 28 82</p>
        </button>

        <div className={bars ? "bars active" :"bars "}>
        <ul>
          <li><a href='#afzal'>Bizning afzalliklarimiz</a></li>
          <li><a href='#foydalanuvchi'>Foydalanuvchi dasturi</a></li>
          <li><a href='#haydovchi'>Haydovchi dasturi</a></li>
          <li><a href='#mijoz'>Mijozlar izohlari</a></li>
          <li><p>FAQ</p></li>
          <li><a href='#aloqa'>Aloqa</a></li>
        </ul>


        </div>
      
      </nav>
      </div>
    
  )
}

export default Navbar