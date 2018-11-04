import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Input } from 'reactstrap';
import './Navigation.css';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <div>
        <header>
          <Navbar color="light" light fixed="top" expand="md">
            <NavbarBrand href="/">
              <strong>Streamz</strong>
            </NavbarBrand>

            <form className="search-nav">
              <Input
                className="form-control"
                style={{ width: '40vw' }}
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>

            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink className="nav-link" to="#">
                    Login
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="#">
                    Register
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </header>
      </div>
    );
  }
}

export default Navigation;
