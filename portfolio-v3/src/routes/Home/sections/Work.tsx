import { useEffect, useRef } from "react";
import SectionHeader from "../../../components/SectionHeader";

interface WorkInformation {
    size: string;
    projectTitle: string;
    tech: string;
}

const WorkCard = ({
    workInfo,
}: {
    workInfo: WorkInformation,
}) => {
    const { size, projectTitle, tech } = workInfo;

    return (
        <div className={`${size} flex flex-col justify-start items-stretch rounded-[16px] border border-outline overflow-hidden`}>
            <div className="grow w-full bg-light">

            </div>
            <div className="w-full flex flex-col justify-start items-start gap-2 p-6 shrink-0">
                <p className="text-white font-semibold">{projectTitle}</p>
                <p className="text-secondary text-[12px]">{tech}</p>
            </div>
        </div>
    )
}

const projects: WorkInformation[] = [
    {
        projectTitle: "AI Report Generation Tool",
        tech: "React / FastAPI / Langchain",
        size: "big",
    },
    {
        projectTitle: "CPI Business Website",
        tech: "Squarespace",
        size: "",
    },
    {
        projectTitle: "Admin Dashboard",
        tech: "React / Firebase",
        size: "",
    },
    {
        projectTitle: "ML",
        tech: "React / Firebase",
        size: "big",
    },
    {
        projectTitle: "myPAbox v2",
        tech: "React / Firebase",
        size: "",
    },
]

export default function Work() {
    // const cardRefs = useRef([]);

    // useEffect(() => {
    //     const observer = new IntersectionObserver(
    //         (entries) => {
    //             entries.forEach((entry) => {
    //             if (entry.isIntersecting) entry.target.classList.add("visible");
    //             });
    //         },
    //         { threshold: 0.1 }
    //     );
    //     cardRefs.current.forEach((el) => el && observer.observe(el));
    //     return () => observer.disconnect();
    // }, []);

    return (
        <div className="w-full bg-dark px-[64px] py-[100px]">
            <div className="mx-auto max-w-[1200px] h-full">
                <div className="flex flex-col justify-start items-start gap-[64px] w-full">
                    <SectionHeader 
                        title="Work"
                        subtitle="What I've Made"
                        id="work"
                    />
                    <div className="work-grid w-full">
                        {projects.map(project => (
                            <WorkCard workInfo={project}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}