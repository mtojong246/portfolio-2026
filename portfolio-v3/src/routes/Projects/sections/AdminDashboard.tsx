export default function AdminDashboard() {
    return (
        <>
            <div className="case-study-component">
                <p>
                    {`This internal admin dashboard was built to centralize and streamline the \
                    school data entry process for internal teams and data entry specialists at \
                    myPABox. I was brought on to design and develop an updated version of the \
                    dashboard with a focus on improving intuitiveness and usability, redesigning \
                    the non-relational database schema to accommodate additional data points, \
                    and digitalizing their data validation process — which had previously been \
                    managed manually through Excel spreadsheets.`}
                </p>
                <h2>My role</h2>
                <h3>Full-Stack Developer</h3>
                <ul>
                    <li>
                        {`Configured Firebase for secure user authentication, real-time database \
                        storage, and hosting, establishing the core infrastructure for the platform`}
                    </li>
                    <li>
                        {`Redesigned the non-relational database schema to accommodate additional \
                        school data points, validation fields, and change tracking information — \
                        optimizing data organization and supporting a more robust validation workflow`}
                    </li>
                    <li>
                        {`Translated Figma design mockups into a library of reusable, responsive UI \
                        components using TailwindCSS and Material UI`}
                    </li>
                    <li>
                        {`Implemented global state management with Redux Toolkit to efficiently manage \
                        and share application state across components`}
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
                        {`Implemented a role-based assignment system allowing admin users to bulk or \
                        individually assign schools to data entry specialists with specific permissions, \
                        streamlining role assignment, accountability, and auditing across the team`}
                    </li>
                    <li>
                        {`Developed a conditional review interface for admin users to view, track, and \
                        accept or reject modifications made to school data by data entry specialists, \
                        creating a structured and auditable data validation workflow that replaced the \
                        previous manual Excel-based process`}
                    </li>
                    <li>
                        {`Architected a scalable library of modular, reusable UI components with clear \
                        separation of concerns, reducing code duplication across the dashboard and \
                        accelerating the implementation of new features as requirements evolved`}
                    </li>
                </ul>
            </div>
        </>
    )
}