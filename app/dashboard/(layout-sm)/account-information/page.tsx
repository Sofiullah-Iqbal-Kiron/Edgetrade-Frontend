"use client"

// shadcn/ui
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

// 3'rd party
import { User as UserIcon } from "lucide-react"


export default function PersonalInformationPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-center">
        <div>
          <h2 className="text-lg font-semibold px-4 pb-1">Personal Information</h2>
          <div className="w-full h-0.5 bg-primary rounded" />
        </div>
      </div>

      <div className="flex justify-center">
        <div className="p-4 rounded-full bg-primary/20 flex justify-center items-center">
          <UserIcon className="text-primary" size={30} strokeWidth={2.5} />
        </div>
      </div>

      <form className="space-y-4">
        <div className="flex space-x-4">
          <div className="flex-1">
            <label className="text-sm font-medium">First Name</label>
            <Input placeholder="Emma" className="bg-white py-6" />
          </div>
          <div className="flex-1">
            <label className="text-sm font-medium">Last Name</label>
            <Input placeholder="Brown" className="bg-white py-6" />
          </div>
        </div>

        <div>
          <label className="text-sm font-medium">Email Address</label>
          <Input type="email" placeholder="edgetrade@gmail.com" className="bg-white py-6" />
        </div>

        <div>
          <label className="text-sm font-medium">ID Number</label>
          <Input placeholder="0218704976265" className="bg-white py-6" />
        </div>

        <div>
          <label className="text-sm font-medium">Date of Birth</label>
          <Input placeholder="dd/mm/yyyy" className="bg-white py-6" />
        </div>

        <Button variant="default" type="submit" className="w-full h-14 mt-4">
          Upload Documents
        </Button>
      </form>
    </div>
  )
}
