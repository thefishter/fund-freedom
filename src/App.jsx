import React, { Component } from 'react'
import { Consumer } from 'soda-js'

import './App.css'
import DataTable from './DataTable'

let consumer = new Consumer('data.ct.gov')


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      queryResults: []
    }
  }

  componentWillMount() {
    consumer.query()
      .withDataset('bvbe-957i')
      .limit(15)
      .order('bond_amount desc')
      .getRows()
        .on('success', inmates =>
          this.setState({ queryResults: inmates }))
        .on('error', error => console.error(error))
  }

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
        <DataTable inmates={this.state.queryResults} />
      </div>
    )
  }
}

export default App;
