// shadcn/ui
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

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

export default function SymbolTable() {
    return (
        <Table>
            <TableHeader>
                <TableRow className="bg-primary hover:bg-primary">
                    <ComposedTableHead content="Symbol" extraClassNames="rounded-tl-2xl" />
                    <ComposedTableHead content="Price" />
                    <ComposedTableHead content="Change" extraClassNames="rounded-tr-2xl" />
                </TableRow>
            </TableHeader>

            <TableBody>
                {symbols.map((symbol, idx) => {
                    const price = symbol.status === "open" ? symbol.price : ""
                    const change = symbol.status === "open" ? `%${symbol.changeRate}` : "Market Closed"

                    return (
                        <TableRow key={`symbol-table-${idx}`} className="bg-secondary border-white dark:border-white/50 text-center">
                            <TableCell className="font-bold">{symbol.symbol}</TableCell>
                            <TableCell className="text-gray-500">{price}</TableCell>
                            <TableCell className={clsx(symbol.isIncreasing && "text-green-500" || "text-red-600", change === "Market Closed" && "text-blue-500 font-bold")}>{change}</TableCell>
                        </TableRow>
                    )
                })}
            </TableBody>
        </Table>
    )
}
