"use client"


// react
import { useState, useId } from "react"

// 3'rd party
// import { format } from "date-fns"
import { Controller, Control } from "react-hook-form"
import {
    Eye,
    EyeOff,
    User as FirstNameIcon,
    User as LastNameIcon,
    Mail as EmailIcon,
    Lock as PasswordIcon,
    Phone as PhoneIcon,
    Calendar as CalendarIcon,
} from "lucide-react"

// shadcn/ui
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Card,
    CardContent,
    CardFooter,
} from "@/components/ui/card"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import {
    Field,
    FieldError,
    FieldLabel,
} from "@/components/ui/field"
import {
    InputGroup,
    InputGroupInput,
    InputGroupAddon,
} from "@/components/ui/input-group"

// local
import { formatDate } from "@/lib/utils"
import {
    EMAIL_FIELD_NAME,
    DOB_FIELD_NAME,
    PHONE_NUMBER_FIELD_NAME,
    PASSWORD_FIELD_NAME,
    FIRST_NAME_FIELD_NAME,
    LAST_NAME_FIELD_NAME
} from "@/lib/constants"


interface FormContainerProps {
    formId: string,
    headComponent: React.ReactNode,
    submitButtonLabel: string,
    children: React.ReactNode
}

interface FormFieldProps {
    control: Control<any>,
}

function FormContainer({ formId, headComponent, submitButtonLabel, children }: FormContainerProps) {
    return (
        <Card className="w-full sm:max-w-md">
            {headComponent}

            <CardContent>
                {children}
            </CardContent>

            <CardFooter>
                <Field orientation="vertical">
                    <Button type="submit" form={formId}>
                        {submitButtonLabel}
                    </Button>
                </Field>
            </CardFooter>
        </Card>
    )
}

function FirstNameField({ control }: FormFieldProps) {
    const id = useId()

    return (
        <Controller
            name={FIRST_NAME_FIELD_NAME}
            control={control}
            render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={`first_name-${id}`}>First Name</FieldLabel>
                    <InputGroup>
                        <InputGroupInput
                            {...field}
                            id={`first_name-${id}`}
                            type="text"
                            autoComplete="given-name"
                            placeholder="First Name"
                            aria-invalid={fieldState.invalid}
                        />
                        <InputGroupAddon>
                            <FirstNameIcon />
                        </InputGroupAddon>
                    </InputGroup>
                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
            )}
        />
    )
}

function LastNameField({ control }: FormFieldProps) {
    const id = useId()

    return (
        <Controller
            name={LAST_NAME_FIELD_NAME}
            control={control}
            render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={`last_name-${id}`}>Last Name</FieldLabel>
                    <InputGroup>
                        <InputGroupInput
                            {...field}
                            id={`last_name-${id}`}
                            type="text"
                            autoComplete="family-name"
                            placeholder="Last Name"
                            aria-invalid={fieldState.invalid}
                        />
                        <InputGroupAddon>
                            <LastNameIcon />
                        </InputGroupAddon>
                    </InputGroup>
                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
            )}
        />
    )
}

function PhoneNumberField({ control }: FormFieldProps) {
    const id = useId()

    return (
        <Controller
            name={PHONE_NUMBER_FIELD_NAME}
            control={control}
            render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={`phone-${id}`}>Phone Number</FieldLabel>
                    <InputGroup>
                        <InputGroupInput
                            {...field}
                            id={`phone-${id}`}
                            type="tel"
                            autoComplete="tel"
                            placeholder="Phone Number"
                            aria-invalid={fieldState.invalid}
                        />
                        <InputGroupAddon>
                            <PhoneIcon />
                        </InputGroupAddon>
                    </InputGroup>
                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
            )}
        />
    )
}

function EmailField({ control }: FormFieldProps) {
    const id = useId()

    return (
        <Controller
            name={EMAIL_FIELD_NAME}
            control={control}
            render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={`email-${id}`}>Email</FieldLabel>
                    <InputGroup>
                        <InputGroupInput
                            {...field}
                            id={`email-${id}`}
                            type="email"
                            autoComplete="email"
                            placeholder="Email Address"
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
    )
}

function DateOfBirthField({ control }: FormFieldProps) {
    const id = useId()

    return (
        <Controller
            name={DOB_FIELD_NAME}
            control={control}
            render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={`dob-${id}`}>Date of Birth</FieldLabel>

                    <Popover>
                        <PopoverTrigger asChild>
                            <InputGroup>
                                <InputGroupInput
                                    id={`dob-${id}`}
                                    placeholder="YYYY-MM-DD"
                                    readOnly
                                    value={formatDate(field.value)}
                                    aria-invalid={fieldState.invalid}
                                />
                                <InputGroupAddon>
                                    <CalendarIcon />
                                </InputGroupAddon>
                            </InputGroup>
                        </PopoverTrigger>

                        <PopoverContent>
                            <Calendar
                                autoFocus
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={date => date > new Date() || date < new Date("1900-01-01")}
                            />
                        </PopoverContent>
                    </Popover>

                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
            )}
        />
    )
}

function PasswordField({ control }: FormFieldProps) {
    const id = useId()
    const [showPassword, setShowPassword] = useState<boolean>(false)

    return (
        <Controller
            name={PASSWORD_FIELD_NAME}
            control={control}
            render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={`password-${id}`}>Password</FieldLabel>
                    <InputGroup>
                        <InputGroupAddon align="inline-start">
                            <PasswordIcon />
                        </InputGroupAddon>
                        <InputGroupInput
                            {...field}
                            id={`password-${id}`}
                            type={showPassword ? "text" : "password"}
                            autoComplete="current-password"
                            placeholder="Password"
                            aria-invalid={fieldState.invalid}
                        />
                        <InputGroupAddon align="inline-end">
                            <Button
                                type="button"
                                size="sm"
                                variant="ghost"
                                onClick={() => setShowPassword(!showPassword)}
                                className="text-muted-foreground hover:text-foreground cursor-pointer"
                            >
                                {showPassword ? <EyeOff /> : <Eye />}
                            </Button>
                        </InputGroupAddon>
                    </InputGroup>
                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
            )}
        />
    )
}


export {
    FormContainer,
    FirstNameField,
    LastNameField,
    PhoneNumberField,
    EmailField,
    DateOfBirthField,
    PasswordField,
}
