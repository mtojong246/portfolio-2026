export interface ScreenshotInfo {
    img: string;
    size: string;
    alt: string;
}

export default function ScreenshotsDisplay({
    screenshots,
}: {
    screenshots: ScreenshotInfo[],
}) {
    return (
        <div className="w-full flex flex-col justify-start items-start gap-6 md:gap-8">
            {screenshots.map(screenshot => {
                const { img, size, alt } = screenshot;
                return (
                    <div className={`${size} rounded-[16px] overflow-hidden`}>
                        <img alt={alt} src={img} className="w-full h-full object-cover"/>
                    </div>
                )
            })}
        </div>
    )
}