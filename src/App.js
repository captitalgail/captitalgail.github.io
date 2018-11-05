import React, { Component } from 'react';
import { Container } from 'reactstrap'
import './App.css';

class App extends Component {
  render() {
    return (
      <Container className="App">
        <h1>Capital One's Mind Sumo Challenge</h1>
        <h2>By Gail Steward</h2>
        <br />
        <h3>Solution to question 1 <Img src= "OneWayToRoundTrip" alt= "graph one" /> </h3>
        <h3> <Img src= "PassHolderType" alt = "graph two" /></h3>
        <h3><img src= "StartingStation" alt = "graph three"></img></h3>
        <br />
        <h3>Solution to question 2<br /><strong>start:</strong>	3069	307 S Broadway, Los Angeles, CA 90013, USA <br /><strong>stop:</strong>	3005	800 W 7th St, Los Angeles, CA 90017, USA #2</h3>
        <br />
        <h3>Solution to questions 3<br />278.546 km</h3>
        <br />
        <h3>Solution to question 4<br /><strong>Flex Pass	9517 <br /></strong>Monthly Pass	81302 <br /><strong>Total	90819</strong></h3>
        <br /><hr />
      </Container>
    );
  }
}

export default App;
