import { useEffect, useState } from "react";
import Datashow from "../../../Json/datashow/Datashow";



const Donation = () => {
    const [donated, setDonated] = useState([]);
    const [nodata, setNodata] = useState("")

    useEffect(() => {
        const donated = JSON.parse(localStorage.getItem('doneted'))
        if (donated) {
            setDonated(donated);
        }
        else {
            setNodata("No data found");
        }

    }, [])
    console.log(donated);
    console.log(nodata);
    return (
        <div className="m-10">
            {
                nodata ? <p className="text-center text-2xl">{nodata}</p>
                    :
                    <div>
                        {
                            donated.map(donated=> <Datashow key={donated.id} donated={donated}></Datashow>)
                        }

                    </div>
            }
        </div>
    );
};

export default Donation;