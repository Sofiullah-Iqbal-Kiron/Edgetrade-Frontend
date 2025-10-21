'use client'

import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'

// PNG icons
import menuIcon from '@/public/logo/menu icon.png'
import tradeIcon from '@/public/logo/trade icon.png'
import depositIcon from '@/public/logo/Deposit icon.png'

import marketIcon from '@/public/logo/market icon.png'
import chartIcon from '@/public/logo/chart-icon.png'
import positionIcon from '@/public/logo/position icon.png'
import historyIcon from '@/public/logo/history icon.png'

// 3rd party
import clsx from 'clsx'
import { LucideIcon } from 'lucide-react'

// Zustand global store
import { NavType } from '@/lib/types'
import { useActiveNav, useSetActiveNav } from '@/lib/store'

type NavItemType = {
  label: NavType
  icon: LucideIcon | StaticImageData
  link: string
}

const topNavSet: Array<NavItemType> = [
  { label: 'Menu', icon: menuIcon, link: '/dashboard/menu' },
  { label: 'Deposit', icon: depositIcon, link: '/dashboard/deposit' },
  { label: 'Trade', icon: tradeIcon, link: '/dashboard/trade' }
]

const bottomNavSet: Array<NavItemType> = [
  { label: 'Market', icon: marketIcon, link: '/dashboard/market' },
  { label: 'Chart', icon: chartIcon, link: '/dashboard/chart' },
  { label: 'Positions', icon: positionIcon, link: '/dashboard/positions' },
  { label: 'History', icon: historyIcon, link: '/dashboard/history' }
]

// Separate NavItem components for top and bottom nav
function TopNavItem (item: NavItemType) {
  const activeNav = useActiveNav()
  const setActiveNav = useSetActiveNav()

  const isActive = activeNav === item.label
  const Icon = item.icon

  return (
    <Link
      href={item.link}
      onClick={() => setActiveNav(item.label)}
      className='flex flex-col items-center justify-center py-2 rounded-xl transition-all duration-200 mx-1 min-w-[65px] max-w-[100px]'
    >
      <div className={clsx(
        'p-3 transition-all duration-200',
        isActive ? 'bg-blue-600 rounded-xl' : 'hover:bg-white/10 rounded-xl'
      )}>
        {typeof Icon === 'function' ? (
          <Icon 
            size={26} 
            className={isActive ? 'text-blue-600' : 'text-white'} 
          />
        ) : (
          <Image
            src={Icon}
            alt={item.label}
            width={20}
            height={20}
            className={clsx(
              'w-5 h-5 transition-all duration-200',
              isActive 
                ? 'filter-none brightness-100'  // Normal blue icon for active state
                : 'brightness-0 invert'         // White icon for inactive state
            )}
          />
        )}
      </div>
      <span
        className={clsx(
          'text-xs mt-1 font-medium transition-all duration-200',
          isActive ? 'text-white' : 'text-white'
        )}
      >
        {item.label}
      </span>
    </Link>
  )
}

function BottomNavItem (item: NavItemType) {
  const activeNav = useActiveNav()
  const setActiveNav = useSetActiveNav()

  const isActive = activeNav === item.label
  const Icon = item.icon

  return (
    <Link
      href={item.link}
      onClick={() => setActiveNav(item.label)}
      className='flex flex-col items-center justify-center py-2 rounded-xl transition-all duration-200 mx-1 min-w-[65px] max-w-[100px]'
    >
      <div className={clsx(
        'p-3 transition-all duration-200',
        isActive ? 'bg-blue-600 rounded-xl' : 'hover:bg-white/10 rounded-xl'
      )}>
        {typeof Icon === 'function' ? (
          <Icon 
            size={26} 
            className={isActive ? 'text-blue-600' : 'text-white'} 
          />
        ) : (
          <Image
            src={Icon}
            alt={item.label}
            width={20}
            height={20}
            className={clsx(
              'w-5 h-5 transition-all duration-200 font-bold',
              isActive 
                ? 'filter-none brightness-100'  // Normal blue icon for active state
                : 'brightness-0 invert'         // White icon for inactive state
            )}
          />
        )}
      </div>
      <span
        className={clsx(
          'text-xs mt-1 font-medium transition-all duration-200',
          isActive ? 'text-white' : 'text-white'
        )}
      >
        {item.label}
      </span>
    </Link>
  )
}

function ItemsContainer ({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex flex-row justify-around items-center h-16'>
      {children}
    </div>
  )
}

function TopNav () {
  return (
    <nav className='md:hidden bg-dark-blue-hover rounded-2xl py-2'>
      <ItemsContainer>
        {topNavSet.map((item, idx) => (
          <TopNavItem key={idx} {...item} />
        ))}
      </ItemsContainer>
    </nav>
  )
}

function BottomNav () {
  return (
    <nav className='md:hidden fixed inset-x-0 bottom-0 bg-primary rounded-t-2xl shadow z-[100] py-2'>
      <ItemsContainer>
        {bottomNavSet.map((item, idx) => (
          <BottomNavItem key={idx} {...item} />
        ))}
      </ItemsContainer>
    </nav>
  )
}

export { TopNav, BottomNav }