import { HiMiniXMark } from "react-icons/hi2";
import { useContractReads } from 'wagmi';
import votingAbi from '../../utils/votingAbi.json';

const CandidatesModal = ({closeModal}) => {

    const {data} = useContractReads({
        contracts: [
            {
                address: '0xf43409AD775624f5a42Efc394B59bE41f5cd09B6',
                abi: votingAbi,
                functionName: 'candidatesCount',
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

                <div className="grid grid-cols-3 gap-x-[50px]">
                    <div className="border p-2 border-slate-300 rounded-md flex flex-col items-center">
                        <h4>Manoah</h4>
                        <button>
                            vote
                        </button>
                    </div>

                    <div className="border p-2 border-slate-300 rounded-md">

                    </div>
                </div>
            </div>   
        </div>
     );
}
 
export default CandidatesModal;