// shadcn/ui
import {
  InputGroup,
  InputGroupInput,
  InputGroupAddon,
} from "@/components/ui/input-group"

// 3'rd party
import {
  Search as SearchIcon
} from "lucide-react"

// local
import { TopNav } from "@/components/mobile/navs"
import EquityCard from "@/components/equity-card"
import MarketTabs from "@/components/market-tabs"
import SymbolTable from "@/components/symbol-table"


export default function MarketPage() {
  return (
    <div className="space-y-4">
      <EquityCard />
      <TopNav />
      <MarketTabs />

      <div>
        <InputGroup className="rounded-full bg-zinc-700 text-white/80">
          <InputGroupAddon>
            <SearchIcon />
          </InputGroupAddon>
          <InputGroupInput
            type="text"
            placeholder={`Try "Aselsan"`}
          />
        </InputGroup>
      </div>

      <SymbolTable />
    </div>
  )
}
