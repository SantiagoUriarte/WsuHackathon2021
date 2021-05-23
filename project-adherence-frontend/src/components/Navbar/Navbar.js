import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

import './navbar.css';
import logo from '../../Pill.png';

const Navbar = props => {
    return (
        <>
            <nav id="navbar" class="navbar" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                    <a class="navbar-item">
                        <Link to="/physician/menu">
                        <i class="fas fa-home"></i>
                        </Link>
                    </a>

                    <a class="navbar-item">
                        <i class="fas fa-exclamation-circle"></i>
                    </a>

                    <a class="navbar-item">
                        <i class="fas fa-comment-dots"></i>
                    </a>

                    <a className="navbar-item">
                        <Link to="/">
                            <i class="fas fa-sign-out-alt"></i>
                        </Link>
                    </a>
                </div>
            </nav>
        </>
    )
}

export default Navbar;