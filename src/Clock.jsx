import React, { Component } from 'react';
import './app.css';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
    console.log(props.deadline);
  }

  getTimeUntil(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());
    const seconds = Math.floor((time/1000)%60);
    const minutes = Math.floor((time/1000/60)%60);
    const hours = Math.floor(time/(1000*60*60)%24);
    const days = Math.floor(time/(1000*60*60*24));

    this.setState({days, hours, minutes, seconds});
  }
  leading0(num) {
    return num < 10 && num > -1 ? '0' + num : num;
  }
  componentWillMount() {
    this.getTimeUntil(this.props.deadline);
  }
  
  componentDidMount() {
    setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
  }

  render() {
    return (
      <div>
        <div className="clockDays">{this.leading0(this.state.days)} days</div>
        <div className="clockHours">{this.leading0(this.state.hours)} hours</div>
        <div className="clockMinutes">{this.leading0(this.state.minutes)} minutes</div>
        <div className="clockSeconds">{this.leading0(this.state.seconds)} seconds</div>
      </div>
    );
  }
}

export default Clock;