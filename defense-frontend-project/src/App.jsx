import "./App.css";
import Dashboard from "./view/Dashboard";
import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id="light">
        <Dashboard />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
