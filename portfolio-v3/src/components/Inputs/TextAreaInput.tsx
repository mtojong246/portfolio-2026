import { ChangeEvent } from "react";

export default function TextAreaInput({
    label,
    id,
    value,
    handleChange,
}: {
    label: string,
    id: string,
    value?: string,
    handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
}) {
    return (
        <div className="flex flex-col justify-start items-start gap-1">
            <label className="text-[12px] text-secondary">{label}</label>
            <textarea
                onChange={handleChange}
                id={id}
                name={id}
                value={value}
                className="w-full border border-outline bg-dark text-white rounded-lg px-4 py-3 text-[14px]"
                rows={5}
            />
        </div>
    )
}