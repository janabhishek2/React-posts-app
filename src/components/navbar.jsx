import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Navbar extends Component {
    state = {  }
    render() { 
        return ( 
            <nav className="navbar navbar-expand-sm navbar-dark text-white bg-primary mb-3">
                <Link to ="/" className="navbar-brand text-white">Posts</Link>
                <ul className="navbar-nav mr-auto">
                <li className="nav-item text-white"><Link className="nav-link " to ="/addPost">Add Post</Link></li>
                </ul>
               
            </nav>
         );
    }
}
 
export default Navbar;