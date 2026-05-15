const skills: string[] = [
    'JavaScript',
    'TypeScript',
    'Python',
    'HTML/CSS',
    'TailwindCSS',
    'Bootstrap',
    'MaterialUI',
    'Docker',
    'Airflow',
    'SQL',
    'Langchain',
    'React',
    'Node',
    'Next',
    'FastAPI',
    'Firebase',
    'MongoDB',
    'Postgres',
    'Figma',
]

export default function SkillsChart() {
    return (
        <>
        <div id="skillsCanvasContainer" className="w-full min-[870px]:w-1/2 max-w-[600px]">
            <canvas width={500} height={500} id="skillsCanvas"></canvas>
        </div>
        <div id="tags">
            <ul>
                {skills.map(skill => (
                    <li><a href='#' target="_blank">{skill}</a></li>
                ))}
            </ul>
        </div>
        </>
    )
}