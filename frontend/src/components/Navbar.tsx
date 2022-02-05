import { useContext, useEffect, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { context } from "../context/mainContext";
import { useSelector, useDispatch } from "react-redux";
import { stateChangeLogin } from "../firebase/fire";
import { accountAction } from "../redux/actions/loginAction";

export default function Navbar() {
  const ctx = useContext(context);
  const loc=useLocation()
  const dispatch = useDispatch();

  const navigate=useNavigate()
  useEffect(() => {
    stateChangeLogin((user: any) => {
      if (user) {
        console.log("logged", loc.pathname);
        if(loc.pathname=='/admin/login'){
          navigate('/admin/access')
        }
        dispatch(accountAction(user));
      } else {
        console.log("not logged");
        if(loc.pathname=='/admin/access'){
          navigate('/admin/login')
        }
        dispatch(accountAction({}));

      }
    });
  }, []);
  return (
    <nav
      className="flex justify-between mx-2 py-2 shadow-lg"
      style={{ zIndex: "1001 !important" }}
    >
      <h1
        className="bg-gray-700 text-white cursor-pointer p-2 text-xl text-center  mx-4 font-bold"
        style={{ width: "10rem" }}
      >
        <Link to="/">XcitEducation</Link>
      </h1>

      <div className="relative  w-auto flex text-gray-800 bg-white justify-end truncate font-bold">

        <button className="  hover:bg-gray-100 px-2   sm-hide">
          TRAININGS
        </button>
        <button className=" sm-hide  px-2 hover:bg-gray-100">INTERNSHIP</button>
                <button className=" sm-hide px-2 hover:bg-gray-100">FOUNDATIONS</button>
                        <button className=" sm-hide  px-2 hover:bg-gray-100">MEDIA HOUSE</button>

        <button className=" sm-hide px-2 hover:bg-gray-100">CAPITALS</button>

                <button className="  hover:bg-gray-100 px-2 sm-hide">
          HOUSE OF DESIGN
        </button>

        <button
          className="text-gray-800 text-xl  mx-2 sm-show "
          onClick={() => {
            ctx.setMenuNav(1);
            document.body.style.overflow = "hidden";
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}
