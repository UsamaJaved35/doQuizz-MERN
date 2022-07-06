import React, { useState } from 'react'
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom'
const Navbar = () => {
    const [value, setValue] = useState();
    const handleChange = (event) => {
        setValue(event.target.value);
    };
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" style={{ borderBottom: '4px solid red' }}>
                <div className="container px-5">
                    <Link className="navbar-brand" to="/">doQuizz</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
                            {/* <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" id="navbarDropdownBlog"  role="button" data-bs-toggle="dropdown" aria-expanded="false">Blog</a>
                                <select className="dropdown-menu dropdown-menu-end"  aria-labelledby="navbarDropdownBlog">
                                    <li><option className="dropdown-item" to="">Blog Home</option></li>
                                    <li><option className="dropdown-item" to="">Blog Post</option></li>
                                </select>
                            </li> */}
                            <Dropdown>
                                <Dropdown.Toggle>Login</Dropdown.Toggle>
                                <Dropdown.Menu>
                                   <Dropdown.Item as={Link} to="/loginteacher">AS A TEACHER</Dropdown.Item>
                                    <Dropdown.Item as={Link} to="/loginstudent">AS A STUDENT</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown>
                                <Dropdown.Toggle>Sign Up</Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item as={Link} to="/signupteacher">AS A TEACHER</Dropdown.Item>
                                    <Dropdown.Item as={Link} to="/signupstudent">AS A STUDENT</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Navbar