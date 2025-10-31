'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { IoIosArrowDown, IoIosArrowRoundBack } from 'react-icons/io'
import { LuCopy } from 'react-icons/lu'
import Image from 'next/image'
import usdtLogo from '@/public/logo/USDT - Tether.png'
import { Label } from '@radix-ui/react-label'
import { Input } from '@/components/ui/input'
import { Plus, Minus, Circle, ChevronUp, ChevronDown } from 'lucide-react'
import { useState } from 'react'

interface PositionToggleProps {
  tab: 'Position' | 'Order'
  positionView: 'form' | 'info'
}

import React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'

// 3'rd party
import clsx from 'clsx'

// local
import { MarketSymbolType } from '@/lib/types'
import { Button } from '@/components/ui/button'
// import { useState } from 'react'

const symbols: Array<MarketSymbolType> = [
  {
    symbol: 'AUD/USD',
    type: 'Buy',
    enter_price: '0.65419',
    close_price: '0.65419',
    profit: '+$47.23',
    icon: '/images/usa-flag.png',
    price: 0.64732,
    changeRate: 15.08,
    isIncreasing: true,
    status: 'open',
    date: '06/09/2025',
    time: '16:32:56',
    amount: '+$500.00',
    method: 'Bank',
    close: 'Close',
    volume: '1.0'
  },
  {
    symbol: 'ASELSAN',
    type: 'Sell',
    enter_price: '0.65419',
    close_price: '0.65419',
    profit: '-$47.23',
    icon: '/images/ASELS.IS.png',
    price: 0.65708,
    changeRate: 15.32,
    isIncreasing: false,
    status: 'open',
    date: '06/09/2025',
    time: '16:32:56',
    amount: '+$500.00',
    method: 'Bank',
    close: 'Close',
    volume: '1.0'
  },
  {
    symbol: 'GARAN',
    icon: '/images/GARAN.png',
    type: 'Buy',
    enter_price: '0.65419',
    close_price: '0.65419',
    profit: '+$47.23',
    price: 62.45,
    changeRate: -0.45,
    isIncreasing: true,
    status: 'closed',
    date: '06/09/2025',
    time: '16:32:56',
    amount: '+$500.00',
    method: 'Bank',
    close: 'Close',
    volume: '1.0'
  }
]

const orders: Array<MarketSymbolType> = [
  {
    symbol: 'AUDUSD',
    icon: '/images/GARAN.png',
    enter_price: '0.65419',
    close_price: '0.65419',
    profit: '+$47.23',
    price: 62.45,
    changeRate: -0.45,
    isIncreasing: true,
    type: 'Buy',
    status: 'Deposited',
    date: '06/09/2025',
    time: '16:32:56',
    amount: '+$500.00',
    method: 'Bank',
    close: 'Close',
    volume: '0.1'
  },
  {
    symbol: 'AUDUSD',
    type: 'Buy',
    enter_price: '0.65419',
    close_price: '0.65419',
    profit: '-$47.23',
    icon: '/images/ASELS.IS.png',
    price: 0.65708,
    changeRate: 15.32,
    isIncreasing: false,
    status: 'Pending',
    date: '06/09/2025',
    time: '16:32:56',
    amount: '+$500.00',
    method: 'Crypto',
    close: 'Close',
    volume: '1.0'
  },
  {
    symbol: 'AUDUSD',
    type: 'Sell',
    enter_price: '0.65419',
    close_price: '0.65419',
    profit: '-$47.23',
    icon: '/images/ASELS.IS.png',
    price: 0.65708,
    changeRate: 15.32,
    isIncreasing: false,
    status: 'Reject',
    date: '06/09/2025',
    time: '16:32:56',
    amount: '+$500.00',
    method: 'Bank',
    close: 'Close',
    volume: '2.0'
  }
]

interface ComposedTableHeadProps {
  content: string
  extraClassNames?: string
}

function ComposedTableHead ({
  content,
  extraClassNames
}: ComposedTableHeadProps) {
  return (
    <TableHead
      className={clsx(
        'text-center text-accent font-semibold',
        extraClassNames && `${extraClassNames}`
      )}
    >
      {content}
    </TableHead>
  )
}

export const ComposedTableRowPosition = React.forwardRef<
  HTMLTableRowElement,
  MarketSymbolType & React.HTMLAttributes<HTMLTableRowElement>
