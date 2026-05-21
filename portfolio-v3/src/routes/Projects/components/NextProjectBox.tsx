import { ReactNode, useMemo, MouseEvent } from "react"
import { ProjectType } from "../../../projects"
import { ReactComponent as ArrowRight } from '../../../assets/icons/Arrow-Right.svg';
import { ReactComponent as ArrowLeft } from '../../../assets/icons/Arrow-Left.svg';
import { motion } from 'motion/react';
import { generateRandomString } from "../../../utils";
import useNav from "../../../useNav";
import { PLACEHOLDER_LINK } from "../../../constants";

const ArrowButton = ({
    icon,
    action,
}: {
    icon: ReactNode,
    action: (e:any) => void,
}) => {
    return (
        <button onClick={action} className="w-[36px] bg-none hover:bg-[#C7C7C8]/[0.3] text-black hover:text-accent transition-all aspect-square rounded-full flex justify-center items-center">
            <div className="w-[18px]">{icon}</div>
        </button>
    )
}

export default function NextProjectBox({
    projects,
    currentProject,
}: {
    projects: ProjectType[],
    currentProject: ProjectType | null,
}) {
    const { navigateToRoute } = useNav();
    
    const nextProject: ProjectType | null = useMemo(() => {
        if (currentProject) {
            const idx = projects.indexOf(currentProject);

            if (idx < projects.length-1) {
                return projects[idx+1];
            } else {
                return projects[0];
            }
        }
        return null;
        
    }, [currentProject, projects]);

    const previousProject: ProjectType | null = useMemo(() => {
        if (currentProject) {
            const idx = projects.indexOf(currentProject);

            if (idx > 0) {
                return projects[idx-1];
            } else {
                return projects[projects.length-1];
            }
        };

        return null;
    }, [currentProject, projects])

    const goToNextProject = (e: MouseEvent<HTMLButtonElement>) => {
        if (nextProject) {
            navigateToRoute(`/projects/${nextProject.id}`);
        } 
    };

    const goToPrevProject = (e: MouseEvent<HTMLButtonElement>) => {
        if (previousProject) {
            navigateToRoute(`/projects/${previousProject.id}`)
        }
    }

    return (
        <motion.div
            key={generateRandomString()}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.3, ease: 'easeIn' }}
            className="next-project-box fixed bottom-[24px] sm:bottom-[40px] right-[24px] sm:right-[40px] max-w-[260px]"
        >
            <div className="w-full relative bg-white rounded-[6px] p-8 flex flex-col justify-start items-start gap-6 z-[20]">
                <div className="flex justify-between items-center gap-3">
                    <p>Next Project</p>
                    <div className="flex gap-2">
                        <ArrowButton action={goToPrevProject} icon={<ArrowLeft />}/>
                        <ArrowButton action={goToNextProject} icon={<ArrowRight />}/>
                    </div>
                </div>
                <p className="text-[18px] font-medium font-mono">{nextProject && nextProject.title}</p>
            </div>
            <div className="next-project-preview absolute top-0 left-0 right-0 bottom-0 rounded-[6px] z-[10] overflow-hidden">
                <img 
                    src={nextProject ? nextProject.previewImg : PLACEHOLDER_LINK} 
                    alt='next-project-preview'
                    className="w-full object-cover"
                />
            </div>
        </motion.div>
    )
}