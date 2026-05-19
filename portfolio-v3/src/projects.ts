
import MLPreview from './assets/images/MLPreview.png';
import myPABoxPreview from './assets/images/mypabox-preview.png';
import AdminPreview from './assets/images/mypaboxadmin-preview.png';
import MegascribePreview from './assets/images/MegascribePreview.png';
import CPIPreview from './assets/images/cpi-website-preview.png';
import LifestyleMedlyPreview from './assets/images/lifestyle-medly-preview.png';
import EventsPreview from './assets/images/events-preview.png';
import RenewPreview from './assets/images/renew-preview.png';

import AIReportingTool from './routes/Projects/sections/AIReportingTool';
import React from 'react';
import CPIWebsite from './routes/Projects/sections/CPIWebsite';
import myPABoxV2 from './routes/Projects/sections/myPABoxV2';
import MLPlatform from './routes/Projects/sections/MLPlatform';
import AdminDashboard from './routes/Projects/sections/AdminDashboard';
import LifestyleMedly from './routes/Projects/sections/LifestyleMedly';
import EventsByAnsa from './routes/Projects/sections/EventsByAnsa';
import Renew from './routes/Projects/sections/Renew';

export type Status = "Complete" | "Ongoing" | "On hold"

const SHORT_PARAGRAPH = "Lorem ipsum dolor sit amet consectetur. Amet faucibus malesuada enim justo aliquam eget. Donec dui morbi non amet. Vitae elementum fermentum vitae viverra morbi. Metus auctor massa tristique nulla hac enim etiam sed."
const LONG_PARAGRAPH = "Lorem ipsum dolor sit amet consectetur. Platea vitae porttitor ut bibendum fusce id tortor amet libero. Ut non nec massa ornare vel eget facilisis id et. Duis pellentesque lorem nulla lacus. Felis ornare duis dapibus id. Suscipit pretium egestas ipsum nunc. Odio velit eget donec arcu odio neque diam cras vehicula. Mi ullamcorper sit egestas lorem at ipsum. Quisque in vel purus ut augue. Enim est lorem in diam maecenas volutpat. Ultrices lectus praesent sit et non fermentum. Etiam est morbi a pulvinar et mauris porta accumsan. Accumsan molestie sed est metus risus non risus potenti suspendisse. Bibendum imperdiet egestas duis pretium feugiat."
const SECTION_TITLE = "Section Title"

export interface Stack {
    category: string;
    stack: string[];
}

