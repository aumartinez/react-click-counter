import React from 'react';
import '../css/counter.css';

class Counter extends React.Component {
  render() {
    return (
      <div className='counter d-flex'>
        {this.props.clickCount}
      </div>
    );
  }
}

export default Counter;