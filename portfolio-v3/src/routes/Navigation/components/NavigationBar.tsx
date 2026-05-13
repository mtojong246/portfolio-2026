import { ReactComponent as DownloadIcon } from '../../../assets/icons/Download.svg';
import Button from '../../../components/Buttons/Button';


const routes: {label: string, link: string}[] = [
    {
        label: "// home",
        link: '/'
    },
    {
        label: "// about",
        link: '#about',
    },
    {
        label: "// experiences",
        link: "#experiences",
    },
    {
        label: "// work",
        link: "#work",
    },
    {
        label: "// contact",
        link: "#contact",
    }
]

export default function NavigationBar({
    isSticky,
}: {
    isSticky: boolean,
}) {
    

    return (
        <div className={`w-full flex justify-between items-center px-[64px] ${isSticky ? 'sticky h-auto py-4' : 'absolute h-[120px] py-0'} top-0 left-0 right-0`}>
            <div className="grow flex justify-start">
                {!isSticky && (
                    <p className="text-white text-[32px] font-bold">MT</p>
                )}
            </div>
            <div className="flex gap-5">
                {routes.map(route => {
                    const { label, link } = route;

                    return (
                        <a href={link} className="text-white hover:text-accent transition-all">{label}</a>
                    )
                })}
            </div>
            <div className="grow flex justify-end">
                {!isSticky && (
                    <Button 
                        label='resume'
                        icon={<DownloadIcon />}
                        dir='left'
                        action={(e:any) => {}}
                    />
                )}
            </div>
        </div>
    )
}