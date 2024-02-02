
import React from 'react';
import '../styles/login.css';

function Login(){
    return (
        <div class="container wrapper">

        <div className="login-box">
          <form action="">
            <h2>Login</h2>
      
            <div className="input-box">
              <span className="icon">
                <ion-icon name="mail"></ion-icon>
              </span>
              <input type="email" required />
              <label>Email</label>
            </div>
      
            <div className="input-box">
              <span className="icon">
                <ion-icon name="lock-closed"></ion-icon>
              </span>
              <input type="password" required />
              <label>Password</label>
            </div>
      
            <div className="remember-forgot">
              <label><input type="checkbox" /> Remember me</label>
              <button>Forgot Password?</button>
            </div>
      
            <button type="submit">Login</button>
      
            
          </form>
          <div className="register-link">
              <p>Don't have an account? </p>
              <a href="/register">
                <button>Register</button>
              </a>
            </div>
        </div>
      
      </div>
    )
}

export default Login;