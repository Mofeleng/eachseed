import { z } from "zod"

export const formSchema = z.object({
    firstName: z.string().min(2, "First name should be at least 2 charecters long"),
    lastName: z.string().min(2, "Last name should be at least 2 charecters long"),
    email: z.string().email("Please enter a valid email"),
    password: z.string()
                .min(8, "Password must be atleast 8 charecters long")
                .regex(/[a-zA-Z]/, "Password must contain atleast one letter")
                .regex(/[0-9]/, "Password must contain atleast one number"),
    confirmPassword: z.string(),
    country: z.string(),
    accountType: z.string(),
    areasOfInterest: z.string().array()
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"]
})

export type FormFieldProps = {
    fieldType: validFieldTypes;
    type: string;
    name: validFieldNames;
    placeholder:string;
    value:string | string[];
    onchange: (e:React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    error?:string;
}

export type validFieldNames = "firstNames" | "lastName" | "email" | "password" | "confirmPassword" | "country" | "accountTypes" | "areasOfInterest"
export type validFieldTypes = "TEXT" | "SELECT"