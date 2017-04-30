import React, { Component } from 'react'
import { Consumer } from 'soda-js'

let consumer = new Consumer('data.ct.gov')

class DataLayout extends Component {

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
      <div className="DataLayout">

        <aside>Sliders and Filters
          <input type="range" min="0" max="100" />
          <input type="range" min="0" max="100" />
          <input type="range" min="0" max="100" />
          <input type="range" min="0" max="100" />
        </aside>

        <main>
          {
            this.props.children && React.cloneElement(this.props.children, { inmates: this.state.queryResults })
          }
          {/*<DataTable inmates={this.state.queryResults} />*/}
        </main>

      </div>
    )
  }
}

export default DataLayout
