import React from 'react'
import "./boshqaruv.scss"

const Boshqaruv = () => {
  return (
    <div >

        <div className="boshqaruv">
            <div className="boshqaruv-top">
                <div className="boshqaruv-title">
                    <h1>Boshqaruv <span>Dasturi</span></h1>
                    <img src="afzal.png" alt="" />
                </div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of </p>
                <div className="category">
                    <div className="icon">
                        <div className="icon-img">
                        <i className="fa-regular fa-user"></i>
                        </div>
                        <h3>Haydovchilarni boshqarish</h3>
                    </div>
                    <div className="icon">
                        <div className="icon-img">
                        <i className="fa-solid fa-arrow-up-right-dots"></i>
                        </div>
                        <h3>Hisob-kitoblar bilan ishlash</h3>
                    </div>

                    <div className="icon">
                        <div className="icon-img">
                        <i className="fa-regular fa-rectangle-list"></i>
                        </div>
                        <h3>Hujjatlar bilan ishlash imkoniyati</h3>
                    </div>

                    <div className="icon">
                        <div className="icon-img">
                        <i className="fa-solid fa-mobile-screen"></i>
                        </div>
                        <h3>Va barchasini telefonda boshqarish</h3>
                    </div>
                </div>
                <div className="button-boshqar">
                <button><h3>Ishlatib ko’rish</h3></button> 
                    </div>
            </div>

            <div className="boshqaruv-bottom">
                <div className="except">
                    <div className="middle">
                        <div className="video">
                            <h1>Bu yerga chetkiy bitta video qo’yamiz</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr />


    </div>
  )
}

export default Boshqaruv