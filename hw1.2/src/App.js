import React from 'react';

import './App.css';

class App extends React.Component {
  state = {
    isDisabled: false,
    heading: ''
  };

  changeInput(e) {
    const text = e.target.value;

    this.setState({ heading: text})

    if (e.target.value === 'react') {
      this.setState({ isDisabled: true});
      return;
    }
  
    this.setState({ isDisabled: false});
  }

  componentDidMount() {
    console.log('_Mounted_');
  }

  handleClick(e) {
    e.preventDefault();
  }

  handleFocusClick() {
    const input = document.querySelector('.input');

    input.focus();
  }

  render() {
    return (
      <>
        <h1>{this.state.heading}</h1>
        <form>
            <input 
              placeholder='react'
              className='input'
              onChange={ (e) => this.changeInput(e) }
            />
            <button 
              className='btn-disabled'
              disabled={this.state.isDisabled}
              onClick={(e) => this.handleClick(e)}
            >
              click
            </button>
        </form>
        <button 
              className='btn-focus'
              onClick={() => this.handleFocusClick()}
            >
              focus
        </button>
      </>
    )
  }
}

export default App;
