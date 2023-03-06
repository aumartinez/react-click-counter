import React from 'react';
import '../css/button.css';

class Button extends React.Component {
  render() {
    return (
      <button
      className={this.props.isClickBtn ? 'btn-click' : 'btn-reset'}
      onClick={this.props.clickHandler}
      >
        {this.props.text}
      </button>
    );
  }
}

export default Button;