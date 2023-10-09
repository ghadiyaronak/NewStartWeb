import * as Yup from "yup";

// Inqury
export const LoginSchema = (t) =>
    Yup.object().shape({
        username: Yup.string().max(255).required("required username"),
        password: Yup.string()
            .min(6, "Minimum 6 Charatchrs")
            .max(255)
            .required("required password")
    });
