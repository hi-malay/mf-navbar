import { Link } from "@reach/router";
import React from "react";

export default class Root extends React.Component {
  state = {
    hasError: false
  };

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <div className="error">Error</div>;
    } else {
      return (
        <>
          <Link className="navbar-brand" to="/">
            <img
              src="https://as2.ftcdn.net/v2/jpg/01/34/74/23/1000_F_134742344_ewV8CI2eeb8iSTujRWYXgR5HBivbSCYx.jpg"
              className="d-inline-block align-top mr-2 align-middle"
              height="50"
              width="50"
              alt=""
            />
            Microfrontends Demo
          </Link>
          <div class="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/mf-root-config/employees">
                  Employees
                </Link>
              </li>
            </ul>
          </div>
          <em className="text-white">{this.props.name} using React</em>
        </>
      );
    }
  }
}
