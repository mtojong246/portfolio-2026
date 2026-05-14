import { ReactComponent as LinkedinIcon } from '../../../assets/icons/Linkedin.svg';
import { ReactComponent as GithubIcon } from '../../../assets/icons/Github.svg';
import { ReactComponent as EmailIcon } from '../../../assets/icons/Email.svg';
import { ReactNode } from 'react';

const LinkButton = ({ icon, link }: { icon: ReactNode, link: string }) => {
    return (
        <a 
            href={link}
            target='_blank'
            rel='noreferrer'
            className='contact-card text-white hover:text-accent transition-all flex justify-center items-center aspect-square border border-outline hover:border-accent w-[60px] rounded-full'
        >
            <div className='w-[24px]'>{icon}</div>
        </a>
    )
}

const links: { icon: ReactNode, link: string }[] = [
    {
        icon: <LinkedinIcon />,
        link: 'https://www.linkedin.com/in/melanie-tojong-4b5149158/',
    },
    {
        icon: <GithubIcon />,
        link: 'https://github.com/mtojong246',
    },
    {
        icon: <EmailIcon />,
        link: 'mailto:mtojong@gmail.com',
    }
]


export default function Cover() {
    return (
        <div className="w-full h-screen px-[64px] bg-dark relative">
            <div className='cover absolute top-0 left-0 right-0 bottom-0'>
                <div className='light x1'></div>
                <div className='light x2'></div>
                <div className='light x3'></div>
                <div className='light x4'></div>
                <div className='light x5'></div>
                <div className='light x6'></div>
                <div className='light x7'></div>
                <div className='light x8'></div>
                <div className='light x9'></div>
            </div>
            <div className='cover-fade absolute top-0 left-0 right-0 bottom-0 z-10'></div>
            <div className="flex flex-col justify-center items-center mx-auto h-full max-w-[1200px] relative z-20">
                <h1 className="text-white text-[96px] font-bold mb-3">MELANIE TOJONG</h1>
                <h3 
                    className="cover-subtitle text-white text-[22px] font-medium mb-[64px]"
                >
                    SOFTWARE ENGINEER, FRONTEND DEVELOPER & DESIGNER
                </h3>
                <div className='flex justify-center items-center gap-6'>
                    {links.map(iconLink => {
                        const { icon, link } = iconLink;

                        return (
                            <LinkButton icon={icon} link={link}/>
                        )
                    })}
                </div>
                <div className="scroll-down">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            
        </div>
    )
}