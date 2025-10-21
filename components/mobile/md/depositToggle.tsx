'use client'

import { fr } from 'date-fns/locale';
import Link from 'next/link'
import { IoIosArrowDown, IoIosArrowRoundBack } from 'react-icons/io'
import { LuCopy } from "react-icons/lu";
import usdtLogo from '@/public/logo/USDT - Tether.png'
import Image from 'next/image';
interface ToggleMDProps {
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

export default function DepositToggle({
  tab,
  bankView,
  setBankView,
  amount,
  setAmount,
  quickAmounts,
  transactionFee,
  commission,
  total
}: ToggleMDProps) {
  return (
    <div className="">
      {/* --- BANK SECTION --- */}
      {tab === 'Bank' ? (
        <div>
          {bankView === 'form' ? (
            <div>
              <h3 className="text-sm font-semibold mb-2">Deposit Information</h3>
              <p className="text-xs text-[#707070] mb-3">
                Please enter the amount you wish to deposit:
              </p>

              <label className="block text-sm font-bold text-[#5D5D5D] mb-1">
                Amount to be deposited (USD)
              </label>
              <input
                type="text"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full rounded-md border text-[#5D5D5D] border-gray-200 p-2 mb-3 bg-white focus:outline-none"
              />

              <div className="text-sm font-bold text-[#5D5D5D] mb-2">
                Quick Amount Selection
              </div>
              <div className="flex gap-2 mb-3">
                {quickAmounts.map((q) => (
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

              <div className="border rounded-lg p-3 bg-[#EFEFEF] mb-3 text-sm font-bold">
                <div className="flex justify-between mb-1 text-[#5D5D5D]">
                  <div>Amount to be deposited:</div>
                  <div>${Number(amount).toFixed(2)}</div>
                </div>
                <div className="flex justify-between mb-1 text-[#5D5D5D]">
                  <div>Transaction Fee:</div>
                  <div>${transactionFee.toFixed(2)}</div>
                </div>
                <div className="flex justify-between mb-1 text-[#5D5D5D]">
                  <div>Commission:</div>
                  <div>${commission.toFixed(2)}</div>
                </div>
                <div className="flex justify-between mt-2 border-t pt-2 font-semibold text-normal-blue-hover">
                  <div>Total:</div>
                  <div>${total}</div>
                </div>
              </div>

              <button
                onClick={() => setBankView('info')}
                className="w-full py-3 rounded-lg bg-normal-blue-hover text-white font-bold text-sm"
              >
                Deposit
              </button>
            </div>
          ) : (
            <div>
              <div className="flex gap-x-2">
                <button
                  onClick={() => setBankView('form')}
                  className="w-10 h-10 bg-[#2368D429] rounded-[10px] flex items-center justify-center"
                >
                  <IoIosArrowRoundBack
                    className="text-normal-blue-hover"
                    size={23}
                  />
                </button>

                <div>
                  <h3 className="text-sm font-semibold mb-1">
                    Bank Transfer Information
                  </h3>
                  <p className="text-[10px] font-bold text-[#707070] mb-3">
                    Please make the transfer using the following bank details:
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg py-4 px-3 mt-3 mb-3 text-sm">
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
                    className="mb-2 flex justify-between items-center"
                  >
                    <strong className="text-[10px] font-bold text-[#707070]">
                      {item.label}
                    </strong>
                    <span className="text-[10px] max-w-[150px] font-bold text-[#5D5D5D] text-right">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="bg-[#FFF3CD] border border-[#FFCD2D] rounded-lg p-3 mb-3 text-sm text-[#B28A0E]">
                <div className="font-bold text-sm mb-1">Important Notes</div>
                <ul className="text-xs list-disc list-inside">
                  <li>Minimum Investment: $100</li>
                  <li>Processing time: 1–3 business days</li>
                  <li>There is no investment fee</li>
                </ul>
              </div>

              <button
                onClick={() => alert('Approved (simulate)')}
                className="w-full py-3 rounded-lg bg-blue-600 text-white font-medium"
              >
                Approve
              </button>
            </div>
          )}
        </div>
      ) : (
        // --- CRYPTO SECTION ---
        <div className="bg-[#F9FBFF] border border-[#DDE7FF] rounded-2xl p-4 text-sm">
          {/* Header */}
          <div className='flex gap-x-2'>
            <button
                  onClick={() => setBankView('form')}
                  className="w-10 h-10 bg-[#2368D429] rounded-[10px] flex items-center justify-center"
                >
                  <IoIosArrowRoundBack
                    className="text-normal-blue-hover"
                    size={23}
                  />
                </button>
            <div>
                <div className="flex items-center gap-2 mb-1">
            <h3 className="text-[#2D3E50] font-bold text-sm">
              Cryptocurrency Deposit
            </h3>
          </div>
          <p className="text-[10px] font-bold text-[#707070] mb-3">
            Choose one of the supported cryptocurrencies:
          </p>
            </div>
          </div>

          {/* Crypto Selection */}
          <div className="mb-3">
            <label className="text-[11px] font-semibold text-[#5D5D5D] block mb-1">
              Crypto
            </label>
            <div className="flex items-center justify-between bg-white border border-[#E4EAF7] rounded-lg p-2">
              <div className="flex items-center gap-2">
                <Image src={usdtLogo} alt="USDT" className="w-4 h-4" />
                <span className="text-[#2D3E50] text-[12px] font-semibold">
                  USDT
                </span>
              </div>
              <IoIosArrowDown />

            </div>
          </div>

          {/* Network Address */}
          <div className="mb-3">
            <label className="text-[11px] font-semibold text-[#2D3E50] block mb-1">
              Network Address
            </label>
            <div className="flex items-center justify-between bg-white border border-[#E4EAF7] rounded-lg p-2">
              <span className="text-[12px] text-[#2D3E50] font-semibold">
                TRC 20
              </span>
              <IoIosArrowDown />
            </div>
          </div>

          {/* Withdrawal Address */}
          <div className="mb-3">
            <label className="text-[11px] font-semibold text-[#2D3E50] block mb-1">
              Withdrawal Address
            </label>
            <div className="flex items-center bg-white border border-[#E4EAF7] rounded-lg p-2">
              <input
                type="text"
                readOnly
                value="satd49fd465afad5afda49a"
                className="flex-1 bg-transparent text-[#5D5D5D] text-[12px] focus:outline-none"
              />
              <button
                onClick={() =>
                  navigator.clipboard.writeText('satd49fd465afad5afda49a')
                }
                className="text-[#2D6CFF] ml-2 text-[14px] w-8 h-8 bg-[#2368D429] rounded-[10px] flex items-center justify-center"
              >
                <LuCopy />

              </button>
            </div>
          </div>

          {/* Important Notes */}
          <div className="bg-[#FFF3CD] border border-[#FFCD2D] rounded-lg p-3 mb-4 text-[#B28A0E] flex items-center justify-between">
            <div className="font-bold text-sm mb-1">Important Notes</div>
             <IoIosArrowDown />
          </div>

          {/* Approve Button */}
          <button
            onClick={() => alert('Crypto Approved (simulate)')}
            className="w-full py-3 rounded-lg bg-[#2D6CFF] text-white font-semibold text-sm shadow-sm hover:bg-[#1E56D9]"
          >
            Approve
          </button>
        </div>
      )}
    </div>
  )
}
