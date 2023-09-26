 

const Saerchbar = () => {
    return (
        <div className="text-center ">
            <h1 className="text-center text-3xl font- font-semibold">I Grow By Helping People In Need</h1>
          <div className="mt-4">
          <input className="px-2  py-1 rounded-lg bg-slate-300" type="text" placeholder="Search here..."/>
            <input className=" bg-red-400 px-2 py-1 rounded-md" type="submit" value="Search here" />
            </div>  
        </div>
    );
};

export default Saerchbar;