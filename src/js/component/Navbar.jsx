import React from "react";

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Start Bootstrap</a>
                    <div className="d-flex justify-content-end">
                        <a className="navbar-brand" href="#">Home</a>
                        <a className="navbar-brand" href="#">About</a>
                        <a className="navbar-brand" href="#">Services</a>
                        <a className="navbar-brand" href="#">Contact</a>
                    </div>
                </div>
            </nav>
        </div>

    );
};

export default Navbar;