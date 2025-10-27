// "use client"

// // next js
// import Link from "next/link"

// // 3'rd party
// import clsx from "clsx"

// // local
// import { MenuIcon, TradeIcon } from "@/components/icons"
// import {
//     LucideIcon,

//     WalletMinimal as DepositIcon,

//     TrendingUp as MarketIcon,
//     BarChart3 as ChartIcon,
//     Briefcase as PositionsIcon,
//     History as HistoryIcon,
// } from "lucide-react"

// // local
// import { NavType } from "@/lib/types"
// import { useActiveNav, useSetActiveNav } from "@/lib/store"


// type NavItemType = {
//     label: NavType,
//     icon: LucideIcon,
//     link: string
// }

// const topNavSet: Array<NavItemType> = [
//     { label: "Menu", icon: MenuIcon as LucideIcon, link: "/dashboard/menu" },
//     { label: "Deposit", icon: DepositIcon, link: "/dashboard/deposit" },
//     { label: "Trade", icon: TradeIcon as LucideIcon, link: "/dashboard/trade" },
// ]

// const bottomNavSet: Array<NavItemType> = [
//     { label: "Market", icon: MarketIcon, link: "/dashboard/market" },
//     { label: "Chart", icon: ChartIcon, link: "/dashboard/chart" },
//     { label: "Positions", icon: PositionsIcon, link: "/dashboard/positions" },
//     { label: "History", icon: HistoryIcon, link: "/dashboard/history" },
// ]

// function NavItem(item: NavItemType) {
//     const activeNav = useActiveNav()
//     const setActiveNav = useSetActiveNav()

//     const Icon = item.icon
//     const isActive = activeNav === item.label

//     return (
//         <Link
//             href={item.link}
//             onClick={() => setActiveNav(item.label)}
//             className={clsx("flex flex-col flex-1 justify-center items-center h-full gap-1 text-accent")}
//         >
//             <Icon className={clsx("transition-all", isActive && "bg-accent text-primary rounded-[12px] w-10 h-10 p-1")} size={25} strokeWidth={isActive ? 2.5 : 1.5} />
//             <span className={clsx("transition-all font-semibold text-sm", isActive && "font-bold")}>{item.label}</span>
//         </Link>
//     )
// }

// interface ItemsContainerProps {
//     children: React.ReactNode
// }

// function ItemsContainer({ children }: ItemsContainerProps) {
//     return (
//         <div className="flex flex-row justify-around items-center h-20">
//             {children}
//         </div>
//     )
// }

// function TopNav() {
//     return (
//         <nav className="md:hidden bg-dark-blue rounded-[24px] py-1">
//             <ItemsContainer>
//                 {topNavSet.map((nav, idx) => <NavItem key={`top-nav-item-${idx}`} {...nav} />)}
//             </ItemsContainer>
//         </nav>
//     )
// }

// function BottomNav() {
//     return (
//         <nav className="md:hidden fixed inset-x-0 bottom-0 bg-primary rounded-t-2xl shadow z-100">
//             <ItemsContainer>
//                 {bottomNavSet.map((nav, idx) => <NavItem key={`bottom-nav-item-${idx}`} {...nav} />)}
//             </ItemsContainer>
//         </nav>
//     )
// }

// export { TopNav, BottomNav }

"use client"

// next js
import Link from "next/link"
import { usePathname } from "next/navigation"

// 3'rd party
import clsx from "clsx"

// local
import { MenuIcon, TradeIcon } from "@/components/icons"
import {
  LucideIcon,
  WalletMinimal as DepositIcon,
  TrendingUp as MarketIcon,
  BarChart3 as ChartIcon,
  Briefcase as PositionsIcon,
  History as HistoryIcon,
} from "lucide-react"

// local
import { NavType } from "@/lib/types"
import { useActiveNav, useSetActiveNav } from "@/lib/store"

type NavItemType = {
  label: NavType
  icon: LucideIcon
  link: string
  variant?: "top" | "bottom"
}

const topNavSet: Array<NavItemType> = [
  { label: "Menu", icon: MenuIcon as unknown as LucideIcon, link: "/dashboard/menu" },
  { label: "Deposit", icon: DepositIcon, link: "/dashboard/deposit" },
  { label: "Trade", icon: TradeIcon as unknown as LucideIcon, link: "/dashboard/trade" },
]

const bottomNavSet: Array<NavItemType> = [
  { label: "Market", icon: MarketIcon, link: "/dashboard/market" },
  { label: "Chart", icon: ChartIcon, link: "/dashboard/chart" },
  { label: "Positions", icon: PositionsIcon, link: "/dashboard/positions" },
  { label: "History", icon: HistoryIcon, link: "/dashboard/history" },
]

function NavItem(item: NavItemType) {
  const pathname = usePathname()
  const setActiveNav = useSetActiveNav()

  // ✅ Fix: highlight on first click using URL
  const isActive = pathname === item.link
  const isTop = item.variant === "top"
  const Icon = item.icon

  return (
    <Link
      href={item.link}
      onClick={() => setActiveNav(item.label)}
      className={clsx(
        "flex flex-col flex-1 justify-center items-center h-full gap-1 transition-all",
        isTop ? "text-white" : "text-accent"
      )}
    >
      {/* ✅ Menu icon handled separately because it's not Lucide */}
      {item.label === "Menu" ? (
        <div
          className={clsx(
            "flex items-center justify-center rounded-[12px]",
            isActive &&
            (isTop
              ? "bg-normal-blue text-white w-10 h-10 p-[6px]"
              : "bg-accent text-primary w-10 h-10 p-[6px]")
          )}
        >
          <MenuIcon width={25} height={25} />
        </div>
      ) : (
        <Icon
          className={clsx(
            "transition-all rounded-[12px]",
            isActive &&
            (isTop
              ? "bg-normal-blue text-white w-10 h-10 p-[6px]"
              : "bg-accent text-primary w-10 h-10 p-[6px]")
          )}
          size={25}
          strokeWidth={isActive ? 1.5 : 1.5}
        />
      )}

      <span className={clsx("font-semibold text-sm", isActive && "font-bold")}>
        {item.label}
      </span>
    </Link>
  )
}

interface ItemsContainerProps {
  children: React.ReactNode
}

function ItemsContainer({ children }: ItemsContainerProps) {
  return <div className="flex flex-row justify-around items-center h-20">{children}</div>
}

function TopNav() {
  return (
    <nav className="md:hidden bg-dark-blue rounded-[24px] py-1">
      <ItemsContainer>
        {topNavSet.map((nav, idx) => (
          <NavItem key={`top-nav-item-${idx}`} {...nav} variant="top" />
        ))}
      </ItemsContainer>
    </nav>
  )
}

function BottomNav() {
  return (
    <nav className="md:hidden fixed inset-x-0 bottom-0 bg-primary rounded-t-2xl shadow z-100">
      <ItemsContainer>
        {bottomNavSet.map((nav, idx) => (
          <NavItem key={`bottom-nav-item-${idx}`} {...nav} variant="bottom" />
        ))}
      </ItemsContainer>
    </nav>
  )
}

export { TopNav, BottomNav }



