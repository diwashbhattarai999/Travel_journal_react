import React from 'react'
import '../css/card.css'

function Card(props){
  return (
    <div className='container card-container'>
      <img src={props.imageUrl} alt=""  className='title-img'/>
      <div className="card-info">
        <div className="location-info">
          <i class="fa-sharp fa-solid fa-location-dot location-img"></i>
          <p className="location-country">{props.location}</p>
          <a href={props.googleMapsUrl} className="location-url">View on Google Maps</a>
        </div>
        <div className="location-title">{props.title}</div>
        <div className="location-date">{props.startDate} - {props.endDate}</div>
        <div className="location-intro">{props.description}</div>
      </div>
    </div>
  )
}

export default Card