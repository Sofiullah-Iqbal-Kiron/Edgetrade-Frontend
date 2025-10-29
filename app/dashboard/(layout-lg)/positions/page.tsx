'use client'
import PositionToggle from '@/components/mobile/large/PositionToggle'
import { useSetActiveNav } from '@/lib/store'
import { useEffect, useState } from 'react'
import { getTradingAccounts, getAccountBalance } from '@/lib/api/calls'

export default function PositionsPage() {
  const setActiveNav = useSetActiveNav()

  useEffect(() => {
    setActiveNav(null)
  }, [setActiveNav])

  const [tab, setTab] = useState<'Position' | 'Order'>('Position')
  const [positionView, setPositionView] = useState<'form' | 'info'>('form')
  
  // Stats from API
  const [balance, setBalance] = useState('$10,000.00')
  const [totalPnL, setTotalPnL] = useState('$547.23')
  const [equity, setEquity] = useState('10.00')
  const [margin, setMargin] = useState('00.00')
  const [freeMargin, setFreeMargin] = useState('10.00')
  const [marginLevel, setMarginLevel] = useState('%80.00')

  // Fetch account balance and stats
  useEffect(() => {
    const fetchAccountStats = async () => {
      try {
        const accounts = await getTradingAccounts()
        if (accounts && accounts.length > 0) {
          const balanceData = await getAccountBalance(accounts[0].id)
          
          // Update all stats from API
          setBalance(`$${balanceData.balance.toFixed(2)}`)
          setTotalPnL(`$${balanceData.unrealized_pnl.toFixed(2)}`)
          setEquity(`$${balanceData.equity.toFixed(2)}`)
          setMargin(`$${balanceData.margin_used.toFixed(2)}`)
          setFreeMargin(`$${balanceData.margin_free.toFixed(2)}`)
          setMarginLevel(`%${balanceData.margin_level.toFixed(2)}`)
        }
      } catch (error) {
        console.error('Error fetching account stats:', error)
      }
    }
    
    fetchAccountStats()
  }, [])
  return (
    <div className=''>
      {tab === 'Position' ? (
        <div className='absolute top-4 right-0 left-0 text-white pt-[20px] px-6 flex justify-between gap-x-5'>
          <div>
            <h1 className='text-2xl font-semibold'>Positions</h1>

            <p className='text-[12px] text-[#EAEAEA] mt-5'>Balance</p>
            <span className='text-[18px] font-semibold'>{balance}</span>

            <p className='text-[15px] text-[#EAEAEA] mt-5'>Total P&L</p>
            <span className='text-[28px] font-semibold'>{totalPnL}</span>
          </div>
          <div className='mr-3'>
            <span className='text-[#C8C6C6] text-[12px]'>Equity($)</span>
            <p className='text-[18px] font-semibold'>{equity}</p>
            <span className='text-[#C8C6C6] text-[12px] mt-1'>Margin($)</span>
            <p className='text-[18px] font-semibold'>{margin}</p>
            <span className='text-[#C8C6C6] text-[12px] mt-1'>
              Free Margin($)
            </span>
            <p className='text-[18px] font-semibold'>{freeMargin}</p>
            <span className='text-[#C8C6C6] text-[12px] mt-1'>
              Margin Level
            </span>
            <p className='text-[18px] font-semibold'>{marginLevel}</p>
          </div>
        </div>
      ) : (
        <div className='absolute top-4 right-0 left-0 text-white pt-[20px] px-6 flex justify-between gap-x-5'>
          <div>
            <h1 className='text-2xl font-semibold'>Orders</h1>

            <p className='text-[12px] text-[#EAEAEA] mt-5'>Balance</p>
            <span className='text-[18px] font-semibold'>{balance}</span>

            <p className='text-[15px] text-[#EAEAEA] mt-5'>Total P&L</p>
            <span className='text-[28px] font-semibold'>{totalPnL}</span>
          </div>
          <div className='mr-3'>
            <span className='text-[#C8C6C6] text-[12px]'>Equity($)</span>
            <p className='text-[18px] font-semibold'>{equity}</p>
            <span className='text-[#C8C6C6] text-[12px] mt-1'>Margin($)</span>
            <p className='text-[18px] font-semibold'>{margin}</p>
            <span className='text-[#C8C6C6] text-[12px] mt-1'>
              Free Margin($)
            </span>
            <p className='text-[18px] font-semibold'>{freeMargin}</p>
            <span className='text-[#C8C6C6] text-[12px] mt-1'>
              Margin Level
            </span>
            <p className='text-[18px] font-semibold'>{marginLevel}</p>
          </div>
        </div>
      )}

      <div className='mt-[40px]'>
        {/* Toggle buttons with smooth animation */}
        <div className='flex gap-x-3 mb-3 bg-[#DDE9FC] p-2 rounded-[10px] absolute top-[255px] left-2 right-2'>
          <button
            onClick={() => setTab('Position')}
            className={`flex-1 py-4 rounded-lg text-sm font-semibold ${tab === 'Position'
              ? 'bg-[#1D6CE9] text-white'
              : 'bg-gray-100 text-gray-700'
              }`}
          >
            Position
          </button>
          <button
            onClick={() => setTab('Order')}
            className={`flex-1 py-4 rounded-lg text-sm font-semibold ${tab === 'Order'
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
