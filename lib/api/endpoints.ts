// Backend API endpoints.

const API_BASE_V1 = "https://mapex.fun/api/v1"

export const endpoints = {
    // Authentication
    register: `${API_BASE_V1}/auth/register`,
    login: `${API_BASE_V1}/auth/login`,
    refresh: `${API_BASE_V1}/auth/refresh`,
    logout: `${API_BASE_V1}/auth/logout`,
    verify_email: `${API_BASE_V1}/auth/verify-email`,
    send_verification_code: `${API_BASE_V1}/auth/send-verification-code`,
    verify_email_code: `${API_BASE_V1}/auth/verify-email-code`,
    forgot_password: `${API_BASE_V1}/auth/forgot-password`,
    verify_reset_code: `${API_BASE_V1}/auth/verify-reset-code`,
    reset_password: `${API_BASE_V1}/auth/reset-password`,

    // User
    profile_get_update: `${API_BASE_V1}/users/me`,
    change_password: `${API_BASE_V1}/users/change-password`,

    // Trading Accounts
    accounts: `${API_BASE_V1}/accounts`,
    account_balance: (id: number) => `${API_BASE_V1}/accounts/${id}/balance`,

    // Orders
    orders: `${API_BASE_V1}/orders`,
    order_detail: (id: string) => `${API_BASE_V1}/orders/${id}`,
    order_close: (id: string) => `${API_BASE_V1}/orders/${id}/close`,

    // Trades
    trades: `${API_BASE_V1}/trades`,
    trade_statistics: `${API_BASE_V1}/trades/statistics`,
    trade_report: `${API_BASE_V1}/trades/report`,
    trade_export: `${API_BASE_V1}/trades/export/csv`,

    // Market Data
    market_symbols: `${API_BASE_V1}/market/symbols`,
    market_price: (symbol: string) => `${API_BASE_V1}/market/price/${symbol}`,
    market_prices: `${API_BASE_V1}/market/prices`,

    // Legacy endpoints
    token_pair: `${API_BASE_V1}/token/`,
}
