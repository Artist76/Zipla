import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import IdeaForm from './IdeaForm';
import IdeaList from './IdeaList';
import HomePage from './HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/idea" element={<IdeaForm />} />
          </Routes>
        </div>
      </Router>
      <div className="App">
        
        <Router><HomePage /></Router>
        <h1>Zipla Idea Organizer</h1>
        <IdeaForm />
        <IdeaList />

      </div>
        
    </Provider>
    
  );
}

export default App;