>(
  (
    {
      symbol,
      type,
      enter_price,
      close_price,
      profit,
      icon,
      price,
      date,
      time,
      amount,
      changeRate,
      isIncreasing,
      status,
      className,
      method,
      close,
      ...props
    },
    ref
  ) => {
    return (
      <TableRow
        ref={ref}
        // ⬇ Important: Spread props so Radix can attach event handlers
        {...props}
        className={clsx(
          'bg-secondary border-white dark:border-white/50 text-center cursor-pointer',
          className
        )}
      >
        <TableCell className='font-semibold text-[12px] flex items-center '>
          <span>{symbol}</span>
        </TableCell>
        <TableCell
          className={clsx(
            'text-[11px] font-semibold',
            type === 'Buy' && 'text-green-500',
            type === 'Sell' && 'text-red-500'
          )}
        >
          {type}
        </TableCell>
        <TableCell className='text-gray-500 text-[11px]'>{price}</TableCell>
        <TableCell className='text-gray-500 text-[11px]'>
          {enter_price}
        </TableCell>

        <TableCell
          className={clsx(
            isIncreasing && 'text-green-500  text-[11px] font-semibold',
            !isIncreasing && 'text-red-600  text-[11px] font-semibold'
          )}
        >
          {profit}
        </TableCell>
        <TableCell className='text-[#1D6CE9] text-[11px] font-semibold'>
          {close}
        </TableCell>
      </TableRow>
    )
  }
)

export const ComposedTableRowOrder = React.forwardRef<
  HTMLTableRowElement,
  MarketSymbolType & React.HTMLAttributes<HTMLTableRowElement>
>(
  (
    {
      symbol,
      type,
      enter_price,
      close_price,
      profit,
      icon,
      price,
      date,
      time,
      amount,
      changeRate,
      isIncreasing,
      status,
      method,
      className,
      close,
      volume,
      ...props
    },
    ref
  ) => {
    return (
      <TableRow
        ref={ref}
        // ⬇ Important: Spread props so Radix can attach event handlers
        {...props}
        className={clsx(
          'bg-secondary border-white dark:border-white/50 text-center cursor-pointer',
          className
        )}
      >
        <TableCell className='font-semibold text-[12px] text-[#1E1E1E] flex items-center '>
          <span>{symbol}</span>
        </TableCell>
        <TableCell
          className={clsx(
            'text-[11px] font-semibold',
            type === 'Buy' && 'text-green-500',
            type === 'Sell' && 'text-red-500'
          )}
        >
          {type}
        </TableCell>
        <TableCell className='text-gray-500 text-[11px]'>{price}</TableCell>
        <TableCell className='text-gray-500 text-[11px]'>
          {enter_price}
        </TableCell>
        <TableCell className='text-gray-500 text-[11px] font-semibold '>
          {volume}
        </TableCell>

        <TableCell className='text-[#1D6CE9] text-[11px] font-semibold'>
          {close}
        </TableCell>
      </TableRow>
    )
  }
)

