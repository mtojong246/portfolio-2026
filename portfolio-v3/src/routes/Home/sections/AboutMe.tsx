import SectionHeader from "../../../components/SectionHeader";
import SkillsChart from "../components/SkillsChart";

export default function AboutMe() {
    return (
        <div id="about" className="w-full bg-dark px-6 sm:px-10 py-[64px] sm:py-[100px]">
            <div className="mx-auto max-w-[1200px] h-full">
                <div className="flex flex-col min-[870px]:flex-row justify-center md:justify-between items-center gap-[64px] w-full">
                    <div className="max-w-[600px] w-full min-[870px]:w-1/2 flex flex-col justify-start items-start gap-6">
                        <SectionHeader 
                            title="About Me"
                            subtitle="Who I Am"
                        />
                        <p className="text-white font-light text-[15px]">
                            {`Hello! I'm Melanie — a software engineer with 2+ years of professional \
                            experience designing and developing intuitive, user-centered web applications. \
                            I specialize in crafting efficient and visually elegant digital experiences \
                            using modern technologies like React and TailwindCSS.`}
                            <br/><br/>
                            {`Currently, I'm on the software engineering team at Collaborations \
                            Pharmaceuticals, Inc., where I build applications that make AI/ML capabilities \
                            accessible to organizations across a wide range of industries. I also work with \
                            small businesses and startups on the side, creating digital products for both \
                            business and consumer use. Throughout these experiences, I've had the chance \
                            to work across the full software development cycle — collaborating closely with \
                            cross-functional teams and stakeholders to ensure our products deliver measurable \
                            impact to the end-user.`}
                            <br/><br/>
                            {`My path into tech wasn't traditional — a background in science and medicine \
                            shaped how I think, and teaching myself to code taught me that curiosity and \
                            the willingness to be a beginner are some of the most powerful tools you can have. \
                            That belief carries into everything I do outside of work too. Whether I'm learning \
                            a new piece on the piano, sketching, or getting lost in a book, film, or game, I'm \
                            drawn to the process of discovery just as much as the destination. It's a mindset \
                            that keeps me adaptable, experimentative, and genuinely excited about the problems \
                            I get to solve every day.`}
                        </p>
                    </div>
                    <SkillsChart />
                </div>
            </div>
        </div>
    )
}