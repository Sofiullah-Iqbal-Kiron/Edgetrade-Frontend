"use client";

import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <div
      className="relative flex min-h-screen items-center justify-center bg-gradient-to-b from-white to-[#dbeafe]"
      style={{
        backgroundImage: "url('/rainbow.png')",
        // backgroundSize: "cover",
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Background Rings */}

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-sm bg-[#EAEAEA00] p-6 shadow-lg">
        <div className="text-center mb-6">
          <div className="flex justify-center mb-2">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
              A
            </div>
          </div>
          <h1 className="text-xl font-semibold text-[#5D5D5D]">
            EdgeTrade Log In
          </h1>
          <h2>Do you have an account? <Link href="/register"><span className="text-blue-600">Register</span></Link></h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="email" className="py-2">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-white w-full h-[45px] placeholder-[#949494] placeholder:px-4 text-[#949494]"
            />
          </div>

          <div>
            <Label htmlFor="password" className="py-2 ">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="bg-white w-full h-[45px] placeholder-[#949494] placeholder:px-4 text-[#949494] px-2"
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember" className="text-gray-600">
                Stay Login
              </Label>
            </div>
            <a href="#" className="text-white hover:underline">
              Forgot password?
            </a>
          </div>

          <Button
            type="submit"
            className="w-full bg-[#1D6CE9] rounded-none py-6 text-white"
          >
            Sign in
          </Button>
        </form>
      </div>
    </div>
  );
}
