import { useMemo } from "react"
import { Status } from "../../../projects";

const statuses: { status: Status, color: string }[] = [
    {
        status: "Complete",
        color: "bg-lime-400",
    },
    {
        status: "Ongoing",
        color: "bg-yellow-300",
    },
    {
        status: "On hold",
        color: "bg-rose-400",
    }
]

export default function StatusBadge({
    status,
}: {
    status: Status,
}) {
    const matchingStatus: { status: Status, color: string } | null = useMemo(() => {
        const match = statuses.find(s => s.status === status);

        if (match) return match;
        return null;
    }, [status]);

    return (
        <>
        {matchingStatus && (
            <div className="flex justify-start items-center gap-2">
                <div className={`w-[8px] aspect-square rounded-full ${matchingStatus.color}`}></div>
                <p className="text-[12px] text-secondary">{matchingStatus.status}</p>
            </div>
        )}
        </>
    )
}