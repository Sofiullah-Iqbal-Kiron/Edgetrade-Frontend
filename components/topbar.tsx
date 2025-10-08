// local
import { ModeToggle } from "@/components/mode-toggle"


export function Topbar() {
    return (
        <div className="w-full px-4 py-2 flex items-center justify-end border-b border-border">
            <ModeToggle />
        </div>
    )
}
