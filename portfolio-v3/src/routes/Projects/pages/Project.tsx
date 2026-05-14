import { ReactNode, useEffect, useMemo, useState } from "react";
import { useParams } from "react-router";
import { projects, ProjectType } from "../../../projects";
import BackButton from "../../../components/Buttons/BackButton";
import { ReactComponent as LinkIcon } from '../../../assets/icons/Link.svg';
import { ReactComponent as GithubIcon } from '../../../assets/icons/Github.svg';
import StatusBadge from "../components/StatusBadge";

interface ProjectLink {
    label: string,
    icon: ReactNode,
    link: string,
}

const MetadataComponent = ({
    children,
    label,
}: {
    children: ReactNode,
    label: string,
}) => {
    return (
        <div className="w-full">
            <div className="w-full pb-1 border-b border-outline text-white font-semibold mb-3">
                {label}
            </div>
            {children}
        </div>
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

    
    return (
        <div className="w-full min-h-screen bg-dark">
            <div className="w-full px-[64px] pt-[120px]">
                <BackButton />
            </div>
            {project && (
            <div className="w-full p-[64px]">
                <div className="max-w-[1200px] mx-auto flex flex-col justify-start item-start">
                    {/* Title section */}
                    <div className="flex flex-col justify-start items-start gap-6 max-w-[600px] mb-[48px]">
                        <StatusBadge status={project.status}/>
                        <h1 className="text-white font-bold text-[40px]">{project.title}</h1>
                        {projectLinks.length > 0 && (
                            <div className="flex justify-start items-center gap-4">
                                {projectLinks.map(projectLink => {
                                    const { label, icon, link } = projectLink;
                                    return (
                                        <a href={link} className="flex justify-center items-center text-accent gap-4">
                                        <p>{label}</p>
                                        <div className="w-[24px]">{icon}</div>
                                        </a>
                                    )
                                })}
                            </div>
                        )}
                        <p className="text-white">Lorem ipsum dolor sit amet consectetur. Amet faucibus malesuada enim justo aliquam eget. Donec dui morbi non amet. Vitae elementum fermentum vitae viverra morbi. Metus auctor massa tristique nulla hac enim etiam sed.</p>
                    </div>
                    {/* Image/gallery */}
                    <div className="w-full my-[64px] h-[600px] rounded-[16px] overflow-hidden mb-[64px]">
                        <img src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"  className="object-cover h-full w-full"/>
                    </div>
                    {/* Case study */}
                    <div className="w-full flex justify-start items-start gap-[64px]">
                        {/* Content */}
                        <div className="w-full flex flex-col justify-start items-start max-w-[600px] gap-[64px]"></div>
                        {/* Metadata */}
                        <div className="w-full max-w-[400px] flex flex-col justify-start items-start gap-8">
                            <MetadataComponent label="Client">
                                <p className="text-white">{project.client}</p>
                            </MetadataComponent>
                            <MetadataComponent label="Tech">
                                <div className="w-full flex flex-wrap gap-2 justify-start items-start">
                                    {project.tech.map(tech => (
                                        <div className="px-[12px] py-[2px] text-[14px] text-black bg-accent-secondary rounded-xl">{tech}</div>
                                    ))}
                                </div>
                            </MetadataComponent>
                        </div>
                    </div>
                </div>
            </div>
            )}
        </div>
    )
}