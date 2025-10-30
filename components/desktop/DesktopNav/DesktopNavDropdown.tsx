'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { IoMdArrowDropdown } from 'react-icons/io'
import {
  ArrowUpRight,
  BarChart2,
  LogOut,
  ArrowDownLeft,
  User,
  ChartLine,
  ChevronRight
} from 'lucide-react'

export default function DesktopDropdown () {
  const [open, setOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className='relative' ref={dropdownRef}>
      <div
        onClick={() => setOpen(!open)}
        className='flex items-center space-x-1 cursor-pointer select-none'
      >
        <span className='font-bold text-sm text-[#5D5D5D]'>
          EMMA BROWN 98765 -{' '}
          <span className='text-[#707070] font-normal ml-[4px]'>USD</span>
        </span>
        <IoMdArrowDropdown
          className={`text-[#707070] transition-transform duration-200 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className='absolute -right-[23px] mt-[15px] w-56 bg-white shadow-lg overflow-hidden border border-gray-100'
          >
            <div className='bg-normal-blue w-full h-[3px]'></div>
            <ul className='py-2 text-sm text-[#5D5D5D]'>
              <DropdownItem
                icon={<ArrowUpRight size={16} />}
                label='Withdrawl'
              />
              <DropdownItem
                icon={<ArrowDownLeft size={16} />}
                label='Deposit'
              />
              <DropdownItem
                icon={<ChartLine size={16} />}
                label='Account Statistics'
              />
              <DropdownItem
                icon={<User size={16} />}
                label='Account Verification'
              />
              <DropdownItem icon={<LogOut size={16} />} label='Sign Out' />
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function DropdownItem ({
  icon,
  label
}: {
  icon: React.ReactNode
  label: string
}) {
  return (
    <li>
      <button className='flex items-center justify-between w-full px-4 py-2 hover:bg-gray-50 transition-colors duration-150'>
        <div className='flex items-center'>
          <span className='mr-2 text-normal-blue'>{icon}</span>
          <p className='text-[12px] font-bold  text-[#5D5D5D]'>{label}</p>
        </div>
        <ChevronRight className='text-[#707070]' size={16} />
      </button>
    </li>
  )
}
