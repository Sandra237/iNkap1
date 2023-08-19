  import { useState } from "react";

  const DarkMode = () => {
    const [isInverted, setIsInverted] = useState(false);

    const handleToggle = () => {
      setIsInverted(!isInverted);

      const root = document.documentElement;
      if (isInverted) {
        root.style.filter = "invert(0)";
      } else {
        root.style.filter = "invert(1)";
      }
    };

    return (
      <button onClick={handleToggle}>
     {isInverted ? "Dark Mode" : "Light Mode"}
      </button>
    );
  };

  export default DarkMode;