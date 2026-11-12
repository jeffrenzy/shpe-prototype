import React from 'react';
import Slider from '../comp/Slider';
import SlidableCalendar from '../comp/SlidableCalendar';
import './Events.css';

const PLACEHOLDER_IMG_1 = "https://images.pexels.com/photos/36729525/pexels-photo-36729525.jpeg";
const PLACEHOLDER_IMG_2 = "https://images.pexels.com/photos/19875873/pexels-photo-19875873.jpeg";

function NewsCard({ image, alt, text }) {
    return (
        <div className="news-card">
            <img src={image} alt={alt} />
            <div className="label">{text}</div>
        </div>
    );
}

function Content() {
  return (
    <>
        <div className="banner">
          <h1>Upcoming Events</h1>
        </div>
        
        <SlidableCalendar></SlidableCalendar>
        
        <h2 className='news-slider-label'>Most recent</h2>
        <Slider cardsPerSlide={4}>
            {Array.from({ length: 8 }, (_, index) => (
                <NewsCard
                    key={index}
                    image={PLACEHOLDER_IMG_1}
                    alt="placeholder img"
                    text={`News item ${index + 1}`}
                />
            ))}
        </Slider>

    </>
  );
}

export default Content;