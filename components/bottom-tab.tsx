// This BottomTab is only visible on mobile devices.

"use client"


// 3'rd party
import { TrendingUp, BarChart3, Briefcase, History } from "lucide-react"

// local
import { NavType } from "@/lib/types"
import { useActiveNavStore } from "@/lib/store"


const tabs = [
    { id: "Market", icon: TrendingUp, label: "Market" },
    { id: "Chart", icon: BarChart3, label: "Chart" },
    { id: "Positions", icon: Briefcase, label: "Positions" },
    { id: "History", icon: History, label: "History" },
]

function BottomTab() {
    const { activeNav, setActiveNav } = useActiveNavStore()

    return (
        <nav className="md:hidden fixed inset-x-0 bottom-0 bg-primary rounded-t-4xl z-50">
            <div className="flex flex-row justify-around items-center h-16">
                {tabs.map(tab => {
                    const Icon = tab.icon;
                    const isActive = activeNav === tab.id;

                    return (
                        <button
                            key={tab.id}
                            onClick={() => setActiveNav(tab.id as NavType)}
                            className="flex flex-col items-center justify-center flex-1 h-full gap-1 transition-colors"
                        >
                            <Icon className={`w-6 h-6 transition-colors ${isActive ? "text-primary-foreground" : "text-accent-foreground"}`} strokeWidth={isActive ? 2.5 : 2} />
                            <span className={`text-xs transition-colors ${isActive ? "text-primary-foreground font-semibold" : "text-accent-foreground font-medium"}`}>{tab.label}</span>
                        </button>
                    )
                })}
            </div>
        </nav>
    )
}

export { BottomTab }