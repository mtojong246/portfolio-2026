import { MouseEvent } from 'react';
import { useNavigate } from 'react-router';
import { ReactComponent as CloseIcon } from '../../../assets/icons/x.svg';

const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: 'smooth' })
}

export default function Menu({
    showMenu,
    toggleMenu,
}: {
    showMenu: boolean,
    toggleMenu: () => void,
}) {
    const navigate = useNavigate();

    const routes: {label: string, action: (e:any) => void}[] = [
        {
            label: "// home",
            action: (e:MouseEvent<HTMLButtonElement>) => { e.preventDefault(); navigate('/'); toggleMenu() }
        },
        {
            label: "// about",
            action: (e:MouseEvent<HTMLButtonElement>) => { e.preventDefault(); scrollToSection('about'); toggleMenu() }
        },
        {
            label: "// experience",
            action: (e:MouseEvent<HTMLButtonElement>) => { e.preventDefault(); scrollToSection('experience'); toggleMenu() }
        },
        {
            label: "// work",
            action: (e:MouseEvent<HTMLButtonElement>) => { e.preventDefault(); scrollToSection('work'); toggleMenu() }
        },
        {
            label: "// contact",
            action: (e:MouseEvent<HTMLButtonElement>) => { e.preventDefault(); scrollToSection('contact'); toggleMenu() }
        }
    ]

    return (
        <div id="mobile-menu" className={`fixed ${showMenu ? 'show' : ''} top-0 bottom-0 left-0 right-0 flex md:hidden z-[100] justify-start items-start`}>
            <div className='w-[80%] shrink-0 h-full bg-white'>
            <div className="w-full px-6 sm:px-10 h-auto sm:h-[120px] py-4 sm:py-0 flex justify-start items-center">
                <button onClick={toggleMenu} className='w-[56px] aspect-square rounded-full flex justify-center items-center bg-[#C7C7C8]/[0.3]'>
                    <div className="w-[24px]"><CloseIcon /></div>
                </button>
            </div>
            <div className='w-full px-6 sm:px-10 py-4 flex flex-col justify-start items-start gap-6'>
                {routes.map(route => {
                    const { label, action } = route;
                    return (
                        <button onClick={action} className='text-[14px]'>{label}</button>
                    )
                })}
            </div>
            </div>
            <button onClick={toggleMenu} className='grow h-full'></button>
        </div>
    )
}