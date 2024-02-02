import React from 'react';
import '../styles/register.css';

function Register() {

  return (
    <div className="container wrapper">

      <div className="register-box">
        <form>
          <h2>Register</h2>

          <div className="input-box">
            <input type="text" required />
            <label>Username</label>
          </div>

          <div className="input-box">
            <input type="email" required />
            <label>Email</label>
          </div>

          <div className="input-box">
            <input type="password" required />
            <label>Password</label>
          </div>

          <div className="input-box">
            <input type="password" required />
            <label>Confirm Password</label>
          </div>

          <button type="submit">Register</button>

          <div className="login-link">
            <p>Already have an account? <a href="/login">Login</a></p>
          </div>
        </form>
      </div>

    </div>
  )
}

export default Register;