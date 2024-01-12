import SchoolLogo from '../../assets/Screenshot_3.png'

const Navbar = () => {
    return (
        <nav className='py-6'>
            <div className=' container mx-auto items-center gap-x-6 flex justify-between text-white'>
                <a href="/">
                    <img className='h-[40px] rounded-full' src={SchoolLogo} alt="school logo" />
                </a>
                <a href="#" className='px-5 py-2 bg-[#172227] rounded-[44px]'>
                    Get Addmission
                </a>
            </div>
            
        </nav>
    );
};

export default Navbar;