import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Row from './components/Row';
import './App.css';

const API_KEY = 'c3b690f277f82dbd3da2db5a2d2d0f21';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Banner />

      <Row
        title="Trending Now"
        fetchUrl={`https://api.themoviedb.org/3/trending/movie/week?language=en-US`}
        apiKey={API_KEY}
      />
      <Row
        title="Action Movies"
        fetchUrl={`https://api.themoviedb.org/3/discover/movie?with_genres=28&language=en-US&sort_by=popularity.desc`}
        apiKey={API_KEY}
      />
    </div>
  );
}

export default App;
