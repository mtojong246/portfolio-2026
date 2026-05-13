import SectionHeader from "../../../components/SectionHeader";
import { motion, AnimatePresence } from 'motion/react';

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.95, y: -10 },
};

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
        <motion.button
            key={projectTitle} 
            layout 
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`${size} flex flex-col justify-start items-stretch rounded-[16px] border border-outline overflow-hidden`}
        >
            <div className="grow w-full bg-light">

            </div>
            <div className="w-full flex flex-col justify-start items-start gap-2 p-6 shrink-0">
                <p className="text-white font-semibold">{projectTitle}</p>
                <p className="text-secondary text-[12px]">{tech}</p>
            </div>
        </motion.button>
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

    return (
        <div id="work" className="w-full bg-dark px-[64px] py-[100px]">
            <div className="mx-auto max-w-[1200px] h-full">
                <div className="flex flex-col justify-start items-start gap-[64px] w-full">
                    <SectionHeader 
                        title="Work"
                        subtitle="What I've Made"
                    />
                    <motion.div className="work-grid w-full" layout>
                        <AnimatePresence mode="popLayout">
                        {projects.map(project => (
                            <WorkCard workInfo={project}/>
                        ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}