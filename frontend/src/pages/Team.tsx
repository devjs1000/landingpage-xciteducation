import TeamCard from "../components/TeamCard";
import { useState, useEffect } from "react";
import {getFromFirestore} from '../firebase/fire'
export default ()=>{
    const [team, setTeam]=useState([] as any)
    const [show, setShow]=useState(6)
    const [blurredControls, setBlurredControl]=useState(true)
const objToArray=(data:any)=>{
  let keys=Object.keys(data)
  let arr=keys.map((a:any)=>{
    return data[a]
  })
  return arr
}


    useEffect(()=>{
        getFromFirestore('team', (data: any)=>{
            const teamArray=objToArray(data)
        setTeam(teamArray)
      })
        
        
    },[])


    return (
        <div className=' min-h-[70vh] bg-slate-100 py-5'>
        <h1 className='text-8xl font-semibold my-12 text-slate-700 text-center  '>
            Our
            <span className="text-teal-500"> Team</span>
            </h1>
            <div className="grid grid-rows-auto text-center grid-cols-1 place-items-center sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4  mx-auto my-5  gap-2">
            {team.map((a:any, index:number)=>{
                if(index>=show){
                    return ''
                }
                return (
                    <div key={index} className="text-center">
                        <TeamCard name={a.name} quote={a.quote} img={a.img.url}/>
                    </div>
                )
            })}

            </div>
            <div className="blurry-deck h-60 overflow-hidden  relative grid grid-rows-autogrid-cols-1 lg:grid-cols-2 xl:grid-cols-3  mx-20 my-8  gap-2">
            {team.map((a:any, index:number)=>{
                if(index<=show){
                    return ''
                }
                return (
                    <div key={index} className="mx-auto">
                        <TeamCard name={a.name} quote={a.quote} img={a.img.url}/>
                    </div>
                )
            })}
            { 
                blurredControls && <div className="col-span-3 blurred bg-slate-100 flex justify-center items-center absolute top-0 w-full p-5 h-60 shadow-lg ">
                <button onClick={()=>{
                    document.querySelector('.blurry-deck')?.classList.toggle('h-60')
                    setBlurredControl(false)
                    }} className="bg-teal-500 py-2 px-4 text-xl rounded font-semibold text-white hover:shadow-lg">load more</button>
            </div>
            }
            
            </div>
        </div>
    )
}