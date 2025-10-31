'use client'
import { useState } from 'react'
import SidebarSubmenu from './SidebarSubmenu'

interface SidebarMenuProps {
  type: string
}

export default function SidebarMenu({ type }: SidebarMenuProps) {
  const [hovered, setHovered] = useState<string | null>(null)

  const menuItems = {
    charts: ['Charts', 'Positions', 'Watchlist', 'Trade & Transactions'],
    positions: ['Open Positions', 'Closed Positions'],
    watchlist: ['Favorites', 'Alerts'],
    deposit: ['Deposit Funds', 'Withdraw'],
  }[type] || []

  return (
    <div
      className="absolute left-[40px] top-0 bg-white shadow-lg rounded-md w-[220px] py-2 z-40"
      onMouseEnter={() => setHovered(type)}
      onMouseLeave={() => setHovered(null)}
    >
      {menuItems.map(item => (
        <div
          key={item}
          className="flex justify-between items-center px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
          onMouseEnter={() => setHovered(item)}
        >
          <span>{item}</span>
          {hovered === item && type === 'charts' && (
            <SidebarSubmenu parent={item} />
          )}
        </div>
      ))}
    </div>
  )
}
