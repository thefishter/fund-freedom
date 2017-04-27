import React, { Component } from 'react'
import './App.css'
import { Consumer } from 'soda-js'

let consumer = new Consumer('data.ct.gov');

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="App-header">
          <h1>FUND FREEDOM</h1>
          <p className="App-intro">
            a tool to combat wealth-based jailing through real-time visualization and donation
          </p>
          <br />
        </div>

        <div>
          {
            consumer.query()
              .withDataset('bvbe-957i')
              .limit(20)
              .order('age')
              .getRows()
                .on('success', inmates => console.log(inmates))
                .on('error', error => console.error(error))
          }
        </div>

      </div>
    );
  }
}

export default App;
