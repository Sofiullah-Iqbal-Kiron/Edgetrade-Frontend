'use client'

import Image from 'next/image'
import { LuCopy } from 'react-icons/lu'
import DepositInfoBank from './DepositInfoBank'
import DepositInfoCrypto from './DepositInfoCrypto'
import usdtLogo from '@/public/logo/USDT - Tether.png'
import { IoIosArrowDown, IoIosArrowRoundBack } from 'react-icons/io'
import { ImportantNotesAccordion } from './ImportantNotesAccordion'
import ApproveButton from '../ApproveButton'
import BackHeader from './BackHeader'

interface ToggleMDProps {
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

export default function DepositToggle ({
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
}: ToggleMDProps) {
  return (
    <div className=''>
      {tab === 'Bank' ? (
        <div>
          {bankView === 'form' ? (
            <DepositInfoBank
              amount={amount}
              setAmount={setAmount}
              quickAmounts={quickAmounts}
              transactionFee={transactionFee}
              commission={commission}
              total={total}
              setBankView={setBankView}
            />
          ) : (
            <div>
              <BackHeader
                onBack={() => setBankView('form')}
                title='Bank Transfer Information'
                subtitle='Please make the transfer using the following bank details:'
              />

              <div className='bg-white rounded-lg py-4 px-3 mb-3 text-sm'>
                {[
                  { label: 'Bank Name:', value: 'Forex Bank LTD' },
                  { label: 'Account Name:', value: 'Forex Trading Platform' },
                  { label: 'Account Number:', value: '1234567890' },
                  {
                    label: 'IBAN:',
                    value: 'TR12 3456 7890 1234 5678 9012 3456 78'
                  },
                  { label: 'Swift Code:', value: 'FRXBTRIX' }
                ].map((item, index) => (
                  <div
                    key={index}
                    className='mb-2 flex justify-between items-center'
                  >
                    <strong className='text-[10px] font-bold text-[#707070]'>
                      {item.label}
                    </strong>
                    <span className='text-[10px] max-w-[150px] font-bold text-[#5D5D5D] text-right'>
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              <ImportantNotesAccordion />
              <ApproveButton />
            </div>
          )}
        </div>
      ) : tab === 'Crypto' ? (
        <div>
          {cryptoView === 'form' ? (
            <DepositInfoCrypto
              amount={amount}
              setAmount={setAmount}
              quickAmounts={quickAmounts}
              transactionFee={transactionFee}
              commission={commission}
              total={total}
              setCryptoView={setCryptoView}
            />
          ) : (
            <div>
              <div className=''>
                {/* Header */}
                <BackHeader
                  onBack={() => setCryptoView('form')}
                  title='Cryptocurrency Deposit'
                  subtitle='Choose one of the supported cryptocurrencies:'
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

                <ImportantNotesAccordion />
                <ApproveButton />
              </div>
            </div>
          )}
        </div>
      ) : null}
    </div>
  )
}
