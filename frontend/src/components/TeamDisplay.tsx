import { useState, useContext } from "react";
import { deleteFromFirestore, deleteImageFromFirebase } from "../firebase/fire";
import { context } from "../context/mainContext";
import { Trash } from "react-bootstrap-icons";
const TeamDisplay = (props: any) => {
  const [state, setState] = useState({
    name: props.name,
    quote: props.quote,
    img:props.img
  });

  const ctx = useContext(context);

  const handleDelete = () => {
    deleteFromFirestore("team", state.name);
    deleteImageFromFirebase(state.img.path)
    let teamAfterDelete = ctx.team.filter((a: any) => {
      return a.name !== state.name;
    });

    ctx.setTeam(teamAfterDelete);
  };

  return (
    <div className="flex m-5 bg-white items-center justify-between my-2  h-[10rem]  rounded-xl" >
      <img className="h-32 w-32 bg-blue-400 rounded-full object-cover mx-5 " src={state.img.url}/>
      <div className="mr-32">
        <h1 className=" py-2 font-semibold text-blue-800 rounded-full px-5   h-10 flex items-center m text-2xl min-w-[30%] ">
          {state.name}
        </h1>
        <p className="text-slate-700 h-[100px] overflow-auto px-5 bg-white text-lg min-w-[30%] ">
          {state.quote}
        </p>
      </div>
      <button
        onClick={handleDelete}
        className="bg-red-500 text-white mr-10 font-semibold text-xl px-4 py-1 h-8 flex justify-center items-center rounded-md"
      >
        delete <Trash />
      </button>
    </div>
  );
};

export default TeamDisplay;
