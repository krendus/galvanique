// src/App.js
import React from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import styles from "./styles/App.module.css";
import landingImg from "./assets/landing.png";
import gif1 from "./assets/gif1.gif";
import gif2 from "./assets/gif2.gif";
import gif3 from "./assets/gif3.gif";

function App() {

  return (
    <div>
      <Nav />
      <div className={styles.container}>
        <section className={styles.topSection}>
          <div className={styles.wrapper}>
            <div className={styles.leftTop}>
              <h1>
                <span>Build with us.</span><br />
                Empower Change with Solar Solutions.
              </h1>
              <p>Galvanique offers a reliable and independent solution benefiting rural and urban communities by addressing their unique challenges, enhancing their quality of life, and fostering self-sufficiency.</p>
            </div>
            <div className={styles.rightTop}>
              <img src={landingImg} alt="landing" />
            </div>
          </div>
        </section>
        <section className={styles.serviceSection}>
          <div className={styles.serviceWrapper}>
            <h1>Our services</h1>
            <div>
              <div>
                <img src={gif1} alt="service" />
                <h3>Operations</h3>
                <p>End-to-end solar lifecycle care: Installation, maintenance, and repair services for lasting solar energy performance.</p>
              </div>
              <div>
                <img src={gif2} alt="service" />
                <h3>Sales</h3>
                <p>Total solutions encompassing solar, electronic devices sales, delivering a seamless path to energy efficiency and digital connectivity.</p>
              </div>
              <div>
                <img src={gif3} alt="service" />
                <h3>Training</h3>
                <p>Comprehensive training, equipping you with the skills and knowledge to excel in the renewable energy and electronics fields.</p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className={styles.forYou}>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default App;
