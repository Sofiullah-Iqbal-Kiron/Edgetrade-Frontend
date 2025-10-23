'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

interface Props {
  tab: 'Trade' | 'Order'
}

export default function TradeToggle({ tab }: Props) {
  // Trade states
  const [tradeVolume, setTradeVolume] = useState('0.01')
  const [tradeStopLoss, setTradeStopLoss] = useState('1.024')
  const [tradeTakeProfit, setTradeTakeProfit] = useState('1.024')
  const [tradeStopLossChecked, setTradeStopLossChecked] = useState(false)
  const [tradeTakeProfitChecked, setTradeTakeProfitChecked] = useState(false)

  // Order states
  const [orderVolume, setOrderVolume] = useState('0.01')
  const [orderPrice, setOrderPrice] = useState('109.982')
  const [orderStopLoss, setOrderStopLoss] = useState('1.024')
  const [orderTakeProfit, setOrderTakeProfit] = useState('1.024')
  const [orderStopLossChecked, setOrderStopLossChecked] = useState(false)
  const [orderTakeProfitChecked, setOrderTakeProfitChecked] = useState(false)

  return (
    <div className="relative overflow-hidden">
      <AnimatePresence mode="wait">
        {tab === 'Trade' ? (
          <Trade
            volume={tradeVolume}
            setVolume={setTradeVolume}
            stopLoss={tradeStopLoss}
            setStopLoss={setTradeStopLoss}
            takeProfit={tradeTakeProfit}
            setTakeProfit={setTradeTakeProfit}
            stopLossChecked={tradeStopLossChecked}
            setStopLossChecked={setTradeStopLossChecked}
            takeProfitChecked={tradeTakeProfitChecked}
            setTakeProfitChecked={setTradeTakeProfitChecked}
          />
        ) : (
          <Order
            volume={orderVolume}
            setVolume={setOrderVolume}
            price={orderPrice}
            setPrice={setOrderPrice}
            stopLoss={orderStopLoss}
            setStopLoss={setOrderStopLoss}
            takeProfit={orderTakeProfit}
            setTakeProfit={setOrderTakeProfit}
            stopLossChecked={orderStopLossChecked}
            setStopLossChecked={setOrderStopLossChecked}
            takeProfitChecked={orderTakeProfitChecked}
            setTakeProfitChecked={setOrderTakeProfitChecked}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

interface TradeProps {
  volume: string
  setVolume: (v: string) => void
  stopLoss: string
  setStopLoss: (v: string) => void
  takeProfit: string
  setTakeProfit: (v: string) => void
  stopLossChecked: boolean
  setStopLossChecked: (v: boolean) => void
  takeProfitChecked: boolean
  setTakeProfitChecked: (v: boolean) => void
}

function Trade({
  volume,
  setVolume,
  stopLoss,
  setStopLoss,
  takeProfit,
  setTakeProfit,
  stopLossChecked,
  setStopLossChecked,
  takeProfitChecked,
  setTakeProfitChecked,
}: TradeProps) {
  return (
    <motion.div
      key="trade"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.28, ease: 'easeInOut' }}
      className="space-y-3"
    >
      <SelectPair label="AUDCAD" />
      <InputRow label="VOLUME" value={volume} onChange={setVolume} />
      <InfoText text="Margin Required: 3.44$" className="text-center text-[#767676]" />
      <InputRowCircle
        label="STOP LOSS"
        value={stopLoss}
        onChange={setStopLoss}
        checked={stopLossChecked}
        onCheckChange={setStopLossChecked}
      />
      <InputRowCircle
        label="TAKE PROFIT"
        value={takeProfit}
        onChange={setTakeProfit}
        checked={takeProfitChecked}
        onCheckChange={setTakeProfitChecked}
      />
      <SummaryBox />
      <ActionButtons />
    </motion.div>
  )
}

interface OrderProps extends TradeProps {
  price: string
  setPrice: (v: string) => void
}

function Order({
  volume,
  setVolume,
  price,
  setPrice,
  stopLoss,
  setStopLoss,
  takeProfit,
  setTakeProfit,
  stopLossChecked,
  setStopLossChecked,
  takeProfitChecked,
  setTakeProfitChecked,
}: OrderProps) {
  return (
    <motion.div
      key="order"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.28, ease: 'easeInOut' }}
      className="space-y-3"
    >
      <SelectPair label="AUDCAD" />
      <InputRow label="VOLUME" value={volume} onChange={setVolume} />
      <InputRow label="PRICE" value={price} onChange={setPrice} />
      <InfoText text="Margin Required: 3.44$" className="text-center text-[#767676]" />
      <InputRowCircle
        label="STOP LOSS"
        value={stopLoss}
        onChange={setStopLoss}
        checked={stopLossChecked}
        onCheckChange={setStopLossChecked}
      />
      <InputRowCircle
        label="TAKE PROFIT"
        value={takeProfit}
        onChange={setTakeProfit}
        checked={takeProfitChecked}
        onCheckChange={setTakeProfitChecked}
      />
      <ActionButtons />
    </motion.div>
  )
}

