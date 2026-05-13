import AboutMe from "../sections/AboutMe";
import Contact from "../sections/Contact";
import Cover from "../sections/Cover";
import Experience from "../sections/Experience";
import Work from "../sections/Work";

export default function Home() {
    return (
        <>
            <Cover />
            <AboutMe />
            <Experience />
            <Work />
            <Contact />
        </>
    )
}