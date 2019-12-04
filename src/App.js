import "./App.css";
import React, { Component } from "react";
import SoldierImperialImage from "./images/Star-Wars-Imperial.png";
import Planet from "./components/Planet";
import { BallBeat } from 'react-pure-loaders';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      planet: {
        films: []
      },
      loading: true
    };
  }

  handleClick() {
    this.setState({ planet: {films: []} });
    this.setState({ loading: true });
    setTimeout(() => {
    fetch(`${process.env.REACT_APP_API_RANDOM}`)
      .then(res => res.json())
      .then(data => {
        this.setState({ planet: data });
        this.setState({ loading: false });
      })
      .catch(console.log);
    }, 1200);
  }

  componentDidMount() {
    setTimeout(() => {
      fetch(`${process.env.REACT_APP_API_RANDOM}`)
      .then(res => res.json())
      .then(data => {
        this.setState({ planet: data });
        this.setState({ loading: false });
      })
      .catch(console.log);
    }, 1200);
  }

  render() {
    return (
      <div>
        <header className="App-header">
        <img src={SoldierImperialImage} alt="logo"/> 
          <div>
            <Planet planet={this.state.planet} />
          </div>

          <div className="App-loader-position">
          <BallBeat 
          color={'#e1e6f5'}
          loading={this.state.loading}/>
            </div>
          <div className="App-align-center">
            <button
              type="button"
              className="btn btn-primary btn-lg"
              onClick={e => this.handleClick(e)}>
              Next
            </button>
          </div>
        </header>
      </div>
    );
  }
}
