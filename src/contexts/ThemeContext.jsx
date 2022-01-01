import React, { createContext, Component } from "react";

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
  state = {
    isThemeLight: true,
    light: { syntax: "black", ui: "lightGreen", bg: "pink" },
    dark: { syntax: "white", ui: "darkGreen", bg: "black" },
  }
  
  toggleTheme =()=>{
    this.setState({ isThemeLight: !this.state.isThemeLight})
  }

  render() {
    const changeTheme=()=>{
      this.setState({...this.state, isThemeLight:!this.state.isThemeLight})

    }
     
    return (
      <ThemeContext.Provider value={{...this.state, changeTheme, toggleTheme: this.toggleTheme}}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;
