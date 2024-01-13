const Sidebar = () => {
    return ( 
        <div className="grid grid-cols-1 justify-center gap-y-8">
            <div className="flex flex-col items-center" >
                <h4>Candidates</h4>
                <h4 className="text-lg votefont">20</h4>
            </div>

            <div className="flex flex-col items-center" >
                <h4>Voters</h4>
                <h4 className="text-lg votefont">100</h4>
            </div>

            <div className="flex flex-col items-center" >
                <h4>Total votes casted</h4>
                <h4 className="text-lg votefont">65</h4>
            </div>
        </div>
     );
}
 
export default Sidebar;