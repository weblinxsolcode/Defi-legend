import React from "react";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import { useHistory, Link } from "react-router-dom";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { FaDiscord } from "react-icons/fa";

export default function Header() {
  const history = useHistory();
  return (
    <>
      <Navbar bg="dark" className="px-3 fixed-top " id="top" variant="dark" expand="lg">
        <Navbar.Brand>
          <img
            src={process.env.PUBLIC_URL + "assets/images/logo.png"}
            alt=""
            className=" img-fluid"
            onClick={() => history.push("/")}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="col d-flex justify-content-between align-items-lg-center ">
            <div className="d-flex col justify-content-start flex-lg-row flex-column algn-items-lg-center align-items-start ">
              <Link
                to=""

                className="nav-link active"
              >
                <div> HOME </div>
              </Link>
              <Link to="/About" className="nav-link">
                <div> ABOUT </div>
              </Link>

              <Link to="/" className="nav-link">
                <div> MARKETPLACE </div>
              </Link>
              <Link to="" className="nav-link">
                <div>FOUNDERSPACK</div>
              </Link>
              <div>
                <NavDropdown className="nav-link p-0" title="REWARDS" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
          </div>
              {/* <Link to="" className="nav-link">
                <div>
                  REWARDS
                </div>
              </Link> */}
              {/* <Link to="" className="nav-link">
                <div className="d-flex ">
                  <span className="dis-bg mx-1 " >
                    <FaDiscord />

                  </span>
                  JOIN DISCORD
                </div>

              </Link> */}
              <Link to="" className="nav-link">
                <div>
                  WHITE PAPER
                </div>
              </Link>
            </div>
            <button className="Golden-btn mt-lg-0 mt-3 d-flex align-items-center">
              <p className="mb-0 mx-2">Connect Wallet</p>{" "}
              <MdOutlineAccountBalanceWallet />
            </button>
            <button className="Golden-btn mt-lg-0 mt-3 d-flex align-items-center">
             <a href=" https://whitepaper.definitylegend.com/" target='_blank'> <p className="mb-0 mx-2">WhiteList</p></a>
            </button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {/* <img
        src={process.env.PUBLIC_URL + "assets/images/bg.png"}
        class="bg-image"
        alt=""
      /> */}
    </>
  );
}
