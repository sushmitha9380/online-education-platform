import './Home.css'; 
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import  BackImage from './BackImage.webp';
import MetaImage from './Meta.jpeg';
import SlideImage from './slide3.webp';
import School from './School.avif';

// Image components
const Online = ({ src, text }) => (
  <img src={src} alt={text} style={{ width: '100%', height: '500px' }} />
);

const Learn = ({ src, text }) => (
  <img src={src} alt={text} style={{ width: '100%', height: '500px' }} />
);

const Concept = ({ src, text }) => (
  <img src={src} alt={text} style={{ width: '100%', height: '500px' }} />
);

const Home = () => {
  return (
    <div>
      {/* Carousel Section */}
      <Carousel>
        <Carousel.Item>
          <Online src={BackImage} text="First slide" />
          <Carousel.Caption>
            <h3>Empower Your Learning Journey</h3>
            <p>The courses that allow you to learn at your own pace, from anywhere in the world.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Learn src={MetaImage} text="Second slide" />
          <Carousel.Caption>
            <h3>Quality Education at Your Fingertips</h3>
            <p>Access a wide range of e-learning resources, and all designed to help you succeed.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Concept src={SlideImage} text="Third slide" />
          <Carousel.Caption>
            <h3>Transform Your Skills and Knowledge</h3>
            <p>Whether you're a beginner or looking to level up, our platform provides expert-led courses to help you achieve your educational goals.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    


      {/* Features Section */}
      <section>
        <h2 className='more'>"The More you <span className="text-warning">Learn</span> the More you Earn"</h2>
        <div className="features">
          <div className="feature">Learn to code.Create, Innovate, and Excel</div>
          <div className="feature">Develop logic and intellectuals</div>
          <div className="feature">Your Path to Excellence Starts Here</div>
          <div className="feature">Build Strong Foundations for Success</div>
          <div className="feature">Knowledge is Power, Empower Yourself</div>
          <div className="feature">Transform Your Passion into Profession</div>
          <div className="feature">Master New Skills, Unlock New Opportunities</div>
          <div className="feature">Learn Today, Lead Tomorrow</div>
        </div>
      </section>

      {/* Programs Section */}
      <section>
        <h2 className="explore"><b>Explore</b></h2>
        <div className="programs">
          <div className="program">
            <h3><b>HTML</b></h3>
            <p>The language for styling webpages</p>
            <Link to="/html">
              <button>Read More</button>
            </Link>
          </div>
          <div className="program1">
            <h3><b>CSS</b></h3>
            <p>The language for building webpages</p>
            <Link to="/Css">
              <button>Read More</button>
            </Link>
          </div>
          <div className="program2">
            <h3><b>JavaScript</b></h3>
            <p>The language for programming webpages</p>
            <Link to="/Javascript">
              <button>Read More</button>
            </Link>
          </div>
          <div className="program3">
            <h3><b>Python</b></h3>
            <p>A popular programming language for web applications</p>
            <Link to="/Python">
              <button>Read More</button>
            </Link>
          </div>
        </div>
      </section>
      <section className="why-choose">
     <img src={School} alt="E-learning"/>
      <div className="why">
      <h2><b>Learn Anytime, Anywhere with <span class="text-success">MindBloom</span></b></h2>
      <p>
        At <span class="text-primary">Mindbloom</span>, we offer the flexibility to learn at your own pace, whenever and wherever it suits you. Our online courses are accessible on any device, allowing you to gain knowledge and skills from the comfort of your home.
      </p>
      <h2><b>Join MindBloom Today!</b></h2>
      <p>
        <Link to="/signup" className="no">Sign Up</Link> now to explore our courses and take the first step towards unlocking your potential!
      </p>
      </div> 
    </section>
    </div>


  );
};

export default Home;
