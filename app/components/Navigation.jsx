var React = require('react');
var {Link, IndexLink} = require('react-router');

var Navigation = React.createClass ({

  render: function(){
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Timer</li>
            <li><IndexLink to="/" activeClassName="active-link" activeStyle={{fontWeight: 'bold'}}>Timer</IndexLink></li>
            <li><Link to="/Countdown" activeClassName="active-link" activeStyle={{fontWeight: 'bold'}}>Countdown</Link></li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li className="menu-text">
              Created by <a href="https://www.linkedin.com/in/simonconway/">Simon Conway</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = Navigation
