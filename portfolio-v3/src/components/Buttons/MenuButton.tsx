import { MouseEvent } from 'react';
import { ReactComponent as MenuIcon } from '../../assets/icons/Hamburger.svg';

export default function MenuButton({
    toggleMenu,
}: {
    toggleMenu: () => void,
}) {

    const toggle = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        toggleMenu();
    }

    return (
        <button onClick={toggle} className="block md:hidden w-[56px] bg-[#303030]/[0.7] hover:bg-[#303030]/[1] aspect-square rounded-full flex justify-center items-center">
            <div className='w-[24px] text-white'><MenuIcon /></div>
        </button>
    )
}