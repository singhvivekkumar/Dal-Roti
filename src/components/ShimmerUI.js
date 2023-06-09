import { Shimmer, Spinner } from "react-shimmer";

const ShimmerUI = () => {
  return (
    <div className="flex flex-wrap justify-center mt-28 px-10">
      {Array(15)
        .fill("")
        .map((e, index) => (
            <div key={index} className="flex flex-col h-80 w-72 m-4 p-4 border shadow-lg bg-slate-50">
              <div className=" border ">
                <Shimmer height={140} width={255}/>             
              </div>
              <div className=" py-4 h-10 ">
                <Shimmer height={30} width={255}/>
              </div>
              <div className=" py-4 h-12 truncate">
                <Shimmer height={20} width={255}/>
              </div>
              <div className="flex justify-between text-xs font-normal pt-2 ">
                <span><Shimmer height={30} width={50}/></span>
                <span >.</span>
                <span> <Shimmer height={30} width={50}/></span>
                <span >.</span>
                <span><Shimmer height={30} width={50}/></span>
              </div>
            </div>
        ))}
    </div>
  );
};

export default ShimmerUI;
