const skills: string[] = [
    'JavaScript',
    'TypeScript',
    'Python',
    'HTML/CSS',
    'TailwindCSS',
    'Bootstrap',
    'Docker',
    'Airflow',
    'SQL',
    'Langchain',
    'React',
    'Node',
    'FastAPI',
    'Firebase',
    'MongoDB',
    'Postgres',
]

export default function SkillsChart() {
    return (
        <>
        <div id="skillsCanvasContainer">
            <canvas width={600} height={600} id="skillsCanvas"></canvas>
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