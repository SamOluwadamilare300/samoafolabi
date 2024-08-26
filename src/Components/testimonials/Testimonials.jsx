import React from 'react';
import "./testimonials.css";
import { Data } from './Data'; 

const Testimonials = () => {
  return ( 
    <section className="testimonial container section">
        <h2 className="section__title">My Clients Say</h2>
        <span className="section__subtitle">Testimonial</span>

        <div className="testimonial__container">
            {Data.map(({id, title, description}) => (
                <div className="testimonial__card" key={id}>
                    <h3 className="testimonial__name">{title}</h3>
                    <p className="testimonial__description">{description}</p>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Testimonials;
