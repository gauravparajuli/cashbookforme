import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import VerifyAccount from './pages/VerifyAccount'
import ResetPassword from './pages/ResetPassword'

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LandingPage />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/signup' element={<Signup />} />
                    <Route path='/dashboard' element={<Dashboard />} />
                    <Route path='/verify' element={<VerifyAccount />} />
                    <Route path='/reset' element={<ResetPassword />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
