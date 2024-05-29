import React, { useEffect, useState } from "react";
import { Container, Dropdown, Nav } from "react-bootstrap";
import NavLogo from "../assets/img/svg/logo.svg";
import { DownArrow, SearchIcon } from "../assets/Svgicon";
import Commonbtn from "../comonbtn/Comonbtn";

const NavBar = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1200) {
        document.body.style.overflow = show ? "visible" : "hidden";
      } else {
        document.body.style.overflow = "";
      }
    };

    // Initial check
    handleResize();

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      document.body.style.overflow = "";
    };
  }, [show]);

  const handleClick = (e) => {
    if (window.innerWidth < 1200) {
      setShow(!show);
    } else {
      e.preventDefault();
    }
  };

  return (
    <div>
      <Nav className="Navpadding-15-40 Nav-bg">
        <Container fluid>
          <div className=" d-flex align-items-center justify-content-between">
            <div className=" d-flex align-items-center gap-55">
              <img src={NavLogo} alt="Navbar-logo" className="pointer" />
              <ul
                className={`d-flex align-items-center ps-0 mb-0 gap-28 mobile-view
                 ${show ? "" : " start-0"}`}
              >
                <li>
                  <a
                    onClick={handleClick}
                    className=" fw-normal fs-16 lh-24 ff-dm-sans clr-white opacity_08 navItems"
                    href="#AboutUs"
                  >
                    About Us
                  </a>
                </li>
                <li className="dropdown">
                  <a
                    className=" fw-normal fs-16 lh-24 ff-dm-sans clr-white opacity_08 navItems pointer"
                    href="#Categories"
                  >
                    Categories <DownArrow />
                  </a>
                  <div class="dropdown-content">
                    <a
                      onClick={handleClick}
                      className="fw-normal fs-16 lh-24 ff-dm-sans clr-white opacity_08 navItems pointer"
                      href="#"
                    >
                      Link 1
                    </a>
                    <a
                      onClick={handleClick}
                      className="fw-normal fs-16 lh-24 ff-dm-sans clr-white opacity_08 navItems pointer"
                      href="#"
                    >
                      Link 2
                    </a>
                    <a
                      onClick={handleClick}
                      className="fw-normal fs-16 lh-24 ff-dm-sans clr-white opacity_08 navItems pointer"
                      href="#"
                    >
                      Link 3
                    </a>
                  </div>
                </li>
                <li>
                  <a
                    onClick={handleClick}
                    className=" fw-normal fs-16 lh-24 ff-dm-sans clr-white opacity_08 navItems"
                    href="#Services"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    onClick={handleClick}
                    className=" fw-normal fs-16 lh-24 ff-dm-sans clr-white opacity_08 navItems"
                    href="#Testimonials"
                  >
                    Testimonials
                  </a>
                </li>
                <li>
                  <a
                    onClick={handleClick}
                    className=" fw-normal fs-16 lh-24 ff-dm-sans clr-white opacity_08 navItems"
                    href="#Blogs"
                  >
                    Blogs
                  </a>
                </li>
                <li className="d-md-none d-flex flex-sm-row flex-column justify-content-center align-items-center gap-3">
                  <div className=" d-flex align-items-center gap-12 searchBox">
                    <SearchIcon />
                    <input
                      type="search"
                      placeholder="Search"
                      className=" ff-dm-sans fw-normal fs-16 lh-22 clr-gray searchBox"
                    />
                  </div>
                  <button className="fw-900 fs-16 lh-24 clr-white ff-chivo getBtn">
                    Get In Touch
                  </button>
                </li>
              </ul>
            </div>
            <div className="d-none d-md-flex align-items-center gap-3 ">
              <div className=" d-flex align-items-center gap-12 searchBox">
                <SearchIcon />
                <input
                  type="search"
                  placeholder="Search"
                  className=" ff-dm-sans fw-normal fs-16 lh-22 clr-gray searchBox"
                />
              </div>
              <Commonbtn name="GET IN TOUCH" />
            </div>
            <div
              className={` menu d-xl-none ${show ? "" : "cross"}`}
              onClick={() => setShow(!show)}
            >
              <span></span>
              <span className=" my-2"></span>
              <span></span>
            </div>
          </div>
        </Container>
      </Nav>
    </div>
  );
};

export default NavBar;
