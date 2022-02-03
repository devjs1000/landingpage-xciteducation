import React, { useState, useEffect } from 'react';
import { Upload } from 'react-bootstrap-icons';
const AdminAccess = () => {

  return <div className='min-h-[80vh] flex justify-center items-center'>

<div className='bg-white flex flex-wrap justify-center items-center p-2 shadow-lg w-[20rem] h-[20rem]'>
  <h1 className='text-slate-700 text-xl w-full mx-4 text-center '>add team member</h1>
<input type="text" className=" w-full py-2 rounded-md mx-1 px-2 bg-slate-100" placeholder='name' />
<input type="text" className="w-full py-2 rounded-md mx-1 px-2 bg-slate-100" placeholder='quote' />
<input type="text" className="w-full py-2 rounded-md mx-1 px-2 bg-slate-100" placeholder='department' />
<label htmlFor="file" className='w-full py-2 px-4 rounded-md mx-1 inline-block bg-white '>
  <Upload  />
</label>
<input type="file" id='file' className='hidden' />
<button className='bg-white px-4 font-semibold py-2 bg-blue-500 text-white w-full mx-1 rounded-md '>add member</button>
</div>
  </div>;
};

export default AdminAccess;
