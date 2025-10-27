'use client'

import { IoIosArrowRoundBack } from 'react-icons/io'

interface BackHeaderProps {
  onBack: () => void
  title: string
  subtitle?: string
}

export default function BackHeader({ onBack, title, subtitle }: BackHeaderProps) {
  return (
    <div className='flex gap-x-2 mb-3'>
      <button
        onClick={onBack}
        className='w-[30px] h-[30px] bg-[#2368D429] rounded-[6px] flex items-center justify-center'
      >
        <IoIosArrowRoundBack className='text-normal-blue-hover' size={23} />
      </button>
      <div>
        <h3 className='text-[#2D3E50] font-bold text-sm'>{title}</h3>
        {subtitle && (
          <p className='text-[10px] font-bold text-[#707070] mt-1'>{subtitle}</p>
        )}
      </div>
    </div>
  )
}
