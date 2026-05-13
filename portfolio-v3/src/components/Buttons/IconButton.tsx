import { ReactNode } from "react"

export default function IconButton({
    icon,
    outlined,
    action,
}: {
    icon: ReactNode,
    outlined: boolean,
    action: (e:any) => void,
}) {
    return (
        <button     
            onClick={action}
            className={`text-white hover:text-accent transition-all flex justify-center items-center aspect-square ${outlined ? 'border border-white w-[60px] rounded-full' : 'border-none w-auto'}`}
        >
            <div className="w-[24px]">{icon}</div>
        </button>
    )
}