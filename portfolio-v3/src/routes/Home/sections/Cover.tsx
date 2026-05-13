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
        <div className="w-full h-screen bg-dark px-[64px]">
            <div className="flex flex-col justify-center items-center mx-auto h-full max-w-[1200px]">
                <h1 className="text-white text-[96px] font-bold mb-3">MELANIE TOJONG</h1>
                <h3 className="text-white text-[22px] font-medium mb-[64px]">SOFTWARE ENGINEER, FRONTEND DEVELOPER & DESIGNER</h3>
                <div className='flex justify-center items-center gap-6'>
                    {links.map(iconLink => {
                        const { icon, link } = iconLink;

                        return (
                            <LinkButton icon={icon} link={link}/>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}