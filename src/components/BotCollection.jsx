import React from 'react';
import BotCard from './BotCard';

function BotCollection({ bots, onBotSelect, army }) {
  return (
    <div className="bot-collection">
      <h2>Available Bots</h2>
      <div className="bot-grid">
        {bots.map(bot => (
          <BotCard 
            key={bot.id} 
            bot={bot} 
            onClick={() => onBotSelect(bot)}
            isInArmy={army.some(b => b.id === bot.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;