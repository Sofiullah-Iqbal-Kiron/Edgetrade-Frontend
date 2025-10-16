"use client"


// react
import { useId } from "react"

// nextjs
import Link from "next/link"

// 3'rd party
// import useSWR from "swr"
// import { toast } from "sonner"
import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

// shadcn/ui
import { FieldGroup } from "@/components/ui/field"
import {
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

// local
import { SignUpSchema, type SignUpSchemaType } from "@/lib/schemas"
import {
  FormContainer,
  FirstNameField,
  LastNameField,
  EmailField,
  DateOfBirthField,
  PasswordField,
  PhoneNumberField,
} from "@/components/form-fields"


export default function SignUp() {
  const id = useId()

  const { control, handleSubmit } = useForm<SignUpSchemaType>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      email: "",
      password: "",
      first_name: "",
      last_name: "",
      phone: "",
    },
  })

  const onSubmit: SubmitHandler<SignUpSchemaType> = (data: SignUpSchemaType) => {
    alert(JSON.stringify(data))
    // toast.promise(
    //   new Promise((resolve) => setTimeout(resolve, 1200)),
    //   {
    //     loading: "Creating account...",
    //     success: "Account created successfully!",
    //     error: "Something went wrong.",
    //   }
    // )
  }

  function HeadComponent() {
    return (
      <CardHeader className="text-center">
        <CardTitle>Edge Trade Register</CardTitle>
        <CardDescription className="flex justify-center items-center space-x-1.5">
          <span>Already have an account?</span>
          <Link href="/signin" className="underline underline-offset-2 text-primary">Signin</Link>
        </CardDescription>
      </CardHeader>
    )
  }

  return (
    <FormContainer formId={`signup-form-${id}`} headComponent={<HeadComponent />} submitButtonLabel="Sign Up">
      <form id={`signup-form-${id}`} onSubmit={handleSubmit(onSubmit)}>
        <FieldGroup>
          <FirstNameField control={control} />
          <LastNameField control={control} />
          <PhoneNumberField control={control} />
          <DateOfBirthField control={control} />
          <EmailField control={control} />
          <PasswordField control={control} />
        </FieldGroup>
      </form>
    </FormContainer>
  )
}
