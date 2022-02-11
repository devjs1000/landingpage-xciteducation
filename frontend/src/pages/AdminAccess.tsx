import React, { useState, useEffect, useLayoutEffect, useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AddTeam from "../components/AddTeam";
import { getFromFirestore, stateChangeLogin } from "../firebase/fire";
import TeamDisplay from "../components/TeamDisplay";
import { context } from "../context/mainContext";
import EditTeam from "../components/EditTeam";
import Notfound from "../components/Notfound";
const AdminAccess = () => {
  const accountDetails = useSelector((state: any) => state.account);
  const [visiblity, setVisibility] = useState(false)
  const [internalRoutes, setInternalRoutes] = useState("add-team");
  const ctx = useContext(context);
  const objToArray = (data: any) => {
    let keys = Object.keys(data);
    let arr = keys.map((a: any) => {
      return data[a];
    });
    return arr;
  };

  const navigate = useNavigate();
  useLayoutEffect(() => {
    stateChangeLogin((user: any) => {
      console.log('changed auth state');

      if (user) {
        getFromFirestore("team", (data: any) => {
          const teamArray = objToArray(data);
          ctx.setTeam(teamArray);
        });
        setVisibility(true)
      }else{
        navigate('/admin/login')
      }
    })
  }, [accountDetails]);

  return (
    <>
      {visiblity ?
        <div className="min-h-[80vh] bg-slate-100">
          <button
            className="px-4 bg-white py-2  m-2 font-bold text-slate-600 rounded-md"
            onClick={() => {
              setInternalRoutes("add-team");
            }}
          >
            add team
          </button>
          <button
            className="px-4 bg-white py-2  m-2 font-bold text-slate-600 rounded-md"
            onClick={() => {
              setInternalRoutes("edit-team");
            }}
          >
            edit team
          </button>
          {internalRoutes == "add-team" ? (
            <AddTeam />
          ) : internalRoutes == "edit-team" ? (
            <EditTeam />
          ) : (
            ""
          )}
        </div>
        : <Notfound />
      }
    </>
  );
};

export default AdminAccess;
