"use client"


// react
import { useId } from "react"

// nextjs
import Link from "next/link"

// 3'rd party
import { toast } from "sonner"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"

// shadcn/ui
import { Checkbox } from "@/components/ui/checkbox"
import {
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"

// local
import { SignInSchema, type SignInSchemaType } from "@/lib/schemas"
import {
  FormContainer,
  EmailField,
  PasswordField,
} from "@/components/form-fields"


export default function SignIn() {
  const id = useId()

  const { control, handleSubmit } = useForm<SignInSchemaType>({
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

  function HeadComponent() {
    return (
      <CardHeader className="text-center">
        <CardTitle>Edge Trade Login</CardTitle>
        <CardDescription className="flex justify-center items-center space-x-1.5">
          <span>Haven't registered yet?</span>
          <Link href="/signup" className="underline underline-offset-2 text-primary">Signup</Link>
        </CardDescription>
      </CardHeader>
    )
  }

  return (
    <FormContainer formId={`signin-form-${id}`} headComponent={<HeadComponent />} submitButtonLabel="Sign In">
      <form id={`signin-form-${id}`} onSubmit={handleSubmit(onSubmit)}>
        <FieldGroup>
          <EmailField control={control} />

          <div className="flex flex-col items-end space-y-1">
            <PasswordField control={control} />
            <Link href="/reset-password" className="underline underline-offset-2 text-sm text-primary">Reset Password</Link>
          </div>

          <Controller
            name="staySignedIn"
            control={control}
            render={({ field, fieldState }) => (
              <Field orientation="horizontal" data-invalid={fieldState.invalid}>
                <Checkbox id="signin-stay" aria-invalid={fieldState.invalid} checked={field.value} onCheckedChange={(checked) => field.onChange(!!checked)} />
                <FieldLabel htmlFor="signin-stay">Stay signed in</FieldLabel>
              </Field>
            )}
          />
        </FieldGroup>
      </form>
    </FormContainer>
  )
}
