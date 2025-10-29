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
import { verifyResetCode, resetPassword } from '@/lib/api/calls'

export default function ResetPasswordPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [resetCode, setResetCode] = useState(['', '', '', '', '', ''])
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isResending, setIsResending] = useState(false)
  const [step, setStep] = useState<'verify' | 'reset'>('verify')

  // Get email from URL params
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const emailParam = urlParams.get('email')
    if (emailParam) {
      setEmail(emailParam)
    }
  }, [])

  const handleCodeChange = (index: number, value: string) => {
    const newCode = [...resetCode]

    if (value.length === 1) {
      // Single digit input
      newCode[index] = value
      setResetCode(newCode)
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
      setResetCode(newCode)
      
      // Focus on the last filled input
      const lastFilledIndex = Math.min(index + pastedCode.length - 1, 5)
      const nextInput = document.getElementById(`code-${lastFilledIndex + 1}`)
      if (nextInput && lastFilledIndex < 5) {
        nextInput.focus()
      }
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !resetCode[index] && index > 0) {
      const prevInput = document.getElementById(`code-${index - 1}`)
      prevInput?.focus()
    }
  }

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault()
    const pastedData = e.clipboardData.getData('text')
    const digits = pastedData.replace(/\D/g, '').slice(0, 6) // Only digits, max 6
    
    if (digits.length > 0) {
      const newCode = [...resetCode]
      digits.split('').forEach((digit, i) => {
        if (i < 6) {
          newCode[i] = digit
        }
      })
      setResetCode(newCode)
      
      // Focus on the last filled input
      const lastFilledIndex = Math.min(digits.length - 1, 5)
      const nextInput = document.getElementById(`code-${lastFilledIndex + 1}`)
      if (nextInput && lastFilledIndex < 5) {
        nextInput.focus()
      }
    }
  }

  const handleVerifyCode = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const code = resetCode.join('')
      if (code.length !== 6) {
        toast.error('Please enter the complete 6-digit code.')
        setIsLoading(false)
        return
      }

      await verifyResetCode(email, code)
      toast.success('Code verified! Now set your new password.')
      setStep('reset')
      
    } catch (error: any) {
      console.error('Verify code error:', error)
      toast.error(error.response?.data?.detail || 'Invalid verification code. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      if (newPassword !== confirmPassword) {
        toast.error('Passwords do not match.')
        setIsLoading(false)
        return
      }

      if (newPassword.length < 8) {
        toast.error('Password must be at least 8 characters long.')
        setIsLoading(false)
        return
      }

      const code = resetCode.join('')
      await resetPassword(email, code, newPassword)
      toast.success('Password reset successfully! You can now sign in.')
      
      // Redirect to sign-in page
      router.push('/signin')
      
    } catch (error: any) {
      console.error('Reset password error:', error)
      toast.error(error.response?.data?.detail || 'Failed to reset password. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleResendCode = async () => {
    if (!email) {
      toast.error('No email found to resend code.')
      return
    }
    setIsResending(true)
    try {
      await forgotPassword(email)
      toast.success('New reset code sent! Check your email.')
    } catch (error: any) {
      console.error('Resend code error:', error)
      toast.error(error.response?.data?.detail || 'Failed to resend code. Please try again.')
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
            EdgeTrade
          </h1>
          <h2 className='text-[10px] text-[#767676]'>
            Reset Your Password
          </h2>
        </div>

        {step === 'verify' ? (
          <>
            <div className='text-center mb-6'>
              <h2 className='text-[18px] font-bold text-[#5D5D5D] mb-2'>
                Enter Verification Code
              </h2>
              <p className='text-[12px] text-[#767676] mb-4'>
                Enter the 6-digit code we sent to your email
              </p>
            </div>

            <form onSubmit={handleVerifyCode}>
              <div className='flex justify-center gap-2 mb-4'>
                {resetCode.map((digit, index) => (
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

              <p className='text-[10px] text-[#767676] text-center mb-4'>
                We've sent a verification code to <span className="font-bold">{email}</span>
              </p>

              <div className='text-center mb-6'>
                <Button
                  type='button'
                  variant='link'
                  onClick={handleResendCode}
                  disabled={isResending}
                  className='text-blue-600 text-[12px] font-bold disabled:opacity-50'
                >
                  {isResending ? 'Sending...' : "Didn't receive the code? Send again"}
                </Button>
              </div>

              <Button
                type='submit'
                disabled={isLoading || resetCode.some(digit => !digit)}
                className='w-full bg-[#1D6CE9] rounded-none py-6 text-white text-[18px] font-bold disabled:opacity-50'
              >
                {isLoading ? 'Verifying...' : 'Verify Code'}
              </Button>
            </form>
          </>
        ) : (
          <>
            <div className='text-center mb-6'>
              <h2 className='text-[18px] font-bold text-[#5D5D5D] mb-2'>
                Set New Password
              </h2>
              <p className='text-[12px] text-[#767676] mb-4'>
                Enter your new password
              </p>
            </div>

            <form onSubmit={handleResetPassword} className='space-y-4'>
              <div>
                <Label
                  htmlFor='newPassword'
                  className='py-2 text-[10px] text-[#767676] font-bold'
                >
                  New Password
                </Label>
                <Input
                  id='newPassword'
                  type='password'
                  placeholder='Enter New Password'
                  value={newPassword}
                  onChange={e => setNewPassword(e.target.value)}
                  required
                  className='bg-white w-full h-[50px] placeholder-[#949494] focus:outline-none px-4 placeholder:text-[12px]'
                />
              </div>

              <div>
                <Label
                  htmlFor='confirmPassword'
                  className='py-2 text-[10px] text-[#767676] font-bold'
                >
                  Confirm Password
                </Label>
                <Input
                  id='confirmPassword'
                  type='password'
                  placeholder='Confirm New Password'
                  value={confirmPassword}
                  onChange={e => setConfirmPassword(e.target.value)}
                  required
                  className='bg-white w-full h-[50px] placeholder-[#949494] focus:outline-none px-4 placeholder:text-[12px]'
                />
              </div>

              <Button
                type='submit'
                disabled={isLoading}
                className='w-full bg-[#1D6CE9] rounded-none py-6 text-white text-[18px] font-bold disabled:opacity-50'
              >
                {isLoading ? 'Resetting...' : 'Reset Password'}
              </Button>
            </form>
          </>
        )}

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


