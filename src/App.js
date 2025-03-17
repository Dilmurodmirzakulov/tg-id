// src/App.js
import React from "react";
const tele = window.Telegram.WebApp;
function App() {
  const [userId, setUserId] = useState(null);
  useEffect(() => {
    tele.ready();
  });
  useEffect(() => {
    // Check if the Telegram WebApp object is available
    if (window.Telegram && window.Telegram.WebApp) {
      const user = tele.initDataUnsafe?.user;
      if (user && user.id) {
        setUserId(user.id);
      } else {
        console.error("No user data available");
      }
    } else {
      console.error("Telegram WebApp not available");
    }
  }, []); // Empty dependency array ensures this runs only once on mount
  return (
    <div className="App">
      <header className="App-header">
        <h1>Telegram User ID : {userId}</h1>
        {tele && tele.initDataUnsafe && tele.initDataUnsafe.user ? (
          <p>Your Telegram user ID is: {tele.initDataUnsafe.user.id}</p>
        ) : (
          <p>No Telegram user data available.</p>
        )}
      </header>
    </div>
  );
}

export default App;
