'use client'


import { Search as SearchIcon } from 'lucide-react'
import MarketTabs from '@/components/market-tabs'
import SymbolTable from '@/components/symbol-table'
import { Input } from '@/components/ui/input'

export default function MarketPage () {
  return (
    <div className='space-y-4 w-full mt-[35px]'>
      <MarketTabs />
      <div className='relative text-white flex items-center mt-3'>
        <Input
          className='bg-zinc-700 text-white w-full py-[10px] outline-none rounded-[30px] pl-[50px] text-sm'
          placeholder={`Try "Aselsan"`}
          type='text'
        ></Input>
        <SearchIcon
          className='absolute top-[9px] left-3 text-white'
          size={20}
        />
      </div>

      <SymbolTable />
    </div>
  )
}
