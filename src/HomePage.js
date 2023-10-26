import React from 'react';
import './HomePage.css';
import {useNavigate, BrowserRouter as Router} from 'react-router-dom';



function HomePage() {
    
    const navigate = useNavigate();

    const handleSignUpClick = () => {
        navigate('/idea-form');
    }
  return (
    <div className="homepage">
      <header className="header">
        <h1>Welcome to Zipla</h1>
        <p>Your personal idea organizer tool.</p>
      </header>
      <section classNam="features">
        <h2>Features</h2>
        <div className="feature-cards">
          <div className="card">
            <h3>Organize Ideas</h3>
            <p>Effortlessly manage and categorize your brainstorming sessions and project ideas.</p>
          </div>
          <div className="card">
            <h3>Collaborate</h3>
            <p>Share your thoughts and collaborate with your team in real-time.</p>
          </div>
          <div className="card">
            <h3>Integrate</h3>
            <p>Sync with popular developer tools for a seamless workflow.</p>
          </div>
        </div>
      </section>
      <section className="get-started">
        <h2>Get Started</h2>
        <p>Start using Zipla today and transform the way you manage your ideas!</p>
        <button onClick={handleSignUpClick}>Click Me!</button>
      </section>
    </div>
  );
}

export default HomePage;
