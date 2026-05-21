import { MouseEvent } from 'react';
import { ReactComponent as CloseIcon } from '../../../assets/icons/x.svg';
import useNav from '../../../useNav';


export default function Menu({
    showMenu,
    toggleMenu,
}: {
    showMenu: boolean,
    toggleMenu: () => void,
}) {
    const { navigateToHome, navigateToSection } = useNav();

    const routes: {label: string, action: (e:any) => void}[] = [
        {
            label: "// home",
            action: (e:MouseEvent<HTMLButtonElement>) => { e.preventDefault(); navigateToHome(); toggleMenu() }
        },
        {
            label: "// about",
            action: (e:MouseEvent<HTMLButtonElement>) => { e.preventDefault(); navigateToSection('about'); toggleMenu() }
        },
        {
            label: "// experience",
            action: (e:MouseEvent<HTMLButtonElement>) => { e.preventDefault(); navigateToSection('experience'); toggleMenu() }
        },
        {
            label: "// work",
            action: (e:MouseEvent<HTMLButtonElement>) => { e.preventDefault(); navigateToSection('work'); toggleMenu() }
        },
        {
            label: "// contact",
            action: (e:MouseEvent<HTMLButtonElement>) => { e.preventDefault(); navigateToSection('contact'); toggleMenu() }
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