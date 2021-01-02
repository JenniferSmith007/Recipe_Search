import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import SearchResults from './SearchResults';
import Header from './Header';
import Footer from './Footer';
import {API_URL, API_TOKEN} from "@env"
import './App.css';

function App() {
  return (
    <div className="App">
    <Header />
    
    <Footer />
    </div>
  );
}

export default App;
