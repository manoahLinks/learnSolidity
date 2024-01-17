import {useState} from 'react';
import { HiMiniXMark } from "react-icons/hi2";
import { useContractWrite, usePrepareContractWrite, useWaitForTransaction } from 'wagmi';
import votingAbi from '../../utils/votingAbi.json';

const CandidateForm = ({closeModal}) => {

    const [candidateName, setCandidateName] = useState('')

    // config for add candtate func
    const { config } = usePrepareContractWrite({
        address: '0xf43409AD775624f5a42Efc394B59bE41f5cd09B6',
        abi: votingAbi,
        functionName: 'addCandidate',
        args: [candidateName]
      })


    // useContractWrite hook to handle write func
    const { data: writeData, isLoading: writeLoading, isSuccess, write } = useContractWrite(config)

    // useWait fro transaction to monitor responses
    const { data: waitData, isError: waitError, isLoading: waitLoading, isSuccess: waitSuccess } = useWaitForTransaction({
        hash: writeData?.hash,
        onSuccess(data){
          console.log(data)
          alert('successfully added')
        //   toast.success('Successfully created new candidate')
        },
    
        onError(error){
          console.log(error)
          alert(error.message)
        //   toast.error(error.message)
        }
      })


    const handleSubmit = async (e) => {
        e.preventDefault()

        write?.()
        isSuccess()
        waitSuccess()
    }

    return ( 
        <div className="absolute inset-0 z-[200] flex justify-center pt-[140px] bg-slate-800 bg-opacity-30">
            <div className="flex flex-col mx-auto w-4/12 gap-y-2">
                <button className="ml-auto p-2 rounded-full bg-slate-200" onClick={closeModal}>
                    <HiMiniXMark strokeWidth={3} color="red"/>
                </button>
                <form className="bg-white p-5 flex flex-col gap-y-4 rounded-[10px]">
                    <h4 className='text-slate-300'>Simply enter a candidates name to register for the polls ...</h4>
                    <div className='flex flex-col'>
                        <label htmlFor="">Name</label>
                        <input 
                            type="text" 
                            className="placeholder-slate-300 border-slate-300 text-xs "
                            placeholder='e.g John Doe'
                            value={candidateName}
                            onChange={(e) => {setCandidateName(e.target.value)}}
                        />
                    </div>
                    <button 
                        onClick={handleSubmit}
                        className='p-2 bg-green-400 font-bold'
                    >
                        {writeLoading || waitLoading ? `submitting ...` : `submit`}
                    </button>
                </form>
            </div>   
        </div>
     );
}
 
export default CandidateForm;