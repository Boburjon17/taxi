import React from 'react'
import "./afzallik.scss"

const Afzallik = () => {
  return (
    <div className='afzal-container'>
        <div id='afzal' className="title">
            <h1>Bizning <span> Afzalliklarimiz </span></h1>
            <img src="afzal.png" alt="" />
        </div>
        <div className="boxes">
            <div className="box">
                <div className="box-text">
                    <div className="box-title">
                        <p>Kuchli himoyalangan tizimlar</p>
                    </div>
                    <div className="box-p">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of </p>
                    </div>
                </div>
                <div className="box-img">
                    <img src="box1.png" alt="" />
                </div>
            </div>

            <div className="box">
                <div className="box-text">
                    <div className="box-title">
                        <p>Yaxshi Avtomatizatsiyalashtirilgan</p>
                    </div>
                    <div className="box-p">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of </p>
                    </div>
                </div>
                <div className="box-img">
                    <img src="box2.png" alt="" />
                </div>
            </div>


            <div className="box">
                <div className="box-text">
                    <div className="box-title">
                        <p>Hisob-kitobni onlayn olib
                             borish imkoniyati</p>
                    </div>
                    <div className="box-p">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of </p>
                    </div>
                </div>
                <div className="box-img">
                    <img src="box3.png" alt="" />
                </div>
            </div>


            <div className="box">
                <div className="box-text">
                    <div className="box-title">
                        <p>24/7 
                           qo’llab-quvvatlash hizmati</p>
                    </div>
                    <div className="box-p">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of </p>
                    </div>
                </div>
                <div className="box-img">
                    <img src="box1.png" alt="" />
                </div>
            </div>
        </div>
        <hr />
    </div>
  )
}

export default Afzallik