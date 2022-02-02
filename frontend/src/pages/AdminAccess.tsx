import React, { useState, useEffect } from 'react';
import { Navigate, useNavigate } from "react-router-dom";

const AdminAccess = () => {
  const navigate = useNavigate()
  const token = localStorage.getItem("token")
  useEffect(() => {

    console.log("Your token : ", token)
    if (!token) {
      navigate("/admin/login")
    }
  }, []);

  const [member, setMember] = useState({
    name: "",
    quote: "",
    profilePicture: "https://res.cloudinary.com/dizvyn9b5/image/upload/v1632241265/sjddbfkcij5tz8vokcmo.jpg"
  });
  let name, value;
  const handleChange = (e: any) => {
    console.log(member);
    name = e.target.name;
    value = e.target.value;
    setMember({ ...member, [name]: value });
  };
  const addMember = (e: any) => {
    e.preventDefault()
    fetch('http://localhost:8000/member/addMember', {
      method: 'POST',
      body: JSON.stringify({ name: member.name, quote: member.quote, profilePicture: member.profilePicture }),
      headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${token}`
      },
    }).then(res => res.json()).
      then(data => {
        console.log(data);
        console.log("Member Added");

      }
      )


  }

  return <div>
    <br />
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
    </form>
  </div>;
};

export default AdminAccess;
