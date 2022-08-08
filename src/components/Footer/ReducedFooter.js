import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';
import PropagateLoader from "react-spinners/PropagateLoader";
import { DropdownButton, Dropdown, Nav, Navbar, Container  } from 'react-bootstrap';
import { logout } from '../../actions/userActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faFontAwesome, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faShareNodes, faGlobe } from '@fortawesome/free-solid-svg-icons';
import './footer.css';

const ReducedFooter = () => {

  const dispatch = useDispatch();

  const [loadingSpinner, setLoadingSpinner ] = useState(false);


    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const yearList = useSelector((state) => state.yearList);
    const { loading, error, years } = yearList;

    const logoutHandler = () => {
      dispatch(logout());
    }

    useEffect(() => {
      setLoadingSpinner(true);
      setTimeout(() => {
        setLoadingSpinner(false);
      }, 1500);
    }, [])

    const override = {
        display: "block",
        top: "50vh",
        left: "50%",
        margin: 0,
    };

  return (
    <>
    { window.location.href === '/' ?

    <Navbar id="footerID"  fixed="bottom" className="justify-content-center flex-grow-1">
    <Nav.Item>
    <Nav.Link
    className="footerLink"
    href="/about"
    >About</Nav.Link>
    </Nav.Item>
    <Nav.Item>
    <Nav.Link
    className="footerLink"
    href="/help">F&Qs</Nav.Link>
    </Nav.Item>
    <Nav.Item>
    <Nav.Link
    href="https://www.youtube.com/channel/UCQU-OotA4BtSw_FG02gZymw"
    target="_blank"
    className="footerLink"
    >  <FontAwesomeIcon icon={faYoutube} /> </Nav.Link>
    </Nav.Item>
    <Nav.Item>
    <Nav.Link
    className="footerLink"
        href="https://www.instagram.com/nowasteddays/"
        target="_blank"
        >  <FontAwesomeIcon icon={faInstagram} /> </Nav.Link>
    </Nav.Item>
    <Nav.Item>
    <Nav.Link
        href="https://www.nowasteddays.org/"
        target="_blank"
            className="footerLink"
        >  <FontAwesomeIcon icon={faGlobe} /> </Nav.Link>
    </Nav.Item>

    </Navbar>


    :

    <Navbar id="footerID"  fixed="bottom" className="justify-content-center flex-grow-1">
    <Nav.Item>
    <Nav.Link
    className="footerLink"
    href="/about"
    >About</Nav.Link>
    </Nav.Item>
    <Nav.Item>
    <Nav.Link
    className="footerLink"
    href="/help">F&Qs</Nav.Link>
    </Nav.Item>
    <Nav.Item>
    <Nav.Link
    href="https://www.youtube.com/channel/UCQU-OotA4BtSw_FG02gZymw"
    target="_blank"
    className="footerLink"
    >  <FontAwesomeIcon icon={faYoutube} /> </Nav.Link>
    </Nav.Item>
    <Nav.Item>
    <Nav.Link
    className="footerLink"
        href="https://www.instagram.com/nowasteddays/"
        target="_blank"
        >  <FontAwesomeIcon icon={faInstagram} /> </Nav.Link>
    </Nav.Item>
    <Nav.Item>
    <Nav.Link
        href="https://www.nowasteddays.org/"
        target="_blank"
            className="footerLink"
        >  <FontAwesomeIcon icon={faGlobe} /> </Nav.Link>
    </Nav.Item>

    </Navbar>







  }
</>





  )
}

export default ReducedFooter;
