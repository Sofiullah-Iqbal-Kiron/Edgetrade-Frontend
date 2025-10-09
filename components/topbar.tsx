// local
import { ModeToggle } from "@/components/mode-toggle"


export function Topbar() {
    return (
        <div className="fixed inset-x-0 top-0 h-offset px-4 flex justify-end items-center bg-primary-foreground shadow z-50">
            <ModeToggle />
        </div>
    )
}
