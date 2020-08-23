import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { logout } from "../../actions/authActions";
import { NavLink } from "reactstrap";

class LogOut extends Component {
  render() {
    return (
      <div>
        <Fragment>
          <NavLink onClick={this.props.logout} href="#">
            Logout
          </NavLink>
        </Fragment>
      </div>
    );
  }
}

export default connect(null, { logout })(LogOut);
