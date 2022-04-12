import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Navbar=()=>{
  let activeStyle = {
    textDecoration:"none",
    color:'green',
 
  };

  let unActiveStyle={
    textDecoration:'none',
    color:'black'
  }

  let activeClassName = "underline";
    return(<> 
    
    <nav className="navbar navbar-expand-lg navbar-light bg-light border fixed-top  "> 
  <div className="container-fluid">
  <Link className="text-dark text-decoration-none  " to={'/'} > LIBRARY </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse  " id="navbarSupportedContent">

      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        
        <li className="nav-item  p-2">
              <NavLink to="/admin" style={({ isActive }) =>isActive ? activeStyle : unActiveStyle }
          >
            ADMIN
          </NavLink>
        </li>
     
        <li className="nav-item  p-2  text-decoration-none">
              <NavLink  to="/librarian" style={({ isActive }) =>isActive ? activeStyle : unActiveStyle }
          >
            LIBRARIAN
          </NavLink>
        </li>
        <li className="nav-item  p-2">
        <NavLink to="/student" style={({ isActive }) =>isActive ? activeStyle : unActiveStyle}
          >
            STUDENT
          </NavLink>
        </li>
    
        
      </ul>
      
    </div>
  </div>
</nav>  
<div className="mt-5 p-1 " ></div>
    
    </>)
}


export default Navbar;