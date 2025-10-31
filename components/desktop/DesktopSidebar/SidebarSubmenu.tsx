'use client'

interface SidebarSubmenuProps {
  parent: string
}

export default function SidebarSubmenu({ parent }: SidebarSubmenuProps) {
  const items = ['CADJPY', 'CHFJPY', 'USDCAD', 'EURUSD', 'GBPJPY']

  return (
    <div className="absolute left-[220px] top-0 bg-white shadow-lg rounded-md w-[260px] py-3 px-3 z-50">
      <div className="flex items-center space-x-2 mb-3">
        <input
          type="text"
          placeholder="Search"
          className="w-full border rounded-md px-2 py-1 text-sm"
        />
      </div>
      <div className="grid grid-cols-2 gap-2 mb-3">
        {['All', 'Crypto', 'Endex', 'Exchange', 'Commodity', 'Stock'].map(f => (
          <button
            key={f}
            className="border px-2 py-1 rounded-md text-xs hover:bg-gray-100"
          >
            {f}
          </button>
        ))}
      </div>
      <div className="flex flex-col space-y-1">
        {items.map(i => (
          <div
            key={i}
            className="flex items-center justify-between hover:bg-gray-100 rounded-md px-2 py-1 cursor-pointer"
          >
            <span>{i}</span>
            <span className="text-gray-400">{'>'}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
