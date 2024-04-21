import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Collapse, Container, Nav, NavItem, Navbar, NavbarToggler } from "reactstrap";
const Navigation = (args: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <Navbar {...args}>
        <Nav className="navbar navbar-expand-lg navbar-dark fixed-top" navbar>
          <Container>
            <NavLink to="/" className="navbar-brand">
              News Aggregator
            </NavLink>
            <NavbarToggler onClick={toggle} />
            <Collapse id="navbarSupportedContent" isOpen={isOpen} navbar>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <NavItem>
                  <NavLink className="nav-link" to="/news">
                    <i className="fa fa-search me-2" aria-hidden="true"></i>
                    <span>Search News</span>
                  </NavLink>
                </NavItem>
              </ul>
            </Collapse>
          </Container>
        </Nav>
      </Navbar>
    </>
  );
};
export default Navigation;
