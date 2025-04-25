import React, { useState, useEffect } from 'react';
import BotCollection from './components/BotCollection';
import BotArmy from './components/BotArmy';
import BotSpecs from './components/BotSpecs';
import SortBar from './components/SortBar';
import FilterBar from './components/FilterBar';
import './App.css';

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);
  const [sortBy, setSortBy] = useState('health');
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8001/bots')
      .then(res => res.json())
      .then(data => setBots(data))
      .catch(err => console.error('Error fetching bots:', err));
  }, []);

  const addToArmy = (bot) => {
    if (!army.some(b => b.id === bot.id) && !army.some(b => b.bot_class === bot.bot_class)) {
      setArmy([...army, bot]);
    }
  };

  const releaseFromArmy = (bot) => {
    setArmy(army.filter(b => b.id !== bot.id));
  };

  const dischargeBot = (bot) => {
    fetch(`http://localhost:8001/bots/${bot.id}`, {
      method: 'DELETE'
    })
    .then(() => {
      setBots(bots.filter(b => b.id !== bot.id));
      setArmy(army.filter(b => b.id !== bot.id));
    })
    .catch(err => console.error('Error deleting bot:', err));
  };

  const sortedBots = [...bots].sort((a, b) => b[sortBy] - a[sortBy]);
  const filteredBots = filters.length > 0 
    ? sortedBots.filter(bot => filters.includes(bot.bot_class)) 
    : sortedBots;

  return (
    <div className="app">
      <h1>Bot Battlr</h1>
      <div className="controls">
        <SortBar sortBy={sortBy} setSortBy={setSortBy} />
        <FilterBar filters={filters} setFilters={setFilters} />
      </div>
      <div className="content">
        {selectedBot ? (
          <BotSpecs 
            bot={selectedBot} 
            goBack={() => setSelectedBot(null)} 
            enlist={() => {
              addToArmy(selectedBot);
              setSelectedBot(null);
            }} 
          />
        ) : (
          <>
            <BotCollection 
              bots={filteredBots} 
              onBotSelect={setSelectedBot} 
              army={army}
            />
            <BotArmy 
              army={army} 
              onRelease={releaseFromArmy} 
              onDischarge={dischargeBot} 
            />
          </>
        )}
      </div>
    </div>
  );
}

export default App;