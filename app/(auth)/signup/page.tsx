'use client'

import { useState } from 'react'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import signinLogo from '../../../public/logo/signin-top-logo.png'
import Image from 'next/image'

export default function SignUpPage () {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    dateOfBirth: '',
    email: '',
    password: '',
    id: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setFormData(prev => ({
      ...prev,
      [id]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
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
      <div className='relative z-40 w-full max-w-sm bg-white/20 backdrop-blur-md border border-white/30 shadow-2xl p-4'>
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
            EdgeTrade Register
          </h1>
          <h2 className='text-[10px] text-[#767676]'>
            Already have an account?{' '}
            <Link href='/signin'>
              <span className='text-blue-600'>Signin</span>
            </Link>
          </h2>
        </div>

        <form onSubmit={handleSubmit} className='space-y-2'>
          {/* First Name */}
          <div className='flex gap-x-2'>
            <div>
              <Label
                htmlFor='firstName'
                className='py-1 text-[10px] text-[#767676] font-bold'
              >
                First Name
              </Label>
              <Input
                id='firstName'
                type='text'
                placeholder='First Name'
                value={formData.firstName}
                onChange={handleChange}
                required
                className='bg-white w-full h-[50px] placeholder-[#949494] focus:outline-none px-4 placeholder:text-[12px]'
              />
            </div>

            {/* Last Name */}
            <div>
              <Label
                htmlFor='lastName'
                className='py-1 text-[10px] text-[#767676] font-bold'
              >
                Last Name
              </Label>
              <Input
                id='lastName'
                type='text'
                placeholder='Last Name'
                value={formData.lastName}
                onChange={handleChange}
                required
                className='bg-white w-full h-[50px] placeholder-[#949494] focus:outline-none px-4 placeholder:text-[12px]'
              />
            </div>
          </div>

          <div className='flex gap-x-2'>
            <div>
              <Label
                htmlFor='id'
                className='py-1 text-[10px] text-[#767676] font-bold'
              >
                ID Number
              </Label>
              <Input
                id='id'
                type='text'
                placeholder='012546876554'
                value={formData.id}
                onChange={handleChange}
                required
                className='bg-white w-full h-[50px] placeholder-[#949494] focus:outline-none px-4 placeholder:text-[12px]'
              />
            </div>
            {/* Date of Birth */}
            <div>
              <Label
                htmlFor='dateOfBirth'
                className='py-1 text-[10px] text-[#767676] font-bold'
              >
                Date of Birth
              </Label>
              <Input
                id='dateOfBirth'
                type='text'
                placeholder='YYYY-MM-DD'
                value={formData.dateOfBirth}
                onChange={handleChange}
                required
                className='bg-white w-full h-[50px] placeholder-[#949494] focus:outline-none px-4 placeholder:text-[12px]'
              />
            </div>
          </div>

          {/* Phone Number */}
          <div>
            <Label
              htmlFor='phoneNumber'
              className='py-1 text-[10px] text-[#767676] font-bold'
            >
              Phone Number
            </Label>
            <Input
              id='phoneNumber'
              type='tel'
              placeholder='Phone Number'
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              className='bg-white w-full h-[50px] placeholder-[#949494] focus:outline-none px-4 placeholder:text-[12px]'
            />
          </div>

          {/* Email */}
          <div>
            <Label
              htmlFor='email'
              className='py-1 text-[10px] text-[#767676] font-bold'
            >
              Email
            </Label>
            <Input
              id='email'
              type='email'
              placeholder='Email Address'
              value={formData.email}
              onChange={handleChange}
              required
              className='bg-white w-full h-[50px] placeholder-[#949494] focus:outline-none px-4 placeholder:text-[12px]'
            />
          </div>

          {/* Password */}
          <div>
            <Label
              htmlFor='password'
              className='py-1 text-[10px] text-[#767676] font-bold'
            >
              Password
            </Label>
            <Input
              id='password'
              type='password'
              placeholder='Password'
              value={formData.password}
              onChange={handleChange}
              required
              className='bg-white w-full h-[50px] placeholder-[#949494] focus:outline-none px-4 placeholder:text-[12px]'
            />
          </div>

          <Button
            type='submit'
            className='w-full bg-[#1D6CE9] rounded-none py-6 text-white text-[18px] font-bold mt-5'
          >
            Sign Up
          </Button>
        </form>
      </div>
    </div>
  )
}
