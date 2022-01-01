import React, { Component } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { ThemeContext } from "../contexts/ThemeContext";

class Navbar extends Component {
  render() {
    return (
      <AuthContext.Consumer>
        {(ac) => {
          console.log(ac)          
          return (
            
            <ThemeContext.Consumer>
            {(themeContext) => {
              const { isThemeLight, light, dark, changeTheme } = themeContext;
            //  const { isAuthenticated, toggleAuth } = ac;
              const theme = isThemeLight ? light : dark;
              return (
                <>
                  <button
                    onClick={() => {
                      changeTheme();
                    }}
                  >
                    Mode Theme
                  </button>
                  <div
                    className="book-list"
                    style={{ background: theme.bg, color: theme.syntax }}
                  >
                    <h1>Context App</h1>
                    <div></div>
                    <nav className="navbar">
                      <ul>
                        <li style={{ background: theme.ui }}>Home</li>
                        <li style={{ background: theme.ui }}>About</li>
                        <li style={{ background: theme.ui }}>Contact</li>
                      </ul>
                    </nav>
                  </div>
                </>
              );
            }}
          </ThemeContext.Consumer>
       
          )
          }}
      </AuthContext.Consumer>
    );
  }
}

export default Navbar;
