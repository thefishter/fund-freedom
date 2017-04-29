import React, { Component } from 'react'
import { Nav, NavItem } from 'react-bootstrap'

class Navbar extends Component {

  handleSelect(eventKey) {
    event.preventDefault()
    alert(`selected ${eventKey}`)
  }

  render() {
    return (
      <Nav bsStyle="pills" activeKey={1} onSelect={this.handleSelect}>
        <NavItem eventKey={1} href="/about/">About</NavItem>
        <NavItem eventKey={2} href="/visualize/">Interactive Visualization</NavItem>
        <NavItem eventKey={3} href="/datatable/">Real Time Dataset</NavItem>
        <NavItem eventKey={4} href="/trends/">Highlighted Trends</NavItem>
        <NavItem eventKey={5} href="/donate/">Donate</NavItem>
      </Nav>
    )
  }

}

export default Navbar
