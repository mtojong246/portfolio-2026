
interface ExperienceInfo {
    positionTitle: string;
    companyName: string;
    employmentType: string;
    locationType: string;
    dateRange: string;
    skills: string[];
    description: string;
}

const TimelineContainer = ({
    dir,
    experienceInfo,
}: {
    dir: 'left' | 'right',
    experienceInfo: ExperienceInfo,
}) => {
    const { 
        positionTitle,
        companyName,
        employmentType,
        locationType,
        dateRange,
        skills,
        description,
    } = experienceInfo;

    return (
        <div className={`container ${dir}`}>
            <div className="w-full flex flex-col justify-start items-stretch px-6 border border-outline bg-light rounded-[16px]">
                {/* Top section */}
                <div className="w-full flex flex-col justify-start items-stretch gap-4 py-6 border-b border-outline">
                    <div className="w-full flex justify-between items-center gap-4">
                        <p className="text-[20px] font-bold text-white">{positionTitle}</p>
                        <div className="px-[12px] py-[2px] text-[14px] text-black bg-white rounded-xl">
                            {companyName}
                        </div>
                    </div>
                    <div className="w-full flex justify-between items-center gap-4">
                        <p className="text-white">{employmentType} / {locationType}</p>
                        <p className="text-white">{dateRange}</p>
                    </div>
                </div>
                {/* Bottom section */}
                <div className="w-full flex flex-col justify-start items-stretch gap-4 py-6">
                    <div className="flex flex-wrap justify-start items-start gap-2">
                        {skills.map(skill => (
                            <div className="px-[14px] py-[6px] text-[14px] text-black bg-accent-secondary rounded-xl">{skill}</div>
                        ))}
                    </div>
                    <p className="text-white">{description}</p>
                </div>
            </div>
        </div>
    )
}

const experiences: ExperienceInfo[] = [
    {
        positionTitle: "Software Engineer",
        companyName: "CPI",
        employmentType: "Full-Time",
        locationType: "Raleigh, NC (On-Site)",
        dateRange: "Feb 2024 - Present",
        skills: [
            "JS/TS",
            "React.js",
            "Python",
            "FastAPI",
            "TailwindCSS",
            "Bootstrap",
        ],
        description: "Lorem ipsum dolor sit amet consectetur. Augue sed cras mi posuere quis sagittis convallis cras.",
    },
    {
        positionTitle: "Fullstack Software Developer",
        companyName: "myPAbox",
        employmentType: "Contract",
        locationType: "Remote",
        dateRange: "June 2023 - Present",
        skills: [
            "JS/TS",
            "React.js",
            "Firebase",
            "OpenAI API",
            "TailwindCSS",
        ],
        description: "Lorem ipsum dolor sit amet consectetur. Augue sed cras mi posuere quis sagittis convallis cras.",
    },
    {
        positionTitle: "Freelance Developer",
        companyName: "Self-Employed",
        employmentType: "Contract",
        locationType: "Remote",
        dateRange: "June 2023 - Present",
        skills: [
            "JS/TS",
            "React.js",
            "Next.js",
            "TailwindCSS",
            "Wordpress",
            "Squarespace",
            "Wix",
        ],
        description: "Lorem ipsum dolor sit amet consectetur. Augue sed cras mi posuere quis sagittis convallis cras.",
    },
]


export default function Timeline() {
    return (
        <div className="timeline w-full relative">
            {experiences.map((exp, i) => (
                <TimelineContainer 
                    dir={i%2 === 0 ? "left" : "right"}
                    experienceInfo={exp}
                />
            ))}
        </div>
    )
}