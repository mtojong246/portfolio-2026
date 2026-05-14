import SectionHeader from "../../../components/SectionHeader";
import { motion, AnimatePresence } from 'motion/react';
import { projects, ProjectType } from "../../../projects";

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.95, y: -10 },
};


const WorkCard = ({
    workInfo,
}: {
    workInfo: ProjectType,
}) => {
    const { size, title, tech } = workInfo;

    return (
        <motion.button
            key={title} 
            layout 
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`${size} work-card flex flex-col justify-start items-stretch rounded-[16px] border border-outline overflow-hidden`}
        >
            <div className="grow w-full bg-light overflow-hidden">
                <img src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"  className="object-cover h-full"/>
            </div>
            <div className="w-full flex flex-col justify-start items-start gap-2 p-6 shrink-0 relative">
                <p className="text-white font-semibold">{title}</p>
                <p className="subtitle-default text-secondary text-[12px] text-left">{tech.join(' / ')}</p>
                <p className="subtitle-hover text-accent text-[12px] text-left">Show Project →</p>
            </div>
        </motion.button>
    )
}

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