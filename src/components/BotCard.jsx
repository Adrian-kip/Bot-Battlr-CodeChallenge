import React from 'react';

function BotCard({ bot, onClick, isInArmy }) {
  return (
    <div 
      className={`bot-card ${isInArmy ? 'in-army' : ''}`} 
      onClick={onClick}
    >
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p>{bot.bot_class}</p>
      <div className="bot-stats">
        <span>❤️{bot.health}</span>
        <span>⚔️{bot.damage}</span>
        <span>🛡️{bot.armor}</span>
      </div>
      <p className="catchphrase">{bot.catchphrase}</p>
    </div>
  );
}

export default BotCard;