import React from 'react'
import "./dastur-f.scss"
import CountUp from 'react-countup';

const DasturF = () => {
  return (
    <>
    <div className='dastur'>
        <div id='foydalanuvchi' className="dastur-f">
            <div className="dastur-left">
                <div className="dastur-title">

                <h1> Foydalanuvchi  <span> dasturi</span></h1>
                <img src="afzal.png" alt="" />
                </div>
                
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of </p>
                <div className="aktiv-lorem">

                <div className="aktiv">
                {/* <h2> <CountUp style={{fontFamily:"'Prosto One', sans-serif"}} start={1} end={1000} duration={4} /> </h2> */}
                    <h2>
                    1000
                    <span>+</span>
                    </h2>
                    <h6>Aktiv foydalanuvchi</h6>
                    
                </div>
                <div className="aktiv">
                <h2>
                    1000<span>+</span>
                    </h2>
                    <h6>Lorem ipsum</h6>
                </div>

                </div>
                <div className="button-dastur">
                <a href="#sinash"><button>Ishlatib ko’rish</button> </a>
                </div>
               
               
            </div>
            <div className="dastur-img">
                <img src="dasturimg.png" alt="" />
            </div>
        </div>

       
    </div>
   
    </>
    
  )
}

export default DasturF