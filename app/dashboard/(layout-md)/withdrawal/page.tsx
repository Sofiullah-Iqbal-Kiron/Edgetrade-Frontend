'use client'

import WithdrawalToggle from '@/components/mobile/md/WithdrawalToggle'
import { useSetActiveNav } from '@/lib/store'
import { useEffect, useState } from 'react'

export default function WithdrawalPage () {
  const setActiveNav = useSetActiveNav()

  useEffect(() => {
    // Mark no top tab as active (or set to something neutral)
    setActiveNav(null)
  }, [setActiveNav])
  const [tab, setTab] = useState<'Bank' | 'Crypto'>('Bank')
  const [bankView, setBankView] = useState<'form' | 'info'>('form')
  const [amount, setAmount] = useState('100')
  const quickAmounts = [100, 250, 500, 1000, 2500]

  const transactionFee = 0.0
  const commission = 0.0
  const total = (Number(amount || 0) + transactionFee + commission).toFixed(2)

  return (
    <div className='mt-10 bg-[#DDE9FC] w-full py-6 px-4 rounded-[10px]'>
      <div className='flex gap-x-3 mb-3 bg-[#DDE9FC] py-4 px-2 rounded-[10px] absolute top-[180px] left-2 right-2'>
        <button
          onClick={() => setTab('Bank')}
          className={`flex-1 py-4 rounded-lg text-sm font-semibold ${
            tab === 'Bank'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700'
          }`}
        >
          Bank
        </button>
        <button
          onClick={() => setTab('Crypto')}
          className={`flex-1 py-4 rounded-lg text-sm font-semibold ${
            tab === 'Crypto'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700'
          }`}
        >
          Crypto
        </button>
      </div>

      <WithdrawalToggle
        tab={tab}
        bankView={bankView}
        setBankView={setBankView}
        amount={amount}
        setAmount={setAmount}
        quickAmounts={quickAmounts}
        transactionFee={transactionFee}
        commission={commission}
        total={total}
      />
    </div>
  )
}
