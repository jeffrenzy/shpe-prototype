import React from 'react';
import './Landing.css';
import hero_img from '../assets/hero_placeholder.png'; 

function BooperSvg1() {
  return (<svg
      className="booper__image"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M4 9C4 11.9611 5.60879 14.5465 8 15.9297V15.9999C8 18.2091 9.79086 19.9999 12 19.9999C14.2091 19.9999 16 18.2091 16 15.9999V15.9297C18.3912 14.5465 20 11.9611 20 9C20 4.58172 16.4183 1 12 1C7.58172 1 4 4.58172 4 9ZM16 13.4722C17.2275 12.3736 18 10.777 18 9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9C6 10.777 6.7725 12.3736 8 13.4722L10 13.4713V16C10 17.1045 10.8954 17.9999 12 17.9999C13.1045 17.9999 14 17.1045 14 15.9999V13.4713L16 13.4722Z"
      fill="currentColor"
    />
    <path
      d="M10 21.0064V21C10.5883 21.3403 11.2714 21.5351 12 21.5351C12.7286 21.5351 13.4117 21.3403 14 21V21.0064C14 22.111 13.1046 23.0064 12 23.0064C10.8954 23.0064 10 22.111 10 21.0064Z"
      fill="currentColor"
    />
  </svg>);
}

function BooperSvg2() {
  return (<svg
    className="booper__image"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2.5 6.09143L7.21997 10.8114L12.0005 6.03088L16.7811 10.8114L21.5 6.09245V14.9691C21.5 16.626 20.1569 17.9691 18.5 17.9691H5.5C3.84314 17.9691 2.5 16.626 2.5 14.9691V6.09143ZM19.5 10.9087V14.9691C19.5 15.5214 19.0523 15.9691 18.5 15.9691H5.5C4.94771 15.9691 4.5 15.5214 4.5 14.9691V10.9077L7.21997 13.6277L12.0005 8.84717L16.7811 13.6277L19.5 10.9087Z"
      fill="currentColor"
    />
  </svg>);
}

function Landing() {
  return (
    <>
      <img src={hero_img} alt="Cool picture" className="hero-img" />

      <div className="booper-grid">
        <article className="booper">
          <BooperSvg1/>

          <div className="booper__content">
            <h3>Thing One</h3>
            <p>
              More things here, but it is somewhat longer because it describes
              this item and what the company provides.
            </p>
          </div>
        </article>

        <article className="booper">
          <BooperSvg2/>

          <div className="booper__content">
            <h3>Thing Two</h3>
            <p>
              Another concise description for the second item in this section.
            </p>
          </div>
        </article>
      </div>

      <section className='pillars'>

        <div className='pillar__holder'>
          {/* Images here are placeholders */}
          <img src="https://static.vecteezy.com/system/resources/previews/049/403/552/non_2x/cute-shark-standing-cartoon-vector.jpg" alt="pillar image" />
          <div className='pillar__content'>
            <h2>Pillar</h2>
            <p>The pillars of the familia make us strong and united.</p>
          </div>
        </div>

        <div className='pillar__holder'>
          <img src="https://static.vecteezy.com/system/resources/previews/049/403/552/non_2x/cute-shark-standing-cartoon-vector.jpg" alt="pillar image" />
          <div className='pillar__content'>
            <h2>Pillar</h2>
            <p>The pillars of the familia make us strong and united.</p>
          </div>
        </div>

        <div className='pillar__holder'>
          <img src="https://static.vecteezy.com/system/resources/previews/049/403/552/non_2x/cute-shark-standing-cartoon-vector.jpg" alt="pillar image" />
          <div className='pillar__content'>
            <h2>Pillar</h2>
            <p>The pillars of the familia make us strong and united.</p>
          </div>
        </div>

      </section>
    </>

    
  );
}

export default Landing;