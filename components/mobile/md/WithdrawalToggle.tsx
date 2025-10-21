'use client'

import { IoIosArrowDown, IoIosArrowRoundBack } from 'react-icons/io'
import { LuCopy } from 'react-icons/lu'
import Image from 'next/image'
import usdtLogo from '@/public/logo/USDT - Tether.png'
import { Label } from '@radix-ui/react-label'
import { Input } from '@/components/ui/input'

interface WithdrawalToggleProps {
  tab: 'Bank' | 'Crypto'
  bankView: 'form' | 'info'
  setBankView: (view: 'form' | 'info') => void
  amount: string
  setAmount: (value: string) => void
  quickAmounts: number[]
  transactionFee: number
  commission: number
  total: string
}

export default function WithdrawalToggle ({
  tab,
  bankView,
  setBankView,
  amount,
  setAmount,
  quickAmounts,
  transactionFee,
  commission,
  total
}: WithdrawalToggleProps) {
  return (
    <div>
      {tab === 'Bank' ? (
        <div>
          {bankView === 'form' ? (
            <div>
              <h3 className='text-sm font-semibold mb-2'>
                Withdrawal Information
              </h3>
              <p className='text-xs text-[#707070] mb-3'>
                Please enter the amount you wish to withdraw:
              </p>

              <label className='block text-sm font-bold text-[#5D5D5D] mb-1'>
                Amount to be withdrawn (USD)
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
                    className={`text-xs px-3 py-2 rounded-lg border ${
                      Number(amount) === q
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'bg-white text-[#5D5D5D] border-gray-200'
                    }`}
                  >
                    ${q}
                  </button>
                ))}
              </div>

              <div className='border rounded-lg p-3 bg-[#EFEFEF] mb-3 text-sm font-bold'>
                <div className='flex justify-between mb-1 text-[#5D5D5D]'>
                  <div>Amount to be sent:</div>
                  <div>${Number(amount).toFixed(2)}</div>
                </div>
                <div className='flex justify-between mb-1 text-[#5D5D5D]'>
                  <div>Transaction Fee:</div>
                  <div>${transactionFee.toFixed(2)}</div>
                </div>
                <div className='flex justify-between mb-1 text-[#5D5D5D]'>
                  <div>Commission:</div>
                  <div>${commission.toFixed(2)}</div>
                </div>
                <div className='flex justify-between mt-2 border-t pt-2 font-semibold text-normal-blue-hover'>
                  <div>Total:</div>
                  <div>${total}</div>
                </div>
              </div>

              <button
                onClick={() => setBankView('info')}
                className='w-full py-3 rounded-lg bg-normal-blue-hover text-white font-bold text-sm'
              >
                Withdraw
              </button>
            </div>
          ) : (
            <div>
              <div className=''>
                <div>
                  <Label
                    htmlFor='bank-name'
                    className='py-2 text-[10px] text-[#767676] font-bold'
                  >
                    Bank Name
                  </Label>
                  <Input
                    id='bank-name'
                    type='text'
                    placeholder='Dutch Bank LTD'
                    required
                    className='bg-white w-full h-[40px] placeholder-[#949494] focus:outline-none px-4 text-[12px] rounded-[6px]'
                  />
                </div>
                <div>
                  <Label
                    htmlFor='bank-name'
                    className='py-2 text-[10px] text-[#767676] font-bold'
                  >
                    Bank Name
                  </Label>
                  <Input
                    id='bank-name'
                    type='text'
                    placeholder='Dutch Bank LTD'
                    required
                    className='bg-white w-full h-[40px] placeholder-[#949494] focus:outline-none px-4 text-[12px] rounded-[6px]'
                  />
                </div>
                <div>
                  <Label
                    htmlFor='bank-name'
                    className='py-2 text-[10px] text-[#767676] font-bold'
                  >
                    Bank Name
                  </Label>
                  <Input
                    id='bank-name'
                    type='text'
                    placeholder='Dutch Bank LTD'
                    required
                    className='bg-white w-full h-[40px] placeholder-[#949494] focus:outline-none px-4 text-[12px] rounded-[6px]'
                  />
                </div>
              </div>

              <div className='border rounded-lg p-3 bg-[#EFEFEF] mb-3 text-sm font-bold mt-3'>
                <div className='flex justify-between mb-1 text-[#5D5D5D]'>
                  <div>Amount to be deposited:</div>
                  <div>${Number(amount).toFixed(2)}</div>
                </div>
                <div className='flex justify-between mb-1 text-[#5D5D5D]'>
                  <div>Transaction Fee:</div>
                  <div>${transactionFee.toFixed(2)}</div>
                </div>
                <div className='flex justify-between mb-1 text-[#5D5D5D]'>
                  <div>Commission:</div>
                  <div>${commission.toFixed(2)}</div>
                </div>
                <div className='flex justify-between mt-2 border-t pt-2 font-semibold text-normal-blue-hover'>
                  <div>Total:</div>
                  <div>${total}</div>
                </div>
              </div>

              <button
                onClick={() => alert('Withdrawal Approved (simulate)')}
                className='w-full py-3 rounded-lg bg-blue-600 text-white font-medium'
              >
                Approve
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className='bg-[#F9FBFF] border border-[#DDE7FF] rounded-2xl p-4 text-sm'>
          <div className='flex gap-x-2'>
            <button
              onClick={() => setBankView('form')}
              className='w-10 h-10 bg-[#2368D429] rounded-[10px] flex items-center justify-center'
            >
              <IoIosArrowRoundBack
                className='text-normal-blue-hover'
                size={23}
              />
            </button>
            <div>
              <h3 className='text-[#2D3E50] font-bold text-sm mb-1'>
                Cryptocurrency Withdrawal
              </h3>
              <p className='text-[10px] font-bold text-[#707070] mb-3'>
                Choose the cryptocurrency and enter your wallet address:
              </p>
            </div>
          </div>

          <div className='mb-3'>
            <label className='text-[11px] font-semibold text-[#5D5D5D] block mb-1'>
              Crypto
            </label>
            <div className='flex items-center justify-between bg-white border border-[#E4EAF7] rounded-lg p-2'>
              <div className='flex items-center gap-2'>
                <Image src={usdtLogo} alt='USDT' className='w-4 h-4' />
                <span className='text-[#5D5D5D] text-[12px] font-semibold'>
                  USDT
                </span>
              </div>
              <IoIosArrowDown />
            </div>
          </div>

          <div className='mb-3'>
            <label className='text-[11px] font-semibold text-[#2D3E50] block mb-1'>
              Network
            </label>
            <div className='flex items-center justify-between bg-white border border-[#E4EAF7] rounded-lg p-2'>
              <span className='text-[12px] text-[#5D5D5D] font-semibold'>
                TRC 20
              </span>
              <IoIosArrowDown />
            </div>
          </div>

          <div className='mb-3'>
            <label className='text-[11px] font-semibold text-[#2D3E50] block mb-1'>
              Withdrawal Address
            </label>
            <div className='flex items-center bg-white border border-[#E4EAF7] rounded-lg p-2'>
              <input
                type='text'
                placeholder='sat4d9fd465afd5afda49a'
                className='flex-1 bg-transparent text-[#5D5D5D] text-[12px] focus:outline-none'
              />
              <button
                onClick={() =>
                  navigator.clipboard.writeText('satd49fd465afad5afda49a')
                }
                className='text-[#2D6CFF] ml-2 text-[14px] w-8 h-8 bg-[#2368D429] rounded-[10px] flex items-center justify-center'
              >
                <LuCopy />
              </button>
            </div>
          </div>

          <div className='border rounded-lg p-3 bg-[#EFEFEF] mb-3 text-sm font-bold'>
            <div className='flex justify-between mb-1 text-[#5D5D5D]'>
              <div>Amount to be Withdraw:</div>
              <div>${Number(amount).toFixed(2)}</div>
            </div>
            <div className='flex justify-between mb-1 text-[#5D5D5D]'>
              <div>Transaction Fee:</div>
              <div>${transactionFee.toFixed(2)}</div>
            </div>
          </div>

          <button
            onClick={() => alert('Crypto Withdrawal Approved (simulate)')}
            className='w-full py-3 rounded-lg bg-[#2D6CFF] text-white font-semibold text-sm shadow-sm hover:bg-[#1E56D9]'
          >
            Approve
          </button>
        </div>
      )}
    </div>
  )
}
