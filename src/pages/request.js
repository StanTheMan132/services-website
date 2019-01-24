import React, { Component } from 'react';

class Request extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      service: '',
      message: '',
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    console.log(this.state);
    event.preventDefault();
  }

  render() {
    return (
      <div className="component request">
        <form onSubmit={this.handleSubmit}>
          <legend>Request a service</legend>
          <label>
            Name:
            <input type="text" id="name" onChange={this.handleChange} value={this.state.name}/>
          </label>
          <label>
            Email:
            <input type="text" id="email" onChange={this.handleChange} value={this.state.email}/>
          </label>
          <label>
            Service:
            <select onChange={this.handleChange} id="service">
              <option value="Create a website">Create a website</option>
              <option value="Create a api">Create a RESTFUL api</option>
              <option value="Other">Other</option>
            </select>
            </label>
            <label>
              Message:
              <textarea id="message" value={this.state.message} onChange={this.handleChange}/>
            </label>
            <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}
export default Request;
