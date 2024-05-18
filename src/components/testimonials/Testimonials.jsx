import React from 'react';
import './testimonials.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Data } from './data';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
const Testimonials = () => {
  return (
    <section id='testimonials' className='testimonial container section'>
        <h2 className="section__title">Testomonials</h2>
    <span className="section__subtitle">Based on Past Experiences</span>
    <Swiper className="testimonial_container"   
       loop={true}
       grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
         
        }}
        modules={[Pagination]}
        >
        {Data.map(({id,image, title, description, JobTitle}) => {
          return (
            <SwiperSlide className="testimonial_card" key={id}>
              <img src={image} alt="" className='testimonial_img' style={{height:"100px"}}/>

              <h3 className="testimonial_name">{title}</h3>
          
              <p className="testimonial_description">{description}</p>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default Testimonials
