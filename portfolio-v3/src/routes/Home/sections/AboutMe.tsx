import SectionHeader from "../../../components/SectionHeader";
import SkillsChart from "../components/SkillsChart";

export default function AboutMe() {
    return (
        <div id="about" className="w-full bg-dark px-6 sm:px-10 py-[64px] sm:py-[100px]">
            <div className="mx-auto max-w-[1200px] h-full">
                <div className="flex flex-col min-[870px]:flex-row justify-center md:justify-between items-center gap-[64px] w-full">
                    <div className="max-w-[600px] flex flex-col justify-start items-start gap-8">
                        <SectionHeader 
                            title="About Me"
                            subtitle="Who I Am"
                        />
                        <p className="text-white">
                            Lorem ipsum dolor sit amet consectetur. Quis quis vitae pretium pharetra. Sed vestibulum nisi varius diam eu eu. Velit nec cursus arcu feugiat egestas. Amet euismod diam ut proin amet lacus. Curabitur scelerisque eget eget sagittis. Nunc sed amet sagittis magnis. Velit vulputate adipiscing facilisis amet lacus libero vel.
                            <br/><br/>
                            Lorem quam tellus enim eget ultrices ut mauris sed aliquet. Faucibus morbi elementum vitae maecenas ut tellus. Amet tortor etiam facilisis fames leo. Pellentesque proin dignissim neque tincidunt quisque commodo. Mattis elementum lobortis nunc euismod imperdiet scelerisque tempus.
                        </p>
                    </div>
                    <SkillsChart />
                </div>
            </div>
        </div>
    )
}