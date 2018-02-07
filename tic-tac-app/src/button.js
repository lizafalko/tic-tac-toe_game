import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const yellow = '#FFF07A';
const pink = '#E41F7B';

export class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: pink };
    this.changeColor = this.changeColor.bind(this);
  }

  changeColor() {
    const newColor = this.state.color == pink ? yellow : pink;
    this.setState({ color: newColor });
  }

  render() {
    return(
    <div style={{ background: this.state.color }}>
      <button onClick={ this.state.changeColor }>Click me!</button>
    </div>
    )
  }
}

ReactDOM.render(
  <Button />,
  document.getElementById('root')
);
