// src/components/Toggle.js
import React from "react";
import { useTheme } from "./ThemeProvider";

const Toggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="mt-1 mx-2">
      <label>
        <div className="flipswitch ">
          <input
            type="checkbox"
            name="flipswitch"
            className="flipswitch-cb"
            id="fs"
            checked={theme === "dark"}
            onChange={toggleTheme}
          />
          <label className="flipswitch-label" htmlFor="fs">
            <div className="flipswitch-inner"></div>
            <div className="flipswitch-switch"></div>
          </label>
        </div>
      </label>
    </div>
  );
};

export default Toggle;