function SelectPair({ label }: { label: string }) {
  return (
    <div className="flex justify-between items-center bg-white border border-gray-200 p-3 rounded-lg">
      <span className=" font-bold">{label}</span>
      <IoIosArrowDown size={18} className="text-[#707070]" />
    </div>
  )
}

function InputRow({ label, value, onChange, step = 0.01 }: { label: string, value: string, onChange: (v: string) => void, step?: number }) {
  const increase = () => onChange((parseFloat(value) + step).toFixed(getPrecision(step)))
  const decrease = () => onChange(Math.max(0, parseFloat(value) - step).toFixed(getPrecision(step)))

  return (
    <div className="flex items-center justify-between border border-gray-200 rounded-lg bg-white p-2">
      <label className="min-w-[90px] text-[12px] font-bold text-[#707070]">{label}</label>
      <input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
        className="w-20 text-center font-semibold text-[#2D3E50] bg-transparent border-none focus:outline-none"
      />
      <div className="flex flex-col justify-center items-center">
        <button onClick={increase} className="leading-none"><IoIosArrowUp size={12} className="text-[#707070]" /></button>
        <button onClick={decrease} className="leading-none"><IoIosArrowDown size={12} className="text-[#707070]" /></button>
      </div>
    </div>
  )
}

interface InputRowCircleProps {
  label: string
  value: string
  onChange: (v: string) => void
  step?: number
  checked?: boolean
  onCheckChange?: (checked: boolean) => void
}

function InputRowCircle({
  label,
  value,
  onChange,
  step = 0.001,
  checked = false,
  onCheckChange
}: InputRowCircleProps) {
  const increase = () => onChange((parseFloat(value) + step).toFixed(getPrecision(step)))
  const decrease = () => onChange(Math.max(0, parseFloat(value) - step).toFixed(getPrecision(step)))

  return (
    <div className="flex items-center justify-between border border-gray-200 rounded-lg bg-gray-50 p-2">
      {/* Circle checkbox + label */}
      <div className="flex items-center gap-2 min-w-[110px]">
        <span
          onClick={() => onCheckChange?.(!checked)}
          className={`w-4 h-4 flex items-center justify-center cursor-pointer rounded-full transition-colors
            ${checked ? 'bg-blue-500 border-none' : 'border-2 border-gray-400 bg-gray-500'}`}
        />
        <label className="text-[12px] font-bold text-[#707070]">{label}</label>
      </div>

      {/* Centered value */}
      <input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
        className="w-20 text-center font-semibold text-[#2D3E50] bg-transparent border-none focus:outline-none"
      />

      {/* Up/Down arrows */}
      <div className="flex flex-col justify-center items-center">
        <button onClick={increase} className="leading-none"><IoIosArrowUp size={12} className="text-[#707070]" /></button>
        <button onClick={decrease} className="leading-none"><IoIosArrowDown size={12} className="text-[#707070]" /></button>
      </div>
    </div>
  )
}

function InfoText({ text, className = '' }: { text: string, className?: string }) {
  return <p className={`text-xs text-[#707070] ${className}`}>{text}</p>
}

function SummaryBox({ className = '' }: { className?: string }) {
  return (
    <div className={`border rounded-lg p-3 bg-[#EFEFEF] text-sm font-semibold text-[#707070] ${className}`}>
      <div className="flex justify-between text-[11px]">
        <span>Free Collateral</span>
        <span>0.00 USD</span>
      </div>
      <div className="flex justify-between text-[11px] mt-1">
        <span>Commissions</span>
        <span>0.00 USD</span>
      </div>
      <div className="flex justify-between text-[11px] mt-1">
        <span>Swap</span>
        <span>0.00 USD</span>
      </div>
    </div>
  )
}

function ActionButtons({ className = '' }: { className?: string }) {
  return (
    <div className={`flex gap-3 ${className}`}>
      <button className="flex-1 flex flex-col py-2 bg-red-500 text-white font-bold rounded-[6px] shadow-md text-sm active:scale-95 transition-all">
        SELL <span className="font-normal text-xs">0.546489</span>
      </button>
      <button className="flex-1 flex flex-col py-2 bg-green-500 text-white font-bold rounded-[6px] shadow-md text-sm active:scale-95 transition-all">
        BUY <span className="font-normal text-xs">0.546489</span>
      </button>
    </div>
  )
}

function getPrecision(step: number) {
  const s = step.toString()
  if (!s.includes('.')) return 0
  return s.split('.')[1].length
}
