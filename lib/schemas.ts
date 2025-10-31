import * as z from "zod"


const emailField = z
    .string()
    .trim()
    .toLowerCase()
    .email({ message: "Enter a valid email address." })

const passwordField = z
    .string()
    .min(8, "Password must be at least 8 characters long.")
    .max(64, "Password cannot exceed 64 characters.")
    .regex(/[a-z]/, "Must contain at least one lowercase letter.")
    .regex(/[A-Z]/, "Must contain at least one uppercase letter.")
    .regex(/[0-9]/, "Must contain at least one number.")
    .regex(/[!@#$%^&*(),.?\":{}|<>]/, "Must contain at least one special character.")

const dateOfBirthField = z
    .date()
    // .refine(
    //     (val) => {
    //         if (!val) return true // skip if optional
    //         const date = new Date(val)
    //         const ageDiff = Date.now() - date.getTime()
    //         const ageDate = new Date(ageDiff)
    //         const age = Math.abs(ageDate.getUTCFullYear() - 1970)
    //         return age >= 13 && age <= 120
    //     },
    //     { message: "Enter a valid date of birth (must be at least 13 years old)." }
    // )
    .optional()

const optionalStringField = z.string().trim().optional()


const SignUpSchema = z.object({
    first_name: optionalStringField,
    last_name: optionalStringField,
    email: emailField,
    password: passwordField,
    phone: optionalStringField,
    date_of_birth: dateOfBirthField,
})
type SignUpSchemaType = z.infer<typeof SignUpSchema>

const SignInSchema = z.object({
    email: emailField,
    password: z.string().min(1, "Password is required."),
    staySignedIn: z.boolean().default(false),
})
type SignInSchemaType = z.infer<typeof SignInSchema>


export {
    SignUpSchema,
    SignInSchema,
}

export type {
    SignUpSchemaType,
    SignInSchemaType,
}
