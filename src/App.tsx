import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import React, { Suspense, useEffect, useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Loader from './Components/Util/Loader/Loader';
import ChatBotComponent from './Components/Chatbot/ChatbotComponent';

const Home = React.lazy(() => import('./Components/Home/Home'));
const Resume = React.lazy(() => import('./Components/Resume/Resume'));

const Layout = () => {
  const location = useLocation();

  // Determine if the current route is '/resume'
  const showHeaderAndFooter = location.pathname !== '/resume';

  return (
    <>
      {showHeaderAndFooter && <Header />}
      <div style={{ minHeight: "100vh" }}>
        <Suspense fallback={<div><Loader /></div>}>
          <Routes>
            <Route path="/PORTFOLIO" element={<Home />} />
            {/* <Route path="/resume" element={<Resume />} /> */}
          </Routes>
        </Suspense>
      </div>
      {showHeaderAndFooter && <Footer />}
      {showHeaderAndFooter && <ChatBotComponent />}
    </>
  );
};

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
