import React, {useState} from 'react';
import { Navbar, Form, FormControl } from 'react-bootstrap';
import { Dropdown, DropdownItem, DropdownToggle, DropdownMenu } from 'reactstrap';
import styled from 'styled-components';
const Styles = styled.div`
  .navbar { background-color: #222; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 30%;
  }
  .dropdown-menu-right {
    right: 0;
    left: auto; 
  }
  .navbar-expand-lp {
    flex-flow: row nowrap;
    /* justify-content: flex-start; */
}
`;
export const NavigationBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);
  return (
    <Styles>
      <Navbar expand="lp">
        <Navbar.Brand href="/">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Form className="form-center">
          <FormControl type="text" placeholder="Search" className="" />
        </Form>
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle caret>
          Siyabonga Msindwana
        </DropdownToggle>
          <DropdownMenu className="dropdown-menu-right">
            <DropdownItem header>Header</DropdownItem>
            <DropdownItem disabled>Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Another Really Really Long Action (Really!)</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Navbar>
    </Styles>
  );
}