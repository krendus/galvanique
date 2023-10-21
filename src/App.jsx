// src/App.js
import React, { useEffect, useState } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import styles from "./styles/App.module.css";
import landingImg from "./assets/landing.png";
import gif1 from "./assets/gif1.gif";
import gif2 from "./assets/gif2.gif";
import gif3 from "./assets/gif3.gif";
import img1 from "./assets/img2.jpg";
import img2 from "./assets/img1.jpg";
import img3 from "./assets/img3.webp";
import img4 from "./assets/img4.jpg";
import img5 from "./assets/img5.jpg";
import { ValidationError, useForm } from '@formspree/react';
import { Facebook, Gmail, Instagram, Phone, X } from './assets/svg';

function App() {
  const [curr, setCurr] = useState(3);
  const [state, handleSubmit] = useForm("xdorbkan");
  const [success, setSuccess] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  
  useEffect(() => {
    if(!state.submitting && !success) {
      setSuccess(true);
      setEmail("");
      setName("");
      setMessage("");
      setTimeout(() => {
        setSuccess(false);
      }, 5000);
    }
  }, [state.submitting])
  
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
            <div className={styles.cardWrapper}>
              <div className={styles.card}>
                <img src={gif1} alt="service" />
                <h3>Operations</h3>
                <p>End-to-end solar lifecycle care: Installation, maintenance, and repair services for lasting solar energy performance.</p>
              </div>
              <div className={styles.card}>
                <img src={gif2} alt="service" />
                <h3>Sales</h3>
                <p>Total solutions encompassing solar, electronic devices sales, delivering a seamless path to energy efficiency and digital connectivity.</p>
              </div>
              <div className={styles.card}>
                <img src={gif3} alt="service" />
                <h3>Training</h3>
                <p>Comprehensive training, equipping you with the skills and knowledge to excel in the renewable energy and electronics fields.</p>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.serviceSection}>
          <div className={styles.serviceWrapper}>
            <h1>Gallery</h1>
            <div className={styles.imageWrapper}>
              <div className={styles.image} style={{ backgroundImage: `url(${img1})`, flex: curr === 1 ? 5 : 1, opacity: curr === 1 ? 1 : 0.8 }} onClick={() => setCurr(1)}>
              </div>
              <div className={styles.image} style={{ backgroundImage: `url(${img5})`, flex: curr === 3 ? 5 : 1, opacity: curr === 3 ? 1 : 0.8 }} onClick={() => setCurr(3)}>
              </div>
              <div className={styles.image} style={{ backgroundImage: `url(${img2})`, flex: curr === 2 ? 5 : 1, opacity: curr === 2 ? 1 : 0.8 }} onClick={() => setCurr(2)}>
              </div>
              <div className={styles.image} style={{ backgroundImage: `url(${img3})`, flex: curr === 4 ? 5 : 1, opacity: curr === 4 ? 1 : 0.8 }} onClick={() => setCurr(4)}>
              </div>
              <div className={styles.image} style={{ backgroundImage: `url(${img4})`, flex: curr === 5 ? 5 : 1, opacity: curr === 5 ? 1 : 0.8 }} onClick={() => setCurr(5)}>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.serviceSection} id="contact">
          <div className={styles.serviceWrapper}>
            <h1>Contact Us</h1>
            <div className={styles.contactForm}>
              <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" id="name" name="name" placeholder='Enter your name' value={name} onChange={(e) => setName(e.target.value)}/>
                <ValidationError 
                  prefix="Name" 
                  field="name"
                  errors={state.errors}
                />
                <label>Email</label>
                <input type="email" id="email" name="email" placeholder='Enter your email'  value={email} onChange={(e) => setEmail(e.target.value)}/>
                <ValidationError 
                  prefix="Email" 
                  field="email"
                  errors={state.errors}
                />
                <label>Message</label>
                <textarea placeholder='Enter message' id="message" name="message"  value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                <ValidationError 
                  prefix="Message" 
                  field="message"
                  errors={state.errors}
                />
                <button type="submit" disabled={state.submitting}>{state.submitting ? "Submitting..." : "Submit"}</button>
                {state.succeeded && success && <div className={styles.success}>Sent</div>}
              </form>
            </div>
            <div className={styles.linksWrapper}>
              <a href="https://x.com/Galvaniquesolar?t=zpTqsKDL1NOj39_WpIl_nA&s=09" target='_blank' rel="noreferrer">
                <X />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61552566931286" target='_blank' rel="noreferrer">
                <Facebook />
              </a>
              <a href="https://instagram.com/galvanique_solar?igshid=OGQ5ZDc2ODk2ZA==" target='_blank' rel="noreferrer">
                <Instagram />
              </a>
              <a href="tel:09052763301">
                <Phone />
              </a>
              <a href="mailto:09052763301">
                <Gmail />
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default App;
