"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import signinLogo from "../../../public/logo/signin-top-logo.png"


export default function SignInPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ email, password })
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
              <Checkbox id="remember" className="rounded-none" />
              <Label htmlFor="remember" className="font-bold text-[12px] text-white">
                Stay Logged In
              </Label>
            </div>
            <Link href="/forget-password" className="hover:underline font-bold text-[12px] text-[#ffffff98]">
              Forget password?
            </Link>
          </div>

          <Link href="/dashboard/market">
            <Button
              type='submit'
              className='w-full  bg-normal-blue rounded-none py-6 text-white text-[18px] font-bold'
            >
              Sign in
            </Button>
          </Link>
        </form>
      </div>
    </div>
  )
}
