// This BottomTab is only visible on mobile devices.

"use client"


// next js
import Link from "next/link"

// 3'rd party
import {
    TrendingUp as MarketIcon,
    BarChart3 as ChartIcon,
    Briefcase as PositionsIcon,
    History as HistoryIcon
} from "lucide-react"

// local
import { NavType } from "@/lib/types"
import { useActiveNavStore } from "@/lib/store"


const tabs = [
    { label: "Market", icon: MarketIcon, link: "/dashboard/market" },
    { label: "Chart", icon: ChartIcon, link: "/dashboard/chart" },
    { label: "Positions", icon: PositionsIcon, link: "/dashboard/positions" },
    { label: "History", icon: HistoryIcon, link: "/dashboard/history" },
]

function BottomTab() {
    const { activeNav, setActiveNav } = useActiveNavStore()

    return (
        <nav className="md:hidden fixed inset-x-0 bottom-0 bg-primary z-50">
            <div className="flex flex-row justify-around items-center h-16">
                {tabs.map((tab, idx) => {
                    const Icon = tab.icon
                    const isActive = activeNav === tab.label

                    return (
                        <Link key={`nav-${idx}`} href={tab.link}>
                            <button
                                onClick={() => setActiveNav(tab.label as NavType)}
                                className="flex flex-col justify-center items-center flex-1 h-full gap-1"
                            >
                                <Icon className={`w-6 h-6 transition-all ${isActive ? "text-primary-foreground" : "text-accent-foreground"}`} strokeWidth={isActive ? 2.5 : 1.5} />
                                <span className={`text-xs transition-all ${isActive ? "text-primary-foreground font-semibold" : "text-accent-foreground font-medium"}`}>{tab.label}</span>
                            </button>
                        </Link>
                    )
                })}
            </div>
        </nav>
    )
}

export { BottomTab }