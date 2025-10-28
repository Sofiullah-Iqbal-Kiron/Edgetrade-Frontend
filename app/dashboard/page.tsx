'use client'

import { useState } from 'react'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { toast } from 'sonner'
import signinLogo from '../../public/logo/signin-top-logo.png'
import Image from 'next/image'
import { createTradingAccount, getTradingAccounts } from '@/lib/api/calls'

export default function DashboardPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [showCreateForm, setShowCreateForm] = useState(false)
  const [formData, setFormData] = useState({
    account_name: '',
    account_type: 'demo',
    currency: 'USD',
    leverage: '100',
    initial_balance: '10000'
  })

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const accountData = {
        account_name: formData.account_name,
        account_type: formData.account_type,
        currency: formData.currency,
        leverage: parseInt(formData.leverage),
        initial_balance: parseFloat(formData.initial_balance)
      }

      const response = await createTradingAccount(accountData)
      
      toast.success(`Trading account "${response.account_name}" created successfully!`)
      
      // Reset form
      setFormData({
        account_name: '',
        account_type: 'demo',
        currency: 'USD',
        leverage: '100',
        initial_balance: '10000'
      })
      setShowCreateForm(false)
      
    } catch (error: any) {
      console.error('Create account error:', error)
      
      if (error.response?.data?.detail) {
        toast.error(error.response.data.detail)
      } else {
        toast.error('Failed to create trading account. Please try again.')
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div
      className='relative min-h-screen bg-gradient-to-b from-white to-[#dbeafe] px-5 py-8'
      style={{
        backgroundImage: "url('/rainbow.png')",
        backgroundPosition: 'bottom',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className='max-w-4xl mx-auto'>
        {/* Header */}
        <div className='text-center mb-8'>
          <div className='flex justify-center mb-4'>
            <Image
              src={signinLogo}
              alt='EdgeTrade Logo'
              width={60}
              height={60}
            />
          </div>
          <h1 className='text-[32px] font-bold text-[#5D5D5D] mb-2'>
            EdgeTrade Dashboard
          </h1>
          <p className='text-[14px] text-[#767676]'>
            Welcome to your trading platform
          </p>
        </div>

        {/* Main Content */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
          {/* Left Side - Account Overview */}
          <div className='relative z-40 bg-white/20 backdrop-blur-md border border-white/30 shadow-2xl p-6 rounded-lg'>
            <h2 className='text-[20px] font-bold text-[#5D5D5D] mb-4'>
              Trading Accounts
            </h2>
            
            <div className='space-y-4'>
              <div className='bg-white/30 p-4 rounded-lg'>
                <h3 className='text-[16px] font-semibold text-[#5D5D5D] mb-2'>
                  Account Summary
                </h3>
                <p className='text-[12px] text-[#767676]'>
                  Manage your trading accounts and monitor your performance
                </p>
              </div>

              <Button
                onClick={() => setShowCreateForm(!showCreateForm)}
                className='w-full bg-[#1D6CE9] rounded-none py-4 text-white text-[16px] font-bold'
              >
                {showCreateForm ? 'Cancel' : '+ Create New Trading Account'}
              </Button>
            </div>
          </div>

          {/* Right Side - Create Account Form */}
          <div className='relative z-40 bg-white/20 backdrop-blur-md border border-white/30 shadow-2xl p-6 rounded-lg'>
            {showCreateForm ? (
              <>
                <h2 className='text-[20px] font-bold text-[#5D5D5D] mb-4'>
                  Create Trading Account
                </h2>
                
                <form onSubmit={handleSubmit} className='space-y-4'>
                  {/* Account Name */}
                  <div>
                    <Label
                      htmlFor='account_name'
                      className='py-2 text-[12px] text-[#767676] font-bold'
                    >
                      Account Name
                    </Label>
                    <Input
                      id='account_name'
                      type='text'
                      placeholder='My Trading Account'
                      value={formData.account_name}
                      onChange={e => handleChange('account_name', e.target.value)}
                      required
                      className='bg-white w-full h-[50px] placeholder-[#949494] focus:outline-none px-4 placeholder:text-[12px]'
                    />
                  </div>

                  {/* Account Type */}
                  <div>
                    <Label
                      htmlFor='account_type'
                      className='py-2 text-[12px] text-[#767676] font-bold'
                    >
                      Account Type
                    </Label>
                    <Select
                      value={formData.account_type}
                      onValueChange={value => handleChange('account_type', value)}
                    >
                      <SelectTrigger className='bg-white w-full h-[50px] focus:outline-none px-4'>
                        <SelectValue placeholder='Select account type' />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value='demo'>Demo Account</SelectItem>
                        <SelectItem value='live'>Live Account</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Currency */}
                  <div>
                    <Label
                      htmlFor='currency'
                      className='py-2 text-[12px] text-[#767676] font-bold'
                    >
                      Currency
                    </Label>
                    <Select
                      value={formData.currency}
                      onValueChange={value => handleChange('currency', value)}
                    >
                      <SelectTrigger className='bg-white w-full h-[50px] focus:outline-none px-4'>
                        <SelectValue placeholder='Select currency' />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value='USD'>USD - US Dollar</SelectItem>
                        <SelectItem value='EUR'>EUR - Euro</SelectItem>
                        <SelectItem value='GBP'>GBP - British Pound</SelectItem>
                        <SelectItem value='BTC'>BTC - Bitcoin</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Leverage */}
                  <div>
                    <Label
                      htmlFor='leverage'
                      className='py-2 text-[12px] text-[#767676] font-bold'
                    >
                      Leverage
                    </Label>
                    <Select
                      value={formData.leverage}
                      onValueChange={value => handleChange('leverage', value)}
                    >
                      <SelectTrigger className='bg-white w-full h-[50px] focus:outline-none px-4'>
                        <SelectValue placeholder='Select leverage' />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value='50'>1:50</SelectItem>
                        <SelectItem value='100'>1:100</SelectItem>
                        <SelectItem value='200'>1:200</SelectItem>
                        <SelectItem value='500'>1:500</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Initial Balance */}
                  <div>
                    <Label
                      htmlFor='initial_balance'
                      className='py-2 text-[12px] text-[#767676] font-bold'
                    >
                      Initial Balance
                    </Label>
                    <Input
                      id='initial_balance'
                      type='number'
                      placeholder='10000'
                      value={formData.initial_balance}
                      onChange={e => handleChange('initial_balance', e.target.value)}
                      required
                      min='100'
                      step='0.01'
                      className='bg-white w-full h-[50px] placeholder-[#949494] focus:outline-none px-4 placeholder:text-[12px]'
                    />
                  </div>

                  <Button
                    type='submit'
                    disabled={isLoading}
                    className='w-full bg-[#1D6CE9] rounded-none py-6 text-white text-[18px] font-bold disabled:opacity-50'
                  >
                    {isLoading ? 'Creating Account...' : 'Create Trading Account'}
                  </Button>
                </form>
              </>
            ) : (
              <div className='text-center py-12'>
                <h3 className='text-[18px] font-bold text-[#5D5D5D] mb-2'>
                  Quick Actions
                </h3>
                <p className='text-[12px] text-[#767676] mb-6'>
                  Create a new trading account to start trading
                </p>
                <Button
                  onClick={() => setShowCreateForm(true)}
                  className='bg-[#1D6CE9] rounded-none py-4 px-8 text-white text-[16px] font-bold'
                >
                  Get Started
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Section - Additional Info */}
        <div className='mt-8 relative z-40 bg-white/20 backdrop-blur-md border border-white/30 shadow-2xl p-6 rounded-lg'>
          <h3 className='text-[18px] font-bold text-[#5D5D5D] mb-4'>
            Trading Features
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            <div className='bg-white/30 p-4 rounded-lg text-center'>
              <h4 className='text-[14px] font-semibold text-[#5D5D5D] mb-2'>
                Real-time Data
              </h4>
              <p className='text-[10px] text-[#767676]'>
                Live market prices and charts
              </p>
            </div>
            <div className='bg-white/30 p-4 rounded-lg text-center'>
              <h4 className='text-[14px] font-semibold text-[#5D5D5D] mb-2'>
                Risk Management
              </h4>
              <p className='text-[10px] text-[#767676]'>
                Advanced risk controls
              </p>
            </div>
            <div className='bg-white/30 p-4 rounded-lg text-center'>
              <h4 className='text-[14px] font-semibold text-[#5D5D5D] mb-2'>
                Mobile Trading
              </h4>
              <p className='text-[10px] text-[#767676]'>
                Trade anywhere, anytime
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
