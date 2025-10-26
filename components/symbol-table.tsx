"use client"

// react
import { useState } from "react"

// shadcn/ui
import { Button } from "@/components/ui/button"
import React from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet"

// 3'rd party
import clsx from "clsx"

// local
import { MarketSymbolType } from "@/lib/types"


const symbols: Array<MarketSymbolType> = [
  {
    symbol: "AUD/USD",
    type: "Buy",
    enter_price: "0.65419",
    close_price: "0.65419",
    profit: "+$47.23",
    icon: "/images/usa-flag.png",
    price: 0.64732,
    changeRate: 15.08,
    isIncreasing: true,
    status: "open",
    date: "06/09/2025",
    time: "16:32:56",
    amount: "+$500.00",
    method: "Bank",
    close: "1.2345",
    volume: "1000"
  },
  {
    symbol: "ASELSAN",
    type: "Sell",
    enter_price: "0.65419",
    close_price: "0.65419",
    profit: "+$47.23",
    icon: "/images/ASELS.IS.png",
    price: 0.65708,
    changeRate: 15.32,
    isIncreasing: false,
    status: "open",
    date: "06/09/2025",
    time: "16:32:56",
    amount: "+$500.00",
    method: "Bank",
    close: "1.2345",
    volume: "1000"
  },
  {
    symbol: "GARAN",
    type: "Buy",
    enter_price: "0.65419",
    close_price: "0.65419",
    profit: "+$47.23",
    icon: "/images/GARAN.png",
    price: 62.45,
    changeRate: -0.45,
    isIncreasing: true,
    status: "closed",
    date: "06/09/2025",
    time: "16:32:56",
    amount: "+$500.00",
    method: "Bank",
    close: "1.2345",
    volume: "1000"
  }
]

interface ComposedTableHeadProps {
  content: string
  extraClassNames?: string
}

function ComposedTableHead({ content, extraClassNames }: ComposedTableHeadProps) {
  return (
    <TableHead className={clsx("text-center text-accent font-semibold", extraClassNames && `${extraClassNames}`)}>
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
      icon,
      price,
      changeRate,
      isIncreasing,
      status,
      className,
      ...props
    },
    ref
  ) => {
    const displayPrice = status === "open" ? price : ""
    const displayChange = status === "open" ? `%${changeRate}` : "Market Closed"

    return (
      <TableRow
        ref={ref}
        // ⬇ Important: Spread props so Radix can attach event handlers
        {...props}
        className={clsx(
          "bg-secondary border-white dark:border-white/50 text-center cursor-pointer",
          className
        )}
      >
        <TableCell className="font-bold flex items-center ml-5 gap-2">
          <img src={icon} alt={symbol} className="w-4 h-4" />
          <span>{symbol}</span>
        </TableCell>
        <TableCell className="text-gray-500">{displayPrice}</TableCell>
        <TableCell
          className={clsx(
            isIncreasing && "text-green-500",
            !isIncreasing && "text-red-600",
            displayChange === "Market Closed" && "text-blue-500 font-bold"
          )}
        >
          {displayChange}
        </TableCell>
      </TableRow>
    )
  }
)

ComposedTableRow.displayName = "ComposedTableRow"

export default function SymbolTable() {
  const [watchlist, setWatchlist] = useState<string[]>([])

  // Toggles symbol in/out of watchlist
  const toggleWatchlist = (symbol: string) => {
    setWatchlist(prev =>
      prev.includes(symbol)
        ? prev.filter(item => item !== symbol)
        : [...prev, symbol]
    )
  }
  return (
    <Table>
      <TableHeader>
        <TableRow className="bg-normal-blue-active hover:bg-dark-blue-hover text-[12px]">
          <ComposedTableHead
            content="Symbol"
            extraClassNames="rounded-tl-2xl"
          />
          <ComposedTableHead content="Price" />
          <ComposedTableHead
            content="Change"
            extraClassNames="rounded-tr-2xl"
          />
        </TableRow>
      </TableHeader>

      <TableBody>
        {symbols.map((symbol, idx) => {
          const isInWatchlist = watchlist.includes(symbol.symbol)

          return (
            <Sheet key={`symbol-table-row-${idx}`}>
              <SheetTrigger asChild>
                <ComposedTableRow {...symbol} />
              </SheetTrigger>
              <SheetContent
                side="bottom"
                className="bg-gradient-to-t from-[#002366] to-[#0047ab] border-none rounded-t-[28px] shadow-lg z-40 py-4"
              >
                <SheetHeader>
                  <SheetTitle className="text-center text-light-blue font-bold">
                    {symbol.symbol}
                  </SheetTitle>
                </SheetHeader>
                <div className="grid gap-4 px-6 pb-30">
                  <Button
                    variant="secondary"
                    className="font-semibold text-sm rounded-[12px] bg-light-blue py-6"
                  >
                    Chart
                  </Button>
                  <Button
                    variant="secondary"
                    className="font-semibold text-sm rounded-[12px] bg-light-blue py-6"
                  >
                    Create Order
                  </Button>
                  <Button
                    onClick={() => toggleWatchlist(symbol.symbol)}
                    variant="secondary"
                    className={clsx(
                      "font-semibold text-sm rounded-[12px] bg-light-blue py-6"
                    )}
                  >
                    {isInWatchlist ? "Remove Watchlist" : "Add Watchlist"}
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          )
        })}
      </TableBody>
    </Table>
  )
}
