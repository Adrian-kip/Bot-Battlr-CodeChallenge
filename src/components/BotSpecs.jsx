import React from 'react';

function BotSpecs({ bot, goBack, enlist }) {
  return (
    <div className="bot-specs">
      <div className="specs-card">
        <img src={bot.avatar_url} alt={bot.name} />
        <h2>{bot.name}</h2>
        <p><strong>Class:</strong> {bot.bot_class}</p>
        <p><strong>Health:</strong> {bot.health}</p>
        <p><strong>Damage:</strong> {bot.damage}</p>
        <p><strong>Armor:</strong> {bot.armor}</p>
        <p><strong>Catchphrase:</strong> {bot.catchphrase}</p>
        <div className="specs-buttons">
          <button onClick={goBack}>Go Back</button>
          <button onClick={enlist}>Enlist</button>
        </div>
      </div>
    </div>
  );
}

export default BotSpecs;