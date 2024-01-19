import { HiMiniXMark } from "react-icons/hi2";
import { useContractReads, useContractWrite, usePrepareContractWrite, useWaitForTransaction } from 'wagmi';
import votingAbi from '../../utils/votingAbi.json';
import { useState } from "react";

const CandidatesModal = ({closeModal}) => {

    const [candidateId, setCandidateId] = useState(1);

    const {data} = useContractReads({
        contracts: [
            {
                address: '0xa2D8d027a950e4288317FDAF241bad6Bef1761a2',
                abi: votingAbi,
                functionName: 'candidatesCount',
              },

              {
                address: '0xa2D8d027a950e4288317FDAF241bad6Bef1761a2',
                abi: votingAbi,
                functionName: 'allCandidate',
              },
        ]
    })

    // config for vote candtate func
    const { config } = usePrepareContractWrite({
        address: '0xa2D8d027a950e4288317FDAF241bad6Bef1761a2',
        abi: votingAbi,
        functionName: 'vote',
        args: [candidateId]
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
        // setCandidateId(id)
        write?.()
        isSuccess()
        waitSuccess()
    }


    return ( 
        <div className="absolute inset-0 z-[200] flex justify-center bg-overlayPrimary pt-[140px] bg-slate-800 bg-opacity-30">
             <div className="flex flex-col mx-auto w-6/12 gap-y-2">
                <button className="ml-auto p-2 rounded-full bg-slate-200" onClick={closeModal}>
                    <HiMiniXMark strokeWidth={3} color="red"/>
                </button>
            
                <h4>{String(data?.[0].result) ?? 'not found'}</h4>

                <div className="grid grid-cols-3 gap-[20px] bg-white p-5 rounded-lg">
                    
                    {data?.[1].result.map((item)=>(
                        <div className="shadow p-2 border-slate-300 rounded-md flex flex-col items-center gap-y-4">
                            <h4>{item.id}</h4>
                            <h4>{item.name}</h4>
                            <h4>{item.voteCount}</h4>
                            <button
                                className="p-2 px-4 bg-green-500 text-white text-xs rounded-full"
                                onClick={handleSubmit}
                            >
                                {writeLoading || waitLoading ? `voting ...` : `vote`}
                            </button>
                        </div>
                    )) ?? 'not found'}
                   
                </div>
            </div>   
        </div>
     );
}
 
export default CandidatesModal;