'use client'

import WithdrawalToggle from '@/components/mobile/md/WithdrawalToggle'
import { useSetActiveNav } from '@/lib/store'
import { useEffect, useState } from 'react'

export default function WithdrawalPage() {
  const setActiveNav = useSetActiveNav()

  useEffect(() => {
    setActiveNav(null)
  }, [setActiveNav])

  const [tab, setTab] = useState<'Bank' | 'Crypto'>('Bank')
  const [bankView, setBankView] = useState<'form' | 'info'>('form')
  const [cryptoView, setCryptoView] = useState<'form' | 'info'>('form')
  const [amount, setAmount] = useState('100')
  const quickAmounts = [100, 250, 500, 1000, 2500]

  const transactionFee = 0.0
  const commission = 0.0
  const total = (Number(amount || 0) + transactionFee + commission).toFixed(2)

  return (
    <div className="w-full px-4 bg-[#DDE9FC] rounded-[10px] py-8 mt-[30px]">
      {/* Toggle buttons with smooth animation */}
      <div className='flex gap-x-3 mb-3 bg-[#DDE9FC] p-2 rounded-[10px] absolute top-[227px] left-2 right-2'>
        <button
          onClick={() => setTab('Bank')}
          className={`flex-1 py-4 rounded-lg text-sm font-semibold ${
            tab === 'Bank' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'
          }`}
        >
          Bank
        </button>
        <button
          onClick={() => setTab('Crypto')}
          className={`flex-1 py-4 rounded-lg text-sm font-semibold ${
            tab === 'Crypto' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'
          }`}
        >
          Crypto
        </button>
      </div>

      {/* Content */}
      <div className="">
        <WithdrawalToggle
          tab={tab}
          bankView={bankView}
          setBankView={setBankView}
          cryptoView={cryptoView}
          setCryptoView={setCryptoView}
          amount={amount}
          setAmount={setAmount}
          quickAmounts={quickAmounts}
          transactionFee={transactionFee}
          commission={commission}
          total={total}
        />
      </div>
    </div>
  )
}
