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

          
        </form>
        <div className="login-link">
            <p>Already have an account? </p>
            <a href="/login">
              <button>Login</button>
            </a>
          </div>
      </div>

    </div>
  )
}

export default Register;