import { useLoaderData } from "react-router-dom";
import Jsondata from "./jsondata/Jsondata";
// import { useState } from "react";

 
const Jsonfile = () => {
    const datas=useLoaderData();
    // const state=useState();
    // console.log(datas);
    return (
        <div className="py-8 text-center">
            {/* <h1 className="text-2xl">food section</h1> */}
            <div className="grid md:grid-cols-4 lg:grid-cols-4 gap-8  m-10">
                {
                    datas.map( data=> <Jsondata key={data.id}    data={data}></Jsondata>)
                }
            </div>
        </div>
    );
};

export default Jsonfile;