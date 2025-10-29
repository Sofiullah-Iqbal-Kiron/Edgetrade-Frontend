'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import signinLogo from '../../../public/logo/signin-top-logo.png'

export default function ForgetPage () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ email, password })
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
      <div className='relative z-40 w-full max-w-[431px] bg-[#EAEAEA00] backdrop-blur-3xl shadow-2xl p-8 -mt-[150px]  lg:-mt-[250px]'>
        <div className='text-center max-w-[356px]'>
          <div className='flex justify-center mb-2'>
            <Image
              src={signinLogo}
              alt='EdgeTrade Logo'
              width={50}
              height={50}
            />
          </div>
          <h1 className='text-[24px] font-bold text-[#5D5D5D]'>EdgeTrade</h1>
          <h2 className='text-[10px] text-[#767676] mt-2'>
            Reset Your Password
          </h2>
          <h1 className='text-[24px] font-bold text-[#5D5D5D] mt-5'>
            Reset Password
          </h1>
          <h2 className='text-[12px] text-[#767676] mt-1 font-medium'>
            Please enter your new password below
          </h2>
        </div>

        <form onSubmit={handleSubmit} className='mt-5'>
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
              placeholder='Enter your email'
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              className='bg-white w-full h-[50px] placeholder-[#949494] focus:outline-none px-4 placeholder:text-[12px]'
            />
          </div>
          <div>
            <Label
              htmlFor='password'
              className='py-2 text-[10px] text-[#767676] font-bold'
            >
              Password
            </Label>
            <Input
              id='password'
              type='password'
              placeholder='Enter your password'
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              className='bg-white w-full h-[50px] placeholder-[#949494] focus:outline-none px-4 placeholder:text-[12px]'
            />
          </div>

          {/* <p className="text-white text-[10px] text-center">
            Invalid credentials, either your email or password is wrong.
          </p> */}

          <Link href={'/signin'}>
            <Button
              type='submit'
              className='w-full mt-5 bg-normal-blue rounded-none py-6 text-white text-[18px] font-bold'
            >
              Update Password
            </Button>
          </Link>
        </form>
      </div>
    </div>
  )
}
