import { useEffect } from "react";
import AboutMe from "../sections/AboutMe";
import Contact from "../sections/Contact";
import Cover from "../sections/Cover";
import Experience from "../sections/Experience";
import Work from "../sections/Work";
import StickyNav from "../components/StickyNav";
import { useLocation } from "react-router";

const loadTagCanvas = () => {
  try {
    (window as any).TagCanvas.Start('skillsCanvas', 'tags', {
      textFont: 'Sora',
      textColour: '#00F9D6',
      textHeight: 16,
      outlineColour: 'transparent',
      reverse: true,
      depth: 0.8,
      maxSpeed: 0.008,
      weight: true,
      noMouse: true,
      initial: [0.3, -0.1],
      wheelZoom: false,
      shape: 'sphere',
    });
  } catch(err:any) {
    console.log(err);
    const canvasContainer = document.getElementById('skillsCanvasContainer')
    if (canvasContainer) canvasContainer.style.display = 'none';
  }


}

export default function Home() {
    const { hash } = useLocation();

    useEffect(() => {
        loadTagCanvas();
    }, []);
    
    useEffect(() => {
        const items = document.querySelectorAll(".timeline-item");
        const observer = new IntersectionObserver(
            (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                entry.target.classList.add("show");
                } 
            });
            },
            {
            threshold: 0.3,
            rootMargin: "0px 0px -100px 0px",
            }
        );

        items.forEach((item) => observer.observe(item));

        // cleanup — disconnect the observer when the component unmounts
        return () => observer.disconnect();
    }, []); // empty array = runs once after mount

    
    useEffect(() => {
        const targetEl = document.getElementById('cover-subtitle');
        const navEl = document.getElementById('sticky-nav');

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (navEl) {
                    if (entry.isIntersecting) {
                        navEl.classList.remove('show')
                    } else {
                        navEl.classList.add('show');
                    }
                }
            },
            { threshold: 0 }
        )

        if (targetEl) observer.observe(targetEl);

        return () => {
            observer.disconnect();
        }

    }, []);

    useEffect(() => {
        if (!hash) return;

        const timeout = setTimeout(() => {
            const el = document.getElementById(hash.replace('#', ''));
            if (el) el.scrollIntoView();
        }, 0);

        return () => clearTimeout(timeout);
    }, [hash]);

    return (
        <>
            <StickyNav />
            <Cover />
            <AboutMe />
            <Experience />
            <Work />
            <Contact />
        </>
    )
}