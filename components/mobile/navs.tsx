"use client"

// next js
import Link from "next/link"

// 3'rd party
import clsx from "clsx"
import {
    LucideIcon,

    SquareMenu as MenuIcon,
    WalletMinimal as DepositIcon,
    Repeat2 as TradeIcon,

    TrendingUp as MarketIcon,
    BarChart3 as ChartIcon,
    Briefcase as PositionsIcon,
    History as HistoryIcon,
} from "lucide-react"

// local
import { NavType } from "@/lib/types"
import { useActiveNav, useSetActiveNav } from "@/lib/store"


type NavItemType = {
    label: NavType,
    icon: LucideIcon,
    link: string
}

const topNavSet: Array<NavItemType> = [
    { label: "Menu", icon: MenuIcon, link: "/dashboard/menu" },
    { label: "Deposit", icon: DepositIcon, link: "/dashboard/deposit" },
    { label: "Trade", icon: TradeIcon, link: "/dashboard/trade" },
]

const bottomNavSet: Array<NavItemType> = [
    { label: "Market", icon: MarketIcon, link: "/dashboard/market" },
    { label: "Chart", icon: ChartIcon, link: "/dashboard/chart" },
    { label: "Positions", icon: PositionsIcon, link: "/dashboard/positions" },
    { label: "History", icon: HistoryIcon, link: "/dashboard/history" },
]

function NavItem(item: NavItemType) {
    const activeNav = useActiveNav()
    const setActiveNav = useSetActiveNav()

    const Icon = item.icon
    const isActive = activeNav === item.label

    return (
        <Link
            href={item.link}
            onClick={() => setActiveNav(item.label)}
            className={clsx("flex flex-col flex-1 justify-center items-center h-full gap-1 text-accent")}
        >
            <Icon className={clsx("transition-all", isActive && "bg-accent text-primary rounded-xl w-10 h-10 p-1")} size={25} strokeWidth={isActive ? 2.5 : 1.5} />
            <span className={clsx("transition-all font-semibold text-sm", isActive && "font-bold")}>{item.label}</span>
        </Link>
    )
}

interface ItemsContainerProps {
    children: React.ReactNode
}

function ItemsContainer({ children }: ItemsContainerProps) {
    return (
        <div className="flex flex-row justify-around items-center h-20">
            {children}
        </div>
    )
}

function TopNav() {
    return (
        <nav className="md:hidden bg-dark-blue-hover rounded-2xl">
            <ItemsContainer>
                {topNavSet.map((nav, idx) => <NavItem key={`top-nav-item-${idx}`} {...nav} />)}
            </ItemsContainer>
        </nav>
    )
}

function BottomNav() {
    return (
        <nav className="md:hidden fixed inset-x-0 bottom-0 bg-primary rounded-t-2xl shadow z-[100]">
            <ItemsContainer>
                {bottomNavSet.map((nav, idx) => <NavItem key={`bottom-nav-item-${idx}`} {...nav} />)}
            </ItemsContainer>
        </nav>
    )
}

export { TopNav, BottomNav }