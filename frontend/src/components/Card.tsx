export default (props:any)=>{
    console.log(props.hColor);
    
    return (
        <>
           <div className="border-2  md:mr-[32px] p-3 md:p-4 w-[90%] lg:w-[300px] xl:w-[435px] lg:h-[235px]  bg-slate-200 flex items-center rounded-2xl relative mt-[30px] shadow-md hover:shadow-lg cursor-pointer">
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
                  <a href="#" className="text-cyan-600 font-semibold text-sm ">
                    Explore more
                    <i className="fas fa-arrow-right pl-1 "></i>
                  </a>
                </div>
              </div>
        </>
    )
}