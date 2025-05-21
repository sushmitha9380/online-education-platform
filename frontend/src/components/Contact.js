
import { Link } from 'react-router-dom';
import '../components/styles.css';  

const Contact = () => {
  return (
    <div>
      <main>
        <section className="contact-header">
          <h1><b>Contact Us</b></h1>
         </section>

        <section className="contact-info">
          <div className="info">
            <h2>Get In Touch</h2>
            <p>"Pain itself is important, it is accepted to take. But sit in accumulation and here innovate over your or my priorities."</p>
            <ul>
              <li><strong>Address:</strong> Vijaynagar,Banglore,India</li>
              <li><strong>Phone:</strong>9875643201</li>
              <li><strong>Email:</strong> <a href="mindbloom52@gmail.com">mindbloom@gmail.com</a></li>
            </ul>
            <div className="social">
              <a href="#">Facebook</a>
              <a href="#">Twitter</a>
              <a href="#">Instagram</a>
            </div>
          </div>

          <div className="message-form">
            <h2>Send a Message</h2>
            <form>
              <input type="text" name="name" placeholder="Name" required />
              <input type="email" name="email" placeholder="E-mail address" required />
              <textarea name="message" placeholder="Message" required></textarea>
              <button type="submit">Submit</button>
            </form>
          </div>
        </section>

        <section className="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.621779706608!2d77.593093!3d13.059729899999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae19f63ef70631%3A0xd30bbdc56712e445!2sBesant%20Technologies%20Hebbal!5e0!3m2!1sen!2sin!4v1736227402421!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </section>
      </main>

      <footer>
        <div className="footer-content">
          <div className="logo">MindBloom</div>
          <p>Drive growth,Learn Skills and scale up effortlessly with MindBloom.</p>
          <nav>
            <Link to="#">Features</Link>
            <Link to="#">Resources</Link>
            <Link to="#">Company</Link>
          </nav>
        </div>
        <p>&copy; Copyright @mindbloom. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Contact;
