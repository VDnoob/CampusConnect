import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css';
import CreatePost from './CreatePost';
// import Messages from './Messages.jsx';

// import PostPage from './PostPage';
import Home from './Home.jsx';
import Profile from './Profile.jsx';
import Community from './Community.jsx';
import Sign2 from './Login/Sign2.jsx';
import ResetPassword from './Login/ResetPassword.jsx';
import CommentPage from './CommentPage.jsx';
import ContactUs from './ContactUs.jsx';
import './App.css';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/login/*" element={<Sign2 />} />
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/CreatePost" element={<CreatePost />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Community/*" element={<Community />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="/CommentPage" element={<CommentPage />} />
        {/* <Route path="/Messages" element={<Messages />} /> */}
        <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>
    </Router>
  )
}

export default App
