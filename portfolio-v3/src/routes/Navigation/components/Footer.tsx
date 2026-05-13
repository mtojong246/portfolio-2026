import { ReactNode } from "react"
import { ReactComponent as LinkedinIcon } from '../../../assets/icons/Linkedin.svg';
import { ReactComponent as GithubIcon } from '../../../assets/icons/Github.svg';
import { ReactComponent as EmailIcon } from '../../../assets/icons/Email.svg';
import { EMAIL_LINK, GITHUB_LINK, LINKEDIN_LINK } from "../../../constants";

interface FooterLink {
    icon: ReactNode;
    link: string;
}

const footerLinks: FooterLink[] = [
    {
        icon: <LinkedinIcon />,
        link: LINKEDIN_LINK,
    },
    {
        icon: <GithubIcon />,
        link: GITHUB_LINK,
    },
    {
        icon: <EmailIcon />,
        link: EMAIL_LINK,
    }
]

export default function Footer() {
    return (
        <div className="w-full flex justify-between items-center gap-8 px-[64px] py-6 bg-dark">
            <p className="text-white text-[14px]">
                MelanieTojong @2026. All rights reserved.
            </p>
            <div className="flex justify-center items-center gap-3">
                {footerLinks.map(footerLink => {
                    const { icon, link } = footerLink;
                    return (
                        <a href={link} rel="noreferrer" target="_blank" className="text-white hover:text-accent transition-all">
                            <div className="w-[20px]">{icon}</div>
                        </a>
                    )
                })}
            </div>
        </div>
    )
}