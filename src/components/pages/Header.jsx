import { Link } from "react-router-dom";

function Header() {
  const links = (
    <>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/recipes">Recipes</Link></li>
      <li><Link to="/about">About</Link></li>
    </>
  );

  return (
    <div className="w-full bg-base-100 shadow-md">
      <div className="navbar max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        {/* Left: Brand + Mobile Dropdown */}
        <div className="navbar-start">
          {/* Mobile Dropdown */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden p-1 sm:p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 sm:h-6 sm:w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-44 sm:w-52 z-50">
              {links}
            </ul>
          </div>

          {/* Brand */}
          <Link to="/" className="text-base sm:text-lg md:text-xl lg:text-2xl text-purple-400 font-semibold ml-1 sm:ml-2">
            Recipe Hub
          </Link>
        </div>

        {/* Center: Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-1 lg:gap-2">
            {links}
          </ul>
        </div>

        {/* Right: Button */}
        <div className="navbar-end">
          <button className="btn btn-xs sm:btn-sm md:btn-md">Sign in</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
