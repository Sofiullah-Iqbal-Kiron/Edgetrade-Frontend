"use client"


// react
import { useState } from "react"

// nextjs
import Link from "next/link"

// 3'rd party
import { toast } from "sonner"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import {
  Eye,
  EyeOff,
  Mail as EmailIcon,
  Lock as PasswordIcon,
} from "lucide-react"

// shadcn/ui
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import {
  InputGroup,
  InputGroupInput,
  InputGroupAddon,
  InputGroupText,
} from "@/components/ui/input-group"

// local
import { SignInSchema, type SignInSchemaType } from "@/lib/schema"


export default function SignIn() {
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const form = useForm<SignInSchemaType>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "",
      password: "",
      staySignedIn: false,
    }
  })

  const onSubmit = (data: SignInSchemaType) => {
    toast.success("Signed in successfully!")
    console.log(data)
  }

  return (
    <Card className="w-full sm:max-w-md">
      <CardHeader className="text-center">
        <CardTitle>Edge Trade Sign In</CardTitle>
        <CardDescription className="flex justify-center items-center space-x-1.5">
          <span>Haven't registered yet?</span>
          <Link href="/signup" className="underline underline-offset-2 text-primary">Signup</Link>
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form id="signin-form" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="signin-email">Email</FieldLabel>
                  <InputGroup>
                    <InputGroupInput
                      {...field}
                      id="signin-email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                      aria-invalid={fieldState.invalid}
                    />
                    <InputGroupAddon>
                      <EmailIcon />
                    </InputGroupAddon>
                  </InputGroup>
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />

            <Controller
              name="password"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="signin-password">Password</FieldLabel>
                  <InputGroup>
                    <InputGroupAddon align="inline-start">
                      <PasswordIcon />
                    </InputGroupAddon>
                    <InputGroupInput
                      {...field}
                      id="signin-password"
                      type={showPassword ? "text" : "password"}
                      autoComplete="current-password"
                      placeholder="••••••••"
                      aria-invalid={fieldState.invalid}
                    />
                    <InputGroupAddon align="inline-end">
                      <InputGroupText onClick={() => setShowPassword((prev) => !prev)} className="cursor-pointer select-none">
                        {showPassword ? <EyeOff /> : <Eye />}
                      </InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                  <FieldDescription>
                    <Link href="/forgot-password" className="text-sm text-primary hover:underline">Forgot password?</Link>
                  </FieldDescription>
                </Field>
              )}
            />

            <Controller
              name="staySignedIn"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field orientation="horizontal" data-invalid={fieldState.invalid}>
                  <Checkbox id="signin-stay" aria-invalid={fieldState.invalid} checked={field.value} onCheckedChange={(checked) => field.onChange(!!checked)} />
                  <FieldLabel htmlFor="signin-stay">Stay signed in</FieldLabel>
                </Field>
              )}
            />
          </FieldGroup>
        </form>
      </CardContent>

      <CardFooter>
        <Field orientation="vertical">
          <Button type="submit" form="signin-form">
            Sign In
          </Button>
        </Field>
      </CardFooter>
    </Card>
  )
}
