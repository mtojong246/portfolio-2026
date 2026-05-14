import { MouseEvent } from 'react';
import { useNavigate } from 'react-router';
import { ReactComponent as DownloadIcon } from '../../../assets/icons/Download.svg';
import Button from '../../../components/Buttons/Button';

const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: 'smooth' })
}


export default function NavigationBar({
    isSticky,
}: {
    isSticky: boolean,
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
        <div className={`w-full flex justify-between items-center px-[64px] ${isSticky ? 'sticky h-auto py-4' : 'absolute h-[120px] py-0'} top-0 left-0 right-0 z-[50]`}>
            <div className="grow flex justify-start">
                {!isSticky && (
                    <p className="text-white text-[32px] font-bold">MT</p>
                )}
            </div>
            <div className="flex gap-5">
                {routes.map(route => {
                    const { label, action } = route;

                    return (
                        <button onClick={action} className="text-white hover:text-accent transition-all">{label}</button>
                    )
                })}
            </div>
            <div className="grow flex justify-end">
                {!isSticky && (
                    <Button 
                        label='resume'
                        icon={<DownloadIcon />}
                        dir='left'
                        action={(e:any) => {}}
                    />
                )}
            </div>
        </div>
    )
}