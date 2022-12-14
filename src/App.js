import React, { Component } from 'react';
import { CardListComponent } from './components/card-list/CardListComponent'
// import logo from './logo.svg';
// import './App.css';
// import Header from './Hseader'

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: []
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => { this.setState({ monsters: users }) })
  }
  render() {
    return (
      <div className="App">
        <CardListComponent monsters={this.state.monsters} />
        {/* <CardListComponent>
          {
            this.state.monsters.map(monster => <h1 key={monster.id}>{monster.name}</h1>)
          }
        </CardListComponent> */}

      </div>
    );
  }
}



export default App;
