import ScreenshotsDisplay, { ScreenshotInfo } from "../components/ScreenshotsDisplay"

const screenshots: ScreenshotInfo[] = [
    {
        src: "cpi-website-homepage.png",
        size: "",
        alt: ""
    },
    {
        src: "cpi-website-software.png",
        size: "",
        alt: ""
    },
    {
        src: "cpi-website-modal.png",
        size: "",
        alt: ""
    },
    {
        src: "cpi-website-pipeline-expanded.png",
        size: "",
        alt: ""
    },
    {
        src: "cpi-website-press.png",
        size: "",
        alt: ""
    },
]

export default function CPIWebsite() {
    return (
        <>
            <div className="case-study-component">
                <p>
                    {`This project involved a complete overhaul of Collaborations Pharmaceuticals' \
                    public-facing business website, which serves as the primary touchpoint for \
                    showcasing the company's services, software offerings, and publication, \
                    press, and blog content. I was tasked with modernizing the entire design \
                    and functionality of the site — making the interface more visually elegant \
                    and consistent with the company's branding, reducing visual clutter, improving \
                    usability, and better highlighting their premier software suite. The redesign \
                    also incorporated targeted strategies for driving more traffic to the site \
                    and increasing top-of-funnel client interest.`}
                </p>
                <h2>My role</h2>
                <h3>Frontend Developer</h3>
                <ul>
                    <li>
                        {`Implemented custom component behavior and interactivity with Vanilla JS, \
                        extending the capabilities of the CMS platform beyond its out-of-the-box \
                        functionality`}
                    </li>
                    <li>
                        {`Enriched page content and metadata for SEO, improving the site's discoverability \
                        and search engine ranking potential`}
                    </li>
                    <li>
                        {`Built custom styled components with HTML and CSS to achieve a polished, \
                        brand-aligned visual design that the platform's native styling couldn't accommodate`}
                    </li>
                    <li>
                        {`Translated high-fidelity Figma design mockups into fully realized website elements \
                        within Squarespace, ensuring pixel-accurate implementation of the intended design`}
                    </li>
                </ul>
                <h3>UX Designer</h3>
                <ul>
                    <li>
                        {`Designed high-fidelity mockups and a library of reusable components in Figma, \
                        with a focus on modernizing the visual design and improving the clarity and \
                        hierarchy of information across the site`}
                    </li>
                    <li>
                        {`Built interactive Figma prototypes and presented them to stakeholders for review \
                        and approval prior to development`}
                    </li>
                </ul>
                <h2>Technical Highlights</h2>
                <ul>
                    <li>
                        {`Transformed a static drug discovery pipeline image into a fully interactive and \
                        responsive table with accordion components that allow users to expand or collapse \
                        details for each disease in the pipeline, complete with search and filtering \
                        functionality — replacing a passive visual asset with an engaging, information-rich \
                        experience`}
                    </li>
                    <li>
                        {`Designed and integrated custom modal components for displaying individual team \
                        member profiles, reducing visual clutter on the page while keeping detailed \
                        information readily accessible to the user`}
                    </li>
                    <li>
                        {`Implemented custom secondary navigation components for the software products and \
                        news and blog sections, improving content discoverability and making it easier for \
                        visitors to explore key areas of the site`}
                    </li>
                    <li>
                        {`Ensured a fully responsive layout across desktop, tablet, and mobile screen sizes, \
                        maintaining visual consistency and usability across all devices and screen resolutions`}
                    </li>
                </ul>
            </div>
            <ScreenshotsDisplay 
                screenshots={screenshots}
                folder="cpi-website"
            />
        </>
    )
}