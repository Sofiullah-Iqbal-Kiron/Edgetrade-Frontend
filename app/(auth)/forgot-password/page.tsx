'use client'

import { useState } from 'react'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import signinLogo from '../../../public/logo/signin-top-logo.png'
import Image from 'next/image'
import { forgotPassword } from '@/lib/api/calls'

export default function ForgotPasswordPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      await forgotPassword(email)
      toast.success('Password reset code sent to your email!')
      
      // Redirect to reset password page with email
      router.push(`/reset-password?email=${encodeURIComponent(email)}`)
      
    } catch (error: any) {
      console.error('Forgot password error:', error)
      
      if (error.response?.data?.detail) {
        toast.error(error.response.data.detail)
      } else {
        toast.error('Failed to send reset code. Please try again.')
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div
      className='relative flex min-h-screen items-center justify-center bg-gradient-to-b from-white to-[#dbeafe] px-5'
      style={{
        backgroundImage: "url('/rainbow.png')",
        backgroundPosition: 'bottom',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className='relative z-40 w-full max-w-sm bg-white/20 backdrop-blur-md border border-white/30 shadow-2xl p-8'>
        <div className='text-center mb-6'>
          <div className='flex justify-center mb-2'>
            <Image
              src={signinLogo}
              alt='EdgeTrade Logo'
              width={50}
              height={50}
            />
          </div>
          <h1 className='text-[24px] font-bold text-[#5D5D5D]'>
            EdgeTrade
          </h1>
          <h2 className='text-[10px] text-[#767676]'>
            Reset Your Password
          </h2>
        </div>

        <div className='text-center mb-6'>
          <h2 className='text-[18px] font-bold text-[#5D5D5D] mb-2'>
            Forget Password
          </h2>
          <p className='text-[12px] text-[#767676] mb-4'>
            Enter your registered email address and we'll send you a verification code.
          </p>
        </div>

        <form onSubmit={handleSubmit} className='space-y-4'>
          <div>
            <Label
              htmlFor='email'
              className='py-2 text-[10px] text-[#767676] font-bold'
            >
              Email
            </Label>
            <Input
              id='email'
              type='email'
              placeholder='Enter Your Email'
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              className='bg-white w-full h-[50px] placeholder-[#949494] focus:outline-none px-4 placeholder:text-[12px]'
            />
          </div>

          <Button
            type='submit'
            disabled={isLoading}
            className='w-full bg-[#1D6CE9] rounded-none py-6 text-white text-[18px] font-bold disabled:opacity-50'
          >
            {isLoading ? 'Sending...' : 'Send Verification Code'}
          </Button>
        </form>

        <div className='text-center mt-4'>
          <p className='text-[10px] text-[#767676]'>
            Remember your password?{' '}
            <Link href='/signin'>
              <span className='text-blue-600'>Sign In</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

