import { ReactNode } from "react";
import SectionHeader from "../../../components/SectionHeader";
import { ReactComponent as EmailIcon } from '../../../assets/icons/Email.svg';
import { ReactComponent as LinkedinIcon } from '../../../assets/icons/Linkedin.svg';
import { ReactComponent as GithubIcon } from '../../../assets/icons/Github.svg';
import ContactForm from "../components/ContactForm";
import { EMAIL_LINK, GITHUB_LINK, LINKEDIN_LINK } from "../../../constants";

interface ContactInfo {
    contactType: string;
    contactDetails: string;
    icon: ReactNode;
    link: string;
}

const ContactCard = ({
    contactInfo,
}: {
    contactInfo: ContactInfo,
}) => {
    const {
        contactType,
        contactDetails,
        icon,
        link,
    } = contactInfo;

    return (
        <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="contact-card px-4 py-5 rounded-lg border border-outline hover:border-accent bg-light transition-all flex justify-start items-center gap-4"
        >
            <div className="w-[32px] text-white">{icon}</div>
            <div className="flex flex-col justify-start items-start gap-1">
                <p className="text-[14px] text-white">{contactType}</p>
                <p className="text-[12px] text-secondary">{contactDetails}</p>
            </div>
        </a>
    )
}

const contacts: ContactInfo[] = [
    {
        contactType: "LinkedIn",
        contactDetails: "@melanie-tojong-4b5149158",
        icon: <LinkedinIcon />,
        link: LINKEDIN_LINK,
    },
    {
        contactType: "Github",
        contactDetails: "@mtojong246",
        icon: <GithubIcon />,
        link: GITHUB_LINK,
    },
    {
        contactType: "Email",
        contactDetails: "mtojong@gmail.com",
        icon: <EmailIcon />,
        link: EMAIL_LINK,
    }
]

export default function Contact() {
    return (
        <div className="w-full bg-dark px-[64px] py-[100px]">
            <div className="mx-auto max-w-[1200px] h-full">
                <div className="flex flex-col justify-start items-start gap-[64px] w-full">
                    <SectionHeader 
                        title="Contact"
                        subtitle="Get In Touch"
                        id="contact"
                    />
                    <div className="w-full flex justify-between items-start gap-[64px]">
                        <div className="w-1/2 flex flex-col justify-start items-start">
                            <p className="mb-[32px] text-white">
                                Lorem ipsum dolor sit amet consectetur. Quis quis vitae pretium pharetra. 
                            </p>
                            <button className="mb-[64px] text-[18px] font-semibold text-white">mtojong@gmail.com</button>
                            <div className="w-full contact-grid">
                                {contacts.map(contact => (
                                    <ContactCard contactInfo={contact}/>
                                ))}
                            </div>
                        </div>
                        <div className="w-1/2">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}