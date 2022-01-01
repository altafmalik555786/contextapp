import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

class ToggleTheme extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {(context) => {
          const { toggleTheme } = context;
          return (
            <div>
              <button onClick={toggleTheme}>Toggle Theme</button>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default ToggleTheme;
