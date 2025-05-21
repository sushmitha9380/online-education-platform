
import { Link } from 'react-router-dom';
import "../components/Footer.css"; // Make sure this file exists and has the correct styles.

const App = () => {
  return (
    
    <div className="footer-container">
        <div className="section">
          <h3>TOP TUTORIALS</h3>
          <ul>
            <li>Python Tutorial</li>
            <li>HTML Tutorial</li>
            <li>CSS Tutorial</li>
            <li>JavaScript Tutorial</li>
          </ul>
        </div>
        <div className="section">
          <h3>TRENDING TECHNOLOGIES</h3>
          <ul>
            <li>Cloud Computing Tutorial</li>
            <li>Amazon Web Services Tutorial</li>
            <li>Microsoft Azure Tutorial</li>
            <li>Git Tutorial</li>
          </ul>
        </div>
        <div className="section">
          <h3>CERTIFICATIONS</h3>
          <ul>
            <li>Game Development Certification</li>
            <li>Front-End Developer Certification</li>
            <li>AWS Certification Training</li>
            <li>Python Programming Certification</li>
          </ul>
        </div>
        <div className="section">
          <h3>COMPILERS & EDITORS</h3>
          <ul>
            <li>Online Python Compiler</li>
            <li>Online Javascript Compiler</li>
            <li>Online CSS Compiler</li>
            <li>Online Html Editor</li>
          </ul>
        </div>
      

      <div className="footer-icons">
        <div className="aaa">
          <Link to="/About" className="no">ABOUT US</Link>
          <a href="#team">OUR TEAM</a>
          <a href="#careers">CAREERS</a>
          <Link to="/Contact" className="no">CONTACT </Link>
          <a href="#terms">TERMS OF USE</a>
          <a href="#privacy">PRIVACY POLICY</a>
          <a href="#faqs">FAQ'S</a>
        </div>

        <div className="social">
          <a href="#facebook">Facebook</a>
          <a href="#twitter">Twitter</a>
          <a href="#instagram">Instagram</a>
          <a href="#linkedin">LinkedIn</a>
        </div>

        <div className="app">
          <a href="#google-play">Get it on Google Play</a>
          <a href="#app-store">Download on the App Store</a>
        </div>
      </div>
    </div>
  
  );
};

export default App;
