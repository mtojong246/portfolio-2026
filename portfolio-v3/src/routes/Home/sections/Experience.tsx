import Button from "../../../components/Buttons/Button";
import SectionHeader from "../../../components/SectionHeader";
import { ReactComponent as DownloadIcon } from '../../../assets/icons/Download.svg';

export default function Experience() {
    return (
        <div className="w-full bg-dark px-[64px] py-[100px]">
            <div className="mx-auto max-w-[1200px] h-full">
                <div className="flex flex-col justify-start items-start gap-[64px] w-full">
                    <div className="w-full flex justify-between items-center">
                        <SectionHeader 
                            title="Experience"
                            subtitle="Where I've Worked"
                            id="experience"
                        />
                        <Button 
                            label="Download Resume"
                            dir="right"
                            icon={<DownloadIcon />}
                            action={(e:any) => {}}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}