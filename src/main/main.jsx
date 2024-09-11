import React from 'react'
import "./main.scss"
import { useNavigate } from 'react-router-dom'

const Main = () => {

  
  return (
    <div className='m-continer' >
        <div className="main">
           
            <div className="main-right">
                <div className="main-r-top">
                    <h1>Tayyor <span> Taxi</span>  Biznesi</h1>
                    <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</h6>
                   <div className="button-b">
                   <a href=" batafsil"><button   > Batafsil tanishish</button></a>
                   </div>
                </div>
                <div className="main-r-bottom">
                    <img src="mainImg2.png" alt="" />
                </div>
            </div>
           
        </div>
        
    </div>
  )
}

export default Main