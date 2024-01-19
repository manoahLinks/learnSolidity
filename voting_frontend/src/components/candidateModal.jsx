import { HiMiniXMark } from "react-icons/hi2";
import { useContractReads } from 'wagmi';
import votingAbi from '../../utils/votingAbi.json';

const CandidatesModal = ({closeModal}) => {

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
    return ( 
        <div className="absolute inset-0 z-[200] flex justify-center bg-overlayPrimary pt-[140px] bg-slate-800 bg-opacity-30">
             <div className="flex flex-col mx-auto w-6/12 gap-y-2">
                <button className="ml-auto p-2 rounded-full bg-slate-200" onClick={closeModal}>
                    <HiMiniXMark strokeWidth={3} color="red"/>
                </button>
            
                <h4>{String(data?.[0].result) ?? 'not found'}</h4>

                <div className="grid grid-cols-3 gap-x-[20px] bg-white p-5 rounded-lg">
                    
                    {data?.[1].result.map((item)=>(
                        <div className="shadow p-2 border-slate-300 rounded-md flex flex-col items-center gap-y-4">
                            <h4>{item.id}</h4>
                            <h4>{item.name}</h4>
                            <h4>{item.voteCount}</h4>
                            <button
                                className="p-2 px-4 bg-green-500 text-white text-xs rounded-full"
                            >
                                vote
                            </button>
                        </div>
                    )) ?? 'not found'}
                   
                </div>
            </div>   
        </div>
     );
}
 
export default CandidatesModal;