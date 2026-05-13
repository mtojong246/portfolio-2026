export default function SectionHeader({
    title,
    subtitle,
    id,
}: {
    title: string,
    subtitle: string,
    id: string,
}) {
    return (
        <div className="flex flex-col justify-start items-start gap-4">
            <div className="flex justify-start items-center gap-4">
                <div className="w-[24px] h-[1px] border border-secondary" />
                <p className="text-secondary font-medium">{subtitle}</p>
            </div>
            <h2 id={id} className="font-semibold text-[32px] text-white">{title}</h2>
        </div>
    )
}