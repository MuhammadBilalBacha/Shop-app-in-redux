import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";

const Navbar = () => {
  const myState = useSelector((state) => state);
  // console.log(myState);

  return (
    <div>
      <nav className="fixed-top ">
        <div className="container d-flex flex-row justify-content-between  py-3">
          <p className="navbar-brand h1">React Redux Store</p>
          <Link to="/" className="text-decoration-none navlink">
            Home{" "}
          </Link>
          {/* <Link to="/cart" className="text-decoration-none navlink ">
            Cart
          </Link> */}
          <Link to="/cart">
            <button>
              <FaShoppingCart /> <span className="ms-1">{myState.length} </span>{" "}
            </button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
