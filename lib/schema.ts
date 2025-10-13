import * as z from "zod"


export const SignInSchema = z.object({
    email: z.string().trim().toLowerCase().email({ message: "Enter valid email" }),
    password: z
        .string()
        .min(8, "Password must be at least 8 characters long")
        .max(64, "Password cannot exceed 64 characters"),
        // .regex(/[a-z]/, "Password must contain at least one lowercase letter")
        // .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
        // .regex(/[0-9]/, "Password must contain at least one number")
        // .regex(
            // /[!@#$%^&*(),.?":{}|<>]/,
            // "Password must contain at least one special character."
        // ),
    staySignedIn: z.boolean()
})

export type SignInSchemaType = z.infer<typeof SignInSchema>
