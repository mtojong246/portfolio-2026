import Button from "../../../components/Buttons/Button";
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
                        <Button 
                            label="Download Resume"
                            dir="right"
                            icon={<DownloadIcon />}
                            action={(e:any) => {}}
                        />
                    </div>
                    <Timeline />
                </div>
            </div>
        </div>
    )
}