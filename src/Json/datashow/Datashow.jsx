import { setItem } from "localforage";
import { useEffect, useState } from "react";

import { Link, useLoaderData, useParams } from "react-router-dom";

 

const Datashow = () => {
    const [data,setdata]=useState();
    const params =useParams();
    console.log(params);
    const loader=useLoaderData();
 
    useEffect(()=>{
        const findloader = loader.find(data=> data.id === parseInt(params.id))
        setdata(findloader);
    },[params.id, loader])

 
// hendle function///

const hendelAddToDonete=()=>{
    const donated=JSON.parse(localStorage.getItem('doneted'))
    console.log(donated);
    // console.log(data);
    localStorage.setItem('doneted',JSON.stringify([{name:"tonmoy"},{name:"tanim"}]) )
}
    return (
        <div className=" mx-32  ">
             
            <button onClick={hendelAddToDonete} className="text-2xl bg-red-500 px-4 py-1 rounded-lg">Doneted</button>
           
            <img className=" w-full  h-96 " src={data?.pic} alt="" />
            
          
          <div className="mt-5">
            <h1 className="text-2xl font-semibold"> {data?.category_name} </h1>
            <p >{data?.title}</p>
            <p>{data?.description}</p>
            <p>{data?.price}</p>
            </div>
          
        </div>
    );
};

export default Datashow;