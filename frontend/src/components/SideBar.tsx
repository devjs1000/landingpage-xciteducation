import { useContext } from "react";
import { context } from "../context/mainContext";
export default function () {
  const ctx = useContext(context);

  return (
    <div
      className={`${ctx.menuNav ? "show-menu  " : "hide-menu "
        }  menubar fixed backdrop-blur-[10px]  top-0 text-gray-700 `}
      id='menubar'
    >
      <div
        className={`  ${ctx.menuNav ? "relative" : "relative "
          } top-0 right-0 m-4 `}
        onClick={() => {
          ctx.setMenuNav(0);
          document.body.style.overflow = 'scroll'

        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="w-12 h-12 hover:animate-spin "
          viewBox="0 0 16 16"
        >
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
        </svg>
      </div>

      <div className=" bg-slate-100 w-[80%] backdrop-blur-[100px] py-4 h-screen rounded-lg text-2xl  justify-center mx-12 items-center text-gray-800">
        <a href="https://trainings.xcitedu.com" className="text-left mx-4 my-2 p-1 text-lg block hover:bg-white px-4">
          TRAININGS
        </a>
        <a href="https://internships.xcitedu.com" className="  text-left mx-4 my-2 p-1 text-lg block hover:bg-white px-4  ">INTERNSHIP</a>
        <a href="https://foundations.xcitedu.com" className="  text-left mx-4 my-2 p-1 text-lg block hover:bg-white px-4  ">FOUNDATIONS</a>
        <a href="https://media.xcitedu.com" className=" text-left mx-4 my-2 p-1 text-lg block hover:bg-white px-4   ">MEDIA HOUSE</a>
        <a href="https://capitals.xcitedu.com" className="  text-left mx-4 my-2 p-1 text-lg block hover:bg-white px-4  ">CAPITALS</a>
        <a href="https://designs.xcitedu.com" className="  text-left mx-4 my-2 p-1 text-lg block hover:bg-white px-4  ">
          HOUSE OF DESIGN
        </a>

        
      </div>
    </div>
  );
}
