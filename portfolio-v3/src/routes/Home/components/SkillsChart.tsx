const skills: string[] = [
    'JavaScript',
    'TypeScript',
    'Python',
    'HTML/CSS',
    'TailwindCSS',
    'SCSS',
    'Bootstrap',
    'MaterialUI',
    'Context API',
    'Redux',
    'Docker',
    'Airflow',
    'AWS',
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
    'Git',
]

export default function SkillsChart() {
    return (
        <>
        <div id="skillsCanvasContainer" className="w-full min-[870px]:w-1/2 max-w-[600px]">
            <canvas width={500} height={500} id="skillsCanvas" style={{ width: "100%", }}></canvas>
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