'use client'

// shadcn/ui
import { Button } from '@/components/ui/button'

// 3'rd party
import clsx from 'clsx'

// local
import { MarketTabType } from '@/lib/types'
import { useActiveMarketTab, useSetActiveMarketTab } from '@/lib/store'

type TabType = {
  label: MarketTabType
}

const tabs: Array<TabType> = [
  { label: 'All' },
  { label: 'Watchlist' },
  { label: 'Index' },
  { label: 'Exchange' },
  { label: 'Commodity' },
  { label: 'Stock' }
]

export default function MarketTabs () {
  const activeMarketTab = useActiveMarketTab()
  const setActiveMarketTab = useSetActiveMarketTab()

  return (
    <div className='bg-light-blue-hover p-2 grid grid-cols-3 gap-x-4 gap-y-2 rounded-2xl absolute top-[180px] left-2 right-2'>
      {tabs.map((tab, idx) => {
        const isActiveTab = activeMarketTab === tab.label

        return (
          <Button
            key={`market-tab-${idx}`}
            size='sm'
            variant={isActiveTab ? 'default' : 'secondary'}
            onClick={() => setActiveMarketTab(tab.label)}
            className={clsx(
              'rounded-full font-bold bg-white text-[13px]', // <-- changed here
              isActiveTab && 'text-white bg-primary'
            )}
          >
            {tab.label}
          </Button>
        )
      })}
    </div>
  )
}
