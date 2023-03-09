
import React, { Component } from 'react';
import pic from './eyaa.jpg'

class App extends Component {
  state = {
    person: {
      fullName: "eya ezzaier",
      bio: "I'm a web developer from Tunisia.",
      imgSrc: pic,
      profession: "Web Developer"
    },
    shows: false,
    intervalId: null,
    secondsSinceMount: 0
  };

  componentDidMount() {
    const intervalId = setInterval(this.timer, 1000);
    this.setState({ intervalId });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  timer = () => {
    this.setState({ secondsSinceMount: this.state.secondsSinceMount + 1 });
  }

  toggleShow = () => {
    this.setState({ shows: !this.state.shows });
  };

  render() {
    return (
      <div>
        <button onClick={this.toggleShow}>Toggle Profile</button>
        {this.state.shows && (
          <div>
            <h1>{this.state.person.fullName}</h1>
            <img src={this.state.person.imgSrc} alt={this.state.person.fullName} />
            <p>{this.state.person.bio}</p>
            <p>{this.state.person.profession}</p>
          </div>
        )}
        <p>Seconds since mount: {this.state.secondsSinceMount}</p>
      </div>
    );
  }
}

export default App;
