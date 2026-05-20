import { Image } from "@imagekit/react";

export interface ScreenshotInfo {
    src: string;
    size: string;
    alt: string;
}

export default function ScreenshotsDisplay({
    screenshots,
    folder,
}: {
    screenshots: ScreenshotInfo[],
    folder: string,
}) {
    return (
        <div className="w-full flex flex-col justify-start items-start gap-6 md:gap-8">
            {screenshots.map(screenshot => {
                const { src, size, alt } = screenshot;
                return (
                    <div className={`${size} rounded-[16px] overflow-hidden`}>
                        <Image 
                            src={`/${folder}/${src}`}
                            alt={alt}
                            loading="lazy"
                            className="w-full h-full object-cover"
                        />
                        {/* <img alt={alt} src={src} className="w-full h-full object-cover"/> */}
                    </div>
                )
            })}
        </div>
    )
}