import React, { Component } from 'react'
import { Nav, NavItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

class Navbar extends Component {

  handleSelect(eventKey) {
    event.preventDefault()
    alert(`selected ${eventKey}`)
  }

  render() {
    return (
      <Nav bsStyle="tabs">
        <LinkContainer to="/about">
          <NavItem>About</NavItem>
        </LinkContainer>
        <LinkContainer to="/visualize">
          <NavItem>Interactive Visualization</NavItem>
        </LinkContainer>
        <LinkContainer to="/datatable">
          <NavItem>Real Time Dataset</NavItem>
        </LinkContainer>
        <LinkContainer to="/trends">
          <NavItem>Highlighted Trends</NavItem>
        </LinkContainer>
        <LinkContainer to="/donate">
          <NavItem>Donate</NavItem>
        </LinkContainer>
      </Nav>
    )
  }

}

export default Navbar
