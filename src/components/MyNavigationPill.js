import React from "react";
import { Link } from "react-router-dom";
import Toggle from "../darkmode/Toggle";
import Button from "./Button";
import { useSelector } from "react-redux";
import { useAuth } from "../contextApi/store";


const MyNavigationPill = () => {
  const {isLoggedIn} = useAuth();
  console.log("is user login =",isLoggedIn);
  // console.log("MyNavigationPill rendered");

  // const isLogin = useSelector((state) => state.isLogin);
  // const isAdmin = useSelector((state) => state.isAdmin);
  // console.log("ISlogin value ",isLogin);

  // const navigate = useNavigate();

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary-subtle">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Home
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li> */}
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blogs">
                  Blogs
                </Link>
              </li>
            </ul>
            {/* {isAdmin && (
              <>
              <div></div>
                <Button className="nav-item mx-1">
                  <Link className="nav-link" to="/dashboard">
                    Dasboard
                  </Link>
                </Button>
              </>
            )} */}

            {isLoggedIn ? (
              <>
              
                <Button className="nav-item">
                  <Link className="nav-link" to="/addpost">
                    Add Post
                  </Link>
                </Button>
                <Button className="nav-item mx-1">
                  <Link className="nav-link" to="/logout">
                  Logout
                  </Link>
                </Button>
              </>
            ): (
              <>
                <Button className="nav-item mx-1">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </Button>
                <Button className="nav-item mx-1">
                  <Link className="nav-link" to="/Signup">
                    SignUp
                  </Link>
                </Button>
              </>
            )}
              {/* <EditForm/> */}
              {/* <Button className="nav-item mx-1">
                  <Link className="nav-link" to="/edit-form">
                    EditForm
                  </Link>
                </Button> */}
            <Toggle />
          </div>
        </div>
      </nav>
    </>
  );
};

export default MyNavigationPill;
