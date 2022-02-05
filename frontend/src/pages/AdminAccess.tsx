import React, { useState, useEffect, useContext } from 'react';
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import AddTeam from '../components/AddTeam'
import { getFromFirestore, stateChangeLogin } from '../firebase/fire';
import TeamDisplay from '../components/TeamDisplay';
import { context } from '../context/mainContext';
import EditTeam from '../components/EditTeam';
const AdminAccess = () => {
  const accountDetails=useSelector((state:any)=>state.account)
  
  const [internalRoutes, setInternalRoutes]=useState('add-team')
  // const [team, setTeam] = useState([] as any);
  const ctx=useContext(context)
const objToArray=(data:any)=>{
  let keys=Object.keys(data)
  let arr=keys.map((a:any)=>{
    return data[a]
  })
  return arr
}

  const navigate = useNavigate()
  useEffect(() => {
    stateChangeLogin(() => {
      getFromFirestore("team", (data: any) => {
        const teamArray=objToArray(data)
        ctx.setTeam(teamArray)
      });
    });
  }, []);

  // const token = localStorage.getItem("token")
  // useEffect(() => {

  //   console.log("Your token : ", token)
  //   if (!token) {
  //     navigate("/admin/login")
  //   }
  // }, []);

  // const [member, setMember] = useState({
  //   name: "",
  //   quote: "",
  //   profilePicture: "https://res.cloudinary.com/dizvyn9b5/image/upload/v1632241265/sjddbfkcij5tz8vokcmo.jpg"
  // });
  // let name, value;
  // const handleChange = (e: any) => {
  //   console.log(member);
  //   name = e.target.name;
  //   value = e.target.value;
  //   setMember({ ...member, [name]: value });
  // };
  // const addMember = (e: any) => {
  //   e.preventDefault()
  //   fetch('http://localhost:8000/member/addMember', {
  //     method: 'POST',
  //     body: JSON.stringify({ name: member.name, quote: member.quote, profilePicture: member.profilePicture }),
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'authorization': `Bearer ${token}`
  //     },
  //   }).then(res => res.json()).
  //     then(data => {
  //       console.log(data);
  //       console.log("Member Added");

  //     }
  //     )


  // }

  return <>
  <div className='min-h-[80vh] bg-slate-100'>
    <button className="px-4 bg-white py-2  m-2 font-bold text-slate-600 rounded-md" onClick={()=>{setInternalRoutes('add-team')}}>add team</button>
    <button className="px-4 bg-white py-2  m-2 font-bold text-slate-600 rounded-md" onClick={()=>{setInternalRoutes('edit-team')}}>edit team</button>
{
  internalRoutes=='add-team'?
 <AddTeam />
  : internalRoutes=='edit-team'?<EditTeam /> :''
}
  </div>
  </>


   
    {/* <br />
    <form onSubmit={addMember}>
      Add a Member
      <br />
      <input placeholder="name" name="name" onChange={handleChange} />
      <br />
      <input placeholder="quote/decription of member" name="quote" onChange={handleChange} />
      <br />
      <input placeholder="profilePicture" name="profilePicture" type="file" onChange={handleChange} />
      <br />
      <button type="submit"> Add Member</button>
    </form> */}
};

export default AdminAccess;