export interface ProjectType {
    id: string;
    title: string;
    tech: string[];
    techStack: Stack[];
    size: string;
    client: string;
    githubLink?: string;
    siteLink?: string;
    status: Status;
    description: string;
    previewImg?: string;
    introduction: string;
    detailsType: "case-study" | "showcase";
    caseStudy: { title: string; content: string }[];
    caseStudyComponent: React.ComponentType,
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
        techStack: [
            {
                category: "Frontend",
                stack: [
                    "Typescript",
                    "React",
                    "TailwindCSS",
                    "MUI",
                    "Tiptap/Prosemirror",
                ]
            },
            {
                category: "Backend",
                stack: [
                    "Python",
                    "FastAPI",
                    "S3",
                    "Minio",
                    "Postgres",
                ]
            },
            {
                category: "LLM",
                stack: [
                    "Langchain",
                    "AWS Bedrock",
                ]
            },
            {
                category: "Tools",
                stack: [
                    "Docker",
                    "Airflow",
                    "Git",
                    "Figma",
                ]
            }
        ],
        size: "big",
        client: "CPI",
        status: "Ongoing",
        description: (
            `An LLM-driven tool that transforms unstructured text, image, \
            and tabular data into well-defined regulatory report documents \
            in minutes. `
        ),
        previewImg: MegascribePreview,
        introduction: SHORT_PARAGRAPH,
        detailsType: "case-study",
        caseStudy: [
            {
                title: SECTION_TITLE,
                content: `${LONG_PARAGRAPH}\n\n${LONG_PARAGRAPH}\n\n${LONG_PARAGRAPH}`,
            }
        ],
        caseStudyComponent: AIReportingTool,
    },
    {
        id: "eTEhsi2nCk",
        title: "CPI Business Website",
        tech: [
            "Squarespace",
            "Vanilla JS",
            "CSS",
        ],
        techStack: [
            {
                category: "Frontend",
                stack: [
                    "Javascript",
                    "HTML",
                    "CSS",
                ]
            },
            {
                category: "Tools",
                stack: [
                    "Squarespace",
                    "Figma",
                ]
            }
        ],
        siteLink: "https://collaborations.com/",
        size: "",
        client: "CPI",
        status: "Complete",
        description: "A modern redesign of CPI’s business website.",
        previewImg: CPIPreview,
        introduction: SHORT_PARAGRAPH,
        detailsType: "showcase",
        caseStudy: [
            {
                title: SECTION_TITLE,
                content: `${LONG_PARAGRAPH}\n\n${LONG_PARAGRAPH}\n\n${LONG_PARAGRAPH}`,
            }
        ],
        caseStudyComponent: CPIWebsite,
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
        techStack: [
            {
                category: "Frontend",
                stack: [
                    "Typescript",
                    "React",
                    "TailwindCSS",
                    "MUI",
                    "Redux Toolkit",
                ],
            },
            {
                category: "Backend",
                stack: [
                    "Firebase Authentication",
                    "Realtime Database"
                ]
            },
            {
                category: "Tools",
                stack: [
                    "OpenAI API",
                    "Stripe",
                    "MUI X Charts",
                    "Recharts",
                    "React Quill",
                    "Figma",
                    "Git",
                ]
            }
        ],
        size: "",
        client: "myPABox",
        status: "Ongoing",
        description: (
            `A comprehensive Physician Assistant program requirement tracking and organization tool.`
        ),
        previewImg: myPABoxPreview,
        introduction: SHORT_PARAGRAPH,
        detailsType: "showcase",
        caseStudy: [
            {
                title: SECTION_TITLE,
                content: `${LONG_PARAGRAPH}\n\n${LONG_PARAGRAPH}\n\n${LONG_PARAGRAPH}`,
            }
        ],
        caseStudyComponent: myPABoxV2,
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
        techStack: [
            {
                category: "Frontend",
                stack: [
                    "Typescript",
                    "React",
                    "TailwindCSS",
                    "MUI",
                ]
            },
            {
                category: "Tools",
                stack: [
                    "Orval",
                    "React Query",
                    "Plotly.js",
                    "RDKit.js",
                    "React Flow",
                    "React Virtuoso",
                    "Figma",
                    "Git",
                ]
            }
        ],
        size: "big",
        client: "CPI",
        status: "Ongoing",
        description: (
            `An all-in-one platform for training, validating, and generating \
            predictions from 16 different machine learning algorithms in minutes, \
            complete with data curation, visualization, and read-across capabilities.`
        ),
        previewImg: MLPreview,
        introduction: SHORT_PARAGRAPH,
        detailsType: "showcase",
        caseStudy: [
            {
                title: SECTION_TITLE,
                content: `${LONG_PARAGRAPH}\n\n${LONG_PARAGRAPH}\n\n${LONG_PARAGRAPH}`,
            }
        ],
        caseStudyComponent: MLPlatform,
    },
    {
        id: "NnuuwihwLC",
        title: "Admin Dashboard",
        tech: [
            "Typescript",
            "React",
            "Firebase",
        ],
        techStack: [
            {
                category: "Frontend",
                stack: [
                    "Typescript",
                    "React",
                    "TailwindCSS",
                    "MUI",
                    "Redux Toolkit",
                ]
            },
            {
                category: "Backend",
                stack: [
                    "Firebase Authentication",
                    "Realtime Database"
                ]
            },
            {
                category: "Tools",
                stack: [
                    "React Quill",
                    "Git",
                ]
            }
        ],
        size: "",
        client: "myPABox",
        status: "Complete",
        description: (
            `An internal admin dashboard that centralizes Physician Assistant program \
            and application data entry and validation workflows for myPAbox.`
        ),
        previewImg: AdminPreview,
        introduction: SHORT_PARAGRAPH,
        detailsType: "showcase",
        caseStudy: [
            {
                title: SECTION_TITLE,
                content: `${LONG_PARAGRAPH}\n\n${LONG_PARAGRAPH}\n\n${LONG_PARAGRAPH}`,
            }
        ],
        caseStudyComponent: AdminDashboard,
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
        techStack: [],
        size: "",
        client: "Lifestyle Medly LLC",
        status: "Complete",
        description: (
            `A custom business website built for Lifestyle Medly that enables users to explore \
            weight loss programs, book appointmenets and self-screen for eligibility through an \
            integrated questionnaire.`
        ),
        previewImg: LifestyleMedlyPreview,
        introduction: SHORT_PARAGRAPH,
        detailsType: "showcase",
        caseStudy: [
            {
                title: SECTION_TITLE,
                content: `${LONG_PARAGRAPH}\n\n${LONG_PARAGRAPH}\n\n${LONG_PARAGRAPH}`,
            }
        ],
        caseStudyComponent: LifestyleMedly,
    },
    {
        id: "qdLlkyOZjQ",
        title: "Events by Ansa",
        tech: [
            "Wix Studio",
            "Vanilla JS",
            "CSS",
        ],
        techStack: [],
        size: "",
        client: "Events by Ansa",
        status: "Complete",
        description: SHORT_PARAGRAPH,
        previewImg: EventsPreview,
        introduction: SHORT_PARAGRAPH,
        detailsType: "showcase",
        caseStudy: [
            {
                title: SECTION_TITLE,
                content: `${LONG_PARAGRAPH}\n\n${LONG_PARAGRAPH}\n\n${LONG_PARAGRAPH}`,
            }
        ],
        caseStudyComponent: EventsByAnsa,
    },
    {
        id: "RlG9GlmbjD",
        title: "Renew Aeshetics",
        tech: [
            "Squarespace",
            "Vanilla JS",
            "CSS",
        ],
        techStack: [],
        size: "",
        client: "Renew Aesthetics LLC",
        status: "Complete",
        description: SHORT_PARAGRAPH,
        previewImg: RenewPreview,
        introduction: SHORT_PARAGRAPH,
        detailsType: "showcase",
        caseStudy: [
            {
                title: SECTION_TITLE,
                content: `${LONG_PARAGRAPH}\n\n${LONG_PARAGRAPH}\n\n${LONG_PARAGRAPH}`,
            }
        ],
        caseStudyComponent: Renew,
    },
]

