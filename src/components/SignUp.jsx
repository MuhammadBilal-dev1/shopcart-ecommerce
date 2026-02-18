import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";

const title = "Register";
const socialTitle = "login with Social media";
const btnText = "Sign up";

const SignUp = () => {
  const [errorMessage, seterrorMessage] = useState("");
  const { signUpWithGamil, createUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleRegister = () => {
    signUpWithGamil()
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMsg = error.message;
        seterrorMessage("Please provide valid email & password");
      });
  };
  const handleSignup = (e) => {
    e.preventDefault();
    const form = e.target;
    // console.log(form)
    const email = form.email.value;
    const password = form.password.value;
    const confirmpassword = form.confirmPassword.value;
    console.log(email, password, confirmpassword);
    if (password !== confirmpassword) {
      seterrorMessage("Invalid Password!");
    } else {
      seterrorMessage("");
      createUser(email, password).then((userCredential) => {
        const user = userCredential.user;
        alert("Account created Successfully !!!");
        navigate(from, { replace: true });
      }).catch((error) => {
        console.log(error.message)
        alert(`${error.message}`)
      })
    }
  };
  return (
    <div className="login-section padding-tb section-bg">
      <div className="container">
        <div className="account-wrapper">
          <h3 className="title">{title}</h3>
          <form className="account-form" onSubmit={handleSignup}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Full Name *"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email Address *"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password *"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Confirm Password *"
                required
              />
            </div>
            {/* showing error message */}
            <div>
              {errorMessage && (
                <div className="error-message text-danger mb-2">
                  {errorMessage}
                </div>
              )}
            </div>

            <div className="form-group">
              <button className="d-block lab-btn">
                <span>{btnText}</span>
              </button>
            </div>
          </form>

          {/* account bottom */}
          <div className="acount-bottom">
            <span className="d-block cate pt-10">
              Already have an Account? <Link to="/login">Login</Link>
            </span>
            <span className="or">
              <span>or</span>
            </span>

            {/* social login */}
            <h5 className="subtitle">{socialTitle}</h5>
            <ul className="lab-ul social-icons justify-content-center">
              <li>
                <button className="github" onClick={handleRegister}>
                  <i className="icofont-github"></i>
                </button>
              </li>
              <li>
                <a href="/" className="facebook">
                  <i className="icofont-facebook"></i>
                </a>
              </li>
              <li>
                <a href="/" className="twitter">
                  <i className="icofont-twitter"></i>
                </a>
              </li>
              <li>
                <a href="/" className="linkedin">
                  <i className="icofont-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="/" className="instagram">
                  <i className="icofont-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
