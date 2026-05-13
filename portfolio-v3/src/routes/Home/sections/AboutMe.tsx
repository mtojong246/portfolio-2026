import SectionHeader from "../../../components/SectionHeader";

export default function AboutMe() {
    return (
        <div className="w-full h-screen bg-dark px-[64px]">
            <div className="mx-auto max-w-[1200px] h-full">
                <div className="flex justify-between items-center gap-[64px] w-full">
                    <div className="w-[500px] shrink-0 flex flex-col justify-start items-start gap-8">
                        <SectionHeader 
                            title="About Me"
                            subtitle="Who I Am"
                            id="#about"
                        />
                        <p className="text-white">
                            Lorem ipsum dolor sit amet consectetur. Quis quis vitae pretium pharetra. Sed vestibulum nisi varius diam eu eu. Velit nec cursus arcu feugiat egestas. Amet euismod diam ut proin amet lacus. Curabitur scelerisque eget eget sagittis. Nunc sed amet sagittis magnis. Velit vulputate adipiscing facilisis amet lacus libero vel.
                            <br/><br/>
                            Lorem quam tellus enim eget ultrices ut mauris sed aliquet. Faucibus morbi elementum vitae maecenas ut tellus. Amet tortor etiam facilisis fames leo. Pellentesque proin dignissim neque tincidunt quisque commodo. Mattis elementum lobortis nunc euismod imperdiet scelerisque tempus.
                        </p>
                    </div>
                    <div className="grow"></div>
                </div>
            </div>
        </div>
    )
}