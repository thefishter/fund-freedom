import React, { Component } from 'react'
import { Consumer } from 'soda-js'

import './App.css'
import DataTable from './DataTable'
import Navbar from './Navbar'

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

        <header>
          <h1>FUND FREEDOM</h1>
          <h4>a tool to combat wealth-based jailing through real-time visualization and donation</h4>
        </header>

        <Navbar />

        {/*<nav>
          <div className="NavButton">
            <a href="/about/">About</a>
          </div>
          <div className="NavButton">
            <a href="/visualize/">Interactive Visualization</a>
          </div>
          <div className="NavButton">
            <a href="/datatable/">Real Time Dataset</a>
          </div>
          <div className="NavButton">
            <a href="/trends/">Highlighted Trends</a>
          </div>
          <div className="NavButton">
            <a href="/donate/">Donate</a>
          </div>
        </nav>*/}

        <br/>
        
        <section>

          <aside>Sliders and Filters
            <input type="range" min="0" max="100" />
            <input type="range" min="0" max="100" />
            <input type="range" min="0" max="100" />
            <input type="range" min="0" max="100" />
          </aside>

          <main>
            <DataTable inmates={this.state.queryResults} />
          </main>

        </section>

      </div>
    )
  }
}

export default App;
