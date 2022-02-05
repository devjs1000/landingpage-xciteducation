import {Chat} from 'react-bootstrap-icons'
import { useState } from 'react';
export default (props: any) => {
const [mailId, setMailId]=useState('mail@mail.com')
const [name, setName]=useState('name')

  return (
    <>
      <div className=" px-3 pt-12 my-2 rounded-xl pt-5 flex flex-wrap bg-slate-100 w-[300px] h-[400px] shadow-md hover:shadow-lg cursor-pointer">
        <img
          src={props.img}
          alt="training"
          className="w-[200px] mx-auto p-2 bg-teal-500 rounded-full h-[200px] object-cover"
          loading="lazy"
        />
        <div className='lg:w-full w-auto'>
          <h3
            className="text-xl ml-2 w-full md:text-xl lg:text-2xl lg:mb-[8px] font-semibold mb-[2px] mt-0 md:my-[8px] text-center"
            style={{ color: props.hColor }}
          >
            {props.name}
          </h3>
          {/* <div className='text-center'>
          <a href={`mailto:${mailId}?body='hello ${name}! `} className="text-green-500 ">mail@mail</a>

          </div>
 */}
          <p className="break-all h-12 w-full overflow-x-hidden overflow-y-auto  ml-2  text-center mb-0 mt-0 text-slate-700 text-sm md:text-base font-semibold ">
            {props.quote}

          </p>
        </div>
      </div>
    </>
  );
};
