const Sidebar = ({votingData}) => {
    return ( 
        <div className="grid grid-cols-1 justify-center gap-y-8">
            <div className="flex flex-col items-center gap-y-2" >
                <h4>Candidates</h4>
                <h4 className="text-lg votefont">{String(votingData?.[1].result) ?? 'NIL'}</h4>
            </div>

            <div className="flex flex-col items-center gap-y-2" >
                <h4>Voters</h4>
                <h4 className="text-lg votefont">{String(votingData?.[2].result) ?? 'NIL'}</h4>
            </div>

            <div className="flex flex-col items-center gap-y-2" >
                <h4>Total votes casted</h4>
                <h4 className="text-lg votefont">{String(votingData?.[3].result) ?? 'NIL'}</h4>
            </div>
        </div>
     );
}
 
export default Sidebar;