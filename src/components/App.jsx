import React, { Component } from 'react'

import './App.css'
// import DataTable from './DataTable'
import Navbar from './Navbar'

class App extends Component {

  render() {
    return (
      <div className="App">

        <header>
          <h1>FUND FREEDOM</h1>
          <h4>a tool to combat wealth-based jailing through real-time visualization and donation</h4>
        </header>

        <Navbar />

        <br/>
        
        <main>
          {this.props.children}
        </main>

      </div>
    )
  }
}

export default App;
