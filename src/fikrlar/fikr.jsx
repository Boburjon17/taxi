// import React, { useEffect, useState } from 'react'
import "./fikr.scss"




// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Fikr = () => {
  // const [slidesPerView, setSlidesPerView] = useState(4);

  //   useEffect(() => {
  //       const handleResize = () => {
  //           if (window.innerWidth <= 468) {
  //               setSlidesPerView(1);
  //           } else if(window.innerWidth <= 676) {
  //               setSlidesPerView(2);
  //           } else if(window.innerWidth <= 976) {
  //               setSlidesPerView(3);
  //           } else if(window.innerWidth <= 1440) {
  //               setSlidesPerView(4);
  //           }
  //       };

  //       handleResize(); 
  //       window.addEventListener("resize", handleResize); 

  //       return () => {
  //           window.removeEventListener("resize", handleResize); 
  //       };
  //   }, []);
  return (
    <div className='fikr-container' >

        <div id='mijoz' className="fikr">
          
            <div className="fikr-title">
                <h1>Bizning egalari <span>fikrlari</span> </h1>
                <img src="afzal.png" alt="" />
            </div>
            <div className="fikr-p">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>

            </div>

           
          

    <div className="sliderBrend-container">
      
      <Swiper
        spaceBetween={30}
        centeredSlides={false}
        slidesPerView={4}
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          300: {
            slidesPerView: 1.7,
            spaceBetween: 20,
          },

          400: {
            slidesPerView: 1.7,
            spaceBetween: 10,
          },

          650: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          850: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1000: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide >
        
         
          <div className="brend-img">
            <img src="fikr1.png" alt="" />
          </div>
         
        </SwiperSlide>

        <SwiperSlide>
        
          
          <div className="brend-img">
            <img src="fikr2.png" alt="" />
          </div>
         
        </SwiperSlide>

        <SwiperSlide>
        
        
          <div className="brend-img">
            <img src= "fikr3.png" alt="" />
          </div>
         
        </SwiperSlide>

        <SwiperSlide>
        
          
          <div className="brend-img">
            <img src= "fikr4.png" alt="" />
          </div>
         
        </SwiperSlide>

        

        <SwiperSlide >
        
         
        <div className="brend-img">
          <img src="fikr1.png" alt="" />
        </div>
       
      </SwiperSlide>

   

    
       
        
      </Swiper>
    </div>





 



            </div>
        </div>
  
  )
}

export default Fikr