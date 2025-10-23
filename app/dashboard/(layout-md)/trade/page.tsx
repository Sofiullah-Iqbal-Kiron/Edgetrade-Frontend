'use client'

import TradeToggle from '@/components/mobile/md/TradeToggle'
import { useEffect, useState } from 'react'
import { useSetActiveNav } from '@/lib/store'

export default function TradePage() {
  const setActiveNav = useSetActiveNav()
  useEffect(() => setActiveNav(null), [setActiveNav])

  const [tab, setTab] = useState<'Trade' | 'Order'>('Trade')

  return (
    <div className="w-full px-4">
      {/* Toggle */}
      <div className="flex gap-x-3 mb-3 bg-[#DDE9FC] p-2 rounded-[10px] absolute top-[227px] left-2 right-2">
        {['Trade', 'Order'].map(t => (
          <button
            key={t}
            onClick={() => setTab(t as 'Trade' | 'Order')}
            className={`flex-1 py-4 rounded-lg text-sm font-semibold transition-all duration-300 ease-in-out transform ${
              tab === t
                ? 'bg-blue-600 text-white shadow-md scale-[1.03]'
                : 'bg-gray-100 text-gray-700 '
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Content */}
      <TradeToggle tab={tab} />
    </div>
  )
}

