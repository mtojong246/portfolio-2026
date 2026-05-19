import { ChangeEvent } from "react"

export default function TextInput({
    label,
    id,
    value,
    handleChange,
    type,
}: {
    label: string,
    id: string,
    value?: string,
    handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    type?: string,
}) {
    return (
        <div className="flex flex-col justify-start items-start gap-1">
            <label className="text-[12px] text-secondary">{label}</label>
            <input
                onChange={handleChange}
                id={id}
                name={id}
                value={value}
                type={type}
                className="w-full border border-outline bg-dark text-white rounded-lg px-4 py-3 text-[14px]"
            />
        </div>
    )
}