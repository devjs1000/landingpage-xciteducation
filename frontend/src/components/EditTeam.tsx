import {  useContext } from "react";
import { context } from "../context/mainContext";
import TeamDisplay from "./TeamDisplay";
const EditTeam = () => {
  const ctx = useContext(context);
  return (
    <>
      <div className="my-5">
        {ctx.team.map((a: any, index: number) => {
          return (
            <TeamDisplay
              key={index}
              name={a.name}
              quote={a.quote}
              img={a.img}
              department={a.department}
            />
          );
        })}
      </div>
    </>
  );
};

export default EditTeam;
