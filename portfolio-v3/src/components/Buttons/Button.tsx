import { ReactNode } from "react"

const IconComponent = ({ icon }: { icon: ReactNode }) => {
    return (
        <div className="w-[24px]">{icon}</div>
    )
}

export default function Button({
    label,
    icon,
    dir,
    action,
}: {
    label: string,
    icon: ReactNode,
    dir: 'left' | 'right',
    action: (e:any) => void,
}) {
    return (
        <button onClick={action} className="flex justify-center items-center text-accent">
            {dir === 'left' && (
                <IconComponent icon={icon}/>
            )}
            <div className="px-4"><p>{label}</p></div>
            {dir === 'right' && (
                <IconComponent icon={icon}/>
            )}
        </button>
    )
}