'use client'
import PositionToggle from '@/components/mobile/large/PositionToggle'
import { useSetActiveNav } from '@/lib/store'

import { useEffect, useState } from 'react'

export default function PositionsPage () {
  const setActiveNav = useSetActiveNav()

  useEffect(() => {
    setActiveNav(null)
  }, [setActiveNav])

  const [tab, setTab] = useState<'Position' | 'Order'>('Position')
  const [positionView, setPositionView] = useState<'form' | 'info'>('form')
  return (
    <div className=''>
      {tab === 'Position' ? (
        <div className='absolute top-4 right-0 left-0 text-white pt-[20px] px-6 flex justify-between gap-x-5'>
          <div>
            <h1 className='text-2xl font-semibold'>Positions</h1>

            <p className='text-[12px] text-[#EAEAEA] mt-5'>Balance</p>
            <span className='text-[18px] font-semibold'>$10,000.00</span>

            <p className='text-[15px] text-[#EAEAEA] mt-5'>Total P&L</p>
            <span className='text-[28px] font-semibold'>$547.23</span>
          </div>
          <div className='mr-3'>
            <span className='text-[#C8C6C6] text-[12px]'>Equity($)</span>
            <p className='text-[18px] font-semibold'>10.00</p>
            <span className='text-[#C8C6C6] text-[12px] mt-1'>Margin($)</span>
            <p className='text-[18px] font-semibold'>00.00</p>
            <span className='text-[#C8C6C6] text-[12px] mt-1'>
              Free Margin($)
            </span>
            <p className='text-[18px] font-semibold'>10.00</p>
            <span className='text-[#C8C6C6] text-[12px] mt-1'>
              Margin Level
            </span>
            <p className='text-[18px] font-semibold'>%80.00</p>
          </div>
        </div>
      ) : (
        <div className='absolute top-4 right-0 left-0 text-white pt-[20px] px-6 flex justify-between gap-x-5'>
          <div>
            <h1 className='text-2xl font-semibold'>Orders</h1>

            <p className='text-[12px] text-[#EAEAEA] mt-5'>Balance</p>
            <span className='text-[18px] font-semibold'>$10,000.00</span>

            <p className='text-[15px] text-[#EAEAEA] mt-5'>Total P&L</p>
            <span className='text-[28px] font-semibold'>$547.23</span>
          </div>
          <div className='mr-3'>
            <span className='text-[#C8C6C6] text-[12px]'>Equity($)</span>
            <p className='text-[18px] font-semibold'>10.00</p>
            <span className='text-[#C8C6C6] text-[12px] mt-1'>Margin($)</span>
            <p className='text-[18px] font-semibold'>00.00</p>
            <span className='text-[#C8C6C6] text-[12px] mt-1'>
              Free Margin($)
            </span>
            <p className='text-[18px] font-semibold'>10.00</p>
            <span className='text-[#C8C6C6] text-[12px] mt-1'>
              Margin Level
            </span>
            <p className='text-[18px] font-semibold'>%80.00</p>
          </div>
        </div>
      )}

      <div className='mt-[40px]'>
        {/* Toggle buttons with smooth animation */}
        <div className='flex gap-x-3 mb-3 bg-[#DDE9FC] p-2 rounded-[10px] absolute top-[255px] left-2 right-2'>
          <button
            onClick={() => setTab('Position')}
            className={`flex-1 py-4 rounded-lg text-sm font-semibold ${
              tab === 'Position'
                ? 'bg-[#1D6CE9] text-white'
                : 'bg-gray-100 text-gray-700'
            }`}
          >
            Position
          </button>
          <button
            onClick={() => setTab('Order')}
            className={`flex-1 py-4 rounded-lg text-sm font-semibold ${
              tab === 'Order'
                ? 'bg-[#1D6CE9] text-white'
                : 'bg-gray-100 text-gray-700'
            }`}
          >
            Order
          </button>
        </div>

        {/* Content */}
        <div className=''>
          <PositionToggle tab={tab} positionView={positionView} />
        </div>
      </div>
    </div>
  )
}
