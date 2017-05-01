import React, { Component } from 'react'
import { Consumer } from 'soda-js'
import RangeSlider from './RangeSlider';

let consumer = new Consumer('data.ct.gov')

class DataLayout extends Component {

  constructor(props) {
    super(props)
    this.state = {
      queryResults: []
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentWillMount() {
    consumer.query()
      .withDataset('bvbe-957i')
      .limit(15)
      .order('download_date desc')
      .getRows()
        .on('success', inmates =>
          this.setState({ queryResults: inmates }))
        .on('error', error => console.error(error))
  }

  handleSubmit(event) {

  }

  render() {
    return (
      <div className="DataLayout">

        <aside>Filters
          <br/>
          <form onSubmit={this.handleSubmit}>
            <div className="bailSlider">
              <p>Bail Amount
              <RangeSlider
                min={0}
                max={10000000}
                minRange={100}
                onChange={(state) => {
                  console.log('react-dual-rangeslider max: ', state.max)
                  console.log('react-dual-rangeslider min: ', state.min)
                }}
                step={1000}
              /></p>
            </div>
            <div className="ageSlider">
              <p>Age Range
              <RangeSlider
                min={15}
                max={90}
                minRange={1}
                onChange={(state) => {
                  console.log('react-dual-rangeslider max: ', state.max)
                  console.log('react-dual-rangeslider min: ', state.min)
                }}
                step={1}
              /></p>
            </div>
            <div className="recencySlider">
              <p>Date of Information
              <RangeSlider
                min={0}
                max={100}
                minRange={10}
                onChange={(state) => {
                  console.log('react-dual-rangeslider max: ', state.max)
                  console.log('react-dual-rangeslider min: ', state.min)
                }}
                step={1}
              /></p>
            </div>
            <div className="genderSelect">
              <p>Gender<br/>
              <input type="checkbox" name="gender" value="m" />male<br/>
              <input type="checkbox" name="gender" value="f" />female
              </p>
            </div>
            <div className="raceSelect">
              <p>Race<br/>
              <input type="checkbox" name="race" value="black" />Black<br/>
              <input type="checkbox" name="race" value="hispanic" />Hispanic<br/>
              <input type="checkbox" name="race" value="white" />White
              </p>
            </div>
            <div className="crimeSelect">
              <p>Crime Severity<br/>
              <input type="checkbox" name="crimeSeverity" value="felony" />felony<br/>
              <input type="checkbox" name="crimeSeverity" value="misdemeanor" />misdemeanor<br/>
              <input type="checkbox" name="crimeClass" value="classA" />A<br/>
              <input type="checkbox" name="crimeClass" value="classB" />B<br/>
              <input type="checkbox" name="crimeClass" value="classC" />C<br/>
              <input type="checkbox" name="crimeClass" value="classD" />D<br/>
              </p>
            </div>
          </form>
        </aside>

        <div className="DataRender">
          {
            this.props.children && React.cloneElement(this.props.children, { inmates: this.state.queryResults })
          }
        </div>

      </div>
    )
  }
}

export default DataLayout
