const ForgotPassword = () => {
  return (
    <div>
      <header className="header-forgotpass">
        <h1>facebook</h1>
        <form className="form-forgotpass">
          <input
            type="text"
            className="Emailform-forgotpass"
            placeholder="Email or phone"
          />
          <input
            type="password"
            className="Passwordform-forgotpass"
            placeholder="Password"
          />
          <button className="login-btn">Log in</button>
          <a className="forgotten-account-link" href="#">
            Forgotten account?
          </a>
        </form>
      </header>
      <div className="main-content-forgotpass">
        <div>
          <div className="containermain-forgotpass">
            <div className="container-forgotpass">
              <h2>Find Your Account</h2>
              <div className="container-forgotpass-border"></div>
              <p className="container-paragraph-forgotpass">
                Please enter your email address or mobile number to search<br />
                for your account.
              </p>
                <input
                  type="text"
                  className="textbox-forgotpass"
                  placeholder="Email address or mobile number"
                /><br />
              <div className="container-forgotpass-border"></div><br />
              <div className="buttons-forgotpass">
                <button className="button-cancel-forgotpass">Cancel</button>
                <button className="button-search-forgotpass">Search</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
