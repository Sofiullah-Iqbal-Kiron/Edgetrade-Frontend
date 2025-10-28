'use client'

interface DepositInfoCryptoProps {
  amount: string
  setAmount: (value: string) => void
  quickAmounts: number[]
  transactionFee: number
  commission: number
  total: string
  setCryptoView: (view: 'form' | 'info') => void
}

export default function DepositInfoCrypto ({
  amount,
  setAmount,
  quickAmounts,
  transactionFee,
  commission,
  total,
  setCryptoView
}: DepositInfoCryptoProps) {
  return (
    <div>
      <h3 className='text-sm font-bold mb-2 text-[#252525]'>
        Deposit Information
      </h3>
      <p className='text-xs text-[#707070] mb-3'>
        Please enter the amount you wish to deposit:
      </p>

      <label className='block text-sm font-bold text-[#5D5D5D] mb-1'>
        Amount to be deposited (USD)
      </label>
      <input
        type='text'
        value={amount}
        onChange={e => setAmount(e.target.value)}
        className='w-full rounded-md border text-[#5D5D5D] border-gray-200 p-2 mb-3 bg-white focus:outline-none'
      />

      <div className='text-sm font-bold text-[#5D5D5D] mb-2'>
        Quick Amount Selection
      </div>
      <div className='flex gap-2 mb-3'>
        {quickAmounts.map(q => (
          <button
            key={q}
            onClick={() => setAmount(String(q))}
            className={`text-xs px-3 py-2 font-semibold rounded-lg border ${
              Number(amount) === q
                ? 'bg-blue-600 text-white border-blue-600'
                : 'bg-white text-[#5D5D5D] border-gray-200'
            }`}
          >
            $ {q}
          </button>
        ))}
      </div>

      <div className='border rounded-lg p-3 bg-[#EFEFEF] mb-3 text-sm font-semibold'>
        <div className='flex justify-between mb-1 text-[#707070]'>
          <div className='text-[12px] font-bold'>Amount to be sent:</div>
          <div>${Number(amount).toFixed(2)}</div>
        </div>
        <div className='flex justify-between mb-1 text-[#707070]'>
          <div className='text-[12px] font-bold'>Transaction Fee:</div>
          <div>${transactionFee.toFixed(2)}</div>
        </div>
        <div className='flex justify-between mb-1 text-[#707070]'>
          <div className='text-[12px] font-bold'>Commission:</div>
          <div>${commission.toFixed(2)}</div>
        </div>
        <div className='flex justify-between mt-2 border-t pt-2 text-normal-blue-hover'>
          <div className='text-base font-bold'>Total:</div>
          <div className='text-base font-semibold'>${total}</div>
        </div>
      </div>

      <button
        onClick={() => setCryptoView('info')}
        className='w-full py-3 rounded-[6px] bg-normal-blue text-white font-bold text-sm'
      >
        Deposit
      </button>
    </div>
  )
}
