import { ArrowBarRight } from "react-bootstrap-icons";
export default (props:any)=>{
    console.log(props.hColor);

    return (
        <>
           <div className=" shadow-md rounded-xl mt-2  bg-white p-4 hover:shadow-xl mx-auto w-[20rem]">
                <img
                  src={props.img}
                  alt="training"
                  className="mr-[1rem] w-[100px] h-[100px] md:w-[182px] md:h-[164px]"
                />
                <div >
                  <h3 className='text-xl  md:text-xl lg:text-2xl lg:mb-[8px] font-semibold mb-[2px] mt-0 md:my-[8px] text-left' style={{color:props.hColor}}>
                    {props.title}
                  </h3>
                  <p className='text-left mb-0 mt-0 text-slate-700 text-sm md:text-base font-semibold '>
                   {props.description}
                  </p>
                  <a href={props.link} className="text-cyan-600 flex font-semibold text-sm ">
                    Explore more
                  <ArrowBarRight />
                  </a>
                </div>
              </div>
        </>
    )
}
