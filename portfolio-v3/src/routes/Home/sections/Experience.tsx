import SectionHeader from "../../../components/SectionHeader";
import { ReactComponent as DownloadIcon } from '../../../assets/icons/Download.svg';
import Timeline from "../components/Timeline";

export default function Experience() {
    return (
        <div id="experience" className="w-full bg-dark px-6 sm:px-10 py-[64px] sm:py-[100px]">
            <div className="mx-auto max-w-[1200px] h-full">
                <div className="flex flex-col justify-start items-start gap-[64px] w-full">
                    <div className="w-full flex justify-between items-center">
                        <SectionHeader 
                            title="Experience"
                            subtitle="Where I've Worked"
                        />
                        <a
                            href="/Melanie Tojong Resume 2026.pdf"
                            download
                            target="_blank"
                            rel="noreferrer"
                            className="pulse-btn text-accent text-[14px] px-4 w-auto flex justify-center items-center h-[45px] relative"
                        >
                            <div className="w-[20px]"><DownloadIcon /></div>
                            <p className="pl-3 hidden">Download Resume</p>
                        </a>
                    </div>
                    <Timeline />
                </div>
            </div>
        </div>
    )
}