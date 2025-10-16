// This TopNav is only visible on mobile devices.

"use client"


// next js
import Link from "next/link"

// 3'rd party
import clsx from "clsx"
import {
    SquareMenu as MenuIcon,
    BarChart3 as DepositIcon,
    Briefcase as TradeIcon,
    LucideIcon
} from "lucide-react"

// local
import { NavType } from "@/lib/types"
import { useActiveNav, useSetActiveNav } from "@/lib/store"


type TabType = {
    label: NavType,
    icon: LucideIcon,
    link: string
}

const tabs: Array<TabType> = [
    { label: "Menu", icon: MenuIcon, link: "/dashboard/menu" },
    { label: "Deposit", icon: DepositIcon, link: "/dashboard/deposit" },
    { label: "Trade", icon: TradeIcon, link: "/dashboard/trade" },
]

function TopNav() {
    const activeNav = useActiveNav()
    const setActiveNav = useSetActiveNav()

    return (
        <nav className="md:hidden fixed inset-x-0 bottom-0 bg-primary rounded-t-2xl shadow z-100">
            <div className="flex flex-row justify-around items-center h-16">
                {tabs.map((tab, idx) => {
                    const Icon = tab.icon
                    const isActive = activeNav === tab.label

                    return (
                        <Link
                            key={`nav-${idx}`}
                            href={tab.link}
                            onClick={() => setActiveNav(tab.label)}
                            className={clsx("transition-all flex flex-col flex-1 justify-center items-center h-full gap-1", isActive && "text-primary-foreground")}
                        >
                            <Icon size={30} strokeWidth={isActive ? 2.5 : 1.5} />
                            <span className={clsx("font-semibold text-sm", isActive && "font-bold")}>{tab.label}</span>
                        </Link>
                    )
                })}
            </div>
        </nav>
    )
}

export { TopNav }