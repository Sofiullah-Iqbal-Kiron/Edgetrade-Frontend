'use client'

import { useEffect, useState } from 'react'
import { getTradingAccounts, getAccountBalance } from '@/lib/api/calls'

export default function EquityCard() {
  const [equity, setEquity] = useState(0)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchEquity = async () => {
      try {
        setLoading(true)
        setError(null)
        
        // Get user's trading accounts
        const accounts = await getTradingAccounts()
        
        if (accounts && accounts.length > 0) {
          // Use the first account's balance as equity
          const firstAccount = accounts[0]
          const balance = await getAccountBalance(firstAccount.id)
          setEquity(balance.equity || balance.balance || 0)
        } else {
          setEquity(0)
        }
      } catch (err: any) {
        console.error('Error fetching equity:', err)
        setError('Failed to load equity')
        setEquity(0)
      } finally {
        setLoading(false)
      }
    }

    fetchEquity()
  }, [])

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center pt-10 pb-6">
        <span className="text-lg text-[#C8C6C6]">Equity</span>
        <span className="text-3xl font-bold text-[#C8C6C6]">Loading...</span>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex flex-col justify-center items-center pt-10 pb-6">
        <span className="text-lg text-[#C8C6C6]">Equity</span>
        <span className="text-3xl font-bold text-red-500">Error</span>
      </div>
    )
  }

  return (
    <div className="flex flex-col justify-center items-center pt-10 pb-6">
      <span className="text-lg text-[#C8C6C6]">Equity</span>
      <span className="text-3xl font-bold">
        {equity.toLocaleString("en-US", { style: "currency", currency: "USD" })}
      </span>
    </div>
  )
}
