import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/app.css";

class Nav extends Component {
  state = { menu: true };
  render() {
    let { menu } = this.state;
    return (
      <header>
        <nav style={{ display: menu ? "none" : "block" }}>
          <ul>
            <Link className="links" to="/image">
              <li>View image</li>
            </Link>
            <Link className="links" to="/signup">
              <li>Sign up</li>
            </Link>
            <li>Dashboard</li>
          </ul>
        </nav>
        <button
          className="menu-icon-btn"
          onClick={() => this.setState({ menu: !menu })}
        >
          <i className="fas fa-bars"></i>
        </button>
      </header>
    );
  }
}
export default Nav;
