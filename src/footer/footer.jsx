import React from 'react'
import "./footer.scss"

const Footer = () => {
  return (
    <div className='footer-container'>

        <div className="footer" id='aloqa'>
            <div className="footer-title">
                <h1>Biz bilan<span> bog’lanish</span></h1>
                <img src="afzal.png" alt="" />
            </div>
            <p>Biz bilan hamkorlik qilmoqchi bo’lsangiz quyidagi aloqa ma’lumotlari orqali bog’lanishingiz mumkin.</p>
            <div className="footer-contact">
                <div className="malumot">
                    <div className="icon-phone">
                        <div className="f-icon-img">
                        <i className="fa-solid fa-phone"></i>
                        </div>
                      
                      
                        <div className="contact-text">
                            <h2>Telefon raqamimiz</h2>
                            <p>+998 97 628 28 82</p>
                        </div>

                        
                    </div>

                    <div className="icon-loc">
                        <div className="f-icon-img">
                        <i className="fa-solid fa-location-dot"></i>
                        </div>
                      
                      
                        <div className="contact-text">
                        <h2>Bizning manzil</h2>
                            <p>150100, Farg’ona viloyati, Farg’ona shahri, Sayilgoh ko’chasi 18/2,2</p>
                        </div>

                        
                    </div>


                    <div className="icon-mail">
                        <div className="f-icon-img">
                        <i className="fa-solid fa-envelope"></i>
                        </div>
                      
                      
                        <div className="contact-text">
                            <h2>Elektron manzil</h2>
                            <p>isoftware@gmail.com</p>
                           
                        </div>

                        
                    </div>
                </div>

                <div className="footer-middle">
                    <h1> Biz sizga <span>aloqaga chiqamiz!</span></h1>
                    <h6>Shunchaki telefon raqamingizni qoldiring va biz siz bilan aloqaga chiqamiz!</h6>
                    <div className="inputt">
                        <input  type="number"  />
                        
                        <button><h5>Ishlatib ko’rish</h5></button>
                    </div>
                </div>
               
                
            </div>
            {/* <hr /> */}
            <div className="footer-bottom">

                <div className="f-bottom-small">

                <div className="logo">
                        <img src="logo.png" alt="" />
                        <h3>Loremipsum.uz Barcha huquqlar himoyalangan</h3>
                    </div>
                    <div className="phone">
                    <i className="fa-solid fa-phone-volume"></i>
                    <h4>+998 97 628 28 82</h4>
                    </div>

                </div>
                    
                </div>
        </div>
    </div>
  )
}

export default Footer