'use client'

import { useState, useEffect } from 'react'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import signinLogo from '../../../public/logo/signin-top-logo.png'
import Image from 'next/image'
import { verifyEmailCode, sendVerificationCode } from '@/lib/api/calls'

export default function VerifyEmailPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [isResending, setIsResending] = useState(false)
  const [verificationCode, setVerificationCode] = useState(['', '', '', '', '', ''])
  const [email, setEmail] = useState('')

  // Get email from URL params or localStorage
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const emailParam = urlParams.get('email')
    if (emailParam) {
      setEmail(emailParam)
    } else {
      // Try to get from localStorage if available
      const storedEmail = localStorage.getItem('registration_email')
      if (storedEmail) {
        setEmail(storedEmail)
      }
    }
  }, [])

  const handleCodeChange = (index: number, value: string) => {
    const newCode = [...verificationCode]

    if (value.length === 1) {
      // Single digit input
      newCode[index] = value
      setVerificationCode(newCode)
      // Auto-focus next input
      if (value && index < 5) {
        const nextInput = document.getElementById(`code-${index + 1}`)
        nextInput?.focus()
      }
    } else if (value.length > 1) {
      // Paste event - handle multiple digits
      const pastedCode = value.slice(0, 6 - index).split('')
      pastedCode.forEach((char, i) => {
        if (index + i < 6 && /^\d$/.test(char)) {
          newCode[index + i] = char
        }
      })
      setVerificationCode(newCode)
      
      // Focus on the last filled input
      const lastFilledIndex = Math.min(index + pastedCode.length - 1, 5)
      const nextInput = document.getElementById(`code-${lastFilledIndex + 1}`)
      if (nextInput && lastFilledIndex < 5) {
        nextInput.focus()
      }
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !verificationCode[index] && index > 0) {
      const prevInput = document.getElementById(`code-${index - 1}`)
      prevInput?.focus()
    }
  }

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault()
    const pastedData = e.clipboardData.getData('text')
    const digits = pastedData.replace(/\D/g, '').slice(0, 6) // Only digits, max 6
    
    if (digits.length > 0) {
      const newCode = [...verificationCode]
      digits.split('').forEach((digit, i) => {
        if (i < 6) {
          newCode[i] = digit
        }
      })
      setVerificationCode(newCode)
      
      // Focus on the last filled input
      const lastFilledIndex = Math.min(digits.length - 1, 5)
      const nextInput = document.getElementById(`code-${lastFilledIndex + 1}`)
      if (nextInput && lastFilledIndex < 5) {
        nextInput.focus()
      }
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const code = verificationCode.join('')
      if (code.length !== 6) {
        toast.error('Please enter the complete 6-digit code')
        return
      }

      const response = await verifyEmailCode(email, code)
      
      toast.success('Email verified successfully!')
      
      // Clear stored email
      localStorage.removeItem('registration_email')
      
      // Redirect to sign-in page
      router.push('/signin')
      
    } catch (error: any) {
      console.error('Verification error:', error)
      
      if (error.response?.data?.detail) {
        toast.error(error.response.data.detail)
      } else {
        toast.error('Verification failed. Please try again.')
      }
    } finally {
      setIsLoading(false)
    }
  }

  const handleResendCode = async () => {
    setIsResending(true)
    
    try {
      await sendVerificationCode(email)
      toast.success('Verification code sent again!')
    } catch (error: any) {
      console.error('Resend error:', error)
      toast.error('Failed to resend code. Please try again.')
    } finally {
      setIsResending(false)
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
            EdgeTrade Log in
          </h1>
          <h2 className='text-[10px] text-[#767676]'>
            Do you have an account?{' '}
            <Link href='/signin'>
              <span className='text-blue-600'>Register</span>
            </Link>
          </h2>
        </div>

        <div className='text-center mb-6'>
          <h2 className='text-[18px] font-bold text-[#5D5D5D] mb-2'>
            Check Your Email
          </h2>
          <p className='text-[12px] text-[#767676] mb-4'>
            Enter the 6-digit code we sent to your email
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Verification Code Input */}
          <div className='flex justify-center gap-2 mb-4'>
            {verificationCode.map((digit, index) => (
              <Input
                key={index}
                id={`code-${index}`}
                type='text'
                inputMode='numeric'
                maxLength={1}
                value={digit}
                onChange={(e) => handleCodeChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                onPaste={handlePaste}
                className='w-12 h-12 text-center text-[18px] font-bold bg-white border-2 border-gray-300 focus:border-blue-500 focus:outline-none'
              />
            ))}
          </div>

          {/* Verification Message */}
          <div className='text-center mb-4'>
            <p className='text-[10px] text-[#767676] mb-2'>
              We've sent a verification code to {email}
            </p>
            <p className='text-[10px] text-[#767676] mb-4'>
              If you don't see it, check your spam folder.
            </p>
          </div>

          {/* Resend Code Link */}
          <div className='text-center mb-6'>
            <button
              type='button'
              onClick={handleResendCode}
              disabled={isResending}
              className='text-[12px] text-blue-600 hover:underline disabled:opacity-50'
            >
              {isResending ? 'Sending...' : "Didn't receive the code? Send again"}
            </button>
          </div>

          {/* Submit Button */}
          <Button
            type='submit'
            disabled={isLoading || verificationCode.some(digit => !digit)}
            className='w-full bg-[#1D6CE9] rounded-none py-6 text-white text-[18px] font-bold disabled:opacity-50'
          >
            {isLoading ? 'Verifying...' : 'Enter Verification Code'}
          </Button>
        </form>
      </div>
    </div>
  )
}