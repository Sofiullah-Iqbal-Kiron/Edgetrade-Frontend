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
import { registerUser } from '@/lib/api/calls'

export default function SignUpPage () {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    dateOfBirth: "",
    email: "",
    password: "",
    id: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Prepare data for API - match original form fields
      const apiData = {
        username: formData.email.split('@')[0], // Generate username from email
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        password: formData.password,
        phone: formData.phoneNumber,
        country: "Bangladesh", // Set default country automatically
        id_number: formData.id,
        date_of_birth: formData.dateOfBirth || undefined, // Date input already provides YYYY-MM-DD format
      }

      // Call registration API
      const response = await registerUser(apiData)
      
      // Store email for verification page
      localStorage.setItem('registration_email', formData.email)
      
      toast.success('Registration successful! Please check your email for verification.')
      
      // Redirect to email verification page
      router.push(`/verify-email?email=${encodeURIComponent(formData.email)}`)
      
    } catch (error: any) {
      console.error('Registration error:', error)
      
      if (error.response?.data?.detail) {
        toast.error(error.response.data.detail)
      } else {
        toast.error('Registration failed. Please try again.')
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div
      className="relative flex min-h-dvh items-center justify-center bg-gradient-to-b from-white to-[#dbeafe] px-5"
      style={{
        backgroundImage: "url('/rainbow.png')",
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative z-40 w-full max-w-sm bg-white/20 backdrop-blur-md border border-white/30 shadow-2xl p-4">
        <div className="text-center mb-6">
          <div className="flex justify-center mb-2">
            <Image src={signinLogo} alt="EdgeTrade Logo" width={50} height={50} />
          </div>
          <h1 className="text-[24px] font-bold text-[#5D5D5D]">EdgeTrade Register</h1>
          <h2 className="text-[10px] text-[#767676]">
            Already have an account?{" "}
            <Link href="/signin">
              <span className="text-blue-600">Signin</span>
            </Link>
          </h2>
        </div>

        <form onSubmit={handleSubmit} className='space-y-2'>
          {/* First Name & Last Name */}
          <div className='flex gap-x-2'>
            <div>
              <Label
                htmlFor="firstName"
                className="py-1 text-[10px] text-[#767676] font-bold"
              >
                First Name
              </Label>
              <Input
                id="firstName"
                type="text"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className='bg-white w-full h-[50px] placeholder-[#949494] focus:outline-none px-4 placeholder:text-[12px]'
              />
            </div>

            <div>
              <Label
                htmlFor="lastName"
                className="py-1 text-[10px] text-[#767676] font-bold"
              >
                Last Name
              </Label>
              <Input
                id="lastName"
                type="text"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className='bg-white w-full h-[50px] placeholder-[#949494] focus:outline-none px-4 placeholder:text-[12px]'
              />
            </div>
          </div>

          {/* ID Number & Date of Birth */}
          <div className='flex gap-x-2'>
            <div>
              <Label
                htmlFor="id"
                className="py-1 text-[10px] text-[#767676] font-bold"
              >
                ID Number
              </Label>
              <Input
                id="id"
                type="text"
                placeholder="012546876554"
                value={formData.id}
                onChange={handleChange}
                className='bg-white w-full h-[50px] placeholder-[#949494] focus:outline-none px-4 placeholder:text-[12px]'
              />
            </div>
            <div>
              <Label
                htmlFor="dateOfBirth"
                className="py-1 text-[10px] text-[#767676] font-bold"
              >
                Date of Birth
              </Label>
              <Input
                id='dateOfBirth'
                type='date'
                placeholder='YYYY-MM-DD'
                value={formData.dateOfBirth}
                onChange={handleChange}
                className='bg-white w-full h-[50px] placeholder-[#949494] focus:outline-none px-4 placeholder:text-[12px]'
              />
            </div>
          </div>

          {/* Phone Number */}
          <div>
            <Label
              htmlFor="phoneNumber"
              className="py-1 text-[10px] text-[#767676] font-bold"
            >
              Phone Number
            </Label>
            <Input
              id="phoneNumber"
              type="tel"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
              className='bg-white w-full h-[50px] placeholder-[#949494] focus:outline-none px-4 placeholder:text-[12px]'
            />
          </div>

          {/* Email */}
          <div>
            <Label
              htmlFor="email"
              className="py-1 text-[10px] text-[#767676] font-bold"
            >
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-white w-full h-[50px] placeholder-[#949494] focus:outline-none px-4 placeholder:text-[12px]"
            />
          </div>

          {/* Password */}
          <div>
            <Label
              htmlFor="password"
              className="py-1 text-[10px] text-[#767676] font-bold"
            >
              Password
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="bg-white w-full h-[50px] placeholder-[#949494] focus:outline-none px-4 placeholder:text-[12px]"
            />
          </div>

          <Button
            type='submit'
            disabled={isLoading}
            className='w-full bg-[#1D6CE9] rounded-none py-6 text-white text-[18px] font-bold mt-5 disabled:opacity-50'
          >
            {isLoading ? 'Signing Up...' : 'Sign Up'}
          </Button>
        </form>
      </div>
    </div>
  )
}