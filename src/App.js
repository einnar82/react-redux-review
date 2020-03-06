import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./routes";
class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="todo-app fluid">
          <Navbar />
          <Switch>
            {routes.map((item, key) => {
              return (
                <Route
                  exact={item.path === "/" ? true : false}
                  path={item.path}
                  component={item.component}
                />
              );
            })}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
