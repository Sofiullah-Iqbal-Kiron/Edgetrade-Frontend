type NavType = "Menu" | "Deposit" | "Trade" | "Market" | "Chart" | "Positions" | "History"

type MarketTabType = "All" | "Watchlist" | "Index" | "Exchange" | "Commodity" | "Stock"

type MarketStatusType = "open" | "closed"

type MarketSymbolType = {
    symbol: string,
    icon: string,
    price: number,
    changeRate: number,
    isIncreasing: boolean,
    status: MarketStatusType
}

export type {
    NavType,
    MarketTabType,
    MarketSymbolType,
}