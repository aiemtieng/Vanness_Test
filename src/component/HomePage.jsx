import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useUserAuth } from '../context/UserAuthContext'
import LogoVanness from "../assets/image/LogoVanness.png"
import './HomePage.css'

function HomePage() {
    const {logOut,user} = useUserAuth();

    const navigate = useNavigate();

    const handleLogout = async () =>{
        try{
            await logOut();
            navigate('/')
        } catch(err){
            console.log(err.message);
        }
    }
  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100 vw-100'>
        <div className='bg-white p-3 rounded w-50'>
        <h2 className='text-center'>Welcome to Vanness Plus</h2>
        <img className='HomeLogo' src={LogoVanness} alt='Logo'></img>
        <p className='text-center'> Hi,{user.email} </p>
        <p>Name and Surname</p>
        <p>Address</p>
        <p>Telephone Number</p>
        <p>Your Birthday</p>
        <p>Gender</p>
        <button className='btn btn-danger border w-100 rounded-0 text-decoration-none' onClick={handleLogout}>Logout</button>
        </div>
    </div>
  )
}

export default HomePage