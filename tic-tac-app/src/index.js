import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Button } from './button.js';

class ShopSelection extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 'Nike' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('You favorite shop is ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Pick you favorite shop: </label>
        <select className="selection" value={this.state.value} onChange={this.handleChange}>
          <option value="FootBox">FootBox</option>
          <option value="Nike">Nike</option>
          <option value="Reebock">Reebock</option>
          <option value="Pik">Pik</option>
          <option value="Vans">Vans</option>
        </select>
        <input type="submit" value="Submit" />
        </form>
    );
  }
}

// ReactDOM.render(
//   <Button />,
//   document.getElementById('root')
// );
