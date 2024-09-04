import React from 'react';
import Link from 'next/link';
import {
  Navbar,
  Container,
  Nav,
  Button,
  Image,
} from 'react-bootstrap';
import { signOut } from '../utils/auth';

export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link passHref href="/">
          <Navbar.Brand>Bangazon</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link passHref href="/products">
              <Nav.Link>Shop</Nav.Link>
            </Link>
            <Link passHref href="/users">
              <Nav.Link>Profile</Nav.Link>
            </Link>
            <Link passHref href="/seller">
              <Nav.Link>Seller Page</Nav.Link>
            </Link>
          </Nav>
          <Nav>
            <Link passHref href="/orders">
              <Nav.Link>
                <Image src="https://cdn-icons-png.flaticon.com/128/1170/1170576.png" height="30" />
              </Nav.Link>
            </Link>
            <Button variant="danger" onClick={signOut}>
              Sign Out
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
