import './App.css';
import Header from './components/Header';
import Pokedex from './components/Pokedex';
import TeamSection from './components/TeamSection';
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [team, setTeam] = useState([]);

  const addToTeam = (url) => {
    if (team.length < 6) {
      axios
        .get(url)
        .then((res) => {
          setTeam([...team, res.data]);
        })
    } else if (team.length === 6) {
      alert('You can only have 6 pokemon on your team!')
    }

  }

  return (
    <div className="App">
      <Header />
      <TeamSection team={team} />
      <Pokedex addToTeam={addToTeam} />
    </div>
  );
}

export default App;
