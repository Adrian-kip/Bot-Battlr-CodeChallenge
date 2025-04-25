import React from 'react';
import BotCard from './BotCard';

function BotArmy({ army, onRelease, onDischarge }) {
  const handleRelease = (bot) => {
    onRelease(bot);
  };

  const handleDischarge = (e, bot) => {
    e.stopPropagation();
    onDischarge(bot);
  };

  return (
    <div className="bot-army">
      <h2>Your Bot Army</h2>
      {army.length === 0 ? (
        <p>No bots in your army yet. Click on bots to add them!</p>
      ) : (
        <div className="army-grid">
          {army.map(bot => (
            <div 
              key={bot.id} 
              className="army-bot" 
              onClick={() => handleRelease(bot)}
            >
              <BotCard bot={bot} />
              <button 
                className="discharge-btn"
                onClick={(e) => handleDischarge(e, bot)}
              >
                x
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default BotArmy;