
//App.tsx

import React from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import { Header } from './container/Header/header';
function App() {
  return (
   
      <Router>
        <div className="App">
            <Header/>
        </div>
      </Router>
      
     
     
  );
}

export default App;
