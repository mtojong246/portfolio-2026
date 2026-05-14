
export type Status = "Complete" | "Ongoing" | "On hold"

export interface ProjectType {
    id: string;
    title: string;
    tech: string[];
    size: string;
    client: string;
    githubLink?: string;
    siteLink?: string;
    status: Status;
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
    },
]

