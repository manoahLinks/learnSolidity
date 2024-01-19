import { createPortal } from "react-dom";
import { CandidateForm, CandidateModal } from "../components";
import { useState } from "react";
import {HiUser} from 'react-icons/hi2';
import CandidatesModal from "../components/candidateModal";
import votingAbi from '../../utils/votingAbi.json';
import { useContractReads } from 'wagmi';

const Dashboard = () => {

    const [candidateForm, setCandidateForm] = useState(false);
    const [candidatesModal, setCandidatesModal] = useState(false);

    const { data } = useContractReads({
        contracts: [
          {
            address: '0xa2D8d027a950e4288317FDAF241bad6Bef1761a2',
            abi: votingAbi,
            functionName: 'voters',
            args: []
          },
        ],
      })

    const setModal = () => {
        setCandidateForm(true)
    }

    const setCandidates = () => {
        setCandidatesModal(true)
    }

    return ( 
        <div className="flex flex-col p-5 w-full gap-y-12">
            <div className="flex justify-between items-center">
                <span className="flex items-center gap-x-2">
                    <HiUser/>
                    <small>Registered</small>
                </span>
                
                <button onClick={setModal} className="underline flex items-center gap-x-2">
                    <h4>Add Candidate</h4>
                </button>
            </div>

            <h4 className="votefont text-3xl text-slate-800 text-center">Its your right to <br/> vote</h4>

            <div className="flex">
                <button onClick={setCandidates} className="mx-auto w-4/12 p-3 shadow-md hover:shadow-lg bg-slate-800 text-white bg-opacity-50 text-md shadow-slate-400">Click to vote</button>
            </div>
            {candidatesModal && createPortal(<CandidatesModal closeModal={() => {setCandidatesModal(false)}}/>, document.body)}
            {candidateForm && createPortal(<CandidateForm closeModal={() => {setCandidateForm(false)}}/>, document.body)}
        </div>
     );
}
 
export default Dashboard;