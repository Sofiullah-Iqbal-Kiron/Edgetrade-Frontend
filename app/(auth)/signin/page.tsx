'use client'

import { useState } from 'react'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import signinLogo from '../../../public/logo/signin-top-logo.png'
import Image from 'next/image'
import { loginUser } from '@/lib/api/calls'
import { SignInSchema, type SignInSchemaType } from '@/lib/schemas'
import { setAccessToken } from '@/lib/utils'

export default function SignInPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [stayLoggedIn, setStayLoggedIn] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Prepare data for API
      const credentials: SignInSchemaType = {
        email,
        password,
        staySignedIn: stayLoggedIn
      }

      // Validate data
      const validatedData = SignInSchema.parse(credentials)

      // Call API
      const response = await loginUser(validatedData)

      // Store tokens
      if (response.access_token) {
        setAccessToken(response.access_token)
        toast.success('Login successful!')

        // Redirect to dashboard
        router.push('/dashboard')
      } else {
        throw new Error('No access token received')
      }

    } catch (error: any) {
      console.error('Login error:', error)

      if (error.response?.data?.detail) {
        toast.error(error.response.data.detail)
      } else if (error.errors) {
        // Zod validation errors
        const firstError = Object.values(error.errors)[0]
        toast.error(Array.isArray(firstError) ? firstError[0] : firstError)
      } else {
        toast.error('Login failed. Please check your credentials.')
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
      <div className="relative z-40 w-full max-w-[431px] bg-[#EAEAEA00] backdrop-blur-3xl shadow-2xl p-8 -mt-[150px] lg:-mt-[250px]">
        <div className="text-center mb-6">
          <div className="flex justify-center mb-2">
            <Image src={signinLogo} alt="EdgeTrade Logo" width={50} height={50} />
          </div>
          <h1 className="text-[24px] font-bold text-[#5D5D5D]">EdgeTrade Log In</h1>
          <h2 className="text-[10px] text-[#767676]">
            Do you have an account?{" "}
            <Link href="/signup">
              <span className="text-blue-600">Register</span>
            </Link>
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <Label
              htmlFor="email"
              className="py-2 text-[10px] text-[#767676] font-bold"
            >
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-white w-full h-[50px] placeholder-[#949494] focus:outline-none px-4 placeholder:text-[12px]"
            />
          </div>

          <div>
            <Label
              htmlFor="password"
              className="py-2 text-[10px] text-[#767676] font-bold"
            >
              Password
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="bg-white w-full h-[50px] placeholder-[#949494] focus:outline-none px-4 placeholder:text-[12px]"
            />
          </div>

          {/* <p className="text-white text-[10px] text-center">
            Invalid credentials, either your email or password is wrong.
          </p> */}

          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="remember" className="rounded-none"
                checked={stayLoggedIn}
                onCheckedChange={(checked) => setStayLoggedIn(!!checked)}
              />
              <Label htmlFor="remember" className="font-bold text-[12px] text-white">
                Stay Logged In
              </Label>
            </div>
            <Link
              href='/forgot-password'
              className=' hover:underline font-bold text-[12px] text-[#ffffff98]'
            >
              Forgot password?
            </Link>
          </div>

          <Button
            type='submit'
            disabled={isLoading}
            className='w-full  bg-[#1D6CE9] rounded-none py-6 text-white text-[18px] font-bold disabled:opacity-50'
          >
            {isLoading ? 'Signing In...' : 'Sign in'}
          </Button>
        </form>
      </div>
    </div>
  )
}
