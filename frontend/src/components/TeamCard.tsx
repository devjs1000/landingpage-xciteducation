import {Chat} from 'react-bootstrap-icons'
import { useState } from 'react';
export default (props: any) => {
const [mailId, setMailId]=useState('mail@mail.com')
const [name, setName]=useState('name')

  return (
    <>
      <div className="   my-2 rounded-xl  flex flex-wrap bg-white w-[300px] h-[400px] shadow-md hover:shadow-lg cursor-pointer">
       <div className='w-full bg-teal-300 rounded-t-xl h-[250px] overflow-hidden'>
       <img
          src={props.img} draggable={false}
          alt="training"
          className="w-full mx-auto select-none rounded-t-xl  transition-[.5s] hover:scale-[1.1] bg-teal-500  h-[250px] object-cover"
        />

       </div>
        <div className=' w-full'>
          <h3
            className="text-xl m-0 w-full md:text-xl lg:text-2xl lg:mb-[8px] font-semibold  mt-0 md:my-[8px] text-center"
            style={{ color: props.hColor }}
          >
            {props.name}
          </h3>
          {/* <div className='text-center'>
          <a href={`mailto:${mailId}?body='hello ${name}! `} className="text-green-500 ">mail@mail</a>

          </div>
 */}
          <p className="break-all m-0 text-teal-500 h-12 w-full overflow-x-hidden overflow-y-auto    text-center  text-slate-700 text-sm md:text-base font-semibold ">
            {props.quote}

          </p>
        </div>
      </div>
    </>
  );
};
