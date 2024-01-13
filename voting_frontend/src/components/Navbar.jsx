import { ConnectButton } from '@rainbow-me/rainbowkit';

const Navbar = () => {
    return ( 
        <div className="flex justify-between w-full p-3">
            <h4>INEC.ng</h4>
            <ConnectButton/>
        </div>
     );
}
 
export default Navbar;