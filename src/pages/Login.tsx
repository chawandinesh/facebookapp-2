import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form'
import { useEffect, useState } from "react";
import axios from 'axios';

const Login = () => {
  const [usersData, setUsersData] = useState({
    loading: false,
    error: false,
    data: []
  })
  const { register, handleSubmit, formState: { errors } } = useForm()
  console.log(errors)
  const navigate = useNavigate();
  const navigateclick = () => {
    navigate("/SignUp");
  };

  const submit = (data: any) => {

    const Email = data?.Email;
    const password = data?.password;
    const checkEmail = usersData.data.some((each: any) => each?.mobile_or_EmailId === Email)

    if (!checkEmail) {
      alert("This Email is not Registered")
    }
    else {
      const checkPassword = usersData.data.find((each: any) => each?.newPassword === password && each?.mobile_or_EmailId === Email)
      if (!checkPassword) {
        alert("Incorrect Password")
      }
      else {
        const currentUser:any=  usersData.data.find((each: any) => {
          if(each?.mobile_or_EmailId === Email){
            return each
          }
        })
        localStorage.setItem("current userId", currentUser.id) 
        
        navigate('/home')
      }
    }
  };
  const getusers = async () => {
    setUsersData({ ...usersData, loading: true })
    try {
      const response = await axios({
        method: "GET",
        url: "http://localhost:3001/users"
      })
      if (response.status === 200) {
        setUsersData({ ...usersData, loading: false, data: response.data })
      }
    } catch (error) {
      setUsersData({ ...usersData, loading: false, error: true, data: [] })
    }
  }

  useEffect(() => {
    getusers()
  }, [])

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

            {...register("Email")}
            className="Login-box"
            placeholder="Email address or phone number"
            id="email"
          />
          <br />
          <br />
          <input
            type="password"
            {...register("password")}
            className="Login-box"
            placeholder="Password"
            id="pass"
          />
          <br />
          <br />
          <input
            type="button"
            className="Login-submit"
            onClick={handleSubmit(submit)}
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
