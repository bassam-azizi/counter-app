import React, { Component } from "react";

// ****stateless functional component**** :
const NavBar = props => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
        <span className="badge badge-pill badge-secondary m-2">
          {props.totalItems}
        </span>
      </a>
    </nav>
  );
};

//  **** The Other type of Components: ~Class Component~ ****

// class NavBar extends Component {
//   render() {
//     return (
//       <nav className="navbar navbar-light bg-light">
//         <a className="navbar-brand" href="#">
//           Navbar
//           <span className="badge badge-pill badge-secondary m-2">
//             {this.props.totalItems}
//           </span>
//         </a>
//       </nav>
//     );
//   }
// }

export default NavBar;
