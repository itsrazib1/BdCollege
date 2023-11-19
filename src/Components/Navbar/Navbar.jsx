import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { useState, useEffect, useCallback } from "react";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [colleges, setColleges] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredColleges, setFilteredColleges] = useState([]);
  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => error);
  };
  const fetchCollegesData = () => {
    fetch("https://i-college-server-beta.vercel.app/colleges")
      .then((response) => response.json())
      .then((data) => {
        setColleges(data);
      })
      .catch((error) => console.error("Error fetching colleges:", error));
  };
  const filterColleges = useCallback(() => {
    if (searchTerm.trim() === "") {
      setFilteredColleges(colleges);
    } else {
      const filtered = colleges.filter((college) =>
        college.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredColleges(filtered);
    }
  }, [colleges, searchTerm]);
  useEffect(() => {
    // Fetch the colleges data from the API when the component mounts
    fetchCollegesData();
  }, []);
  useEffect(() => {
    // Whenever the search term changes, filter the colleges
    filterColleges();
  }, [filterColleges]);
  const navOptions = (
    <>
      <li>
        <Link  to="/"><span className="hover:text-cyan-500 ">Home</span></Link>
      </li>
      <li>
        <Link className="hover:text-cyan-500 " to="/colleges">Colleges</Link>
      </li>
      <li>
        <Link className="hover:text-cyan-500 " to="/admission">Admission</Link>
      </li>
      <li>
        <Link className="hover:text-cyan-500 " to="/my-college">My College</Link>
      </li>
      <div className="join mx-5 sm:py-0 py-3 -mt-2 ">
        <div className="">
          <div className=" ">
            <input
              type="text"
              className="input sm:h-12 h-8 w-32 sm:w-48 input-bordered join-item bg-[#d8dbdda6]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search for colleges"
            />
          </div>
        </div>
        <div className=" rounded-s-none  ">
          <button className=" sm:h-12 h-8 w-12 sm:w-16 bg-cyan-400 ">Search</button>
        </div>
      </div>

      {user ? (
        <Link to="/">
          <li>
            <button className="btn-error w-24 text-center bg-red-600 text-white " onClick={handleLogOut}>
              Log Out
            </button>
          </li>
          <li></li>
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
      <div className="navbar fixed z-50 bg-opacity-40 bg-[#ffff] font-semibold text-black px-10 top-0">
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
            <p className="ps-3 text-base mt-3 sm:text-xl pb-3 px-0 text-center font-serif font-semibold">
              BDCollege
            </p>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>

        <div className="navbar-end sm:me-10 sm:pb-4 pb-0" >
          {user ? (
            <Link to="/profile">
              <button>
                <p className="pr-2 text-sm sm:text-lg">{user?.displayName}</p>
              </button>
            </Link>
          ) : (
            <></>
          )}
          
          {user ? (
            <img
              className=" w-8 h-8 sm:w-12 sm:h-12 rounded-full"
              src={user?.photoURL}
              alt=""
            />
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="text-center mt-16 " >
        <div>
 <ul  className={searchTerm.length === 0 ? "hidden" : "block" }>
          {filteredColleges.map((college) => (
            <li key={college._id}>
              <div className=" card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                  <img
                    src={college.picture}
                    alt="Shoes"
                    className="rounded-xl h-52"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{college.name}</h2>
                  <p className="font-serif font-semibold">
                    College rating: {college.rating}
                  </p>
                  <p className="font-serif font-semibold">
                    Admission date: {college.admission}
                  </p>
                  <p className="font-serif font-semibold">
                    Number of the research: {college.research}
                  </p>
                  <div className="card-actions">
                    <Link to={`/details/${college._id}`}>
                      <button className="btn btn-accent">Details</button>
                    </Link>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        </div>
       
      </div>
    </>
  );
};

export default Navbar;
