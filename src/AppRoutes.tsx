import {BrowserRouter as Router ,Routes , Route , Navigate} from 'react-router-dom'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import ForgotPassword from './pages/ForgotPassword'
import Home from './pages/HomePage'
import Profile from './components/ProfilePage/Profile'
import Friends from './components/ProfilePage/Friends'

const AppRoutes = () => {
  return (
    <Router>
        <Routes>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/forgotpassword' element={<ForgotPassword/>}></Route>
            <Route path='/signup' element={<SignUp/>}></Route>
            <Route path='/profile' element={<Profile/>}></Route>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/Friends' element={<Friends/>}></Route>
            <Route path="/" element={<Navigate to="/login" />}></Route>
        </Routes>
    </Router>
  )
}

export default AppRoutes
