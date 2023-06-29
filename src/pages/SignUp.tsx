import { useForm } from 'react-hook-form'
import {useState} from 'react'
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import * as yup from "yup";
import { useNavigate } from 'react-router-dom';

const schema = yup.object({
  firstname: yup.string()
    .required('First name is required')
    .min(2, 'First name must be at least 2 characters')
    .max(50, 'First name cannot exceed 50 characters')
    .matches(/^[A-Za-z]+$/, 'First name should only contain alphabetic characters'),

  surname: yup.string()
    .required('surname is required')
    .min(2, 'Last name must be at least 2 characters')
    .max(50, 'Last name cannot exceed 50 characters')
    .matches(/^[A-Za-z]+$/, 'Last name should only contain alphabetic characters'),

  mobile_or_EmailId: yup.string()
    .required('Mobile number or Password is required')
    .test('valid-contact', 'Invalid contact information', function (value) {
      const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
      const mobileRegex = /^\d{10}$/;

      return emailRegex.test(value) || mobileRegex.test(value);
    }),
  newPassword: yup.string()
    .required('New password is required')
    .min(8, 'Password must be at least 8 characters')
    .max(50, 'Password cannot exceed 50 characters')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]+$/,
      'Password must contain at least one letter, one number, and one special character'
    ),
     dateOfBirth: yup.object().shape({
      day: yup.string().required('Day is required'),
      month: yup.string().required('Month is required'),
      year: yup.string().required('Year is required')
    }),
    gender: yup.string().required('Gender is required'),

});

const SignUp = () => {
  const [IsLoading,setIsLoading]= useState(false)
  const { register, handleSubmit,reset,formState: { errors } } = useForm({
    resolver: yupResolver(schema)

  });
  const navigate = useNavigate()
  const onSubmit = async (values: any) => {
    setIsLoading(true)
    try{
  //  const response = axios.get("http://localhost:3001/users",values)

      const response= await axios({
        method:"post",
        url:"http://localhost:3001/users",
        data:values,
      });
      console.log(response.data);
      if(response.status===201){
        alert("Sucessfully Registered");
        reset();
        navigate('/login')

      }
    

    }
    catch(errors){
      console.log(errors);
    }
    finally{
      setIsLoading(false);
    }
  };
  return (
    <div className="main-signup">
      <div className="inner-signup">
        <div className="header-signup">
          <h1>Sign Up</h1>
          <p>It's quick and easy.</p>
        </div>
        <form className="body-signup" onSubmit={handleSubmit(onSubmit)}>
          <div className="split1-signup">
            <div>
              <input
                className="split1-signup-1"
                type="text"
                {...register('firstname')}
                placeholder="First name"
              />
              <small className='error-message-signup'>{errors.firstname?.message}</small>
            </div>
            <div>
              <input
                className="split1-signup-2"
                type="text"
                {...register('surname')}
                placeholder="Surname"
              />
              <small className='error-message-signup'>{errors.surname?.message}</small>
            </div>
          </div>
          <div>
            <div className="split2-signup">
              <input
                className="split2-signup-1"
                type="text"
                {...register('mobile_or_EmailId')}
                placeholder="Mobile number or email address"
              />
              <small className='error-message-signup'>{errors.mobile_or_EmailId?.message}</small>
            </div>
            <div>
              <input
                className="split2-signup-2"
                type="password"
                {...register('newPassword')}
                placeholder="New password"
              />
              <small className='error-message-signup'>{errors.newPassword?.message}</small>
            </div>
          </div><br />
          <label className="dob-head-signup">Date of birth</label>
          <div className='dateofbirth-signup'>
            <div className="Dob-signup">
              <select className="date-signup" {...register('dateOfBirth.day')}>
                {Array.from({ length: 31 }, (_, idx) => (
                  <option value={(idx + 1).toString()} key={idx}>
                    {idx + 1}
                  </option>
                ))}
              </select>
              <select className="day-signup" {...register('dateOfBirth.month')}>
                {Array.from({ length: 12 }, (_, idx) => (
                  <option value={(idx + 1).toString()} key={idx}>
                    {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][idx]}
                  </option>
                ))}
              </select>
              <select className="year-signup" {...register('dateOfBirth.year')}>
                {Array.from({ length: 124 }, (_, idx) => {
                  const year = 2023 - idx;
                  return (
                    <option value={year.toString()} key={idx}>
                      {year}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <label className="gender-head-signup">Gender</label><br />
          <span className="Gender-signup">
            <div>
              <input type="radio" value="Male" {...register('gender')} />
              <label>Male</label>
            </div>
            <div>
              <input type="radio"  value="Female" {...register('gender')} />
              <label>Female</label>
            </div>
            <div>
              <input type="radio"  value="Other"  {...register('gender')} />
              <label>Other</label>
            </div>
          </span>
          <p className="p-signup">
            People who use our service may have uploaded your contact
            information to Facebook.
            <a href="#" target="_blank">
              Learn more
            </a>
            .
          </p>
          <p className="p-signup">
            By clicking Sign Up, you agree to our
            <a href="#" target="_blank">
              Terms
            </a>
            ,
            <a href="#" target="_blank">
              Privacy Policy
            </a>
            and
            <a href="#" target="_blank">
              Cookies Policy
            </a>
            . You may receive SMS notifications from us and can opt out at any
            time.
          </p>
          <input className="Signup-btn" type="submit" disabled={IsLoading} value={IsLoading ? "Loading..." : "Sign Up"} />
        </form>
      </div>
    </div>
  );
};

export default SignUp;
