import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 992);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Function to close menu when a link is clicked
    const closeMenu = () => {
        if (isMobile) {
            setMenuOpen(false);
        }
    };

    return (
        <>
            <header id="header" className="header d-flex align-items-center sticky-top">
                <div className="container position-relative d-flex align-items-center justify-content-between">
                    {/* Logo */}
                    <Link to='/' data-hover='home' className="logo d-flex align-items-center me-auto me-xl-0">
                        <h1 className="container text-center my-5">RECIPES</h1>
                    </Link>

                    {/* Navigation Menu */}
                    <nav className={`navmenu ${menuOpen ? "open" : ""}`}>
                        <ul>
                            <li><Link to='/' data-hover="Home" onClick={closeMenu}>Home</Link></li>
                            <li><Link to='/Menu' data-hover="Menu" onClick={closeMenu}>Menu</Link></li>
                            <li><Link to='/SearchRecipes' data-hover="Search" onClick={closeMenu}>Search</Link></li>
                            <li><Link to='/About' data-hover="About" onClick={closeMenu}>About</Link></li>
                            <li><Link to='/Contact' data-hover="Contact" onClick={closeMenu}>Contact</Link></li>
                        </ul>
                    </nav>

                    {/* Mobile Menu Toggle Button */}
                    {isMobile && (
                        <button 
                            className="mobile-nav-toggle" 
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            {menuOpen ? "✖" : "☰"}
                        </button>
                    )}
                </div>
            </header>

            {/* CSS for menu behavior */}
            <style>
                {`
                    .navmenu {
                        display: flex;
                    }
                    .navmenu ul {
                        display: flex;
                        gap: 15px;
                        list-style: none;
                        padding: 0;
                        margin: 0;
                    }
                    .navmenu a {
                        text-decoration: none;
                        color: black;
                        font-size: 18px;
                        padding: 10px;
                    }

                    /* Mobile menu styles */
                    @media (max-width: 991px) {
                        .navmenu {
                            position: fixed;
                            top: 0;
                            left: -250px;
                            width: 250px;
                            height: 100%;
                            background: white;
                            flex-direction: column;
                            text-align: left;
                            padding: 20px;
                            box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
                            transition: left 0.3s ease-in-out;
                        }
                        .navmenu.open {
                            left: 0;
                        }
                        .navmenu ul {
                            flex-direction: column;
                            gap: 20px;
                            padding: 0;
                        }
                    }

                    .mobile-nav-toggle {
                        font-size: 24px;
                        background: none;
                        border: none;
                        cursor: pointer;
                        position: absolute;
                        top: 20px;
                        right: 20px;
                        z-index: 1001;
                    }
                `}
            </style>
        </>
    );
}
