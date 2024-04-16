import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container,
} from "reactstrap";
const Navigation = (args: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <Navbar {...args}>
        <Nav className="navbar navbar-expand-lg navbar-dark fixed-top" navbar>
          <Container>
            <NavbarBrand href="/">News Hub</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse id="navbarSupportedContent" isOpen={isOpen} navbar>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <NavItem>
                  <NavLink className="nav-link" aria-current="page" to="/feeds">
                    Personalized Feed
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/news">
                    Search News
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
