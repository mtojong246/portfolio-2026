import { ReactNode, useMemo, MouseEvent } from "react"
import { ProjectType } from "../../../projects"
import { useNavigate } from "react-router";
import { ReactComponent as ArrowRight } from '../../../assets/icons/Arrow-Right.svg';
import { ReactComponent as ArrowLeft } from '../../../assets/icons/Arrow-Left.svg';
import { motion } from 'motion/react';
import { generateRandomString } from "../../../utils";

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
    const navigate = useNavigate();
    
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
            navigate(`/projects/${nextProject.id}`)
        } 
    };

    const goToPrevProject = (e: MouseEvent<HTMLButtonElement>) => {
        if (previousProject) {
            navigate(`/projects/${previousProject.id}`)
        }
    }

    return (
        <motion.div 
            key={generateRandomString()}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.3, ease: 'easeIn' }}
            className="fixed bottom-[24px] sm:bottom-[40px] right-[24px] sm:right-[40px] max-w-[260px]"
        >
            <div className="relative bg-white rounded-[16px] p-8 flex flex-col justify-start items-start gap-6">
                <div className="flex justify-between items-center gap-3">
                    <p>Next Project</p>
                    <div className="flex gap-2">
                        <ArrowButton action={goToPrevProject} icon={<ArrowLeft />}/>
                        <ArrowButton action={goToNextProject} icon={<ArrowRight />}/>
                    </div>
                </div>
                <p className="text-[18px] font-medium">{nextProject && nextProject.title}</p>
            </div>
        </motion.div>
    )
}