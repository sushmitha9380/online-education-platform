
import "./AboutMailchimp.css"; 
import aboutImage from "./abtimg.webp"


const AboutMailchimp = () => {
  return (
    <>

      <div className="content-container">
        <h1>About MindBloom</h1>
        <div className="about-content">
          <div className="text-section">
            <p>
              Our platform is more than just a place to learn; it's a community where you can grow, connect, and succeed. Join thousands of learners who trust MindBloom to help them achieve their educational goals.
            </p>
            <p>
              Start learning today and take the next step toward a brighter future! MindBloom is your trusted platform for online learning and personal growth. We are dedicated to providing high-quality educational resources that are accessible, flexible, and tailored to your learning journey.
            </p>
            <p>
              Our mission is to empower learners worldwide by offering a diverse range of courses across various fields, from technology and business to arts and personal development. Whether you're looking to advance your career, acquire new skills, or explore your passions, our courses are designed to meet your needs.
            </p>
          </div>
          <div className="image-section">
            <img src={aboutImage} alt="Team working together" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMailchimp;
