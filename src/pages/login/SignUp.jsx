import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { registerAPI } from '../../Services/allAPI';

function SignUpForm() {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: ""
  });
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (userData.username && userData.email && userData.password) {
      try {
        const result = await registerAPI(userData);
        if (result.status === 200) {
          const userId = result.data._id;
          sessionStorage.setItem("userId", userId);
          toast.info(`Welcome ${result.data.username}... Please login to explore our website`);
          setUserData({
            username: "", email: "", password: ""
          });
          navigate('/dashboard');
        } else {
          if (result.response && result.response.status === 406) {
            toast.error(result.response.data);
            setUserData({
              username: "", email: "", password: ""
            });
          }
        }
      } catch (err) {
        console.error('Registration error:', err.response ? err.response.data : err.message);
        toast.error('Registration failed. Please try again.');
      }
    } else {
      toast.info("Please fill the form completely");
    }
  };

  return (
    <div className="form-container sign-up-container">
      <form>
        <h1 className="head-create">Create Account</h1>
        <input
          type="text"
          name="username"
          value={userData.username}
          onChange={e => setUserData({ ...userData, username: e.target.value })}
          placeholder="Username"
        />
        <input
          type="email"
          name="email"
          value={userData.email}
          onChange={e => setUserData({ ...userData, email: e.target.value })}
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          value={userData.password}
          onChange={e => setUserData({ ...userData, password: e.target.value })}
          placeholder="Password"
        />
        <button className="signup" onClick={handleRegister}>Sign Up</button>
      </form>
      <ToastContainer position='top-center' theme='colored' autoclose={3000} />
    </div>
  );
}

export default SignUpForm;