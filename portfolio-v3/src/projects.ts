
import MLPreview from './assets/images/MLPreview.png';
import myPABoxPreview from './assets/images/mypabox-preview.png';
import AdminPreview from './assets/images/mypaboxadmin-preview.png';
import MegascribePreview from './assets/images/MegascribePreview.png';
import CPIPreview from './assets/images/cpi-website-preview.png';
import LifestyleMedlyPreview from './assets/images/lifestyle-medly-preview.png';
import EventsPreview from './assets/images/events-preview.png';
import RenewPreview from './assets/images/renew-preview.png';

export type Status = "Complete" | "Ongoing" | "On hold"

const SHORT_PARAGRAPH = "Lorem ipsum dolor sit amet consectetur. Amet faucibus malesuada enim justo aliquam eget. Donec dui morbi non amet. Vitae elementum fermentum vitae viverra morbi. Metus auctor massa tristique nulla hac enim etiam sed."
const LONG_PARAGRAPH = "Lorem ipsum dolor sit amet consectetur. Platea vitae porttitor ut bibendum fusce id tortor amet libero. Ut non nec massa ornare vel eget facilisis id et. Duis pellentesque lorem nulla lacus. Felis ornare duis dapibus id. Suscipit pretium egestas ipsum nunc. Odio velit eget donec arcu odio neque diam cras vehicula. Mi ullamcorper sit egestas lorem at ipsum. Quisque in vel purus ut augue. Enim est lorem in diam maecenas volutpat. Ultrices lectus praesent sit et non fermentum. Etiam est morbi a pulvinar et mauris porta accumsan. Accumsan molestie sed est metus risus non risus potenti suspendisse. Bibendum imperdiet egestas duis pretium feugiat."
const SECTION_TITLE = "Section Title"

export interface ProjectType {
    id: string;
    title: string;
    tech: string[];
    size: string;
    client: string;
    githubLink?: string;
    siteLink?: string;
    status: Status;
    description: string;
    previewImg?: string;
    introduction: string;
    caseStudy: { title: string; content: string }[];
}

export const projects: ProjectType[] = [
    {
        id: "wHipWRWbPH",
        title: "AI Report Generation Tool",
        tech: [
            "Typescript",
            "Python",
            "React",
            "FastAPI",
            "Langchain",
        ],
        size: "big",
        client: "CPI",
        status: "Ongoing",
        description: SHORT_PARAGRAPH,
        previewImg: MegascribePreview,
        introduction: SHORT_PARAGRAPH,
        caseStudy: [
            {
                title: SECTION_TITLE,
                content: `${LONG_PARAGRAPH}\n\n${LONG_PARAGRAPH}\n\n${LONG_PARAGRAPH}`,
            }
        ],
    },
    {
        id: "eTEhsi2nCk",
        title: "CPI Business Website",
        tech: [
            "Squarespace",
            "Vanilla JS",
            "CSS",
        ],
        size: "",
        client: "CPI",
        status: "Complete",
        description: SHORT_PARAGRAPH,
        previewImg: CPIPreview,
        introduction: SHORT_PARAGRAPH,
        caseStudy: [
            {
                title: SECTION_TITLE,
                content: `${LONG_PARAGRAPH}\n\n${LONG_PARAGRAPH}\n\n${LONG_PARAGRAPH}`,
            }
        ],
    },
    {
        id: "zLHTA6jUuT",
        title: "myPABox v2",
        tech: [
            "Typescript",
            "React",
            "TailwindCSS",
            "MUI",
            "Firebase",
        ],
        size: "",
        client: "myPABox",
        status: "Ongoing",
        description: SHORT_PARAGRAPH,
        previewImg: myPABoxPreview,
        introduction: SHORT_PARAGRAPH,
        caseStudy: [
            {
                title: SECTION_TITLE,
                content: `${LONG_PARAGRAPH}\n\n${LONG_PARAGRAPH}\n\n${LONG_PARAGRAPH}`,
            }
        ],
    },
    {
        id: "8fvEURi38H",
        title: "ML Training & Prediction Platform",
        tech: [
            "Typescript",
            "React",
            "TailwindCSS",
            "MUI",
            "Plotly",
        ],
        size: "big",
        client: "CPI",
        status: "Ongoing",
        description: SHORT_PARAGRAPH,
        previewImg: MLPreview,
        introduction: SHORT_PARAGRAPH,
        caseStudy: [
            {
                title: SECTION_TITLE,
                content: `${LONG_PARAGRAPH}\n\n${LONG_PARAGRAPH}\n\n${LONG_PARAGRAPH}`,
            }
        ],
    },
    {
        id: "NnuuwihwLC",
        title: "Admin Dashboard",
        tech: [
            "Typescript",
            "React",
            "Firebase",
        ],
        size: "",
        client: "myPABox",
        status: "Complete",
        description: SHORT_PARAGRAPH,
        previewImg: AdminPreview,
        introduction: SHORT_PARAGRAPH,
        caseStudy: [
            {
                title: SECTION_TITLE,
                content: `${LONG_PARAGRAPH}\n\n${LONG_PARAGRAPH}\n\n${LONG_PARAGRAPH}`,
            }
        ],
    },
    {
        id: "CIz10HUFip",
        title: "Lifestyle Medly",
        tech: [
            "Typescript",
            "Next",
            "TailwindCSS",
            "MUI",
            "Firebase",
        ],
        size: "",
        client: "Lifestyle Medly LLC",
        status: "Complete",
        description: SHORT_PARAGRAPH,
        previewImg: LifestyleMedlyPreview,
        introduction: SHORT_PARAGRAPH,
        caseStudy: [
            {
                title: SECTION_TITLE,
                content: `${LONG_PARAGRAPH}\n\n${LONG_PARAGRAPH}\n\n${LONG_PARAGRAPH}`,
            }
        ],
    },
    {
        id: "qdLlkyOZjQ",
        title: "Events by Ansa",
        tech: [
            "Wix Studio",
            "Vanilla JS",
            "CSS",
        ],
        size: "",
        client: "Events by Ansa",
        status: "Complete",
        description: SHORT_PARAGRAPH,
        previewImg: EventsPreview,
        introduction: SHORT_PARAGRAPH,
        caseStudy: [
            {
                title: SECTION_TITLE,
                content: `${LONG_PARAGRAPH}\n\n${LONG_PARAGRAPH}\n\n${LONG_PARAGRAPH}`,
            }
        ],
    },
    {
        id: "RlG9GlmbjD",
        title: "Renew Aeshetics",
        tech: [
            "Squarespace",
            "Vanilla JS",
            "CSS",
        ],
        size: "",
        client: "Renew Aesthetics LLC",
        status: "Complete",
        description: SHORT_PARAGRAPH,
        previewImg: RenewPreview,
        introduction: SHORT_PARAGRAPH,
        caseStudy: [
            {
                title: SECTION_TITLE,
                content: `${LONG_PARAGRAPH}\n\n${LONG_PARAGRAPH}\n\n${LONG_PARAGRAPH}`,
            }
        ],
    },
]

