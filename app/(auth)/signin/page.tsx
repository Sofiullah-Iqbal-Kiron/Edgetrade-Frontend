"use client";

import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import signinLogo from "../../../public/logo/signin-top-logo.png";
import Image from "next/image";


export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <div
      className="relative flex min-h-screen items-center justify-center bg-gradient-to-b from-white to-[#dbeafe] px-5"
      style={{
        backgroundImage: "url('/rainbow.png')",
        // backgroundSize: "cover",
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
      }}
    >
      

      <div className="relative z-40 w-full max-w-sm bg-white/20 backdrop-blur-md border border-white/30 shadow-2xl p-8">
        <div className="text-center mb-6">
          <div className="flex justify-center mb-2">
            <Image src={signinLogo} alt="EdgeTrade Logo" width={50} height={50} />
          </div>
          <h1 className="text-[24px] font-bold text-[#5D5D5D]">
            EdgeTrade Log In
          </h1>
          <h2 className="text-[10px] text-[#767676] ">Do you have an account? <Link href="/signup"><span className="text-blue-600">Register</span></Link></h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="email" className="py-2 text-[10px] text-[#767676] font-bold">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-white w-full h-[50px] placeholder-[#949494]  focus:outline-none px-4 placeholder:text-[12px]"
            />
          </div>

          <div>
            <Label htmlFor="password" className="py-2 text-[10px] text-[#767676] font-bold">
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

          {/* <p className="text-white text-[10px] text-center">invalid creditionals ,either your email or password is wrong.</p> */}

          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember" className="font-bold text-[12px] text-white">
                Stay Logged In
              </Label>
            </div>
            <a href="#" className=" hover:underline font-bold text-[12px] text-[#ffffff98]">
              Forgot password?
            </a>
          </div>

          <Button
            type="submit"
            className="w-full  bg-[#1D6CE9] rounded-none py-6 text-white text-[18px] font-bold"
          >
            Sign in
          </Button>
        </form>
      </div>
    </div>
  );
}
