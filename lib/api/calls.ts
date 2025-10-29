// 3'rd party
import useSWR from "swr"
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios"

// local
import { endpoints } from "@/lib/api/endpoints"
import { getConfig } from "@/lib/utils"
import { type SignInSchemaType, type SignUpSchemaType } from "@/lib/schemas"

const handleSuccess = (res: AxiosResponse) => {
    return res.data
}

const handleError = (error: AxiosError) => {
    console.log("API Error:", error.response?.data)
    throw error
}

const getCall = async (endpoint: string, config?: AxiosRequestConfig) => {
    return axios.get(endpoint, config).then(res => handleSuccess(res)).catch(err => handleError(err))
}

const postCall = async (endpoint: string, data?: any, config?: AxiosRequestConfig) => {
    return axios.post(endpoint, data, config).then(res => handleSuccess(res)).catch(err => handleError(err))
}

const putCall = async (endpoint: string, data?: any, config?: AxiosRequestConfig) => {
    return axios.put(endpoint, data, config).then(res => handleSuccess(res)).catch(err => handleError(err))
}

const deleteCall = async (endpoint: string, config?: AxiosRequestConfig) => {
    return axios.delete(endpoint, config).then(res => handleSuccess(res)).catch(err => handleError(err))
}

// fetchers
export const fetcher = (endpoint: string) => getCall(endpoint, getConfig())
export const authLessFetcher = (endpoint: string) => getCall(endpoint)

// Authentication API calls
export async function registerUser(userData: SignUpSchemaType) {
    return postCall(endpoints.register, userData)
}

export async function loginUser(credentials: SignInSchemaType) {
    return postCall(endpoints.login, credentials)
}

export async function refreshToken(refreshToken: string) {
    return postCall(endpoints.refresh, { refresh_token: refreshToken })
}

export async function logoutUser() {
    return postCall(endpoints.logout, {}, getConfig())
}

export async function sendVerificationCode(email: string) {
    return postCall(endpoints.send_verification_code, { email })
}

export async function verifyEmailCode(email: string, code: string) {
    return postCall(endpoints.verify_email_code, { email, code })
}

export async function forgotPassword(email: string) {
    return postCall(endpoints.forgot_password, { email })
}

export async function verifyResetCode(email: string, code: string) {
    return postCall(endpoints.verify_reset_code, { email, code })
}

export async function resetPassword(email: string, code: string, newPassword: string) {
    return postCall(endpoints.reset_password, { email, code, new_password: newPassword })
}

// User API calls
export async function getUserProfile() {
    return getCall(endpoints.profile_get_update, getConfig())
}

export async function updateUserProfile(userData: any) {
    return putCall(endpoints.profile_get_update, userData, getConfig())
}

export async function changePassword(oldPassword: string, newPassword: string) {
    return postCall(endpoints.change_password, { old_password: oldPassword, new_password: newPassword }, getConfig())
}

// Trading Account API calls
export async function getTradingAccounts() {
    return getCall(endpoints.accounts, getConfig())
}

export async function createTradingAccount(accountData: any) {
    return postCall(endpoints.accounts, accountData, getConfig())
}

export async function getAccountBalance(accountId: number) {
    return getCall(endpoints.account_balance(accountId), getConfig())
}

// Order API calls
export async function placeOrder(orderData: any) {
    return postCall(endpoints.orders, orderData, getConfig())
}

export async function getOrders(accountId: number, status?: string) {
    const params = new URLSearchParams({ account_id: accountId.toString() })
    if (status) params.append('status', status)
    return getCall(`${endpoints.orders}?${params.toString()}`, getConfig())
}

export async function closeOrder(orderId: string) {
    return postCall(endpoints.order_close(orderId), {}, getConfig())
}

export async function cancelOrder(orderId: string) {
    return deleteCall(endpoints.order_detail(orderId), getConfig())
}

// Market Data API calls
export async function getMarketSymbols() {
    return getCall(endpoints.market_symbols, getConfig())
}

export async function getSymbolPrice(symbol: string) {
    return getCall(endpoints.market_price(symbol), getConfig())
}

export async function getAllPrices() {
    return getCall(endpoints.market_prices, getConfig())
}

// Trade History API calls
export async function getTrades(accountId: number, page: number = 1, pageSize: number = 50) {
    const params = new URLSearchParams({
        account_id: accountId.toString(),
        page: page.toString(),
        page_size: pageSize.toString()
    })
    return getCall(`${endpoints.trades}?${params.toString()}`, getConfig())
}

export async function getTradeStatistics(accountId: number) {
    return getCall(`${endpoints.trade_statistics}?account_id=${accountId}`, getConfig())
}

// Legacy functions for compatibility
export async function postCredentials(endpoint: string, { arg }: { arg: SignInSchemaType }) {
    return postCall(endpoint, arg)
}

// query hooks
export const useFetchedProfile = () => useSWR(endpoints.profile_get_update, fetcher)
export const useTradingAccounts = () => useSWR(endpoints.accounts, fetcher)
export const useMarketSymbols = () => useSWR(endpoints.market_symbols, fetcher)
export const useAllPrices = () => useSWR(endpoints.market_prices, fetcher)
