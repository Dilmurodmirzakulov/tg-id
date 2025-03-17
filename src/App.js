// src/App.js
import React from "react";

function App() {
  const tg = window.Telegram.WebApp;

  return (
    <div className="App">
      <header className="App-header">
        <h1>Telegram User ID</h1>
        {tg && tg.initDataUnsafe && tg.initDataUnsafe.user ? (
          <p>Your Telegram user ID is: {tg.initDataUnsafe.user.id}</p>
        ) : (
          <p>No Telegram user data available.</p>
        )}
      </header>
    </div>
  );
}

export default App;
