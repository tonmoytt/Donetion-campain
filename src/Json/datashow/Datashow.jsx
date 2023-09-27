// import { setItem } from "localforage";
import swal from 'sweetalert';

import { useEffect, useState } from "react";

import { useLoaderData, useParams } from "react-router-dom";
// import './bg.css'


const Datashow = () => {

    const [data, setdata] = useState();
    const params = useParams();
    // console.log(params);
    const loader = useLoaderData();
    // const {id}=useLoaderData();
    // console.log(data);

    useEffect(() => {
        const findloader = loader.find(data => data.id === parseInt(params.id))
        setdata(findloader);
    }, [params.id, loader])


    // hendle function///

    const hendelAddToDonete = () => {
        const addToDonated = [];

        const donated = JSON.parse(localStorage.getItem('doneted'));
        if (!donated) {
            addToDonated.push(data)
            localStorage.setItem('doneted', JSON.stringify(addToDonated));
            swal("Successful", "Successfully added!", "success");

        }
        else {
            const isExit = donated.find(data => data.id === parseInt(data.id));
           
            if (!isExit) {
                addToDonated.push( ...donated,data);
                localStorage.setItem('doneted', JSON.stringify(addToDonated));
                swal("Good job!", "Successfully added!", "success");
            }
            else {
                swal("Error", "Already added!", "Error");
            }

            // console.log(donated);
            // // console.log(data);
            // localStorage.setItem('doneted',JSON.stringify([{name:"tonmoy"},{name:"tanim"}]) )
        }
    }

    return (

        <div className=" mx-10 md:mx-24 lg:mx-32  ">



            <img className=" w-full  h-96 " src={data?.pic} alt="" />
            <div className='Box'>
            <button onClick={hendelAddToDonete} className="text-2xl bg-red-500 px-4 py-1 rounded-lg">Doneted</button>
            </div>


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