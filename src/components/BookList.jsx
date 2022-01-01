import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

class BookList extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {(context) => {
            const { isThemeLight, light, dark} = context;
            const theme = isThemeLight ? light : dark;
          return (
            <>
              <div
                className="book-list"
                style={{ background: theme.bg, color: theme.syntax }}
              >
                <ul>
                  <li style={{ background: theme.ui }}>
                    Programming Fundamentals
                  </li>
                  <li style={{ background: theme.ui }}>
                    Network and Sys. Administration
                  </li>
                  <li style={{ background: theme.ui }}>
                    Cryptography Encrypt. Descrypt.
                  </li>
                </ul>
              </div>
            </>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default BookList;
