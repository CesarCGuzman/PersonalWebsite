import React from 'react'
import './testimonials.css'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';


import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

const data = [
  {
    index: 1,
    avatar: AVTR1,
    name: 'Client 1',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ipsum minus fugiat quod laboriosam dolorem ullam quae pariatur iure! Exercitationem a illum modi consequatur. Enim blanditiis veniam vero eveniet dicta!'
  },
  {
    index: 2,
    avatar: AVTR2,
    name: 'Client 2',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ipsum minus fugiat quod laboriosam dolorem ullam quae pariatur iure! Exercitationem a illum modi consequatur. Enim blanditiis veniam vero eveniet dicta!'
  },
  {
    index: 3,
    avatar: AVTR3,
    name: 'Client 3',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ipsum minus fugiat quod laboriosam dolorem ullam quae pariatur iure! Exercitationem a illum modi consequatur. Enim blanditiis veniam vero eveniet dicta!'
  },
  {
    index: 4,
    avatar: AVTR4,
    name: 'Client 4',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ipsum minus fugiat quod laboriosam dolorem ullam quae pariatur iure! Exercitationem a illum modi consequatur. Enim blanditiis veniam vero eveniet dicta!'
  }
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      pagination={{clickable: true}}
      modules={[Pagination]}
      slidesPerView={1}
      >
        {
          data.map(({index, avatar, name, review}) => {
            return (
              <SwiperSlide className="testimonial" key={index}>
                <div className="client__avatar">
                  <img src={avatar} alt={name} />
                </div>
                <h5 className="client__name">{name}</h5>
                  <small className="client__review">{review}</small>
              </SwiperSlide>
            )})
        }
      </Swiper>
    </section>
  )
}

export default Testimonials