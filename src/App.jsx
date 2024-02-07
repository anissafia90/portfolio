import Contact from './components/contact/Contact'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Main from './components/main/Main'
import Footer from './components/footer/Footer'
import { useEffect, useState } from "react";


function App() {
  const [showScrollBTN, setshowScrollBTN] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setshowScrollBTN(true);
      } else {
        setshowScrollBTN(false);
      }
    });
  }, []);
  return (
    <div id="up" className="container">
      <Header />

      <Hero />
      <div className="divider" />
      <Main />
      <div className="divider" />
      <Contact />
      <div className="divider" />
      <Footer />

      <a style={{ opacity: showScrollBTN? 1 : 0, transition: "1s" }} href="#up">
        <button className="icon-keyboard_arrow_up scroll2Top"></button>
      </a>
    </div>
  )
}

export default App
