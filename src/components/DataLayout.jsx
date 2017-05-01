import React, { Component } from 'react'
import { Consumer } from 'soda-js'
import ReactSlider from 'react-slider'

let consumer = new Consumer('data.ct.gov')

class DataLayout extends Component {

  constructor(props) {
    super(props)
    this.state = {
      queryResults: [],
      checked_gender: {
        M: true,
        F: true
      },
      checked_race: {
        BLACK: true,
        HISPANIC: true,
        WHITE: true
      }
    }
  }

  componentDidMount () {
    this.query()
  }

  query = () => {
    console.log('in query for ', this.state, this.where)
    consumer.query()
      .withDataset('bvbe-957i')
      .where(this.where)
      .limit(15)
      .order('download_date desc')
      .getRows()
        .on('success', inmates =>
          this.setState({ queryResults: inmates }))
        .on('error', error => console.error(error))
  }

  setRangeFilter (field) {
    return ([min, max]) =>
      this.setState(
        { [`filter_${field}`]: `${field} >= ${min} and ${field} <= ${max}` },
        this.query)
  }

  setBoolFilter (field) {
    return ({target: {checked, value}}) => this.setState(previous => {
      console.log('will update state for', field, checked, value)
      const stateKey = `checked_${field}`
          , oldState = previous[stateKey] || {}
          , state = {...oldState}
      if (checked)
        state[value] = true
      else
        delete state[value]
      return { [stateKey]: state }
    }, this.query)
  }

  get where () {
    let filtered = Object.keys(this.state).filter(key => key.startsWith('filter_'))
      .map(key => this.state[key])

    let checked = Object.keys(this.state).filter(key => key.startsWith('checked_'))
      .map(key => {
        let acceptable = this.state[key]
        let field = key.slice('checked_'.length)
        return Object.keys(acceptable).map(value => `${field} = "${value}"`)
          .join(' or ')
      })

    return [...filtered, ...checked].filter(x => x).join(' and ') || true
  }

  render() {
    return (
      <div className="DataLayout">

        <aside>Filters
          <br/>{/*{this.where}*/}
          <br/>
          <form onSubmit={this.handleSubmit}>
            <div className="bailSlider">
              <p>Bail Amount
              <ReactSlider
                className="range-slider"
                barClassName="range-slider-bar"
                handleClassName="range-slider-handle"
                min={0} max={500000}
                defaultValue={[0, 500000]} withBars
                onChange={this.setRangeFilter('bond_amount')}
                />
              <div className="numberRange">
                <p>$0</p>
                <p>$500,000</p>
              </div>
              </p>
            </div>
            <div className="ageSlider">
              <p>Age Range
              <ReactSlider
                className="range-slider"
                barClassName="range-slider-bar"
                handleClassName="range-slider-handle"
                min={15} max={90}
                defaultValue={[15, 90]} withBars
                onChange={this.setRangeFilter('age')}
              />
              <div className="numberRange">
                <p>15</p>
                <p>90</p>
              </div>
              </p>
            </div>
            <div className="recencySlider">
              <p>Date of Information
              <ReactSlider
                className="range-slider"
                barClassName="range-slider-bar"
                handleClassName="range-slider-handle"
                defaultValue={[0, 100]} withBars
                onChange={this.setRangeFilter('bond_amount')}
              />
              <div className="numberRange">
                <p>5/9/1996</p>
                <p>today</p>
              </div>
              </p>
            </div>
            <br/>
            <p>Gender<br/>
              <div className="genderSelect">
                <div>
                  <input type="checkbox" name="gender" value="M" 
                    checked={this.state.checked_gender.M} 
                    onChange={this.setBoolFilter("gender")}/> male<br/>
                </div>
                <div>
                  <input type="checkbox" name="gender" value="F" 
                    checked={this.state.checked_gender.F} 
                    onChange={this.setBoolFilter("gender")}/> female
                </div>
              </div>
            </p>
            <p>Race<br/>
              <div className="raceSelect">
                <div>
                  <input type="checkbox" name="race" value="BLACK" 
                    checked={this.state.checked_race.BLACK} 
                    onChange={this.setBoolFilter("race")} 
                  /> Black<br/>
                </div>
                <div>
                  <input type="checkbox" name="race" value="HISPANIC"
                    checked={this.state.checked_race.HISPANIC} 
                    onChange={this.setBoolFilter("race")} 
                   /> Hispanic<br/>
                </div>
                <div>
                  <input type="checkbox" name="race" value="WHITE" 
                    checked={this.state.checked_race.WHITE}
                    onChange={this.setBoolFilter("race")} 
                  /> White
                </div>
              </div>
            </p>
            <p>Crime Severity<br/>
              <div className="crimeSelect">
                <div className="crimeSeverity">
                  <input type="checkbox" name="crimeSeverity" value="felony" /> felony<br/>
                  <input type="checkbox" name="crimeSeverity" value="misdemeanor" /> misdemeanor<br/>
                </div>
                <div className="crimeClass">
                  <input type="checkbox" name="crimeClass" value="classA" /> A<br/>
                  <input type="checkbox" name="crimeClass" value="classB" /> B<br/>
                  <input type="checkbox" name="crimeClass" value="classC" /> C<br/>
                  <input type="checkbox" name="crimeClass" value="classD" /> D<br/>
                </div>
              </div>
            </p>
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
