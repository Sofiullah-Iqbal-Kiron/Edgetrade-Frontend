'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { IoIosArrowDown, IoIosArrowRoundBack } from 'react-icons/io'
import { LuCopy } from 'react-icons/lu'
import Image from 'next/image'
import usdtLogo from '@/public/logo/USDT - Tether.png'
import { Label } from '@radix-ui/react-label'
import { Input } from '@/components/ui/input'

interface HistoryToggleProps {
  tab: 'Trade' | 'Transaction'
  tradeView: 'form' | 'info'
  setTradeView: (view: 'form' | 'info') => void

  quickAmounts: number[]
  transactionFee: number
  commission: number
  total: string
}

import { Button } from '@/components/ui/button'
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
import { useState } from 'react'
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
    method: 'Bank'
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
    method: 'Bank'
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
    method: 'Bank'
  }
]

const tansactions: Array<MarketSymbolType> = [
  {
    symbol: 'GARAN',
    icon: '/images/GARAN.png',
    enter_price: '0.65419',
    close_price: '0.65419',
    profit: '+$47.23',
    price: 62.45,
    changeRate: -0.45,
    isIncreasing: true,
    type: 'Deposit',
    status: 'Deposited',
    date: '06/09/2025',
    time: '16:32:56',
    amount: '+$500.00',
    method: 'Bank'
  },
  {
    symbol: 'GARAN',
    type: 'Withdrawal',
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
    method: 'Crypto'
  },
  {
    symbol: 'GARAN',
    type: 'Withdrawal',
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
    method: 'Bank'
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

export const ComposedTableRow = React.forwardRef<
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
        <TableCell className='text-gray-500 text-[11px]'>
          {enter_price}
        </TableCell>

        <TableCell className='text-gray-500 text-[11px]'>
          {close_price}
        </TableCell>
        <TableCell
          className={clsx(
            isIncreasing && 'text-green-500  text-[11px] font-semibold',
            !isIncreasing && 'text-red-600  text-[11px] font-semibold'
          )}
        >
          {profit}
        </TableCell>
      </TableRow>
    )
  }
)

export const ComposedTableRowTransaction = React.forwardRef<
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
        <TableCell>
          <div
            className={clsx(
              'flex flex-col items-start',
              type === 'Deposit' && 'text-[#1D6CE9] font-semibold text-[10px]',
              type === 'Withdrawal' &&
                'text-[#0D3169] font-semibold text-[10px]'
            )}
          >
            <span>{type}</span>
            <span className='text-[12px] font-semibold text-black'>{method}</span>
          </div>
        </TableCell>

        <TableCell className='text-gray-500 text-[8px]'>{date}</TableCell>

        <TableCell className='text-gray-500 text-[11px]'>{time}</TableCell>
        <TableCell className='text-[#37BE26] text-[14px] '>{amount}</TableCell>

        <TableCell
          className={clsx(
            status === 'Deposited' && 'text-[#1D6CE9] text-[11px] font-semibold',
            status === 'Pending' && 'text-gray-500 text-[11px] font-semibold',
            status === 'Reject' && 'text-[#E14145] text-[11px] font-semibold'
          )}
        >
          {status}
        </TableCell>
      </TableRow>
    )
  }
)

export default function HistoryToggle ({ tab, tradeView }: HistoryToggleProps) {
  return (
    <div className='relative overflow-hidden'>
      <AnimatePresence mode='wait'>
        {tab === 'Trade' ? (
          <motion.div
            key='Trade'
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <AnimatePresence mode='wait'>
              {tradeView === 'form' ? (
                <motion.div
                  key='form'
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <Table>
                    <TableHeader>
                      <TableRow className='bg-normal-blue-active hover:bg-dark-blue-hover text-[12px]'>
                        <ComposedTableHead
                          content='Symbol'
                          extraClassNames='rounded-tl-2xl'
                        />
                        <ComposedTableHead content='Type' />
                        <ComposedTableHead content='Enter Price' />
                        <ComposedTableHead content='Close Price' />
                        <ComposedTableHead
                          content='Profit'
                          extraClassNames='rounded-tr-2xl'
                        />
                      </TableRow>
                    </TableHeader>

                    <TableBody>
                      {symbols.map((symbol, idx) => (
                        <Sheet key={`symbol-table-row-${idx}`}>
                          <SheetTrigger asChild>
                            <ComposedTableRow {...symbol} />
                          </SheetTrigger>

                          <SheetContent
                            side='bottom'
                            className='bg-[#11418C] border-none rounded-t-[28px] shadow-lg z-40 py-4 '
                          >
                            <SheetHeader>
                              <SheetTitle className='text-center text-white font-bold text-lg tracking-wide'>
                                {symbol.symbol}
                              </SheetTitle>
                            </SheetHeader>

                            {/* INFO GRID */}
                            <div className='flex flex-col gap-3 mt-4 px-5 pb-20'>
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
                                },
                                {
                                  label: 'Closed',
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
                <TableRow className='bg-normal-blue-active hover:bg-dark-blue-hover text-[12px]'>
                  <ComposedTableHead
                    content='Type'
                    extraClassNames='rounded-tl-2xl'
                  />
                  <ComposedTableHead content='Date' />
                  <ComposedTableHead content='Time' />
                  <ComposedTableHead content='Amount' />
                  <ComposedTableHead
                    content='Status'
                    extraClassNames='rounded-tr-2xl'
                  />
                </TableRow>
              </TableHeader>

              <TableBody>
                {tansactions.map((tansaction, idx) => (
                  <Sheet key={`symbol-table-row-${idx}`}>
                    <SheetTrigger asChild>
                      <ComposedTableRowTransaction {...tansaction} />
                    </SheetTrigger>

                    <SheetContent
                      side='bottom'
                      className='bg-[#11418C] border-none rounded-t-[28px] shadow-lg z-40 py-4 '
                    >
                      <SheetHeader>
                        <SheetTitle className='text-center text-white font-bold text-lg tracking-wide'>
                          {tansaction.type}
                        </SheetTitle>
                      </SheetHeader>

                      {/* INFO GRID */}
                      <div className='flex flex-col gap-3 mt-4 px-5 pb-20'>
                        {[
                          {
                            label: 'Enter Price',
                            value: tansaction.enter_price
                          },
                          {
                            label: 'Current Price',
                            value: tansaction.close_price
                          },
                          { label: 'Volume', value: '0.1' },
                          { label: 'Commission', value: `$${5.04}` },
                          { label: 'Swap', value: `$${5.04}` },
                          {
                            label: 'Direction',
                            value: tansaction.type,
                            valueClass:
                              tansaction.type === 'Buy'
                                ? 'text-green-600 text-[16px]'
                                : 'text-red-600 text-[16px]'
                          },
                          {
                            label: 'P&L',
                            value: tansaction.profit,
                            valueClass: tansaction.isIncreasing
                              ? 'text-green-600 text-[16px]'
                              : 'text-red-600 text-[16px]'
                          },
                          {
                            label: 'Created',
                            value: '06/09/2025',
                            time: '16:32:56',
                            valueClass: 'text-[#707070] text-[10px]',
                            valueeClass: 'text-[11px] text-[#707070]'
                          },
                          {
                            label: 'Closed',
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