export default function PositionToggle ({
  tab,
  positionView
}: PositionToggleProps) {
  return (
    <div className='relative overflow-hidden'>
      <AnimatePresence mode='wait'>
        {tab === 'Position' ? (
          <motion.div
            key='Trade'
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <AnimatePresence mode='wait'>
              {positionView === 'form' ? (
                <motion.div
                  key='form'
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <Table>
                    <TableHeader>
                      <TableRow className='bg-normal-blue-active hover:bg-dark-blue-hover text-[11px]'>
                        <ComposedTableHead
                          content='Symbol'
                          extraClassNames='rounded-tl-2xl'
                        />
                        <ComposedTableHead content='Type' />
                        <ComposedTableHead content='Price' />
                        <ComposedTableHead content='Enter Price' />
                        <ComposedTableHead content='P&L' />
                        <ComposedTableHead
                          content='Close ALL'
                          extraClassNames='rounded-tr-2xl'
                        />
                      </TableRow>
                    </TableHeader>

                    <TableBody>
                      {symbols.map((symbol, idx) => (
                        <Sheet key={`symbol-table-row-${idx}`}>
                          <SheetTrigger asChild>
                            <ComposedTableRowPosition {...symbol} />
                          </SheetTrigger>

                          <SheetContent
                            side='bottom'
                            className='border-none rounded-t-[28px] z-40 py-4 h-[90vh] bg-dark-blue-hover shadow-[inset_-1px_3px_70.9px_3px_#000000B2]'
                          >
                            <SheetHeader className='sticky'>
                              <SheetTitle className='text-center text-white font-bold text-lg tracking-wide'>
                                {symbol.symbol}
                              </SheetTitle>
                            </SheetHeader>

                            {/* INFO GRID */}
                            <div className='flex flex-col gap-3 mt-4 px-5 pb-24 overflow-y-auto'>
                              {[
                                {
                                  label: 'Enter Price',
                                  value: symbol.enter_price
                                },
                                {
                                  label: 'Current Price',
                                  value: symbol.close_price
                                },
                                { label: 'Volume', value: '0.1' },
                                { label: 'Commission', value: `$${5.04}` },
                                { label: 'Swap', value: `$${5.04}` },
                                {
                                  label: 'Direction',
                                  value: symbol.type,
                                  valueClass:
                                    symbol.type === 'Buy'
                                      ? 'text-green-600 text-[16px]'
                                      : 'text-red-600 text-[16px]'
                                },
                                {
                                  label: 'P&L',
                                  value: symbol.profit,
                                  valueClass: symbol.isIncreasing
                                    ? 'text-green-600 text-[16px]'
                                    : 'text-red-600 text-[16px]'
                                },
                                {
                                  label: 'Created',
                                  value: '06/09/2025',
                                  time: '16:32:56',
                                  valueClass: 'text-[#707070] text-[10px]',
                                  valueeClass: 'text-[11px] text-[#707070]'
                                }
                              ].map((item, i) => (
                                <div
                                  key={i}
                                  className='flex items-center justify-between bg-[#e5ecff] px-4 py-4 rounded-[6px]'
                                >
                                  {/* Label */}
                                  <span className='label-text font-semibold text-[13px] text-black'>
                                    {item.label}
                                  </span>

                                  {/* Value + Time (if exists) */}
                                  <div className='text-right leading-tight'>
                                    <span
                                      className={clsx(
                                        'value-text font-semibold text-[14px]',
                                        item.valueClass || 'text-[#707070]'
                                      )}
                                    >
                                      {item.value}
                                    </span>
                                    {item.time && (
                                      <div
                                        className={clsx(
                                          'time-text mt-0.5',
                                          item.valueeClass ||
                                            'text-[11px] text-[#707070]'
                                        )}
                                      >
                                        {item.time}
                                      </div>
                                    )}
                                  </div>
                                </div>
                              ))}
                              <p className='bg-normal-blue text-[12px] font-bold py-4 rounded-[6px] text-white text-center cursor-pointer'>
                                CLOSE POSITION
                              </p>
                            </div>
                          </SheetContent>
                        </Sheet>
                      ))}
                    </TableBody>
                  </Table>
                </motion.div>
              ) : (
                <div></div>
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
            <Table>
              <TableHeader>
                <TableRow className='bg-normal-blue-active hover:bg-dark-blue-hover text-[11px] '>
                  <ComposedTableHead
                    content='Symbol'
                    extraClassNames='rounded-tl-2xl'
                  />
                  <ComposedTableHead content='Type' />
                  <ComposedTableHead content='Price' />
                  <ComposedTableHead content='Enter Price' />
                  <ComposedTableHead content='Volume' />
                  <ComposedTableHead
                    content='Close ALL'
                    extraClassNames='rounded-tr-2xl'
                  />
                </TableRow>
              </TableHeader>

              <TableBody>
                {orders.map((order, idx) => (
                  <Sheet key={`symbol-table-row-${idx}`}>
                    <SheetTrigger asChild>
                      <ComposedTableRowOrder {...order} />
                    </SheetTrigger>

                    <SheetContent
                      side='bottom'
                      className='border-none rounded-t-[28px] z-40 py-4 h-[90vh] bg-dark-blue-hover shadow-[inset_-1px_3px_70.9px_3px_#000000B2]'
                    >
                      <SheetHeader className='sticky'>
                        <SheetTitle className='text-center text-white font-bold text-lg tracking-wide'>
                          {order.symbol}
                        </SheetTitle>
                      </SheetHeader>

                      {/* INFO GRID (UI updated with stacked up/down chevrons + radio for TP/SL) */}
                      <div className='flex flex-col gap-3 mt-4 px-5 pb-20 overflow-y-auto'>
                        {/* Enter Price (with chevrons) */}
                        <EditableRow
                          label='Enter Price'
                          defaultValue={+order.enter_price}
                          step={0.00001}
                          showRadio={false}
                        />

                        {/* Current Price (readonly) */}
                        <div className='flex items-center justify-between bg-[#e5ecff] px-4 py-4 rounded-[6px]'>
                          <span className='font-semibold text-[13px] text-black'>
                            Current Price
                          </span>
                          <span className='font-semibold text-[14px] text-[#707070]'>
                            {order.close_price}
                          </span>
                        </div>

                        {/* Volume (with chevrons) */}
                        <EditableRow
                          label='Volume'
                          defaultValue={+order.volume}
                          step={0.1}
                          showRadio={false}
                        />

                        {/* Take Profit (radio left + chevrons) */}
                        <EditableRow
                          label='Take Profit'
                          defaultValue={+order.enter_price}
                          step={0.00001}
                          showRadio={true}
                        />

                        {/* Stop Loss (radio left + chevrons) */}
                        <EditableRow
                          label='Stop Loss'
                          defaultValue={+order.enter_price}
                          step={0.00001}
                          showRadio={true}
                        />

                        {/* Direction */}
                        <div className='flex items-center justify-between bg-[#e5ecff] px-4 py-4 rounded-[6px]'>
                          <span className='font-semibold text-[13px] text-black'>
                            Direction
                          </span>
                          <span
                            className={clsx(
                              'font-semibold text-[14px]',
                              order.type === 'Buy'
                                ? 'text-green-600'
                                : 'text-red-600'
                            )}
                          >
                            {order.type}
                          </span>
                        </div>

                        {/* Created */}
                        <div className='flex items-center justify-between bg-[#e5ecff] px-4 py-4 rounded-[6px]'>
                          <span className='font-semibold text-[13px] text-black'>
                            Created
                          </span>
                          <div className='text-right'>
                            <div className='text-[#707070] text-[11px]'>
                              06/09/2025
                            </div>
                            <div className='text-[#707070] text-[10px]'>
                              16:32:56
                            </div>
                          </div>
                        </div>

                        {/* CLOSE ORDER */}
                        <p className='bg-normal-blue text-[12px] font-bold py-4 rounded-[6px] text-white text-center cursor-pointer'>
                          CLOSE ORDER
                        </p>
                      </div>
                    </SheetContent>
                  </Sheet>
                ))}
              </TableBody>
            </Table>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}


// Required imports at top of file:
// import { ChevronUp, ChevronDown, Circle } from 'lucide-react'
// import { useState } from 'react'
// import clsx from 'clsx'

function EditableRow({
  label,
  defaultValue,
  step = 0.01,
  showRadio = false
}: {
  label: string
  defaultValue: number
  step?: number
  showRadio?: boolean
}) {
  const [value, setValue] = useState<number>(defaultValue ?? 0)
  // radio active only used when showRadio === true
  const [radioActive, setRadioActive] = useState<boolean>(false)

  const increase = () => {
    // preserve floating precision for small steps
    const next = +(value + step)
    setValue(Number(next.toFixed(5)))
  }
  const decrease = () => {
    const next = +(value - step)
    setValue(Number(next.toFixed(5)))
  }

  return (
    <div className='flex items-center justify-between bg-[#e5ecff] px-4 py-4 rounded-[6px]'>
      {/* Left side: optional radio + label */}
      <div className='flex items-center gap-3'>
        {showRadio ? (
          <button
            onClick={() => setRadioActive(!radioActive)}
            aria-pressed={radioActive}
            className={clsx(
              'w-4 h-4 rounded-full flex items-center justify-center transition-colors',
              radioActive ? 'bg-[#1D6CE9] border-[#1D6CE9]' : 'bg-gray-400 border-gray-300'
            )}
            style={{ boxShadow: radioActive ? '0 0 0 3px rgba(21,115,255,0.12)' : undefined }}
          >
            {radioActive && <Circle className='w-2 h-2 text-[#1D6CE9]' />}
          </button>
        ) : null}

        <span className='font-semibold text-[13px] text-black'>{label}</span>
      </div>

      {/* Right side: value + stacked chevrons */}
      <div className='flex items-center gap-3'>
        {/* value display: underline style to match screenshot */}
        <div className='text-right'>
          <input
            type='number'
            step={step}
            value={value}
            onChange={e => setValue(Number(e.target.value))}
            className={clsx(
              'w-28 text-right bg-transparent outline-none font-semibold text-[14px] border-b-[1px] underline border-transparent',
              showRadio ? (radioActive ? 'text-black' : 'text-gray-400') : 'text-black'
            )}
          />
        </div>

        {/* stacked chevrons in light rounded container */}
        <div className='flex flex-col items-center justify-center'>
          <button
            onClick={increase}
            className=' flex items-center justify-center'
            aria-label='increase'
          >
            <ChevronUp className='w-4 h-4 text-[#1E1E1E]' />
          </button>
          <div className='h-[1px] w-full' />
          <button
            onClick={decrease}
            className=' flex items-center justify-center'
            aria-label='decrease'
          >
            <ChevronDown className='w-4 h-4 text-[#1E1E1E]' />
          </button>
        </div>
      </div>
    </div>
  )
}

