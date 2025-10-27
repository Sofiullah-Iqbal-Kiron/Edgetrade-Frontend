'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { IoIosArrowDown, IoIosArrowRoundBack } from 'react-icons/io'
import { LuCopy } from 'react-icons/lu'
import Image from 'next/image'
import usdtLogo from '@/public/logo/USDT - Tether.png'
import { Label } from '@radix-ui/react-label'
import { Input } from '@/components/ui/input'
import ApproveButton from '../ApproveButton'
import BackHeader from './BackHeader'
import WithdrawalInfoBank from './WithdrawalInfoBank'
import WithdrawalInfoCrypto from './WithdrawalInfoCrypto'

interface WithdrawalToggleProps {
  tab: 'Bank' | 'Crypto'
  bankView: 'form' | 'info'
  setBankView: (view: 'form' | 'info') => void
  cryptoView: 'form' | 'info'
  setCryptoView: (view: 'form' | 'info') => void
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
  cryptoView,
  setCryptoView,
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
                  <WithdrawalInfoBank
                    amount={amount}
                    setAmount={setAmount}
                    quickAmounts={quickAmounts}
                    transactionFee={transactionFee}
                    commission={commission}
                    total={total}
                    setBankView={setBankView}
                  />
                </motion.div>
              ) : (
                <motion.div
                  key='info'
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <BackHeader
                    onBack={() => setBankView('form')}
                    title='Bank Withdrawal'
                    subtitle='Please make the withdrawal using the following details:'
                  />
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

                    <ApproveButton />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ) : tab === 'Crypto' ? (
          <div>
            {cryptoView === 'form' ? (
              <WithdrawalInfoCrypto
                amount={amount}
                setAmount={setAmount}
                quickAmounts={quickAmounts}
                transactionFee={transactionFee}
                commission={commission}
                total={total}
                setCryptoView={setCryptoView}
              />
            ) : (
              <motion.div
                key='crypto'
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className=''
              >
                <BackHeader
                  onBack={() => setCryptoView('form')}
                  title='Cryptocurrency Withdrawal'
                  subtitle=' Choose one of the supported cryptocurrencies:'
                />

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
                    <IoIosArrowDown size={18} className='text-[#707070]' />
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
                    <div className='text-[12px] font-bold'>
                      Amount to be Withdraw:
                    </div>
                    <div>${Number(amount).toFixed(2)}</div>
                  </div>
                  <div className='flex justify-between mt-2 text-[#5D5D5D]'>
                    <div className='text-[12px] font-bold'>
                      Transaction Fee:
                    </div>
                    <div>${transactionFee.toFixed(2)}</div>
                  </div>
                </div>

                <ApproveButton />
              </motion.div>
            )}
          </div>
        ) : null}
      </AnimatePresence>
    </div>
  )
}
