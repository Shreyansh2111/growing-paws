import Homepage from './body/sections/export-all';
import SignIn from './pages/Sign-up-page';
import Login from './pages/Login_page'
import UserProfile from './pages/User_profile'
import { Route, Routes } from 'react-router-dom';

export default function Routing(){
    return (
        <>
      {/* ---- THIS IS FOR THE HOMEPAGE COMPONENTS ------*/}

      <Routes>
        {/* <Homepage/> */}
        <Route path='/' element={<Homepage/>} />

        {/* ----SIGN-IN PAGE COMPONENT----- */}
        <Route path='signup' element={<SignIn/>} />
        {/* <SignIn/> */}

        {/* -----Login Page--------- */}
          <Route path='login' element={<Login/>}/> 

        {/* -----user profile page */}
          <Route path='userprofile' element={<UserProfile/>}/>
      </Routes>

      
    </>
    );
}