import { ReactNode } from "react";
import SectionHeader from "../../../components/SectionHeader";
import { ReactComponent as EmailIcon } from '../../../assets/icons/Email.svg';
import { ReactComponent as LinkedinIcon } from '../../../assets/icons/Linkedin.svg';
import { ReactComponent as GithubIcon } from '../../../assets/icons/Github.svg';

interface ContactInfo {
    contactType: string;
    contactInfo: string;
    icon: ReactNode;
    link: string;
}

const ContactCard = ({
    contactInfo,
}: {
    contactInfo: ContactInfo,
}) => {
    return (
        <></>
    )
}

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
                    <div className="w-full flex justify-between items-center gap-[64px]">
                        <div className="grow flex flex-col justify-start items-start">
                            <p className="mb-[32px] text-white">
                                Lorem ipsum dolor sit amet consectetur. Quis quis vitae pretium pharetra. 
                            </p>
                            <button className="mb-[64px]">mtojong@gmail.com</button>
                            <div className="w-full contact-grid"></div>
                        </div>
                        <div className="grow"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}