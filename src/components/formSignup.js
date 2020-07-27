import React, { Component } from "react";
import "../styles/app.css";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      errorName: "",
      errorEmail: "",
      errorPassword: "",
      success: false,
    };
  }

  handleChange = (event) => {
    let inputName = event.target.name;
    let inputValue = event.target.value;
    this.setState({ [inputName]: inputValue });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let inputName = event.target.name;
    let inputValue = event.target.value;
    let { name, email, password } = this.state;
    let { errName, errEmail, errPass } = "";

    // Check name
    if (name === "") {
      errName = <p>Name required</p>;
    }

    // Check email
    if (email === "") {
      errEmail = <p>Email required</p>;
    } else {
      if (!email.match(/\S+@\S+\.\S+/)) {
        errEmail = <p>Invalid email</p>;
      }
    }

    // Check password
    if (password === "") {
      errPass = <p>Password required</p>;
    } else {
      if (!password.match(/^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/)) {
        errPass = (
          <p>
            Password must include <br />
            * minimum eight characters
            <br />* atleast one letter and one number
          </p>
        );
      }
    }

    this.setState({
      errorName: errName,
      errorEmail: errEmail,
      errorPassword: errPass,
    });

    // On successful validation
    if (!errName && !errEmail && !errPass) {
      this.setState({ success: true });
    }
    this.setState({ [inputName]: inputValue });
  };

  render() {
    let {
      success,
      name,
      email,
      password,
      errorName,
      errorEmail,
      errorPassword,
    } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Create an account</h2>
        <p style={{ display: success ? "block" : "none" }} className="success">
          Form submission is successful
          <br />
          <span>Name:{name}</span>
          <br />
          <span>Email:{email}</span>
        </p>
        <label>
          Name:
          <input
            name="name"
            type="text"
            value={name}
            onChange={this.handleChange}
          />
          {errorName}
        </label>
        <label>
          Email:
          <input
            name="email"
            type="text"
            value={email}
            onChange={this.handleChange}
          />
          {errorEmail}
        </label>
        <label>
          Password:
          <input
            name="password"
            type="password"
            value={password}
            onChange={this.handleChange}
          />
          {errorPassword}
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Form;
