var React = require('react');
var Controls = require('Controls');
var Clock = require('Clock');

var Timer = React.createClass({
  getInitialState: function () {
    return {
        count: 0,
        timerStatus: 'stopped'
    };
  },

  // componentDidUpdate: function (prevProps, prevState) {
  //   if (this.state.timerStatus !== prevState.timerStatus) {
  //     switch (this.state.timerStatus) {
  //       case 'started':
  //         this.startTimer();
  //
  //     }
  //   }
  // }

  handleStatusChange: function (newTimerStatus) {
    console.log('newTimerStatus');
  },

  render: function () {
    var {count, timerStatus} = this.state;

    return(
      <div>
        <h1 className="page-title">Timer App</h1>
        <Clock totalSeconds={count}/>
        <Controls countdownStatus={timerStatus} onStatusChange={this.handleStatusChange}/>
      </div>
    )
  }
});

module.exports = Timer;
