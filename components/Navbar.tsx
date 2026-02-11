import Image from 'next/image';

const Navbar = () => {
    return (
        <nav>
            <Image src={'/logo_black.png'} alt='Logo' />
        </nav>
    );
};

export default Navbar;