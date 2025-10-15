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

const optionalStringField = z.string().trim().optional()


const SignUpSchema = z.object({
    first_name: optionalStringField,
    last_name: optionalStringField,
    email: emailField,
    password: passwordField,
    phone: optionalStringField,
})
type SignUpSchemaType = z.infer<typeof SignUpSchema>

const SignInSchema = z.object({
    email: emailField,
    password: passwordField,
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
