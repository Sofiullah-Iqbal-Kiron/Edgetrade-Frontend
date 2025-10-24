'use client'
import HistoryToggle from "@/components/mobile/large/HistoryToggle";
import { useEffect, useState } from "react";
import { useSetActiveNav } from '@/lib/store'

export default function HistoryPage () {

  const setActiveNav = useSetActiveNav()
  
    useEffect(() => {
      setActiveNav(null)
    }, [setActiveNav])
  
    const [tab, setTab] = useState<'Trade' | 'Transaction'>('Trade')
    const [tradeView, setTradeView] = useState<'form' | 'info'>('form')
    const [amount, setAmount] = useState('100')
    const quickAmounts = [100, 250, 500, 1000, 2500]
  
    const transactionFee = 0.0
    const commission = 0.0
    const total = (Number(amount || 0) + transactionFee + commission).toFixed(2)
  return (
    <div className=''>
      <div className='absolute top-5 right-0 left-0 text-white pt-[20px] px-6 flex gap-x-5'>
        <div>
          <h1 className='text-2xl font-semibold'>Closed Position</h1>
          <p className="text-[15px] text-[#EAEAEA] mt-5">
            Total P&L 
          </p>
          <span className="text-[28px] font-semibold">$547.23</span>
        </div>
        <div>
          <span className="text-[#C8C6C6] text-[12px]">Total Swap($)</span>
          <p className="text-[18px] font-semibold">10.00</p>
          <span className="text-[#C8C6C6] text-[12px] mt-1">Total Commission($)</span>
          <p className="text-[18px] font-semibold">00.00</p>
          <span className="text-[#C8C6C6] text-[12px] mt-1">Balance</span>
          <p className="text-[18px] font-semibold">$10,000.00</p>
        </div>
      </div>


      <div className="mt-[40px]">
            {/* Toggle buttons with smooth animation */}
            <div className='flex gap-x-3 mb-3 bg-[#DDE9FC] p-2 rounded-[10px] absolute top-[230px] left-2 right-2'>
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
              
                quickAmounts={quickAmounts}
                transactionFee={transactionFee}
                commission={commission}
                total={total}
              />
            </div>
          </div>
    </div>
  )
}
