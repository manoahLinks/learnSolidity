import { Outlet } from "react-router-dom";
import { Navbar, Sidebar } from "../components";
import votingAbi from '../../utils/votingAbi.json';

import { useContractReads, useContractWrite, usePrepareContractWrite, useWaitForTransaction } from 'wagmi';

const Main = () => {

    const { data } = useContractReads({
        contracts: [
          {
            address: '0xa2D8d027a950e4288317FDAF241bad6Bef1761a2',
            abi: votingAbi,
            functionName: 'owner',
          },
          {
            address: '0xa2D8d027a950e4288317FDAF241bad6Bef1761a2',
            abi: votingAbi,
            functionName: 'candidatesCount',
          },
          {
            address: '0xa2D8d027a950e4288317FDAF241bad6Bef1761a2',
            abi: votingAbi,
            functionName: 'votersCount',
          },
          {
            address: '0xa2D8d027a950e4288317FDAF241bad6Bef1761a2',
            abi: votingAbi,
            functionName: 'totalVotes',
          },
        ],
      })


    return ( 
        <div className="flex flex-col h-screen w-full">
            <Navbar/>
            <div className="grid grid-cols-5 flex-1">
                <div>
                    <Sidebar votingData={data}/>
                </div>
                <div className="flex flex-1 bg-[#F5F5F5] col-span-4">
                    <Outlet />
                    {/* <h4>{String(data?.[0].result) ?? 'not found'}</h4> */}
                </div>
            </div>
        </div>
     );
}
 
export default Main;