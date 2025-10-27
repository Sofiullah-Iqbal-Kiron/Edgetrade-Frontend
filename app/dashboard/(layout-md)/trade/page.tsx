'use client'

import TradeToggle from '@/components/mobile/md/TradeToggle'
import { useEffect, useState } from 'react'
import { useSetActiveNav } from '@/lib/store'

export default function TradePage() {
  const setActiveNav = useSetActiveNav()
  useEffect(() => setActiveNav(null), [setActiveNav])

  const [tab, setTab] = useState<'Trade' | 'Order'>('Trade')

  return (
    <div className="w-full px-4 bg-[#DDE9FC] rounded-[10px] py-8 mt-[30px]">
      {/* Toggle */}
      <div className="flex gap-x-3 mb-3 bg-[#DDE9FC] p-2 rounded-[10px] absolute top-[227px] left-2 right-2">
        {['Trade', 'Order'].map(t => (
          <button
            key={t}
            onClick={() => setTab(t as 'Trade' | 'Order')}
            className={`flex-1 py-4 rounded-lg text-sm font-semibold ${
              tab === t
                ? 'bg-normal-blue text-white'
                : 'bg-white '
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

