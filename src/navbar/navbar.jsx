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
        <>+998 97 628 28 82</>
        </button>

        <div className={bars ? "bars active" :"bars "}>
        <ul>
          <li><a href='#afzal' onClick={()=>setBars(false)}>Bizning afzalliklarimiz</a></li>
          <li><a href='#foydalanuvchi' onClick={()=>setBars(false)}>Foydalanuvchi dasturi</a></li>
          <li><a href='#haydovchi'onClick={()=>setBars(false)}>Haydovchi dasturi</a></li>
          <li><a href='#mijoz'onClick={()=>setBars(false)}>Mijozlar izohlari</a></li>
          <li><a href='#faq'onClick={()=>setBars(false)}>FAQ</a></li>
          <li><a href='#aloqa' onClick={()=>setBars(false)}>Aloqa</a></li>
        </ul>
        {/* <div className="exit">

        <h1>x</h1>
        </div> */}

        


        </div>
      
      </nav>
      </div>
    
  )
}

export default Navbar