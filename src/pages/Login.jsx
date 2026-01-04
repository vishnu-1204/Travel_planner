import "./Login.css";

function Login() {
  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login to Continue</h2>
        <p>Please login to book your tour</p>

        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />

        <button className="login-btn">Login</button>

        <span className="login-note">
          Don’t have an account? <b>Sign up</b>
        </span>
      </div>
    </div>
  );
}

export default Login;
