import React, { useState } from "react";

export const LoginView = ({ onLoggedIn }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    fetch("https://og-oyin.onrender.com/login", {
      method: "POST",
      body: JSON.stringify(data)
    }).then((response) => {
      if (response.ok) {
        onLoggedIn(username);
      } else {
        alert("Login failed");
      }
    });
    
    return (
        <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
           type="text"
           value={username}
           onChange={(e) => setUsername(e.target.value)}
           />
        </label>
        <label>
          Password:
          <input 
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  };