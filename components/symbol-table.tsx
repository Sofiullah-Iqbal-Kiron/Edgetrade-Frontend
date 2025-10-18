// shadcn/ui
import { Button } from "@/components/ui/button"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

// 3'rd party
import clsx from "clsx"

// local
import { MarketSymbolType } from "@/lib/types"


const symbols: Array<MarketSymbolType> = [
    {
        "symbol": "AUD/USD",
        "icon": "/icons/audusd.svg",
        "price": 0.64732,
        "changeRate": 15.08,
        isIncreasing: true,
        "status": "open"
    },
    {
        "symbol": "ASELSAN",
        "icon": "/icons/asels.svg",
        "price": 0.65708,
        "changeRate": 15.32,
        isIncreasing: false,
        "status": "open"
    },
    {
        "symbol": "GARAN",
        "icon": "/icons/garan.svg",
        "price": 62.45,
        "changeRate": -0.45,
        isIncreasing: true,
        "status": "closed"
    }
]

interface ComposedTableHeadProps {
    content: string,
    extraClassNames?: string,
}

function ComposedTableHead({ content, extraClassNames }: ComposedTableHeadProps) {
    return (
        <TableHead className={clsx("text-center text-accent font-semibold", extraClassNames && `${extraClassNames}`)}>
            {content}
        </TableHead>
    )
}

function ComposedTableRow(symbol: MarketSymbolType) {
    const price = symbol.status === "open" ? symbol.price : ""
    const change = symbol.status === "open" ? `%${symbol.changeRate}` : "Market Closed"

    return (
        <TableRow className="bg-secondary border-white dark:border-white/50 text-center">
            <TableCell className="font-bold">{symbol.symbol}</TableCell>
            <TableCell className="text-gray-500">{price}</TableCell>
            <TableCell className={clsx(symbol.isIncreasing && "text-green-500" || "text-red-600", change === "Market Closed" && "text-blue-500 font-bold")}>{change}</TableCell>
        </TableRow>
    )
}

export default function SymbolTable() {
    return (
        <Table>
            <TableHeader>
                <TableRow className="bg-dark-blue hover:bg-dark-blue-hover">
                    <ComposedTableHead content="Symbol" extraClassNames="rounded-tl-2xl" />
                    <ComposedTableHead content="Price" />
                    <ComposedTableHead content="Change" extraClassNames="rounded-tr-2xl" />
                </TableRow>
            </TableHeader>

            <TableBody>
                {symbols.map((symbol, idx) => {
                    return (
                        <Sheet key={`symbol-table-row-${idx}`}>
                            <SheetTrigger asChild>
                                <ComposedTableRow {...symbol} />
                            </SheetTrigger>
                            <SheetContent side="bottom" className="rounded-t-2xl bg-dark-blue-hover">
                                <SheetHeader>
                                    <SheetTitle className="text-center text-light-blue font-bold">{symbol.symbol}</SheetTitle>
                                </SheetHeader>
                                <div className="grid gap-4 px-14 pb-30">
                                    <Button variant="secondary" className="font-semibold text-lg rounded-xl bg-light-blue shadow-light-blue-active shadow">
                                        Chart
                                    </Button>
                                    <Button variant="secondary" className="font-semibold text-lg rounded-xl bg-light-blue">
                                        Create Order
                                    </Button>
                                    <Button variant="secondary" className="font-semibold text-lg rounded-xl bg-light-blue">
                                        Add Watchlist
                                    </Button>
                                    <Button variant="secondary" className="font-semibold text-lg rounded-xl bg-light-blue">
                                        Remove Watchlist
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
