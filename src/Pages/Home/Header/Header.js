import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import {FaUserCircle } from 'react-icons/fa';
import { useAuth0 } from "@auth0/auth0-react";

//navbar

const Header = () => {

  //authentication implemented through auth0
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (

    <section>

    <Navbar className="bg-light">
      <Container>
        <Navbar.Brand className="fs-2 fw-bold" href="/" style={{color:"#9b1fe9"}}>Faucets</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <div className="me-3">
            <button className="btn" style={{border:"1px solid grey", borderRadius:"3px"}}>
              <NavDropdown title="Ethereum Kovan" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Ethereum Kovan
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Arbitrum Rinkeby
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Avalanche Fuji
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  BNB Chain Testnet
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Ethereum Rinkeby
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Fantom Testnet
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Harmony Testnet
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  POA Network Sokol
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Polygon Mumbai
                </NavDropdown.Item>
              </NavDropdown>
            </button>
          </div>
<button className="btn fw-bold" style={{border:"2px solid #9b1fe9 ", color:"#9b1fe9", borderRadius:"3px"}}>Connect Wallet</button>
        </Navbar.Collapse>
{
  isAuthenticated ? <button className="btn ms-1" onClick={() => logout({ returnTo: window.location.origin })}>
  Log Out
</button> :  <FaUserCircle onClick={() => loginWithRedirect()} className="ms-2"  style={{fontSize:"40px", color:"grey"}}></FaUserCircle>
}
        
            

            
        
      </Container>
    </Navbar>
    
    </section>
  );
};

export default Header;
