import { useRef } from "react";
import  './hero.css'

function Hero() {
  const lottieRef = useRef();

  return (
  <section className="hero flex ">
    <div className="left-section ">
      <div className="parent-avatar flex">
        <img
          src="./me.png"
          className="avatar"
          alt="my photo"
        />
         <div className="icon-verified"></div>
      </div>

      <h1 className="title"> Full Stack Developer</h1>

      <p className="sub-title">
        I’m Anis SAFIA, a software Engineer based in Tunisia
        City. Experienced and dedicated Web Developer with a robust skill set honed over two years in the field.
      </p>

      <div className="all-icons flex">
        <a href="https://twitter.com/AnisSafia6" className="icon icon-twitter" target="_blank"></a>
        <a href="https://www.instagram.com/anissafia1/" className="icon icon-instagram" target="_blank"></a>
        <a href="https://github.com/anissafia90" className="icon icon-github" target="_blank"></a>
        <a href="https://www.linkedin.com/in/anis-safia/" className="icon icon-linkedin-square" target="_blank"></a>
      </div>
    </div>

    <div className="right-section">
    
    <img
          src="./images/software-development-specialist.jpg"
          className="animation"
          alt="software-development-specialist"
        />
    </div>
    </section>
  )
}

export default Hero