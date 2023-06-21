import { useNavigate } from "react-router-dom";
import usedata from "../assets/Validation.json";
import { useState } from "react";

const Login = () => {
  const [data, setData] = useState({ Email: "", password: "" });
  const navigate = useNavigate();
  const navigateclick = () => {
    navigate("/SignUp");
  };

  const navigatehome = () => {
    navigate("/home");
  };
  const setdata = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };
  let submit = () => {
    console.log(data);
    let isValid = false;

    usedata.map((item) => {
      if (data.Email === item.Email && data.password === item.password) {
        isValid = true;
      }
    });
    if (isValid) {
      navigatehome();
    } else {
      alert("Enter a valid email and password");
    }
  };

  return (
    <div className="login-page">
      <div className="login-leftcontent">
        <h1 className="heading">facebook</h1>
        <p className="paragraph-leftcontent">
          Facebook helps you connect and share
        </p>
        <p className="paragraph-leftcontent">with the people in your life.</p>
      </div>
      <div>
        <form className="login-Rightcontent">
          <input
            type="text"
            name="Email"
            className="Login-box"
            placeholder="Email address or phone number"
            id="email"
            onChange={setdata}
          />
          <br />
          <br />
          <input
            type="password"
            name="password"
            className="Login-box"
            placeholder="Password"
            id="pass"
            onChange={setdata}
          />
          <br />
          <br />
          <input
            type="button"
            className="Login-submit"
            onClick={submit}
            value="Log in"
          />
          <br />
          <br />
          <a className="forgotten-password-link" href="/forgotpassword">
            Forgotten password?
          </a>
          <div className="bottom-border-forgotpass"></div>
          <div className="button-newaccount">
            <button className="button-newaccount-submit" onClick={navigateclick}>
              Create new account
            </button>
          </div>
        </form>
        <p className="login-bellowtext"><strong>Create a Page</strong> for a celebrity, brand or business.</p>
      </div>
    </div>
  );
};

export default Login;
