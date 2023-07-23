import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut, setSearch } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => error);
  };

  const navOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/colleges">Colleges</Link>
      </li>
      <li>
        <Link to="/admission">Admission</Link>
      </li>
      <li>
        <Link to="/my-college">My College</Link>
      </li>
      <div className="join mx-5 -mt-2">
        <div>
          <div>
            <input
              className="input input-bordered join-item bg-[#d8dbdda6]"
              type="text"
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search"
            />
          </div>
        </div>
        <div className="indicator">
          <button className="btn  btn-success join-item">Search</button>
        </div>
      </div>

      {user ? (
        <Link to="/">
          <li>
            <button className="btn-error " onClick={handleLogOut}>LogOut</button>
          </li>
        </Link>
      ) : (
        <li>
          <Link to="/login">Login</Link>
        </li>
      )}
    </>
  );

  return (
    <>
      <div className="navbar fixed z-50 bg-opacity-40 bg-[#8ef7f7] font-semibold text-black px-10 top-0">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <div className="flex">
            <p className="ms-2 text-xl text-center font-serif font-semibold">
              BDCollege
            </p>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>

        <div className="navbar-end">
          {user ? (
            <Link to="/profile">
              <button>
                <p className="me-8 text-lg">{user?.displayName}</p>
              </button>
            </Link>
          ) : (
            <></>
          )}
          {user ? (
            <img
              className="w-16 h-16 rounded-full"
              src={user?.photoURL}
              alt=""
            />
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
