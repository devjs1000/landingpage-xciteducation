import {Chat} from 'react-bootstrap-icons'
import { useState } from 'react';
export default (props: any) => {
const [mailId, setMailId]=useState('mail@mail.com')
const [name, setName]=useState('name')
console.log(props)
  return (
    <div className="w-[15rem]  h-[15rem] bg-white  bg-cover bg-center rounded-[1rem]" style={{backgroundImage:`url(${props.img})`}}>

<div className='hover:bg-[rgba(0,0,0,.5)] h-full p-4   backdrop-blur-[0px] hover:backdrop-blur-[10px] transition-all rounded-[1rem]'>
<div className='text-sm text-white h-full opacity-0 hover:opacity-100 text-justify overflow-auto'>
{props.quote}
</div>
<div className='rounded-xl hover:animate-pulse cursor-pointer absolute bottom-0 px-4 bg-teal-600 text-white font-bold mb-2 text-xl'>
{props.name.toUpperCase()}
</div>

</div>
    </div>
  );
};
