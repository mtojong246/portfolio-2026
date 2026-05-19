import HighlightingImg from '../../../assets/cpi-ml/ml-highlighting.png';
import ModelDetailsImg from '../../../assets/cpi-ml/ml-model-details.png';
import ModelFamilyImg from '../../../assets/cpi-ml/ml-model-family.png';
import ReadAcrossImg from '../../../assets/cpi-ml/ml-read-across.png';
import PredictionImg from '../../../assets/cpi-ml/ml-single-prediction.png';
import ScreenshotsDisplay, { ScreenshotInfo } from '../components/ScreenshotsDisplay';

const screenshots: ScreenshotInfo[] = [
    {
        img: HighlightingImg,
        size: "",
        alt: "",
    },
    {
        img: ModelDetailsImg,
        size: "",
        alt: "",
    },
    {
        img: ModelFamilyImg,
        size: "",
        alt: "",
    },
    {
        img: ReadAcrossImg,
        size: "",
        alt: "",
    },
    {
        img: PredictionImg,
        size: "",
        alt: "",
    },
]

export default function MLPlatform() {
    return (
        <>
            <div className="case-study-component">
                <p>
                    {`This platform was built to simplify and optimize the process of building \
                    machine learning models and generating predictions from chemical compound data \
                    — designed specifically for clients without a machine learning background. \
                    My first project at Collaborations Pharmaceuticals was to overhaul the entire \
                    frontend design and functionality of the existing application, modernizing the \
                    UI and user experience from the ground up while building and deploying new features \
                    as they were requested by internal users and external clients.`}
                </p>
                <h2>My role</h2>
                <h3>UX Designer</h3>
                <ul className="list-disc">
                    <li>
                        {`Met with clients and stakeholders and conducted user surveys to identify core \
                        pain points of the existing application and inform design decisions`}
                    </li>
                    <li>
                        {`Translated findings into wireframes, high-fidelity mockups, and a library of \
                        reusable components in Figma`}
                    </li>
                    <li>
                        {`Designed new and improved data visualization components to make complexs model \
                        output more interpretable and accessible to non-technical user`}
                    </li>
                </ul>
                <h3>Frontend Developer</h3>
                <ul>
                    <li>
                        {`Built all UI components from the ground up using TailwindCSS and Material UI, \
                        implementing the redesigned Figma mockups with a focus on consistency, usability, \
                        and responsiveness`}
                    </li>
                    <li>
                        {`Integrated FastAPI endpoints client-side using Orval for type-safe API client \
                        generation and React Query for efficient server state management and data fetching`}
                    </li>
                </ul>
                <h2>Technical Highlights</h2>
                <ul>
                    <li>
                        {`Built interactive data visualization plots and molecule highlighting components \
                        using Plotly and RDKit to allow users to explore and interpret complex chemical \
                        compound data directly in the browser`}
                    </li>
                    <li>
                        {`Implemented virtualized components with React Virtuoso and lazy loading strategies \
                        to optimize rendering performance across large datasets`}
                    </li>
                    <li>
                        {`Implemented complex metadata filtering, multi-column sorting, and pagination across \
                        all tables and data grids to support efficient navigation of large volumes of compound \
                        and model data`}
                    </li>
                    <li>
                        {`Developed a custom Gantt chart with Plotly.js and integrated an interactive React Flow \
                        diagram to visualize Airflow job progression and task linkage in real time`}
                    </li>
                </ul>
            </div>
            <ScreenshotsDisplay screenshots={screenshots}/>
        </>
    )
}