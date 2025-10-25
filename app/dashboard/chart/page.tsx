'use client'

import { useState, useEffect } from 'react'
import { useSetActiveNav } from '@/lib/store'
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts'
import ChartToggle from '@/components/mobile/large/ChartToggle'

const data = [
  { name: 'Jan', value: 26 },
  { name: 'Feb', value: 27 },
  { name: 'Mar', value: 29 },
  { name: 'Apr', value: 27 },
  { name: 'May', value: 28 },
  { name: 'Jun', value: 26 }
]

export default function ChartPage () {
  const setActiveNav = useSetActiveNav()
  const [tab, setTab] = useState<'Position' | 'Order'>('Position')

  useEffect(() => {
    setActiveNav(null)
  }, [setActiveNav])

  return (
    <div className='relative p-2 bg-white'>
      {/* Chart Section */}
      <div className='bg-[#DDE9FC] rounded-[12px] p-3 mb-4'>
        <h2 className='font-semibold text-lg mb-2 ml-2 mt-3'>AUDUSD</h2>
        <div className='h-[350px] mt-8'>
          <ResponsiveContainer width='100%' height='100%'>
            <LineChart
              data={data}
              margin={{ top: 5, right: 20, left: -30, bottom: 50 }}
            >
              <XAxis
                dataKey='name'
                axisLine={false}
                tickLine={false}
                fontSize={10}
                tick={{ fill: '' }}
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                fontSize={10}
                tick={{ fill: '' }}
                domain={[dataMin => dataMin - 1, dataMax => dataMax + 1]}
                allowDecimals={false}
                allowDataOverflow={true}
                ticks={[25, 26, 27, 28, 29]} // 👈 Force tick labels to include 26 and 28
              />
              <Line
                type='monotone'
                dataKey='value'
                stroke='#1D6CE9'
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      {/* Position / Order Toggle */}
      <div className='flex gap-x-3 bg-[#DDE9FC] p-2 rounded-[10px] mb-5'>
        <button
          onClick={() => setTab('Position')}
          className={`flex-1 py-3 rounded-lg text-sm font-semibold transition-all duration-200 ${
            tab === 'Position'
              ? 'bg-[#1D6CE9] text-white'
              : 'bg-white text-[#0D3169]'
          }`}
        >
          Position
        </button>
        <button
          onClick={() => setTab('Order')}
          className={`flex-1 py-3 rounded-lg text-sm font-semibold transition-all duration-200 ${
            tab === 'Order'
              ? 'bg-[#1D6CE9] text-white'
              : 'bg-white text-[#0D3169]'
          }`}
        >
          Order
        </button>
      </div>
      <div className='bg-[#DDE9FC] p-4 rounded-[12px]'>
        <ChartToggle tab={tab} />{' '}
      </div>
    </div>
  )
}
