import { createPortal } from "react-dom";
import { CandidateForm } from "../components";
import { useState } from "react";

const Dashboard = () => {

    const [candidateForm, setCandidateForm] = useState(false);

    const setModal = () => {
        setCandidateForm(true)
    }

    return ( 
        <div className="flex flex-col p-5 w-full gap-y-12">
            <div>
                <button onClick={setModal} className="bg-slate-500 p-2 flex items-center gap-x-2">
                    <h4>Add Candidate</h4>
                </button>
            </div>

            <h4 className="votefont text-3xl text-slate-800 text-center">Its your right to <br/> vote</h4>

            <div className="flex">
                <button className="mx-auto w-4/12 p-3 shadow-md hover:shadow-lg bg-slate-800 text-white bg-opacity-50 text-md shadow-slate-400">Click to vote</button>
            </div>
            {candidateForm && createPortal(<CandidateForm closeModal={() => {setCandidateForm(false)}}/>, document.body)}
        </div>
     );
}
 
export default Dashboard;