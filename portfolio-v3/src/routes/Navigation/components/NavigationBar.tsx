import { MouseEvent } from 'react';
import { useNavigate } from 'react-router';
import { ReactComponent as DownloadIcon } from '../../../assets/icons/Download.svg';
import Button from '../../../components/Buttons/Button';
import MenuButton from '../../../components/Buttons/MenuButton';

const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: 'smooth' })
}


export default function NavigationBar({
    toggleMenu,
}: {
    toggleMenu: () => void,
}) {
    const navigate = useNavigate();

    const routes: {label: string, action: (e:any) => void}[] = [
        {
            label: "// home",
            action: (e:MouseEvent<HTMLButtonElement>) => { e.preventDefault(); navigate('/') }
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
                    <p className="text-white text-[32px] font-bold">MT</p>
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
                <Button 
                    label='resume'
                    icon={<DownloadIcon />}
                    dir='left'
                    action={(e:any) => {}}
                />
            </div>
        </div>
    )
}