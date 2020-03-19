import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { AuthContext } from "../contexts/AuthContext";

export default class Navigation extends Component {
  render() {
    return (
      <AuthContext.Consumer>
        {authContext => (
          <ThemeContext.Consumer>
            {context => {
              const { isAuthenticated, toggleAuth } = authContext;
              const { isLightTheme, light, dark } = context;
              const theme = isLightTheme ? light : dark;
              return (
                <nav
                  style={{
                    background: theme.ui,
                    color: theme.syntax
                  }}
                >
                  <h1>Context App</h1>
                  <div onClick={toggleAuth}>
                    {isAuthenticated ? "Logged in" : "Logged out"}
                  </div>
                  <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                  </ul>
                </nav>
              );
            }}
          </ThemeContext.Consumer>
        )}
      </AuthContext.Consumer>
    );
  }
}
