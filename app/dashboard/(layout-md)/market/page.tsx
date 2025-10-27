// shadcn/ui
'use client'
import {
  InputGroup,
  InputGroupInput,
  InputGroupAddon
} from '@/components/ui/input-group'

// 3'rd party
import { Search as SearchIcon } from 'lucide-react'

// local
// import { TopNav } from "@/components/mobile/navs"
// import EquityCard from "@/components/equity-card"
import MarketTabs from '@/components/market-tabs'
import SymbolTable from '@/components/symbol-table'
import { Input } from '@/components/ui/input'

export default function MarketPage () {
  return (
    <div className='space-y-4 w-full mt-[35px]'>
      <MarketTabs />
      {/* <div className='mt-3'>
        <InputGroup className='rounded-full bg-zinc-700 text-white/80'>
          <InputGroupAddon>
            <SearchIcon />
          </InputGroupAddon>
          <InputGroupInput type='text' placeholder={`Try "Aselsan"`} />
        </InputGroup>
      </div> */}
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
