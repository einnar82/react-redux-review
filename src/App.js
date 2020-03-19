import React from "react";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import Navigation from "./components/Navigation";
import BookList from "./components/BookList";
import ThemeContextProvider from "./contexts/ThemeContext";
import "./App.css";
import ThemeToggle from "./components/ThemeToggle";
import AuthContextProvider from "./contexts/AuthContext";

const App = () => {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navigation />
          <BookList />
          <ThemeToggle />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
};

export default App;
