
// import { Form, Button, Container, Row, Col } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import '../index.css'; 

// const Signup = () => {
//   return (
//     <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh',minWidth: '100vw', 
//       backgroundImage: 'url(https://plus.unsplash.com/premium_vector-1682309270309-bc01eee5d33a?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
//       backgroundSize: 'cover', 
//       backgroundPosition: 'center' }}>
//       <Row className="w-100 justify-content-center">
//         <Col xs={12} md={8} lg={6} xl={4}>
//           <div className="p-4 border rounded shadow">
//             <h2 className="mb-4 text-center" style={{
//               fontWeight:'bold'
//             }}>Sign Up</h2>
//             <Form>
//               {/* Email Input */}
//               <Form.Group controlId="formBasicEmail">
//                 <Form.Label style={{
//                   fontWeight:'bold'
//                 }}>Email Address</Form.Label>
//                 <Form.Control type="email" placeholder="Enter email" required />
//               </Form.Group>

//               {/* Password Input */}
//               <Form.Group controlId="formBasicPassword" className="mt-3">
//                 <Form.Label style={{
//                   fontWeight:'bold'
//                 }}>Password</Form.Label>
//                 <Form.Control type="password" placeholder="Enter password" required />
//               </Form.Group>

//               {/* Confirm Password Input */}
//               <Form.Group controlId="formBasicConfirmPassword" className="mt-3">
//                 <Form.Label
//                 style={{
//                   fontWeight:'bold'
//                 }}>Confirm Password</Form.Label>
//                 <Form.Control type="password" placeholder="Confirm password" required />
//               </Form.Group>

//               {/* Submit Button */}
//               <Button variant="primary" type="submit" className="w-100 mt-4">
//                 Sign Up
//               </Button>
//             </Form>

//             {/* Redirect to Login */}
//             <p className="mt-3 text-center" style={{
//               fontWeight:'bold'
//             }}>
//               Already have an account? <Link to="/login"
//               style={{
//                 fontWeight:'bold'
//               }}>Login</Link>
//             </p>
//           </div>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Signup;
import { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../index.css';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/users/signup', {
        email,
        password,
      });
      localStorage.setItem('token', response.data.token);
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{
        minHeight: '100vh',
        minWidth: '100vw',
        backgroundImage: 'url(https://plus.unsplash.com/premium_vector-1682309270309-bc01eee5d33a?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Row className="w-100 justify-content-center">
        <Col xs={12} md={8} lg={6} xl={4}>
          <div className="p-4 border rounded shadow">
            <h2 className="mb-4 text-center" style={{ fontWeight: 'bold' }}>
              Sign Up
            </h2>
            {error && <p className="text-danger text-center">{error}</p>}
            <Form onSubmit={handleSignup}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label style={{ fontWeight: 'bold' }}>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword" className="mt-3">
                <Form.Label style={{ fontWeight: 'bold' }}>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formBasicConfirmPassword" className="mt-3">
                <Form.Label style={{ fontWeight: 'bold' }}>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </Form.Group>
              <Button variant="primary" type="submit" className="w-100 mt-4">
                Sign Up
              </Button>
            </Form>
            <p className="mt-3 text-center" style={{ fontWeight: 'bold' }}>
              Already have an account?{' '}
              <Link to="/login" style={{ fontWeight: 'bold' }}>
                Login
              </Link>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;
