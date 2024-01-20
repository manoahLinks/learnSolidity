import {FaSpinner} from 'react-icons/fa6';

const Laoding = () => {
    return ( 
        <div className="flex p-2">
            <FaSpinner className='animate-spin' size={20}/>
        </div>
     );
}
 
export default Laoding;