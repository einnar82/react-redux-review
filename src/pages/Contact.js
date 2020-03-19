import React from "react";
import { fetchUsers } from "../redux/services/users";
import { connect } from "react-redux";

class Contact extends React.Component {
  componentDidMount() {
    this.props.fetchUsers();
  }
  render() {
    return (
      <div className="container">
        <h4 className="center">Contact</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero
          exercitationem ab labore illum pariatur magnam, culpa reprehenderit
          qui, ut asperiores quisquam tempora! Error libero consequatur nulla
          explicabo, omnis eos sapiente!
        </p>
      </div>
    );
  }
}

const mapActionsToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  };
};

export default connect(null, mapActionsToProps)(Contact);
