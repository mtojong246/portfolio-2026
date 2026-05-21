import { MouseEvent } from "react";

const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: 'smooth' })
}

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    })
}

export default function StickyNav() {

    const routes: {label: string, action: (e:any) => void}[] = [
        {
            label: "// home",
            action: (e:MouseEvent<HTMLButtonElement>) => { e.preventDefault(); scrollToTop(); }
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
        <div id='sticky-nav' className={`w-full hidden lg:flex justify-center items-center px-6 sm:px-10 fixed h-auto py-4 glass top-0 left-0 right-0 z-[50]`}>
            
            <div className="flex gap-6">
                {routes.map(route => {
                    const { label, action } = route;

                    return (
                        <button onClick={action} className="text-white hover:text-accent transition-all text-[14px] font-mono">{label}</button>
                    )
                })}
            </div>
            
        </div>
    )
}