'use client'
import HistoryToggle from "@/components/mobile/large/HistoryToggle";
import { useEffect, useState } from "react";
import { useSetActiveNav } from '@/lib/store'
import { getTrades, getTradeStatistics, getTradingAccounts } from '@/lib/api/calls'

export default function HistoryPage () {

  const setActiveNav = useSetActiveNav()
  
    useEffect(() => {
      setActiveNav(null)
    }, [setActiveNav])
  
    const [tab, setTab] = useState<'Trade' | 'Transaction'>('Trade')
    const [tradeView, setTradeView] = useState<'form' | 'info'>('form')
    const [totalPnL, setTotalPnL] = useState('$547.23')
    const [totalSwap, setTotalSwap] = useState('10.00')
    const [totalCommission, setTotalCommission] = useState('00.00')
    const [balance, setBalance] = useState('$10,000.00')

    // Fetch trade statistics on load
    useEffect(() => {
      const fetchStatistics = async () => {
        try {
          const accounts = await getTradingAccounts()
          if (accounts && accounts.length > 0) {
            const statistics = await getTradeStatistics(accounts[0].id)
            
            // Update stats from API
            if (statistics.total_pnl) {
              setTotalPnL(`$${statistics.total_pnl.toFixed(2)}`)
            }
            if (statistics.total_swap !== undefined) {
              setTotalSwap(statistics.total_swap.toFixed(2))
            }
            if (statistics.total_commission !== undefined) {
              setTotalCommission(statistics.total_commission.toFixed(2))
            }
            
            // Get balance from the account
            const balanceValue = accounts[0].balance || 10000
            setBalance(`$${balanceValue.toFixed(2)}`)
          }
        } catch (error) {
          console.error('Error fetching trade statistics:', error)
        }
      }
      
      fetchStatistics()
    }, [])
  
  return (
    <div className=''>
      <div className='absolute top-5 right-0 left-0 text-white pt-[20px] px-6 flex gap-x-5'>
        <div>
          <h1 className='text-2xl font-semibold'>Closed Position</h1>
          <p className="text-[15px] text-[#EAEAEA] mt-5">
            Total P&L 
          </p>
          <span className="text-[28px] font-semibold">{totalPnL}</span>
        </div>
        <div>
          <span className="text-[#C8C6C6] text-[12px]">Total Swap($)</span>
          <p className="text-[18px] font-semibold">{totalSwap}</p>
          <span className="text-[#C8C6C6] text-[12px] mt-1">Total Commission($)</span>
          <p className="text-[18px] font-semibold">{totalCommission}</p>
          <span className="text-[#C8C6C6] text-[12px] mt-1">Balance</span>
          <p className="text-[18px] font-semibold">{balance}</p>
        </div>
      </div>


      <div className="mt-[40px]">
            {/* Toggle buttons with smooth animation */}
            <div className='flex gap-x-3 mb-3 bg-[#DDE9FC] p-2 rounded-[10px] absolute top-[255px] left-2 right-2'>
              <button
                onClick={() => setTab('Trade')}
                className={`flex-1 py-4 rounded-lg text-sm font-semibold ${
                  tab === 'Trade' ? 'bg-[#1D6CE9] text-white' : 'bg-gray-100 text-gray-700'
                }`}
              >
                Trade
              </button>
              <button
                onClick={() => setTab('Transaction')}
                className={`flex-1 py-4 rounded-lg text-sm font-semibold ${
                  tab === 'Transaction' ? 'bg-[#1D6CE9] text-white' : 'bg-gray-100 text-gray-700'
                }`}
              >
                Transaction
              </button>
            </div>
      
            {/* Content */}
            <div className="">
              <HistoryToggle
                tab={tab}
                tradeView={tradeView}
                setTradeView={setTradeView}
 
              />
            </div>
          </div>
    </div>
  )
}
