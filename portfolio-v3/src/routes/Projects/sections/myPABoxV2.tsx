import ScreenshotsDisplay, { ScreenshotInfo } from '../components/ScreenshotsDisplay';

const screenshots: ScreenshotInfo[] = [
    {
        src: "pa-school-details.png",
        size: "",
        alt: "",
    },
    {
        src: "pa-essay.png",
        size: "",
        alt: "",
    },
    {
        src: "pa-evaluations.png",
        size: "",
        alt: "",
    },
]

export default function myPABoxV2() {
    return (
        <>
            <div className="case-study-component">
                <p>
                    {`The process of applying to Physician Assistant schools — and most \
                    post-baccalaureate programs in medicine — is notoriously daunting and \
                    multi-layered. CASPA, the centralized application system used to submit \
                    applications to multiple programs simultaneously, adds its own layer of \
                    complexity: requirements change year to year, school-specific criteria are \
                    scattered across different sources, and hard deadlines vary by program. \
                    For pre-PA students, simply compiling and organizing their resources — \
                    let alone keeping track of everything in time — is a significant challenge \
                    in itself.`}
                    <br/>
                    <br/>
                    {`myPABox is a PA school application tracker built to help pre-PA students \
                    navigate this process with more clarity and confidence, giving them the tools \
                    to organize their applications, compare programs, and make more informed decisions \
                    about where to apply. I was brought on to lead development of the platform's \
                    second version, tasked with addressing user feedback from the original release \
                    and designing and implementing new features to improve the overall applicant \
                    experience — a role I approached with a personal perspective, having gone through \
                    the medical school application process myself using traditional methods.`}
                </p>
                <h2>My role</h2>
                <h3>Full-Stack Developer</h3>
                <ul>
                    <li>
                        {`Configured Firebase for secure user authentication, including two-factor \
                        authentication, and implemented client-side data fetching for real-time data \
                        synchronization across the platform`}
                    </li>
                    <li>
                        {`Translated Figma design mockups into a library of reusable, responsive UI \
                        components using TailwindCSS and Material UI`}
                    </li>
                    <li>
                        {`Configured and integrated the OpenAI API to power an LLM-driven personal \
                        statement generation module driven by structured applicant data`}
                    </li>
                </ul>
                <h3>UX Designer</h3>
                <ul>
                    <li>
                        {`Designed high-fidelity mockups for new and improved platform features in \
                        Figma, incorporating user feedback from the previous version to inform design \
                        decisions`}
                    </li>
                    <li>
                        {`Built interactive Figma prototypes and presented them to stakeholders for \
                        review and approval prior to development`}
                    </li>
                </ul>
                <h2>Technical Highlights</h2>
                <ul>
                    <li>
                        {`Developed a full-featured LLM-driven essay writing module that auto-generates \
                        personal statements from structured applicant profile data using the OpenAI API. \
                        The module allows users to select which aspects of their profile to draw from, \
                        create notes, refine output in an integrated text editor, and use a chat interface \
                        to provide direct instructions for modifying and improving their essay — with \
                        full draft management throughout`}
                    </li>
                    <li>
                        {`Designed and built an interactive visual component for tracking each step \
                        involved in requesting and submitting letters of recommendation to CASPA, directly \
                        addressing user feedback around the intuitiveness of the existing evaluation tracking \
                        module`}
                    </li>
                    <li>
                        {`Expanded and improved the existing school match filtering module by \
                        integrating additional school data points, extending the match determination \
                        algorithm, categorizing selected filters for easier tracking, and building \
                        an interactive map component that gives users a quick visual overview of the \
                        programs they matched with`}
                    </li>
                    <li>
                        {`Integrated an automated application progress tracker within each \
                        school's requirement details page that dynamically displays and updates \
                        the requirements met and requirements still needed for each subsection \
                        of that school's application as users update their student profile`}
                    </li>
                </ul>
            </div>
            <ScreenshotsDisplay 
                screenshots={screenshots} 
                folder='pa-v2'
            />
        </>
    )
}