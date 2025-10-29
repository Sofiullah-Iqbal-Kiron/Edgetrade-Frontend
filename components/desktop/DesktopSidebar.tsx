'use client'
import Link from 'next/link'
import logo from '@/public/logo/signin-top-logo.png'
import sideBarIcon from '@/public/logo/desktop-sidebar-icon.svg'
import { MdOutlineHeadsetMic } from 'react-icons/md'

import { Bell, Settings, WalletMinimal as DepositIcon } from 'lucide-react'
import Image from 'next/image'
import { MenuIcon, TradeIcon } from '@/components/icons'
export default function DesktopSidebar () {
  return (
    <aside className='w-[55px] bg-white shadow-md flex flex-col items-center justify-between py-6'>
      <div>
        <Image src={logo} alt='logo' width={29} height={25} />
        <div className='flex flex-col items-center space-y-6 mt-[35px]'>
          <Link href='/dashboard'>
            <MenuIcon className=' text-[#707070] cursor-pointer' size={26} />
          </Link>
          <Link href='/dashboard/trade'>
            <TradeIcon className='text-[#707070] cursor-pointer' size={26} />
          </Link>
          <Link href='/dashboard/positions'>
            <Image
              src={sideBarIcon}
              alt='sidebaricon'
              className='text-[#707070]'
            />
          </Link>
          <Link href='/dashboard/deposit'>
            <DepositIcon className='text-[#707070] cursor-pointer' size={26} />
          </Link>

          <Bell className='text-[#707070] cursor-pointer' size={26} />
        </div>
      </div>

      <div className='flex flex-col items-center space-y-6 mb-5'>
        <Settings className='text-[#707070] cursor-pointer' size={26} />
        <MdOutlineHeadsetMic
          className='text-[#707070] cursor-pointer'
          size={26}
        />
      </div>
    </aside>
  )
}
