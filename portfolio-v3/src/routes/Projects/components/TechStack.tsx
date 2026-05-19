import { Stack } from "../../../projects"

export default function TechStack({
    techStack,
}: {
    techStack: Stack[],
}) {
    return (
        <div className="w-full">
            <div className="w-full pb-1 border-b border-outline text-white font-semibold mb-3">
                Tech Stack
            </div>
            <div className="w-full flex flex-col justify-start items-stretch gap-6">
            {techStack.map(t => {
                const { category, stack } = t;
                return (
                    <div className="flex justify-start items-start gap-4 w-full">
                        <p className="w-[100px] text-white font-mono text-[14px]">{category}:</p>
                        <div className="flex flex-wrap justify-start items-center gap-2 w-full">
                            {stack.map(s => (
                                <div className="py-1 px-3 rounded-full text-accent text-xs bg-[#00F9D6]/[0.1]">{s}</div>
                            ))}
                        </div>
                    </div>
                )
            })}
            </div>
        </div>
    )
}