import React, { Component } from 'react';
import DateCountdown from 'react-date-countdown-timer';

class CountdownComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      targetDate: this.getEndOfCurrentMonth(),
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const now = new Date();
      if (now >= this.state.targetDate) {
        this.setState({
          targetDate: this.getEndOfNextMonth(this.state.targetDate),
        });
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  getEndOfCurrentMonth() {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59, 999);
  }

  getEndOfNextMonth(currentDate) {
    const nextMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 2, 0, 23, 59, 59, 999);
    return nextMonth;
  }

  render() {
    return (
      <DateCountdown
        dateTo={this.state.targetDate.toString()}
        locales={['year', 'month', 'days', 'hrs', 'min', 'sec']}
        locales_plural={['year', 'month', 'days', 'hrs', 'min', 'sec']}
        callback={() => alert('Hello')}
      />
    );
  }
}

export default CountdownComponent;
