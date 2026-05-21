import { ReactNode, useEffect, useMemo, useState } from "react";
import { useParams } from "react-router";
import { projects, ProjectType } from "../../../projects";
import BackButton from "../../../components/Buttons/BackButton";
import { ReactComponent as LinkIcon } from '../../../assets/icons/Link.svg';
import { ReactComponent as GithubIcon } from '../../../assets/icons/Github.svg';
import { ReactComponent as InfoIcon } from '../../../assets/icons/InformationCircle.svg';
import StatusBadge from "../components/StatusBadge";
import { motion, AnimatePresence } from 'motion/react';
import NextProjectBox from "../components/NextProjectBox";
import { PLACEHOLDER_LINK } from "../../../constants";
import TechStack from "../components/TechStack";

interface ProjectLink {
    label: string,
    icon: ReactNode,
    link: string,
}

const PlaceholderComponent = () => {
    return (
        <></>
    )
}

export default function Project() {
    const { id } = useParams();
    const [ project, setProject ] = useState<ProjectType | null>(null);

    useEffect(() => {
        if (id) {
            const match = projects.find(p => p.id === id);
            if (match) {
                setProject(match);
            }
        }
    }, [id]);

    const projectLinks: ProjectLink[] = useMemo(() => {
        const links: ProjectLink[] = [];

        if (project) {
            const allLinks = [
                {
                    label: "Visit Site",
                    icon: <LinkIcon />,
                    link: project.siteLink,
                },
                {
                    label: "View Repo",
                    icon: <GithubIcon />,
                    link: project.githubLink,
                }
            ];

            allLinks.forEach(link => {
                if (link.link) links.push({...link, link: link.link!})
            })
        };

        return links;
    }, [project]);

    const Child = project ? project.caseStudyComponent : PlaceholderComponent;
    
    return (
        <AnimatePresence>
            <div className="w-full min-h-screen bg-dark">
                <div className="w-full px-6 sm:px-10 pt-[120px]">
                    <BackButton />
                </div>
                {project && (
                <div className="w-full p-6 sm:p-10">
                    <div className="max-w-[1200px] mx-auto flex flex-col justify-start items-center">
                        {/* Title section */}
                        <div className="flex flex-col justify-start items-start gap-[32px] sm:gap-[48px] max-w-[600px] w-full">   
                            <motion.div 
                                key={id}
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: 0.2, ease: 'easeIn' }}
                                className="flex flex-col justify-start items-start gap-6 w-full"
                            >
                                <StatusBadge status={project.status}/>
                                <h1 
                                    className="text-white font-bold text-[32px] sm:text-[40px]"
                                >
                                    {project.title}
                                </h1>
                                {projectLinks.length > 0 ? (
                                    <div className="flex justify-start items-center gap-4">
                                        {projectLinks.map(projectLink => {
                                            const { label, icon, link } = projectLink;
                                            return (
                                                <a href={link} className="flex justify-center items-center text-accent gap-2 hover:brightness-[0.8] transition-all">
                                                    <div className="w-[20px]">{icon}</div>
                                                    <p>{label}</p>
                                                </a>
                                            )
                                        })}
                                    </div>
                                ) : (
                                    <div className="flex justify-center items-center gap-2 text-secondary">
                                        <div className="w-[20px]"><InfoIcon /></div>
                                        <p>Demo available upon request</p>
                                    </div>
                                )}
                            </motion.div>
                            <p className="text-white">{project.description}</p>
                            <TechStack techStack={project.techStack}/>
                        </div>
                        {/* Image/gallery */}
                        <div className="w-full my-[48px] sm:my-[64px] rounded-[16px] overflow-hidden">
                            <img 
                                alt={`${project.title} Preview`}
                                src={project.previewImg ?? PLACEHOLDER_LINK}
                                className="object-cover object-top h-full w-full"
                            />
                        </div>
                        {/* Case study / Showcase */}
                        <div className="flex flex-col justify-start items-center gap-6 w-full text-white">
                            <Child />
                        </div>
                    </div>
                </div>
                )}
            </div>
            <NextProjectBox projects={projects} currentProject={project}/>
        </AnimatePresence>
    )
}