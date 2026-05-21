import { MouseEvent } from 'react';
import { ReactComponent as DownloadIcon } from '../../../assets/icons/Download.svg';
import { ReactComponent as LogoIcon } from '../../../assets/icons/portfolio-logo.svg';
import MenuButton from '../../../components/Buttons/MenuButton';
import useNav from '../../../useNav';

const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: 'smooth' })
}



export default function NavigationBar({
    toggleMenu,
}: {
    toggleMenu: () => void,
}) {
    const { navigateToHome } = useNav();

    const routes: {label: string, action: (e:any) => void}[] = [
        {
            label: "// home",
            action: (e:MouseEvent<HTMLButtonElement>) => { e.preventDefault(); navigateToHome() }
        },
        {
            label: "// about",
            action: (e:MouseEvent<HTMLButtonElement>) => { e.preventDefault(); scrollToSection('about') }
        },
        {
            label: "// experience",
            action: (e:MouseEvent<HTMLButtonElement>) => { e.preventDefault(); scrollToSection('experience') }
        },
        {
            label: "// work",
            action: (e:MouseEvent<HTMLButtonElement>) => { e.preventDefault(); scrollToSection('work') }
        },
        {
            label: "// contact",
            action: (e:MouseEvent<HTMLButtonElement>) => { e.preventDefault(); scrollToSection('contact') }
        }
    ]

    

    return (
        <div className={`w-full flex justify-between items-center px-6 sm:px-10 absolute h-auto sm:h-[120px] py-4 sm:py-0 top-0 left-0 right-0 z-[50]`}>
            <div className='flex gap-6 justify-start items-center'>
                <MenuButton toggleMenu={toggleMenu}/>
                <div className="w-[100px] flex justify-start">
                    <button 
                        onClick={(e: any) => {
                            e.preventDefault();
                            navigateToHome();
                        }}
                        className="w-[45px]"
                    >
                        <LogoIcon />
                    </button>
                </div>
            </div>
            <div className="hidden md:flex gap-6">
                {routes.map(route => {
                    const { label, action } = route;

                    return (
                        <button onClick={action} className="text-white hover:text-accent transition-all text-[14px] font-mono">{label}</button>
                    )
                })}
            </div>
            <div className="w-[100px] flex justify-end">
                <a
                    href="/Melanie Tojong Resume 2026.pdf"
                    download
                    target="_blank"
                    rel="noreferrer"
                    className="pulse-btn text-accent text-[14px] px-4 w-auto flex justify-center items-center h-[45px] relative"
                >
                    <div className="w-[20px] shrink-0"><DownloadIcon /></div>
                    <p className="pl-3">resume</p>
                </a>
            </div>
        </div>
    )
}