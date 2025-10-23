'use client'

import { motion, AnimatePresence } from 'framer-motion'
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
    <div className='relative overflow-hidden'>
      <AnimatePresence mode='wait'>
        {tab === 'Bank' ? (
          <motion.div
            key='bank'
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <AnimatePresence mode='wait'>
              {bankView === 'form' ? (
                <motion.div
                  key='form'
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
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
                        className={`text-xs font-semibold px-3 py-2 rounded-lg border transition-all duration-200 ${
                          Number(amount) === q
                            ? 'bg-blue-600 text-white border-blue-600 scale-105'
                            : 'bg-white text-[#5D5D5D] border-gray-200 hover:border-blue-400'
                        }`}
                      >
                        $ {q}
                      </button>
                    ))}
                  </div>

                  <div className='border rounded-lg p-3 bg-[#EFEFEF] mb-3 text-sm font-semibold'>
                    <div className='flex justify-between mb-1 text-[#707070]'>
                      <div className='text-[12px] font-bold'>
                        Amount to be sent:
                      </div>
                      <div>${Number(amount).toFixed(2)}</div>
                    </div>
                    <div className='flex justify-between mb-1 text-[#707070]'>
                      <div className='text-[12px] font-bold'>
                        Transaction Fee:
                      </div>
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

                  <motion.button
                    onClick={() => setBankView('info')}
                    className='w-full py-3 rounded-[6px] bg-normal-blue-hover text-white font-bold text-sm transition-all duration-300 hover:bg-blue-700'
                  >
                    Withdraw
                  </motion.button>
                </motion.div>
              ) : (
                <motion.div
                  key='info'
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <button
                onClick={() => setBankView('form')}
                className='w-[30px] h-[30px] bg-[#2368D429] rounded-[10px] flex items-center justify-center'
              >
                <IoIosArrowRoundBack
                  className='text-normal-blue-hover'
                  size={23}
                />
              </button>
                  <div className='space-y-1'>
                    <div>
                      <Label
                        htmlFor='bank-name'
                        className='py-2 text-[12px] text-[#5D5D5D] font-bold'
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
                        className='py-2 text-[12px] text-[#5D5D5D] font-bold'
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
                        className='py-2 text-[12px] text-[#5D5D5D] font-bold'
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

                    <div className='border rounded-lg p-3 bg-[#EFEFEF] mb-3 text-sm font-semibold mt-3'>
                      <div className='flex justify-between mb-1 text-[#707070]'>
                        <div className='text-[12px] font-bold'>
                          Amount to be sent:
                        </div>
                        <div>${Number(amount).toFixed(2)}</div>
                      </div>
                      <div className='flex justify-between mb-1 text-[#707070]'>
                        <div className='text-[12px] font-bold'>
                          Transaction Fee:
                        </div>
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

                    <motion.button
                      onClick={() => alert('Withdrawal Approved (simulate)')}
                      className='w-full py-3 rounded-[6px] bg-blue-600 text-white font-bold text-sm transition-all duration-300 hover:bg-blue-700'
                    >
                      Approve
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ) : (
          <motion.div
            key='crypto'
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className=''
          >
            <div className='flex gap-x-2'>
              <button
                onClick={() => setBankView('form')}
                className='w-[30px] h-[30px] bg-[#2368D429] rounded-[10px] flex items-center justify-center'
              >
                <IoIosArrowRoundBack
                  className='text-normal-blue-hover'
                  size={23}
                />
              </button>
              <div>
                <h3 className='text-[#2D3E50] font-bold text-sm'>
                  Cryptocurrency Withdrawal
                </h3>
                <p className='text-[10px] font-bold text-[#707070] mb-3'>
                  Choose one of the supported cryptocurrencies:
                </p>
              </div>
            </div>

            <div className='mb-3'>
              <label className='text-[14px] font-bold text-[#5D5D5D] block mb-1'>
                Crypto
              </label>
              <div className='flex items-center justify-between bg-white border border-[#E4EAF7] rounded-lg p-2'>
                <div className='flex items-center gap-2'>
                  <Image src={usdtLogo} alt='USDT' className='w-4 h-4' />
                  <span className='text-[#5D5D5D] text-[16px] font-bold'>
                    USDT
                  </span>
                </div>
                <IoIosArrowDown size={18} className='text-[#707070]' />
              </div>
            </div>

            <div className='mb-3'>
              <label className='text-[14px] font-bold text-[#5D5D5D] block mb-1'>
                Network
              </label>
              <div className='flex items-center justify-between bg-white border border-[#E4EAF7] rounded-lg p-2'>
                <span className='text-[#5D5D5D] text-[16px] font-bold'>
                  TRC 20
                </span>
                <IoIosArrowDown size={18} className='text-[#707070]'/>
              </div>
            </div>

            <div className='mb-3'>
              <label className='text-[14px] font-bold text-[#5D5D5D] block mb-1'>
                Withdrawal Address
              </label>
              <div className='flex items-center bg-white border border-[#E4EAF7] rounded-lg p-2'>
                <input
                  type='text'
                  placeholder='sat4d9fd465afd5afda49a'
                  className='flex-1 bg-transparent text-[#5D5D5D] text-[14px] focus:outline-none font-bold'
                />
                <button
                  onClick={() =>
                    navigator.clipboard.writeText('satd49fd465afad5afda49a')
                  }
                  className='text-[#2D6CFF] ml-2 text-[14px] w-8 h-8 bg-[#2368D429] rounded-[6px] flex items-center justify-center transition-all duration-200 hover:bg-[#2D6CFF1A]'
                >
                  <LuCopy />
                </button>
              </div>
            </div>

            <div className='border rounded-lg p-3 bg-[#EFEFEF] mb-3 text-sm font-bold'>
              <div className='flex justify-between mb-1 text-[#5D5D5D]'>
                <div className='text-[12px] font-bold'>Amount to be Withdraw:</div>
                <div>${Number(amount).toFixed(2)}</div>
              </div>
              <div className='flex justify-between mt-2 text-[#5D5D5D]'>
                <div className='text-[12px] font-bold'>Transaction Fee:</div>
                <div>${transactionFee.toFixed(2)}</div>
              </div>
            </div>

            <motion.button
              
              onClick={() => alert('Crypto Withdrawal Approved (simulate)')}
              className='w-full py-3 rounded-[6px] bg-[#2D6CFF] text-white font-bold text-[14px]  shadow-sm hover:bg-[#1E56D9] transition-all duration-300'
            >
              Approve
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
