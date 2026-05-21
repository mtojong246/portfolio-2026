
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
        <div className={`timeline-item ${dir}`}>
            <div className="w-full flex flex-col justify-start items-stretch px-6 border border-outline bg-light rounded-[16px]">
                {/* Top section */}
                <div className="w-full flex flex-col justify-start items-stretch gap-3 py-6 border-b border-outline">
                    <div className="w-full flex justify-between items-center gap-4">
                        <p className="text-[18px] font-bold text-white">{positionTitle}</p>
                        <div className="px-[12px] py-[2px] text-[14px] text-black bg-white rounded-xl">
                            {companyName}
                        </div>
                    </div>
                    <div className="w-full flex justify-between items-center gap-4">
                        <p className="text-white text-[14px]">{employmentType} / {locationType}</p>
                        <p className="text-white text-[14px]">{dateRange}</p>
                    </div>
                </div>
                {/* Bottom section */}
                <div className="w-full flex flex-col-reverse justify-start items-stretch gap-4 pt-4 pb-6">
                    <div className="flex flex-wrap justify-start items-start gap-2">
                        {skills.map(skill => (
                            <div className="py-1 px-3 rounded-full text-accent text-xs bg-[#00F9D6]/[0.1]">{skill}</div>
                        ))}
                    </div>
                    <p className="text-white text-[14px] font-light">{description}</p>
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
            "Langchain",
            "AWS Bedrock",
            "Airflow",
            "Docker"
        ],
        description: (
            `Built and delivered an LLM-driven document generation platform \
            that transforms unstructured PDF and DOCX data into professional \
            regulatory reports in minutes using Python, LangChain, and AWS Bedrock. \
            Directed a complete UX/UI redesign and frontend redevelopment of the \
            company's ML software suite in React and TypeScript, collaborating \
            with cross-functional teams and external clients to improve usability \
            and integrate data visualization tools. Supported lead generation through \
            website redesigns, live demos, and purpose-built demo sites with email capture.`
        ),
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
        description: (
            `Led full stack development of myPABox v2, translating Figma \
            mockups into production-ready React components while building \
            and maintaining a Firebase backend for user authentication and data storage. \
            Integrated the OpenAI API to auto-generate personalized application essays \
            from structured user data and independently architected an internal admin \
            dashboard to streamline data entry and validation workflows.`
        )
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
        description: (
            `Designed and developed custom websites for clients across multiple industries, \
            leveraging various CMS platforms to deliver tailored digital experiences aligned \
            with each client's brand and goals. Independently managed the full project \
            lifecycle — from concept through launch — maintaining direct client relationships \
            and incorporating iterative feedback to ensure on-schedule delivery.`
        )
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