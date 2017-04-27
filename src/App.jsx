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
                .on('success', inmates => (
                  <table>

                    <thead>
                      <tr>
                        <th>Download Date</th>
                        <th>Identifier</th>
                        <th>Gender</th>
                        <th>Race</th>
                        <th>Age</th>
                        <th>Bail Amount</th>
                        <th>Offense</th>
                        <th>Latest Admission Date</th>
                        <th>Facility</th>
                        <th>Detainer</th>
                      </tr>
                    </thead>

                    <tbody>
                    {
                      inmates.map(inmate => (
                        <tr>
                          <td>{inmate.download_date}</td>
                          <td>{inmate.identifier}</td>
                          <td>{inmate.gender}</td>
                          <td>{inmate.race}</td>
                          <td>{inmate.age}</td>
                          <td>{inmate.bond_amount}</td>
                          <td>{inmate.offense}</td>
                          <td>{inmate.latest_admission_date}</td>
                          <td>{inmate.facility}</td>
                          <td>{inmate.detainer}</td>
                        </tr>
                      ))
                    }
                    </tbody>

                  </table>
                ))
                .on('error', (error) => console.error(error))
          }
        </div>

      </div>
    )
  }
}

export default App;
