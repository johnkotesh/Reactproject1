import React from 'react'
import Title from './Title'
import { tours } from '../Data'
const Tours = () => {
  return (
    <section className="section" id="tours">
        <Title title='featured' subTitle='tours'/>

      <div className="section-center featured-center">
        {tours.map((tours)=>{
            const {id, image, date, info, location, duration, cost} = tours
            return ( 
            <article className="tour-card" key={id}>
            <div className="tour-img-container">
              <img src={require('../images/tour-1.jpeg')} className="tour-img" alt={Title} />
              <img src={require('../images/tour-2.jpeg')} className="tour-img" alt={Title} />
              <p className="tour-date">{date}</p>
            </div>
            <div className="tour-info">
              <div className="tour-title">
                <h4>{Title}</h4>
              </div>
              <p>
                {info}
              </p>
              <div className="tour-footer">
                <p>
                  <span><i className="fas fa-map"></i></span> {location}
                </p>
                <p>{duration} days</p>
                <p>from ${cost}</p>
              </div>
            </div>
          </article>

            );
          })};
       
      </div>
    </section>
  );
};

export default Tours
