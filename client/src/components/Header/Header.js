import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from 'react-router-dom';
import { listYears } from '../../actions/yearActions';
import { listWeeks } from '../../actions/weekActions';
import { listDays } from '../../actions/dayActions';
import Loading from '../../components/Loading/Loading';
import PageLoading from '../../components/Loading/PageLoading';
import PropagateLoader from "react-spinners/PropagateLoader";
import { DropdownButton, Dropdown, Nav, Navbar, Container  } from 'react-bootstrap';
import logo from '../../NWD_Logo_White.png';
import { logout } from '../../actions/userActions';
import * as d3 from 'd3';
import './header.css';

const Header = ({ history }) => {
  const [homepage, setHomepage] = useState(window.location.href === '/' ? true : false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let { id } = useParams();
  const [loadingSpinner, setLoadingSpinner ] = useState(false);

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const yearList = useSelector((state) => state.yearList);
    const { years } = yearList;

    const weekList = useSelector((state) => state.weekList);
    const { weeks } = weekList;

    const dayList = useSelector((state) => state.dayList);
    const { loading, error,  days } = dayList;

    useEffect(() => {
  dispatch(listYears());
    }, [dispatch, userInfo, history])

    useEffect(() => {
      dispatch(listWeeks());
    }, [dispatch, userInfo, history]);

    useEffect(() => {
      dispatch(listDays());
    }, [dispatch, userInfo, history]);

    const logoutHandler = () => {
      dispatch(logout());
      navigate('/');
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

        const [pageLoading, setPageLoading] = useState(true);

        const loadingTimeout = () => {
          setTimeout(()=> {
            setPageLoading(false)
          }, 3000)
        }

        useEffect(()=> {
          loadingTimeout();
        })

        const daysLoggedArray = [];
          days && days.map(each => daysLoggedArray.push(each.startScore));

        const daysLogged = d3.count(daysLoggedArray, d => d);

        const yearsArray = [];

        years && years.map(each => yearsArray.push(each.yourName));

        const yearsLogged = d3.count(yearsArray, d => d);

  return (
<>
 <Navbar className="navbarHeader navbar-dark align-items-center" expand="md">
{
  !days && !years && !weeks
  ?

  <Navbar.Brand>
  <Nav.Link href="/">
  <Loading />
  </Nav.Link>
  </Navbar.Brand>
   :

  <Navbar.Brand>
    <Nav.Link href="/">
    <img
      src={logo}
      width="30"
      height="30"
      className="d-inline-block align-top"
      alt="NWD Logo"
    />
    </Nav.Link>
    </Navbar.Brand>

}

{!days ? null : days
      .filter((day, i, days) => days.indexOf(day) === days.length -1 )
      .map((day) => (
<span className="lastDayNudge d-none d-sm-block" key={day._id}>Last Day Logged: <br /> <strong>{day.logDate.toLocaleString().substring(0,10)}</strong></span>
            ))}

    <Navbar.Toggle id="toggle" aria-controls="basic-navbar-nav" variant="light" />
       <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
       <Nav className="justify-content-flex-end">

{ userInfo ?
  <Nav.Item className="navSection">
    <Nav.Link href="/feedback">Feedback</Nav.Link>
  </Nav.Item> : null
}


    { userInfo
    ?
    <Nav.Item className="navSection">
        <Dropdown className='navSection headerDropdown'>
          <Dropdown.Toggle
            id="yearDropdownToggle"
            className="dropdownToggle">
            Year
          </Dropdown.Toggle>
        <Dropdown.Menu
          id="yearDropdownMenu"
          className="dropdownMenu">

{ years && years.yourName === null ?
null :
<Dropdown.Item
  id="createSelector"
  className="listItem"
  href={`/year/create`}>
Create A New Year
          <hr className="dividingLine" />
  </Dropdown.Item>
}

      {years && years.map((year) =>
    <Dropdown.Item
      key={year._id}
      id="viewSelector"
      className="listItem"
      href={`/year/${year._id}`}>
      View & Update
      </Dropdown.Item>
    )}
    </Dropdown.Menu>
    </Dropdown>
      </Nav.Item>
: null }

    { userInfo
    ? <Nav.Item className="navSection">

      <Dropdown
        className='navSection headerDropdown'>
        <Dropdown.Toggle
        id="weekDropdownToggle"
        className="dropDownToggle">
        Week
        </Dropdown.Toggle>
        <Dropdown.Menu
        id="weekDropdownMenu"
        className="dropdowMenu">

        <Dropdown.Item
          id="createSelector"
          className="listItem"
          href="/week/create">
        Create a New Week
        <hr className="dividingLine" />
        </Dropdown.Item>

        {weeks && weeks
              .filter((week, i, weeks) => weeks.indexOf(week) === weeks.length -1 )
              .map((week) => (
            <Dropdown.Item
              key={week._id}
              id="viewSelector"
              className="listItem"
              href={`/week/${week._id}`}>
              View & Update
              </Dropdown.Item>
                    ))}
    </Dropdown.Menu>
    </Dropdown>
    </Nav.Item>
    : null
    }

    { userInfo
      ? <Nav.Item className="navSection">
          <Dropdown
          className='navSection headerDropdown'>

            <Dropdown.Toggle
              id="yearDropdownToggle"
              className="dropdownToggle">
              Today
            </Dropdown.Toggle>
            { !days ? null :
            <Dropdown.Menu
            id="weekDropdownMenu"
            className="dropdowMenu">

            <Dropdown.Item
              id="createSelector"
              className="dropdownItem"
              href="/today">
            Create your Day
            <hr className="dividingLine" />
            </Dropdown.Item>


            {days && days
                  .filter((day, i, days) => days.indexOf(day) === days.length -1 )
                  .map((day) => (
                <Dropdown.Item
                  key={day._id}
                  id="viewSelector"
                  className="dropdownItem"
                  href={`/today/${day._id}`}>
                  Update Day
                  </Dropdown.Item>
                        ))}

        </Dropdown.Menu>
        }
            </Dropdown>
 </Nav.Item>


      : <><Nav.Item className="navSection">
           <Nav.Link
           className="navItem"
           href="/login"
           >Login</Nav.Link>
           </Nav.Item>
           <Nav.Item className="navSection">
                <Nav.Link
                className="navItem"
                href="/register"
                >Register</Nav.Link>
                </Nav.Item></>
         }

         { userInfo
         ? <Nav.Item className="navSection">
             <Dropdown
             className='navSection headerDropdown'>

               <Dropdown.Toggle
                 id="yearDropdownToggle"
                 className="dropdownToggle">
                 Insight
               </Dropdown.Toggle>
               <Dropdown.Menu
               id="weekDropdownMenu"
               className="dropdowMenu">

{ daysLogged > 9 ? <Dropdown.Item
       id="insightSelector"
       className="dropdownItem inactive"
       href="/insight">
     View Insights

     </Dropdown.Item> : <Dropdown.Item
            id="insightSelector"
            className="dropdownItem inactive"
          >
          <s>View Insights</s>

          </Dropdown.Item>}

               <hr className="dividingLine" />

                   <Dropdown.Item
                     id="viewSelector"
                     className="dropdownItem"
                     href="/insight/quiz">
                    The Art of Looking
                     </Dropdown.Item>


           </Dropdown.Menu>
               </Dropdown>
    </Nav.Item>
         : null
         }

         { userInfo
         ? <Nav.Item className="navSection">
             <Dropdown
             className='navSection headerDropdown'>

               <Dropdown.Toggle
                 id="yearDropdownToggle"
                 className="dropdownToggle"
                 href="/diary">
                 Diary
               </Dropdown.Toggle>
               </Dropdown>
    </Nav.Item>
         : null
         }

         { userInfo
         ? <Nav.Item className="navSection">
          <Dropdown className="userDropdown">
            <Dropdown.Toggle
            id="userDropdownToggle"
            className="dropdownToggle"
            >
            {userInfo?.name}</Dropdown.Toggle>
            <Dropdown.Menu id="userDropdownMenu">
              <Dropdown.Item id="profileSelector" className="profileTabSelector" href="/profile">My Profile</Dropdown.Item>
                <hr className="dividingLine" />
              <Dropdown.Item id="logoutSelector" className="profileTabSelector"onClick={logoutHandler}href="/">Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
     </Nav.Item>

     : null }
</Nav>
</Navbar.Collapse>
  </Navbar>

</>
  )
}

export default Header;
