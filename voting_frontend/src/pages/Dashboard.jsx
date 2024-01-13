const Dashboard = () => {
    return ( 
        <div className="flex flex-col p-5 w-full gap-y-12">
            <h4 className="votefont text-3xl text-slate-800 text-center">Its your right to <br/> vote</h4>

            <div className="flex">
                <button className="mx-auto w-4/12 p-3 shadow-md hover:shadow-lg bg-slate-800 text-white bg-opacity-50 text-md shadow-slate-400">Click to vote</button>
            </div>
            
        </div>
     );
}
 
export default Dashboard;