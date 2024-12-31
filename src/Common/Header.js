import { Link } from "react-router-dom";

export default function Header() {
    return (
        <>
            <header id="header" className="header d-flex align-items-center sticky-top">
                <div className="container position-relative d-flex align-items-center justify-content-between">
                    <Link to='/' data-hover='home' className="logo d-flex align-items-center me-auto me-xl-0">
                        {/* <img src="assets/img/logo.png" alt=""> */}
                        <h1  className="container text-center my-5">RECIPES</h1>
                        {/* <span>.</span> */}
                    </Link>

                    <nav className="navmenu">
                        <ul>
                            <li><Link to='/' data-hover="Home">Home<br /></Link></li>
                            <li><Link to='/Menu' data-hover="Menu">Menu</Link></li>
                            <li><Link to='/SearchRecipes' data-hover="Menu">Search</Link></li>
                            <li><Link to='/About' data-hover="About">About</Link></li>
                            <li><Link to='/Contact' data-hover="Contact">Contact</Link></li>
                        </ul>
                        <form class="form-inline">
                            <button class="btn  my-2 my-sm-0 nav_search-btn " type="submit">
                                <i class="fa fa-search" aria-hidden="true"></i>
                            </button>
                        </form>
                        <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
                    </nav>
                </div>
            </header>
        </>
    );
}

