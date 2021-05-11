import React, { useContext, useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { UserContext } from '../App';
import DehazeIcon from '@material-ui/icons/Dehaze';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';
import './css/Header';
export default function Header({ user }) {
    const setUser = useContext(UserContext)
    const [search, setSearch] = useState("");
    const [bgNavbar, setBgNavbar] = useState("");
    const [navColor,setNavColor]=useState("text-dark")
    const [navbarForm, setNavbarForm] = useState("d-none");
    const [stays,setStays]=useState("d-md-flex d-none")
    handleScroll = () => {
        if (window.scrollY > 40) {
            setBgNavbar("navbarbg")
            setNavbarForm("d-md-flex d-none")
          
            setStays("d-md-none d-none")
        } else {
            setBgNavbar("")
            setNavbarForm("d-md-none d-none")
           
            setStays("d-md-flex d-none")
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", this.handleScroll);
    }, [bgNavbar])
    const onHandleSubmit = (e) => {
        e.preventDefault();
        setSearch("")
    }
    const logoutClick = () => {
        setUser({ userLogin: false, userId: '' });
        localStorage.removeItem("user");
        localStorage.setItem("user", JSON.stringify({ userLogin: false, _id: "" }));
    }


    const authCheck = () => {
        if (user.userLogin === false) {
            return false
        }
        else {
            return true
        }
    }
    return (
        <div className="container-fluid " >

            <nav className={bgNavbar + " navbar fixed-top py-3 navbar-expand-lg row"} >
                <div className="col-11 m-auto " >
                    <div className="navbar-row">

                        <Link className={navColor+ " navbar-brand font-weight-bold"} to="/"><img className="logoImg" src="https://i.pinimg.com/originals/5b/79/a5/5b79a5dfc44312c61e10d0044ffb4323.png" />Airbnb</Link>

                        <form className={navbarForm + " form-inline headerForm col-lg-4 my-lg-0 "} onSubmit={onHandleSubmit}>
                            <input className=" headerInput mr-sm-2" type="search" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Where are you going?" aria-label="Search" required />
                            {
                                search === "" ? <button className="btn btn-circle my-0  d-flex " type="submit"><SearchIcon/></button> : <Link to={"/search/" + search}>
                                    <button className="btn d-flex btn-circle  my-0" type="submit"><SearchIcon/></button>
                                </Link>
                            }
                        </form>
                     <ul className={stays+ " staystypes"}>
                     <li className="nav-item " style={{borderBottom: "2px solid black"}}>
                       <Link className={navColor+ " nav-link font-weight-bold"}  to="/host">Places to stays</Link>
                      </li>
                      <li className="nav-item ">
                       <Link className={navColor+ " nav-link font-weight-bold"} to="/host">Experiences</Link>
                      </li>
                      <li className="nav-item ">
                       <Link className={navColor+ " nav-link font-weight-bold"} to="/host">Online Experiences</Link>
                      </li>
                     </ul>

                        <div className="navItemRow d-flex" id="navbarSupportedContent">
                            <ul className="navbar-nav navItemRow ml-auto">
                                <li className="nav-item mx-2 d-md-block d-none">
                                    <Link className={navColor+" nav-link font-weight-bold becomeAHost"} to="/host">Become a host </Link>
                                </li>
                                <li className="nav-item mx-2 ">
                                    <div className="dropdown">
                                        <button className="btn btn-light dropDownButton" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <DehazeIcon />
                                            <AccountCircleIcon />

                                        </button>
                                        <ul className="dropdown-menu">

                                            <li className="nav-item mx-2 dropdown-item" aria-labelledby="dropdownMenuButton">
                                                {authCheck() ?
                                                    <Link className="nav-link  " to="/Auth" onClick={logoutClick}>LogOut</Link> : <Link className="nav-link  " to="/Auth">Login</Link>
                                                }
                                            </li>
                                            <li className="nav-item mx-2 d-md-none d-block dropdown-item">
                                                <Link className="nav-link text-dark" to="/host">Become a host </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>

                            </ul>

                        </div>
                    </div>





                </div>
            </nav>
        </div>
    )
}
