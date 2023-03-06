import React from 'react';
import './App.css';
import freeCodeCampLogo from './img/freecodecamp-logo.png'
import Button from './components/Button';
import Counter from './components/Counter';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      clickCount: 0
    };
    this.clickHandler = this.clickHandler.bind(this);
    this.resetCounter = this.resetCounter.bind(this);
  }

  clickHandler() {
    this.setState(({ clickCount }) => ({ clickCount: clickCount + 1 }));
  }

  resetCounter() {
    this.setState({ clickCount: 0 });
  }

  render() {
    return (
      <div className='App d-flex'>
        <div className='freecodecamp-logo-container d-flex'>
          <img 
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt="FreeCodeCamp Logo"
          />
        </div>
        <div className='main-container d-flex'>
          <Counter 
          clickCount={this.state.clickCount}
          />
          <Button 
          text='Click'
          isClickBtn={true}
          clickHandler={this.clickHandler}
          />
          <Button 
          text='Reset'
          isClickBtn={false}
          clickHandler={this.resetCounter}
          />
        </div>
      </div>
    );
  }
}

export default App;
