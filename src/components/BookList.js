import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const BookList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <div
      style={{
        color: theme.syntax,
        background: theme.bg
      }}
    >
      <ul>
        <li
          style={{
            background: theme.ui
          }}
        >
          lorem >5{" "}
        </li>
        <li
          style={{
            background: theme.ui
          }}
        >
          lorem >4{" "}
        </li>
        <li
          style={{
            background: theme.ui
          }}
        >
          lorem >3{" "}
        </li>
      </ul>
    </div>
  );
};

export default BookList;
