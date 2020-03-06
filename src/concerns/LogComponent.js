import React from "react";

//Higher order components example
const LogComponent = WrappedComponent => {
  return class extends React.Component {
    componentDidMount() {
      console.log("Logging!");
    }
    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};

export default LogComponent;
