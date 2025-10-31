'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import signinLogo from '../../../public/logo/signin-top-logo.png'

export default function CodeEntryPage () {
  const [code, setCode] = useState(['', '', '', '', '', ''])
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  const handleChange = (value: string, index: number) => {
    if (!/^[0-9]?$/.test(value)) return
    const newCode = [...code]
    newCode[index] = value
    setCode(newCode)

    // Auto focus next
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Verification Code:', code.join(''))
  }

  return (
    <div
      className='relative flex min-h-dvh items-center justify-center bg-gradient-to-b from-white to-[#dbeafe] px-5'
      style={{
        backgroundImage: "url('/rainbow.png')",
        backgroundPosition: 'bottom',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className='relative z-40 w-full max-w-[431px] bg-[#EAEAEA00] backdrop-blur-3xl shadow-2xl p-8 -mt-[150px] lg:-mt-[250px]'>
        <div className='text-center max-w-[356px] mx-auto'>
          <div className='flex justify-center mb-2'>
            <Image
              src={signinLogo}
              alt='EdgeTrade Logo'
              width={50}
              height={50}
            />
          </div>
          <h1 className='text-[24px] font-bold text-[#5D5D5D]'>EdgeTrade</h1>
          <h1 className='text-[24px] font-bold text-[#5D5D5D] mt-5'>
            Check Your Email
          </h1>
          <p className='text-[14px] text-[#767676] mt-2'>
            Enter the 6-digit code sent to your email
          </p>
        </div>

        <form onSubmit={handleSubmit} className='mt-5'>
          <div className='flex items-center justify-between gap-x-[8px]'>
            {code.map((digit, idx) => (
              <Input
                key={idx}
                type='text'
                placeholder='-'
                maxLength={1}
                value={digit}
                ref={el => {
                  inputRefs.current[idx] = el
                }}
                onChange={e => handleChange(e.target.value, idx)}
                onKeyDown={e => handleKeyDown(e, idx)}
                className='bg-white w-full text-center h-[50px] text-lg placeholder-[#949494] focus:outline-none rounded-[14px]'
              />
            ))}
          </div>

          <div className='mt-5 text-center'>
            <p className='text-[10px] text-[#5D5D5D] font-medium flex flex-col'>
              We've sent a verification code to:{' '}
              <span>emmabrown8787@gmail.com</span>
            </p>
            <h3 className='text-[14px] text-[#5D5D5D] font-bold mt-2 mb-3'>
              If you don't see it, check your spam folder.
            </h3>
            <h2 className='text-[14px]  font-medium text-white'>
              Didn't receive the code? Send again
            </h2>
          </div>

          <Link href={'/reset-password'}>
            <Button
              type='submit'
              className='w-full mt-3 bg-normal-blue rounded-none py-6 text-white text-[18px] font-bold'
            >
              Enter Verification Code
            </Button>
          </Link>
        </form>
      </div>
    </div>
  )
}
