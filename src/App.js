import React from 'react';
import './App.css';
import requests from './requests'
import Row from './components/Row'

function App() {
  return (
    <div className="App">
      <h1>Hey, starting the netflix-clone</h1>
      <Row title='Netflix Originals' fetchUrl={requests.fetchNetflixOriginals} />
      <Row title='Trending Now' fetchUrl={requests.fetchTrending} />
    </div>
  );
}

export default App;
