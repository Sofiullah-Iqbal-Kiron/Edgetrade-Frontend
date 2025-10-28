'use client'

// shadcn/ui
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { User as UserIcon } from 'lucide-react'
import { useState } from 'react'
import { Label } from '@radix-ui/react-label'
import userIcon from '@/public/logo/user-icon.svg'
import Image from 'next/image'
export default function PersonalInformationPage () {
  // Fake user data
  const [userData, setUserData] = useState({
    'first-name': 'Emma',
    'last-name': 'Brown',
    email: 'edgetrade@gmail.com',
    id: '0218704976265',
    dob: '12/08/1995'
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setUserData(prev => ({ ...prev, [id]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Updated user data:', userData)
  }

  return (
    <div className=''>
      {/* Header Section */}
      <div className='px-4 flex flex-col items-center'>
        <h1 className='text-[12px] font-bold text-center text-[#272525]'>
          Personal Information
        </h1>
        <div className='h-[2px] w-[70%] mx-auto bg-blue-600 mt-1'></div>
        <div className='mt-5 w-[60px] h-[60px] bg-[#2368D429] rounded-full flex items-center justify-center p-[10px]'>
          <Image src={userIcon} alt='User Icon' width={25} height={25} />
          {/* <UserIcon className='text-blue-600' size={20} /> */}
        </div>
      </div>

      <div className='mt-5'>
        <form onSubmit={handleSubmit} className='space-y-1'>
          <div className='flex gap-x-2'>
            <div>
              <Label
                htmlFor='first-name'
                className='py-2 text-[10px] text-[#5D5D5D] font-bold'
              >
                First Name
              </Label>
              <Input
                id='first-name'
                type='text'
                value={userData['first-name']}
                onChange={handleChange}
                disabled
                className='bg-white w-full h-[40px] text-[#949494]  focus:outline-none px-[10px] text-[12px] rounded-[6px]'
              />
            </div>
            <div>
              <Label
                htmlFor='last-name'
                className='py-2 text-[10px] text-[#5D5D5D] font-bold'
              >
                Last Name
              </Label>
              <Input
                id='last-name'
                type='text'
                value={userData['last-name']}
                onChange={handleChange}
                disabled
                className='bg-white w-full h-[40px] text-[#949494]  focus:outline-none px-[10px] text-[12px] rounded-[6px]'
              />
            </div>
          </div>

          <div>
            <Label
              htmlFor='email'
              className='py-2 text-[10px] text-[#5D5D5D] font-bold'
            >
              Email
            </Label>
            <Input
              id='email'
              type='email'
              value={userData.email}
              onChange={handleChange}
              disabled
              className='bg-white w-full h-[40px] text-[#949494]  focus:outline-none px-[10px] text-[12px] rounded-[6px]'
            />
          </div>
          <div>
            <Label
              htmlFor='id'
              className='py-2 text-[10px] text-[#5D5D5D] font-bold'
            >
              ID Number
            </Label>
            <Input
              id='id'
              type='number'
              value={userData.id}
              onChange={handleChange}
              disabled
              className='bg-white w-full h-[40px] text-[#949494]  focus:outline-none px-[10px] text-[12px] rounded-[6px]'
            />
          </div>

          <div>
            <Label
              htmlFor='dob'
              className='py-2 text-[10px] text-[#5D5D5D] font-bold'
            >
              Date of Birth
            </Label>
            <Input
              id='dob'
              type='text'
              value={userData.dob}
              onChange={handleChange}
              disabled
              className='bg-white w-full h-[40px] text-[#949494]  focus:outline-none px-[10px] text-[12px] rounded-[6px]'
            />
          </div>

          <Button
            type='submit'
            className='w-full text-sm bg-normal-blue py-6 text-white font-bold rounded-[6px] mt-[60px]'
          >
            Upload Documents
          </Button>
        </form>
      </div>
    </div>
  )
}
