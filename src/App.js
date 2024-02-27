import "./App.css";
import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "user" && password === "password") {
      setIsLogin(true);
    } else {
      console.error("Invalid username or password");
      alert("Invalid username or password");
    }
  };
  return (
    <div className="App">
      <h1>Login Page</h1>
      {isLogin ? (
        <h3>Welcome, user!</h3>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              placeholder="username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="pasword"
              placeholder="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}

export default App;
