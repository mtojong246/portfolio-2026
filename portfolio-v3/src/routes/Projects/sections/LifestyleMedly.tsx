import ScreenshotsDisplay, { ScreenshotInfo } from "../components/ScreenshotsDisplay"

const screenshots: ScreenshotInfo[] = [
    {
        src: "lifestyle-medly-programs.png",
        size: "",
        alt: "",
    },
    {
        src: "lifestyle-medly-blog.png",
        size: "",
        alt: "",
    },
    {
        src: "lifestyle-medly-form-start.png",
        size: "",
        alt: "",
    },
]

export default function LifestyleMedly() {
    return (
        <>
            <div className="case-study-component">
                <p>
                    {`This project involved designing and developing a full business website for \
                    Lifestyle Medley, a weight loss clinic, centralizing their program plans and \
                    product offerings, educational materials for existing clients, and appointment \
                    scheduling in one cohesive platform. A key requirement of the project was a \
                    self-guided patient eligibility determination module — a multi-step form with \
                    complex conditional logic that couldn't be handled by traditional CMS platforms \
                    out of the box. I was tasked with building the full website from the ground up \
                    and engineering this module as a custom solution integrated directly into the \
                    platform.`}
                </p>
                <h2>My role</h2>
                <h3>Full-Stack Developer</h3>
                <ul>
                    <li>
                        {`Configured Firebase for secure user authentication and real-time database \
                        storage, establishing the core data infrastructure for the platform`}
                    </li>
                    <li>
                        {`Deployed the application across Vercel and Bluehost, configuring the hosting \
                        environment for reliable, production-ready delivery`}
                    </li>
                    <li>
                        {`Integrated third-party chatbot and analytics tracking scripts to support client \
                        communication and provide the client with visibility into user behavior and site \
                        performance`}
                    </li>
                    <li>
                        {`Translated high-fidelity Figma design mockups into a library of reusable, responsive \
                        UI components using TailwindCSS and Material UI`}
                    </li>
                    <li>
                        {`Implemented global state management with the React Context API to efficiently manage \
                        and share form state and user data across components throughout the application`}
                    </li>
                </ul>
                <h3>UX Designer</h3>
                <ul>
                    <li>
                        {`Designed high-fidelity mockups, a library of reusable components, and custom static image \
                        assets in Figma, ensuring a cohesive and brand-aligned visual identity across the site`}
                    </li>
                    <li>
                        {`Built interactive Figma prototypes and presented them to stakeholders for review and \
                        approval prior to development`}
                    </li>
                </ul>
                <h2>Technical Highlights</h2>
                <ul>
                    <li>
                        {`Engineered a multi-step patient eligibility questionnaire with complex conditional \
                        fields and branching pathways that dynamically adapt based on user responses — and \
                        integrated an email capture step prior to final form submission to prevent lead loss \
                        from incomplete forms`}
                    </li>
                    <li>
                        {`Configured and integrated the Contentful CMS API to give the client full control \
                        over adding and modifying site content without needing to interact with the codebase, \
                        reducing their dependency on developer involvement for routine content updates`}
                    </li>
                    <li>
                        {`Ensured a fully responsive layout across desktop, tablet, and mobile screen sizes, \
                        maintaining visual consistency and usability across all devices and screen resolutions`}
                    </li>
                </ul>
            </div>
            <ScreenshotsDisplay 
                screenshots={screenshots}
                folder="lifestyle-medly"
            />
        </>
    )
}