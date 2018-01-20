import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function getGreeting(user) {
  if (user) {
    return user.firstName + ' ' + user.lastName;
  }
  return <h1>Hello, Stranger!</h1>
}

const user = {
  firstName: 'Lisa',
  lastName: 'Floyd'
};

const element = (
  <div>
    <h1 className='hello'>
      Good Morning, {getGreeting(user)}!
      </h1>
      <p className='font'>You can print and draw some pictures here!</p>
  </div>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);
