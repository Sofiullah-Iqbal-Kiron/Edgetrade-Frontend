'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '@/public/logo/signin-top-logo.png'
import sideBarIcon from '@/public/logo/desktop-sidebar-icon.svg'
import { MdOutlineHeadsetMic } from 'react-icons/md'
import { Bell, Settings, WalletMinimal as DepositIcon } from 'lucide-react'
import { MenuIcon, TradeIcon } from '@/components/icons'
import SidebarMenu from './SidebarMenu'

export default function DesktopSidebar() {
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <aside className="relative w-[55px] bg-white shadow-md flex flex-col items-center justify-between py-6">
      <div>
        <Image src={logo} alt="logo" width={29} height={25} />
        <div className="flex flex-col items-center space-y-6 mt-[35px]">
          {[
            { id: 'charts', icon: <MenuIcon size={26} /> },
            { id: 'positions', icon: <TradeIcon size={26} /> },
            { id: 'watchlist', icon: <Image src={sideBarIcon} alt="icon" /> },
            { id: 'deposit', icon: <DepositIcon size={26} /> },
            { id: 'notifications', icon: <Bell size={26} /> }
          ].map(item => (
            <div
              key={item.id}
              onMouseEnter={() => setHovered(item.id)}
              onMouseLeave={() => setHovered(null)}
              className="relative text-[#707070] cursor-pointer"
            >
              {item.icon}
              {hovered === item.id && <SidebarMenu type={item.id} />}
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center space-y-6 mb-5">
        <Settings className="text-[#707070] cursor-pointer" size={26} />
        <MdOutlineHeadsetMic className="text-[#707070] cursor-pointer" size={26} />
      </div>
    </aside>
  )
}
