
// import { Form, Button, Container, Row, Col } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import '../index.css'; 

// const Login = () => {
//   return (
//     <Container
//      className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh', minWidth: '100vw', 
//       backgroundImage: 'url(https://plus.unsplash.com/premium_vector-1682309270309-bc01eee5d33a?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
//       backgroundSize: 'cover', 
//       backgroundPosition: 'center'}}>
//       <Row className="w-100 justify-content-center">
//         <Col xs={12} md={8} lg={6} xl={4}>
//           <div className="p-4 border rounded shadow">
//             <h2 className="mb-4 text-center" style={{
//               fontWeight:'bold'
//             }}>Login</h2>
//             <Form>
//               <Form.Group controlId="formBasicEmail">
//                 <Form.Label style={{
//                   fontWeight:'bold'
//                 }}>Email address</Form.Label>
//                 <Form.Control type="email" placeholder="Enter email" />
//               </Form.Group>

//               <Form.Group controlId="formBasicPassword" className="mt-3">
//                 <Form.Label style={{
//                   fontWeight:'bold'
//                 }}>Password</Form.Label>
//                 <Form.Control type="password" placeholder="Password" />
//               </Form.Group>

//               <Button variant="primary" type="submit" className="w-100 mt-4">
//                 Login
//               </Button>
//             </Form>
//             <p className="mt-3 text-center" style={{
//               fontWeight:'bold'
//             }}>
//               Don't have an account? <Link to="/signup">Sign Up</Link>
//             </p>
//           </div>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Login;
import { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../index.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/users/login', {
        email,
        password,
      });
      localStorage.setItem('token', response.data.token);
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Invalid credentials');
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
              Login
            </h2>
            {error && <p className="text-danger text-center">{error}</p>}
            <Form onSubmit={handleLogin}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label style={{ fontWeight: 'bold' }}>Email address</Form.Label>
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
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Form.Group>
              <Button variant="primary" type="submit" className="w-100 mt-4">
                Login
              </Button>
            </Form>
            <p className="mt-3 text-center" style={{ fontWeight: 'bold' }}>
              Don't have an account?{' '}
              <Link to="/signup">Sign Up</Link>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;


