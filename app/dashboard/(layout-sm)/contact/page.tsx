'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import mailLogo from '@/public/logo/mail-logo.png'
import { Label } from '@radix-ui/react-label'
import Image from 'next/image'
import { useState } from 'react'
export default function ContactPage () {
  const [contactMessage, setContactMessage] = useState({
    'first-name': 'Emma',
    'last-name': 'Brown',
    email: 'edgetrade@gmail.com',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setContactMessage(prev => ({ ...prev, [id]: value }))
  }
  // Updated handleChange for textarea
  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContactMessage({ ...contactMessage, message: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Contact message data:', contactMessage)
  }
  return (
    <div className='w-full'>
      <h2 className='text-[12px] font-bold text-center text-[#272525]'>
        Contact Now
      </h2>
      <div className='h-[2px] w-[70%] mx-auto bg-blue-600 mt-1'></div>

      <div className='text-center mt-3'>
        <h2 className='text-[14px] text-[#5D5D5D] font-bold'>Get in Touch</h2>
        <p className='text-[#949494] text-[10px] font-bold'>
          We're here to help with any questions you might have
        </p>
      </div>

      <div className='bg-white py-4 px-3 flex items-center gap-x-3 mt-3 rounded-[6px] w-full'>
        <div className='w-10 h-10 bg-[#2368D429] rounded-full flex items-center justify-center'>
          <Image src={mailLogo} alt='mail-logo' width={20} height={20} />
        </div>
        <div>
          <p className='text-[#949494] text-[7px]'>Email Support</p>
          <p className='text-[#5D5D5D] text-[10px] font-bold'>
            support@forex.com
          </p>
          <p className='text-[#1D6CE9] text-[7px]'>Available 24/5</p>
        </div>
      </div>

      <div className='mt-5'>
        <form onSubmit={handleSubmit} className='space-y-2'>
          <div className='flex gap-x-2'>
            <div>
              <Label
                htmlFor='first-name'
                className='py-2 text-[10px] text-[#767676] font-bold'
              >
                First Name
              </Label>
              <Input
                id='first-name'
                type='text'
                value={contactMessage['first-name']}
                onChange={handleChange}
                required
                className='bg-white w-full h-[40px] placeholder-[#949494] focus:outline-none px-4 text-[12px] rounded-[6px]'
              />
            </div>
            <div>
              <Label
                htmlFor='last-name'
                className='py-2 text-[10px] text-[#767676] font-bold'
              >
                Last Name
              </Label>
              <Input
                id='last-name'
                type='text'
                value={contactMessage['last-name']}
                onChange={handleChange}
                required
                className='bg-white w-full h-[40px] placeholder-[#949494]  focus:outline-none px-4 text-[12px] rounded-[6px]'
              />
            </div>
          </div>

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
              value={contactMessage.email}
              onChange={handleChange}
              required
              className='bg-white w-full h-[40px] placeholder-[#949494]  focus:outline-none px-4 text-[12px] rounded-[6px]'
            />
          </div>
          <div>
            <Label
              htmlFor='message'
              className='py-2 text-[10px] text-[#767676] font-bold'
            >
              Message
            </Label>
            <textarea
              id='message'
              value={contactMessage.message}
              onChange={handleTextAreaChange}
              required
              className='bg-white w-full h-[100px] placeholder-[#949494] focus:outline-none px-4 py-2 text-[12px] rounded-[6px] resize-none'
            />
          </div>

          <Button
            type='submit'
            className='w-full text-sm  bg-[#1D6CE9] py-6 text-white text-[18px] font-bold rounded-[6px] mt-5'
          >
            Upload Documents
          </Button>
        </form>
      </div>
    </div>
  )
}
