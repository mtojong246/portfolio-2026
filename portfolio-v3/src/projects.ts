import { generateRandomString } from "./utils";

export interface ProjectType {
    id: string;
    title: string;
    tech: string[];
    size: string;
    client: string;
    githubLink?: string;
    siteLink?: string;
}

export const projects: ProjectType[] = [
    {
        id: generateRandomString(),
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
    },
    {
        id: generateRandomString(),
        title: "CPI Business Website",
        tech: [
            "Squarespace",
            "Vanilla JS",
            "CSS",
        ],
        size: "",
        client: "CPI",
    },
    {
        id: generateRandomString(),
        title: "Admin Dashboard",
        tech: [
            "Typescript",
            "React",
            "Firebase",
        ],
        size: "",
        client: "myPABox",
    },
    {
        id: generateRandomString(),
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
    },
    {
        id: generateRandomString(),
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
    },
    {
        id: generateRandomString(),
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
    },
    {
        id: generateRandomString(),
        title: "Renew Aeshetics",
        tech: [
            "Squarespace",
            "Vanilla JS",
            "CSS",
        ],
        size: "",
        client: "Renew Aesthetics LLC",
    },
]

