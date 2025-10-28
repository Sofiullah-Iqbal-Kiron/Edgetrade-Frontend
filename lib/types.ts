type NavType = "Menu" | "Deposit" | "Trade" | "Market" | "Chart" | "Positions" | "History" | null

type MarketTabType = "All" | "Watchlist" | "Index" | "Exchange" | "Commodity" | "Stock"

type MarketStatusType = "open" | "closed" | "Deposited" | "Pending" | "Reject"

type MarketSymbolType = {
    symbol: string,
    method: string
    date: string,
    time: string
    amount: string
    type: string,
    enter_price: string,
    close_price: string,
    profit: string
    icon: string,
    price: number,
    changeRate: number,
    isIncreasing: boolean,
    status: MarketStatusType
    close: string
    volume: string
}

export type {
    NavType,
    MarketTabType,
    MarketSymbolType,
}