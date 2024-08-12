import { Link } from 'react-router-dom';

function Navbar(){
return(
    <nav className="mx-auto mb-3 mt-3">
                <div className="flex justify-center items-center text-white space-x-4 p-2 mt-4">
                    <Link to="/" className='border border-[#45171d] rounded-full p-1 w-20 text-center bg-[#fecea8] text-[#45171d] font-medium drop-shadow-xl hover:bg-opacity-[0.5]'>News</Link>
                    <Link to="/general" className='border border-[#45171d] rounded-full p-1 w-20 text-center bg-[#fecea8] font-medium text-[#45171d] hover:bg-opacity-[0.5]'>Articles</Link>
                    <Link to="/paper" className='border border-[#45171d] rounded-full p-1 w-20 text-center bg-[#fecea8] font-medium text-[#45171d] hover:bg-opacity-[0.5]'>Papers</Link>
                </div>
            </nav>
);

}

export default Navbar;