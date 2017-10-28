import React, { Component } from 'react';
import Clock from './Clock'
import './app.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      deadline: 'December 25, 2017',
      newDeadline: ''
    }
  }


  changeDeadline() {
    this.setState({deadline: this.state.newDeadline});
  }

  render() {


    return (
      <div className='App'>
        <div className="clockTitle">Count Down to {this.state.deadline}</div>
        <Clock 
          deadline={this.state.deadline}
        />
        <div>
          <input type="date" onChange={event => this.setState({newDeadline: event.target.value})} />
          <input type="submit" value="Submit" onClick={() => this.changeDeadline()} />
        </div>
      </div>
    );
  }
}

export default App;